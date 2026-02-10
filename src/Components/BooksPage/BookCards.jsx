import React from "react";
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { HiShoppingCart } from "react-icons/hi";

export default function BookCards({ book }) {
  const title = book?.bookName ?? "Untitled";
  const author = book?.author ?? "";
  const year = book?.publicationYear ?? "";
  const rating = book?.rate ?? 0;
  const reviews = book?.countReview ?? 0;

  // const price = Number(book?.price ?? 0);
  // const finalPrice = Number(book?.final_price ?? price);
  const discount = Number(book?.discount ?? 0);

  const mainImg = Array.isArray(book?.bookImage)
    ? book.bookImage.find((x) => x.type === "main")?.image ||
      book.bookImage[0]?.image
    : null;

  return (
    <div className=" p-4">
      <div className="flex flex-col md:flex-row gap-4 md:items-start">
        {/* Image */}
        <div className="w-full md:w-44 h-56 md:h-64 rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center shrink-0">
          {mainImg ? (
            <img
              src={mainImg}
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.innerHTML =
                  '<div class="text-gray-400 text-sm">No Image</div>';
              }}
            />
          ) : (
            <div className="text-gray-400 text-sm">No Image</div>
          )}
        </div>

        {/* Middle content */}
        <div className="flex-1 min-w-0">
          {/* Title + discount badge */}
          <div className="flex  sm:flex-row sm:items-start sm:justify-between gap-2">
            <h3 className="font-bold text-gray-900 text-base sm:text-lg text-center ">
              {title}
            </h3>

            {discount ? (
              <span className="w-fit text-xs font-semibold border bg-white border-[#EBC305] px-3 md:px-9 text-center py-1 rounded-md text-[#EBC305]">
                {discount}% Discount
              </span>
            ) : null}
          </div>
          {/* Description */}
          <p className="mt-2 text-sm text-gray-500 w-full md:w-[75%] text-center md:text-left">
            {book?.description ?? ""}
          </p>

          {/* Rating */}
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < Math.round(rating) ? "text-yellow-400" : "text-gray-200"
                  }
                  size={14}
                />
              ))}
              <span className="text-xs text-gray-500">
                ({reviews} Review{reviews === 1 ? "" : "s"})
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                {book?.price ? `${book.price} EGP` : "N/A"}
              </span>
            </div>
          </div>

          <div>
            <span className="text-gray-400">Rate:</span>
            <span className="font-semibold text-gray-700">{rating || ""}</span>
          </div>

          {/* Meta */}
          <div className="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div className=" flex items-center  gap-6 mt-2">
              <div className="flex flex-col gap-1">
                <span className="text-gray-400">Author:</span>
                <span className="font-semibold text-gray-700">{author}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-400">Year:</span>{" "}
                <span className="font-semibold text-gray-700">
                  {year || ""}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2 ">
              <button className="px-15 py-2 md:px-6 md:py-2 font-bold bg-[#D9176C] rounded-md text-white flex items-center justify-center place-self-end">
                Add To Cart 
                <FiShoppingCart size={18} className="ml-2"  />
              </button>
              <button className="w-10 h-10  bg-white rounded-md border-2 border-[#D9176C] flex items-center justify-center place-self-end">
                <FiHeart className="text-[#D9176C]" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
