import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "EasyEn - English Language Courses",
  description: "Let's prove that learning English is easy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="tw-bg-[#7a1d39]">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
