import React from "react";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export default function BookMiniCard({ book }) {
  const {
    bookName,
    author,
    price,
    final_price,
    rate,
    countReview,
    stock,
    bookImage,
  } = book;

  const mainImg =
    bookImage?.find((img) => img.type === "main")?.image ||
    bookImage?.[0]?.image;

  return (
    <div className="w-full max-w-sm bg-[#3B2C4D] text-white rounded-xl p-4 flex gap-4">
      {/* Image */}
      <div className=" h-[25vh] md:h-[30vh] shrink-0 overflow-hidden rounded-md">
        <img
          src={mainImg}
          alt={bookName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-semibold text-sm line-clamp-2">
            {bookName}
          </h3>
          <p className="text-xs text-gray-300 mt-1">
            Author: {author}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={12}
                className={
                  i < Math.round(rate)
                    ? "text-yellow-400"
                    : "text-gray-500"
                }
              />
            ))}
            <span className="text-xs text-gray-300 ml-1">
              ({countReview} Review)
            </span>
          </div>
        {/* Price + Cart */}
        <div className="flex items-center justify-between ">
          <div>
            <span className="text-sm line-through font-semibold text-gray-400 mr-1">
              ${price}
            </span>
            <span className="text-lg font-bold">
              ${final_price}
            </span>
            <div className="flex flex-col items-start gap-1">
              <div className="w-40 md:w-50 h-1.5 bg-white/10 rounded-full mt-1">
                <div  className="h-full bg-[#EAA451] rounded-full" style={{ width: `${((stock) / (stock + 1)) * 100}%` }}></div>
              </div>
              <div className="text-xs font-semibold text-gray-500 mt-1">
              {stock} books left
            </div>
            </div>
          </div>

        </div>
        </div>
        <div className=" flex items-center md:justify-end mt-4">
          <button className="w-10 h-10 bg-pink-600 rounded-md flex items-center justify-center hover:bg-pink-700 transition">
            <FiShoppingCart size={18} />
          </button>
        </div>
        

      </div>
    </div>
  );
}
