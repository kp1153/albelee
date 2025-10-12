// app/return-policy/page.js

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center border-b-4 border-yellow-500 pb-4">
          रिटर्न और एक्सचेंज पॉलिसी
        </h1>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              रिटर्न और एक्सचेंज की पूरी सुविधा दी जाएगी लेकिन यहाँ पर भी{" "}
              <span className="font-semibold text-blue-700">
                कूरियर-पैकेजिंग खर्च आपको ही वहन करना होगा।
              </span>
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              हमारा सुझाव
            </h2>
            <p className="text-gray-700 leading-relaxed">
              तो बेहतर रहेगा कि{" "}
              <span className="font-semibold">
                वाट्सऐप पर बात करने और संतुष्ट होने के उपरांत ही आर्डर प्लेस
                करें।
              </span>
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              आपकी जिम्मेदारी
            </h2>
            <p className="text-gray-700 leading-relaxed">
              हम वाजिब दामों पर स्तरीय सामान आपको उपलब्ध करवाते रहें, इसके लिए
              जरूरी है कि आप भी जिम्मेदार नागरिक होने का परिचय देते हुए{" "}
              <span className="font-semibold text-green-700">
                आर्डर कैंसिल करने के अपने अधिकार का उपयोग अपरिहार्य दशाओं में ही
                करें।
              </span>
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              किसी भी सवाल के लिए हमसे संपर्क करें।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
