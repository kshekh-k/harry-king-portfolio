import type { Metadata } from "next";
import { Inter } from 'next/font/google' 
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900",],
  variable:'--inter',
})

 
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body
        className={`antialiased bg-slate-950`}
      >
        {children}
      </body>
    </html>
  );
}
