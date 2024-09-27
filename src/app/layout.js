import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/services/AuthProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Car Doctor",
    template: "%s | Car Doctor"
  },

  description: "car repairing workshop",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en" data-theme="carDoctorTheme">

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ToastContainer />
        <AuthProvider>
          <Navbar />

          {children}

          <Footer />
        </AuthProvider>
      </body>

    </html>
  );
}
