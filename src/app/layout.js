import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  // variable: "--font-poppins",
  subsets: ["latin"],
  weight:['400','600']
});

export const metadata = {
  title: "Expedivo-Travel world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        {children}
        <ToastContainer />

        <Footer></Footer>
      </body>
    </html>
  );
}
