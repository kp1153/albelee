import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "अलबेली | फैशन ज्वैलरी ऑनलाइन",
  description:
    "अलबेली पर पारंपरिक कुंदन, मीनाकारी और ऑक्सीडाइज्ड नक़ली ज्वैलरी का संग्रह देखें।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body className="min-h-screen flex flex-col antialiased">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
