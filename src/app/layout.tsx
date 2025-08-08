import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WelcomeRedirect from "@/components/WelcomeRedirect";
import ClientScripts from "@/components/ClientScripts";
import ConditionalLayout from "@/components/ConditionalLayout";

export const metadata: Metadata = {
  title: "LinuxWale - Home",
  description: "LinuxWale - Why windows, when we have doors? Join our Linux community and embrace the power of FOSS.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body>
        <WelcomeRedirect />
        <ConditionalLayout>
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        </ConditionalLayout>
        <ClientScripts />
      </body>
    </html>
  );
}