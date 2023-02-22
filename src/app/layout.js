import Header from "@/component/Header";
import Navbar from "@/component/Navbar";
import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />
          {/* Navbar */}
          <Navbar />
          {/* SearchBox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
