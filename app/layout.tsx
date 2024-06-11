import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "@/provider/ReduxProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burmese Recipes App",
  description: "Contribution Project to Myanmar Software Engineer Community",
  keywords: "Burmese Recipes, Myanmar Food, Mont Hin Gar",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta property="og:image" content="/site.png" />
      <meta property="og:site_name" content="Burmese Recipes App" />
      <meta name="author" content="Wunna Aung"></meta>
      <body className={inter.className + " bg-slate-50"}>
        <ReduxProvider>
          <Navbar />
          <AntdRegistry>{children}</AntdRegistry>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
