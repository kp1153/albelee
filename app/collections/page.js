import { getAllProducts, urlFor } from "@/lib/sanity";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";

export default async function CollectionsPage() {
  const products = await getAllProducts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50">
      {/* Header Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-black text-purple-700 mb-4">
            Our Collections
          </h1>
          <p className="text-gray-600 text-lg">
            Browse all our beautiful jewelry pieces
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {products.length === 0 ? (
          <div className="text-center text-gray-500">No products available</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="relative w-full h-64 bg-gray-200">
                  {product.image?.asset?.url ? (
                    <Image
                      src={urlFor(product.image).width(400).url()}
                      alt={product.image?.alt || product.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No image
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-pink-600">
                      ₹{product.price}
                    </span>
                    <span
                      className={`text-sm font-semibold ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}
                    >
                      {product.stock > 0
                        ? `${product.stock} in stock`
                        : "Out of stock"}
                    </span>
                  </div>

                  <button
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-bold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={product.stock === 0}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
