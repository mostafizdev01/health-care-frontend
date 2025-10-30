import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PH Health Care | Smart Online Health & Telemedicine Platform",
  description: "PH Health Care is a modern online health platform that allows patients to easily book doctor appointments, view medical reports, and access telemedicine services from anywhere. Designed for security, speed, and user-friendliness, PH Health Care makes quality healthcare more accessible and efficient.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${"cz-shortcut-listen=true"} ${geistMono.variable} antialiased`} cz-shortcut-listen={"true"}
      >
        <Toaster position="top-right" richColors={true} />
        {children}
      </body>
    </html>
  );
}
