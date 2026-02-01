import { FaStar } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

export default function SaleBook({ book }) {
  return (
    <div className="w-full md:w-[35%] bg-[#3B2F4A] rounded-xl p-5 flex gap-4">
      <img
        src={book.image}
        alt={book.title}
        className="w-32 h-full object-cover rounded-md"
      />

      <div className="flex-1">
        <h3 className="text-white text-lg font-bold">{book.title}</h3>

        <p className="text-gray-300 text-sm">
          Author: <span className="text-white font-semibold">{book.author}</span>
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-400 mt-2">
          {[1, 2, 3, 4].map((i) => <FaStar key={i} />)}
          <FaStar className="text-gray-500" />
          <span className="text-gray-300 text-xs ml-2">
            ({book.reviews} Review)
          </span>
        </div>

        <p className="text-gray-300 text-xs mt-1">
          Rate: <span className="text-white">{book.rate}</span>
        </p>

        {/* Price */}
        <div className="flex items-center gap-3 mt-3">
          <span className="line-through text-gray-400">${book.oldPrice}</span>
          <span className="text-white font-bold text-lg">${book.price}</span>
        </div>

        {/* Progress */}
        <div className="mt-3">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#D9176C]"
              style={{ width: `${book.progress}%` }}
            />
          </div>
          <p className="text-gray-300 text-xs mt-1">
            {book.left} books left
          </p>
        </div>
        <div className="mt-3">
            <button className="w-10 h-10 bg-[#D9176C] rounded-xl flex items-center justify-center place-self-end">
              <HiShoppingCart className="text-white" size={20} />
            </button>
        </div>
      </div>

      
    </div>
  );
}
