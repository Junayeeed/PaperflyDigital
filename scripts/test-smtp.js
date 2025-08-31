require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function testSMTP() {
  console.log('Loading SMTP configuration...');
  const config = {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  };

  console.log('SMTP Configuration:', {
    host: config.host,
    port: config.port,
    secure: config.secure,
    user: config.auth.user
  });

  const transporter = nodemailer.createTransport(config);

  try {
    console.log('\nVerifying SMTP connection...');
    await transporter.verify();
    console.log('✓ SMTP connection successful!');

    console.log('\nSending test email...');
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'SMTP Test Email',
      text: 'This is a test email to verify SMTP configuration.',
      html: '<h3>SMTP Test Email</h3><p>This is a test email to verify SMTP configuration.</p>'
    });

    console.log('✓ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
  } catch (error) {
    console.error('\n✗ SMTP Test Failed:', error.message);
    process.exit(1);
  }
}

testSMTP();