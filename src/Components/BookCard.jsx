import React from "react";
import { FaStar } from "react-icons/fa";

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Image */}
        <div className="shrink-0 sm:w-44">
          <img
            src={book.image}
            alt={book.title}
            className="w-full  sm:h-65 object-cover rounded-xl"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-3">
          <div>
            <h2 className="font-bold text-lg leading-snug">{book.title}</h2>

            <p className="text-sm text-gray-500 mt-1">
              Author:{" "}
              <span className="font-semibold text-gray-800">
                {book.author}
              </span>
            </p>

            <p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut.
            </p>
          </div>

          {/* Rating + Price */}
          <div className="flex items-center justify-between gap-3 mt-auto">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[1, 2, 3, 4].map((i) => (
                    <FaStar key={i} />
                  ))}
                  <FaStar className="text-gray-300" />
                </div>

                <span className="text-gray-400 text-xs">
                  ({book.reviews ?? 180} Review)
                </span>
              </div>

              <div className="text-gray-400 text-xs mt-1">
                Rate:{" "}
                <span className="font-bold text-black">
                  {book.rate ?? 4.0}
                </span>
              </div>
            </div>

            <div className="font-bold text-xl">
              ${book.price}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-3">
            <button
              type="button"
              className="flex-1 bg-[#D9176C] text-white py-2.5 rounded-lg hover:bg-[#b81257] transition"
            >
              Add to Cart
            </button>

            <button
              type="button"
              className="w-12 h-12 grid place-items-center bg-white border border-[#D9176C] text-[#D9176C] rounded-lg hover:bg-[#D9176C] hover:text-white transition"
              aria-label="Add to wishlist"
            >
              🩷
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
