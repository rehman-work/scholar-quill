import localFont from "next/font/local";
import "./globals.css";
import { AlertBanner, Breadcrumb, Footer, Header } from "@/components";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Scholar Quill",
  description: "Notes for unversity students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <AlertBanner />
        {/* <Breadcrumb /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
