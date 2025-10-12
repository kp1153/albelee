"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    setQuantity(1);
  };

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, parseInt(e.target.value) || 1));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <label className="text-sm font-semibold text-gray-700">Qty:</label>
        <select
          value={quantity}
          onChange={handleQuantityChange}
          className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={product.stock === 0}
        className={`w-full py-2 rounded-lg font-bold transition-all duration-300 ${
          added
            ? "bg-green-500 text-white"
            : product.stock === 0
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
        }`}
      >
        {added ? "✓ Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
