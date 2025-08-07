import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WelcomeTerminal from "@/components/WelcomeTerminal";
import ClientScripts from "@/components/ClientScripts";

export const metadata: Metadata = {
  title: "LinuxWale - Home",
  description: "LinuxWale - Why windows, when we have doors? Join our Linux community and embrace the power of FOSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WelcomeTerminal />
        <Navbar />
        {children}
        <Footer />
        <ClientScripts />
      </body>
    </html>
  );
}