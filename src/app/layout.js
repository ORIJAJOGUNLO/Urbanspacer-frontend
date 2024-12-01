import localFont from "next/font/local";
import "./globals.css";

import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google"; // Import another font

// Define the Poppins font
export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

// Define the Roboto font
export const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Corrected to use poppins directly
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); // Added missing closing bracket

export const metadata = {
  title: "Urban Spacer",
  description: "Home is where love is",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"font-poppins text-black dark:text-white"}>
        <div className="h-screen bg-[#f4efe7]">{children}</div>
      </body>
    </html>
  );
}
