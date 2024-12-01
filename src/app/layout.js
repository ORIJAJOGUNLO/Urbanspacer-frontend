import localFont from "next/font/local";
import "./globals.css";


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
