import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Capio",
  description:
    "A website that recommends better stocks and bonds compared to other bonds and shares that you currently have",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
          <Link className="text-xl font-bold" href="#">
            Invest Advisor
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link className="hover:text-gray-400" href="#">
              Portfolio
            </Link>
            <Link className="hover:text-gray-400" href="bond">
              Bond
            </Link>
            <Link className="hover:text-gray-400" href="#">
              Compare
            </Link>
            <Link className="hover:text-gray-400" href="#">
              Resources
            </Link>
          </nav>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 md:hidden">
            Menu
          </button>
        </header>
        {children}
      </body>
    </html>
  );
}
