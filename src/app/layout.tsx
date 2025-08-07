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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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