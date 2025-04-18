import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar.js";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahi Sidda",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F2F2F2] flex min-h-screen flex-col`}
      >
        <div className="flex-1 flex">
          <Sidebar />
          <main className="flex-1 md:ml-64 p-4 md:p-8 w-full">
            {children}
          </main>
        </div>
        <footer className="w-full text-center py-4 text-gray-300 text-sm">
          © Mahi Sidda 2025
        </footer>
      </body>
    </html>
  );
}
