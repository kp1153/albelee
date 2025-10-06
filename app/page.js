// app/page.jsx

// Next.js App Router में, यह फाइल रूट URL (/) के लिए पेज है।

import Link from 'next/link';
// यदि आप Hero Section में अपनी इमेज का उपयोग करना चाहते हैं, तो 'next/image' का उपयोग करें
// import Image from 'next/image'; 

// --- सहायक कंपोनेंट्स ---

// 1. कैटेगरी कार्ड कंपोनेंट
const CategoryCard = ({ title, description, href, imageAlt }) => (
  // Link की जगह <a> टैग का इस्तेमाल किया गया है, लेकिन Next.js में Link कंपोनेंट बेहतर है। 
  // App Router में आप Link कंपोनेंट को यहीं इंपोर्ट कर सकते हैं।
  <Link href={href} className="block bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transform transition duration-300 hover:scale-[1.02]">
    
    {/* इमेज कंटेनर: यहाँ अपनी असली इमेज डालें */}
    <div className="h-64 bg-gray-200 flex items-center justify-center">
        {/* Placeholder for Image (Replace with next/image or a regular img tag) */}
        <p className="text-gray-500 font-semibold">{imageAlt}</p>
        {/*
        उदाहरण के लिए, यदि आप Image कंपोनेंट का उपयोग करते हैं:
        <Image src="/images/kundan-placeholder.jpg" alt={imageAlt} width={500} height={400} className="w-full h-full object-cover" />
        */}
    </div>
    
    <div className="p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <span className="mt-3 inline-block text-yellow-500 font-medium">अभी ख़रीदें →</span>
    </div>
  </Link>
);

// 2. प्रॉमिज़ बॉक्स कंपोनेंट
const PromiseBox = ({ icon, text }) => (
    <div className="w-full sm:w-1/3 p-4">
        <div className="text-4xl mb-3">{icon}</div>
        <p className="text-gray-700 font-medium">{text}</p>
    </div>
);

// --- मुख्य पेज कंपोनेंट ---
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. हीरो सेक्शन (Hero Section) */}
      <section className="bg-white py-20 md:py-32 border-b-4 border-yellow-400">
        <div className="container mx-auto px-6 text-center">
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
            जयपुर की शान, आपकी **पहचान**
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            हमेशा चमकते डिज़ाइन, बेहतरीन कारीगरी। भारत की सर्वश्रेष्ठ नक़ली ज्वैलरी की ऑनलाइन दुकान।
          </p>

          {/* CTA बटन */}
          <Link 
            href="/collections" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
          >
            पूरा संग्रह देखें
          </Link>
        </div>
      </section>

      {/* --- */}
      
      {/* 2. मुख्य श्रेणियाँ (Featured Categories Section) */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            हमारी विशेष श्रेणियां
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* कुंदन ज्वैलरी */}
            <CategoryCard 
              title="कुंदन के जादू" 
              description="शाही और पारंपरिक कुंदन सेट्स।" 
              href="/collections/kundan"
              imageAlt="कुंदन ज्वैलरी"
            />

            {/* ऑक्सीडाइज्ड ज्वैलरी */}
            <CategoryCard 
              title="ट्रेंडी ऑक्सीडाइज्ड" 
              description="बोल्ड और मॉडर्न लुक के लिए।" 
              href="/collections/oxidised"
              imageAlt="ऑक्सीडाइज्ड ज्वैलरी"
            />

            {/* मीनाकारी ज्वैलरी */}
            <CategoryCard 
              title="रंगीन मीनाकारी" 
              description="जयपुर की प्रसिद्ध मीनाकारी कला।" 
              href="/collections/meenakari"
              imageAlt="मीनाकारी ज्वैलरी"
            />
          </div>
        </div>
      </section>

      {/* --- */}
      
      {/* 3. ब्रांड प्रॉमिज़ (Brand Promise/USP) */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            क्यों हमें चुनें?
          </h2>
          <div className="flex flex-wrap justify-center">
            <PromiseBox icon="✅" text="100% जयपुर कारीगरी" />
            <PromiseBox icon="🛡️" text="सुरक्षित कैश ऑन डिलीवरी" />
            <PromiseBox icon="🚀" text="तेज़ भारत-व्यापी शिपिंग" />
          </div>
        </div>
      </section>
      
      {/*
        नोट: फुटर को आमतौर पर app/layout.jsx में जोड़ा जाता है ताकि वह हर पेज पर दिखे। 
        अगर आप इसे सिर्फ इस पेज पर दिखाना चाहते हैं तो नीचे का कोड इस्तेमाल कर सकते हैं।
      */}
      {/* <footer>...</footer> */}

    </div>
  );
}

// Next.js App Router में, आपको <Head> के बजाय metadata को उसी फ़ोल्डर में define करना चाहिए। 
// app/page.jsx के बगल में एक metadata object बनाकर SEO संभालें।
/*
// app/page.js के साथ ही यह कोड (अगर आप JS का उपयोग कर रहे हैं)
export const metadata = {
  title: 'जयपुर ज्वैलरी | कुंदन, मीनाकारी और फैशन ज्वैलरी ऑनलाइन खरीदें',
  description: 'जयपुर की शानदार नक़ली और फैशन ज्वैलरी का बेहतरीन संग्रह। कुंदन, मीनाकारी और ऑक्सीडाइज्ड डिज़ाइन ऑनलाइन खरीदें।',
}
*/