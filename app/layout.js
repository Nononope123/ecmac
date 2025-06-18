import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ECMAC",
  description: "ECMAC, 1ère Ecole en Afrique Centrale, Spécialisée dans la formation Monétique et Transactions Electroniques Sécurisées.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="sticky top-0 z-50">
        <Header/>
        </div>

        {children}

        <Footer />
      </body>
    </html>
  );
}
