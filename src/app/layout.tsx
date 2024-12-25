import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/context/CartContext";
import { Toaster } from 'sonner'
import ProgressBar from "@/components/ui/ProgressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopifyClone - Your One-Stop Shop",
  description: "A modern e-commerce platform built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <ProgressBar />
          {children}
          <Toaster position="top-center" />
        </CartProvider>
      </body>
    </html>
  );
}
