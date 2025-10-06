import "./globals.css";
// Navbar और Footer कंपोनेंट को इम्पोर्ट करें
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// metadata SEO के लिए आवश्यक है, और यह सर्वर कंपोनेंट से export होना चाहिए।
export const metadata = {
  title: "अलबेली | जयपुर फैशन ज्वैलरी ऑनलाइन",
  description:
    "अलबेली पर जयपुर की पारंपरिक कुंदन, मीनाकारी और ऑक्सीडाइज्ड नक़ली ज्वैलरी का संग्रह देखें।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      {/* body को flex-col और min-h-screen क्लास दें ताकि फुटर हमेशा नीचे रहे */}
      <body className="min-h-screen flex flex-col antialiased">
        {/* Navbar को यहां जोड़ा गया है */}
        <Navbar />

        {/* main content को flex-grow दें ताकि वह उपलब्ध जगह को भर सके */}
        <main className="flex-grow">{children}</main>

        {/* Footer को यहां जोड़ा गया है */}
        <Footer />
      </body>
    </html>
  );
}
