import { getProductById, urlFor } from "@/lib/sanity";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/collections"
            className="text-purple-600 hover:text-purple-700 font-semibold"
          >
            ← Back to Collections
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-96 lg:h-[600px]">
              {product.image?.asset?.url ? (
                <Image
                  src={urlFor(product.image).width(800).url()}
                  alt={product.image?.alt || product.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200">
                  No image available
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-black text-purple-700 mb-4">
              {product.name}
            </h1>

            <div className="mb-6">
              <span className="text-4xl font-bold text-pink-600">
                ₹{product.price}
              </span>
            </div>

            <div className="mb-6">
              <span
                className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                  product.stock > 0
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {product.stock > 0
                  ? `${product.stock} in stock`
                  : "Out of stock"}
              </span>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
