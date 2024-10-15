'use client'
// import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react"
import "./globals.css";
import Header from "./Components/Header";
import { Toaster } from "sonner";



// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="my-4">

          <SessionProvider>
            <Header/>
            {children}
            <Toaster richColors position="top-right" visibleToasts={1}/>
          </SessionProvider>
      </body>
    </html>
  );
}
