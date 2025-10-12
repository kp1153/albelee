// components/Footer.jsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 border-t-4 border-yellow-500">
      <div className="container mx-auto px-6">
        {/* पॉलिसी लिंक्स */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
          <Link
            href="/shipping-policy"
            className="text-gray-300 hover:text-yellow-400 transition duration-150 text-sm md:text-base"
          >
            शिपिंग पॉलिसी
          </Link>
          <span className="hidden md:block text-gray-600">|</span>
          <Link
            href="/return-policy"
            className="text-gray-300 hover:text-yellow-400 transition duration-150 text-sm md:text-base"
          >
            रिटर्न और एक्सचेंज
          </Link>
        </div>

        {/* कॉपीराइट और डेवलपर क्रेडिट */}
        <div className="border-t border-gray-700 pt-4 text-center text-xs md:text-sm text-gray-400">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} अलबेली। सभी अधिकार सुरक्षित।
          </p>
          <p className="text-xs">
            Developed by{" "}
            <a
              href="https://www.web-developer-kp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition duration-150 font-medium underline"
            >
              web-developer-kp.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
