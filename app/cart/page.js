"use client";

import { useCart } from "@/context/CartContext";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-black text-purple-700 mb-4">
              Your Cart
            </h1>
            <p className="text-gray-600 text-lg mb-8">Your cart is empty</p>
            <Link
              href="/collections"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-pink-600 hover:to-purple-700 transition-all"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-black text-purple-700 mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="border-b border-gray-200 p-6 flex gap-6"
                >
                  {/* Product Image */}
                  <div className="relative w-24 h-24 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden">
                    {item.image?.asset?.url ? (
                      <Image
                        src={urlFor(item.image).width(150).url()}
                        alt={item.name}
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
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <label className="text-sm font-semibold">Qty:</label>
                        <select
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item._id, parseInt(e.target.value))
                          }
                          className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-gray-600">
                          ₹{item.price} x {item.quantity}
                        </p>
                        <p className="text-lg font-bold text-pink-600">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-600 hover:text-red-700 font-semibold text-sm mt-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>TBD</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>TBD</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between text-lg font-bold text-gray-800">
                <span>Total</span>
                <span className="text-pink-600">
                  ₹{getTotalPrice().toFixed(2)}
                </span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full block text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-bold hover:from-pink-600 hover:to-purple-700 transition-all"
            >
              Proceed to Checkout
            </Link>

            <Link
              href="/collections"
              className="w-full block text-center border border-gray-300 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all mt-4"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
