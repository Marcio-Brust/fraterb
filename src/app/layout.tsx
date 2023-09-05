import { Header } from "@/Components/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/Components/Footer/Footer";

export const metadata: Metadata = {
  title: "FRATERB",
  description: "Grupo de amigos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pr-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Malayalam:wght@200;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-bg-main bg-no-repeat bg-cover">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
