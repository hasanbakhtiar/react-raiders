import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "First My App",
  description: "This app for tutorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
