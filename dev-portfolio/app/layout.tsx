import type { Metadata } from "next";

import "./globals.css";
import { Aldrich } from "next/font/google";


export const metadata: Metadata = {
  title: "Amit Singh",
  description: "My Developer Portfolio",
};
const aldrich= Aldrich({
  weight: '400',
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={aldrich.className}
      >
        {children}
      </body>
    </html>
  );
}
