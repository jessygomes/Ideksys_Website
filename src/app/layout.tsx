import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accueil | Ideksys",
  description: "Ideksys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="bg-noir-fond">
      <body className="h-full">
        {children}
        <div className="fixed top-0 z-30 w-full flex justify-center">
          <Navbar />
        </div>
        <div className="mt-[3rem]">
          <Footer />
        </div>
      </body>
    </html>
  );
}
