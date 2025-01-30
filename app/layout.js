
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Appscrip App",
  description: "Developed by Ahmed Maaz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
