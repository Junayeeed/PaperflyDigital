import nodemailer from 'nodemailer';

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: true, // Enable secure SMTP
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false // Allow self-signed certificates
    }
  });
};

const validateEnvVariables = () => {
  const requiredVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD', 'ADMIN_EMAIL'];
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
};

export async function POST(req) {
  try {
    validateEnvVariables();
    const data = await req.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = createTransporter();

    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP Connection Error:', verifyError);
      return Response.json({ error: 'Email service unavailable' }, { status: 503 });
    }

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Implement retry mechanism
    let retries = 3;
    let lastError = null;

    while (retries > 0) {
      try {
        await transporter.sendMail(mailOptions);
        return Response.json({ success: true });
      } catch (error) {
        console.error(`Email sending failed (${retries} retries left):`, error);
        lastError = error;
        retries--;
        if (retries > 0) await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    // If all retries failed
    throw new Error(`Failed to send email after multiple attempts: ${lastError.message}`);


  } catch (error) {
    console.error('Error processing request:', error);
    
    if (error.message.includes('Missing required environment')) {
      return Response.json({ error: 'Server configuration error' }, { status: 500 });
    }

    return Response.json({ 
      error: 'Failed to send email', 
      details: process.env.NODE_ENV === 'development' ? error.message : undefined 
    }, { status: 500 });
  }
}