import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

export const metadata: Metadata = {
  title: "Jaipur Tuk Tuk Tours",
  description: "Jaipur auto rickshaw / tuk tuk tours with Mahesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
