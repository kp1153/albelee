// app/contact/page.js

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center border-b-4 border-pink-600 pb-4">
          हमसे संपर्क करें
        </h1>

        <div className="space-y-6">
          {/* ईमेल सेक्शन */}
          <div className="bg-pink-50 border-l-4 border-pink-600 p-6 rounded-r-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-pink-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              ईमेल
            </h2>
            <a
              href="mailto:albelee1153@gmail.com"
              className="text-lg text-pink-600 hover:text-pink-700 font-medium underline"
            >
              albelee1153@gmail.com
            </a>
          </div>

          {/* सूचना सेक्शन */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              सूचना
            </h2>
            <p className="text-gray-700 leading-relaxed">
              फोन नंबर सहित बाकी का संपर्क विवरण शीघ्र उपलब्ध करवाया जाएगा। अभी
              आप इस ईमेल पर संपर्क कर सकते हैं।
            </p>
          </div>

          {/* अतिरिक्त जानकारी */}
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              हम यहाँ हैं आपकी मदद के लिए
            </h2>
            <p className="text-gray-700 leading-relaxed">
              किसी भी प्रश्न, सुझाव या शिकायत के लिए हमें ईमेल करें। हम जल्द से
              जल्द आपसे संपर्क करेंगे।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
