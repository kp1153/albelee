// components/Footer.jsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 border-t-4 border-yellow-500">
      <div className="container mx-auto px-6">
        {/* मुख्य फुटर सामग्री: 3-कॉलम लेआउट */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* कॉलम 1: लोगो और विवरण */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">
              आपका लोगो
            </h3>
            <p className="text-gray-400 text-sm">
              जयपुर की कारीगरी और डिज़ाइन का संगम। हर मौके के लिए बेहतरीन नक़ली
              ज्वैलरी।
            </p>
          </div>

          {/* कॉलम 2: त्वरित लिंक (Quick Links) */}
          <div>
            <h4 className="text-lg font-semibold mb-3">त्वरित लिंक</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-yellow-400 transition duration-150"
                >
                  होम
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-gray-400 hover:text-yellow-400 transition duration-150"
                >
                  संग्रह देखें
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-yellow-400 transition duration-150"
                >
                  हमारी कहानी
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-yellow-400 transition duration-150"
                >
                  पूछे जाने वाले प्रश्न
                </Link>
              </li>
            </ul>
          </div>

          {/* कॉलम 3: ग्राहक सेवा */}
          <div>
            <h4 className="text-lg font-semibold mb-3">ग्राहक सेवा</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-yellow-400 transition duration-150"
                >
                  हमसे संपर्क करें
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-policy"
                  className="text-gray-400 hover:text-yellow-400 transition duration-150"
                >
                  शिपिंग पॉलिसी
                </Link>
              </li>
              <li>
                <Link
                  href="/return-policy"
                  className="text-gray-400 hover:text-yellow-400 transition duration-150"
                >
                  रिटर्न और एक्सचेंज
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-yellow-400 transition duration-150"
                >
                  गोपनीयता नीति
                </Link>
              </li>
            </ul>
          </div>

          {/* कॉलम 4: संपर्क और सोशल मीडिया */}
          <div>
            <h4 className="text-lg font-semibold mb-3">हमसे जुड़ें</h4>
            <p className="text-gray-400 text-sm">
              Email:{" "}
              <a
                href="mailto:support@yourdomain.com"
                className="hover:text-yellow-400"
              >
                support@yourdomain.com
              </a>
            </p>

            {/* सोशल मीडिया आइकॉन */}
            <div className="flex space-x-4 mt-4 text-gray-400">
              {/* यहाँ अपने सोशल मीडिया लिंक डालें */}
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-yellow-400 transition duration-150"
              >
                {/* Instagram Icon Placeholder */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  ...
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-yellow-400 transition duration-150"
              >
                {/* Facebook Icon Placeholder */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  ...
                </svg>
              </a>
              {/* आप यहाँ Font Awesome या Lucide Icons का उपयोग कर सकते हैं */}
            </div>
          </div>
        </div>

        {/* कॉपीराइट सेक्शन */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} **आपका लोगो**। जयपुर की कारीगरी।
            सभी अधिकार सुरक्षित।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
