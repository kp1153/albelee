// app/shipping-policy/page.js

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center border-b-4 border-yellow-500 pb-4">
          शिपिंग पॉलिसी
        </h1>

        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              अगर आप{" "}
              <span className="font-semibold text-yellow-700">
                कैश ऑन डिलेवरी
              </span>{" "}
              का ऑप्शन चुनते हैं तो पैकेजिंग और डिलेवरी खर्च मिलने के उपरांत ही
              सामान भेजा जाएगा।
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
