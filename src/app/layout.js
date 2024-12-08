import "./globals.css";
import { poppins, roboto } from './fonts/themefonts.ts'


export const metadata = {
  title: "Urban Spacer",
  description: "Home is where love is",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-black dark:text-white`}>
        <div className="h-screen bg-[#f4efe7]">{children}</div>
      </body>
    </html>
  );
}
