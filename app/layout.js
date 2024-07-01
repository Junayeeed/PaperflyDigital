import { DM_Sans, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "../styles/index.css";
import cn from "classnames";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata = {
  title: "Paperfly Digital - Navigating the digital frontier",
  description:
    "Paperfly Digital is a full-service digital agency dedicated to helping businesses succeed online. We specialize in web development, digital marketing, branding, SEO, and social media management to empower your brand in the digital landscape.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          dmSans.variable,
          plusJakartaSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
