import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DataProvider from "@/context/DataProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Magazine Gazette - A weekly news magazine Magazine Gazette",
  description: "A weekly news magazine for us citizens",
  openGraph: {
    title: "Magazine Gazette - A weekly news magazine Magazine Gazette",
    description: "A weekly news magazine for us citizens",
    type:"website",
    locale:"en_US",
    url:"https://magazinegazette.com/",
    siteName:"Magazine Gazette"
  }
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>
          <Header />
          {children}
          <Footer />
        </DataProvider>

      </body>
    </html>
  );
}
