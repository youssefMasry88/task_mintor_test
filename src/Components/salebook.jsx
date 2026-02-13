
import { booksData } from "../data/book";
import BookMiniCard from "./BooksPage/BookMiniCard";

export default function SaleBook() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">Flash Sale</h2>
          <p className="text-gray-500 text-sm">
            Limited time offers on best sellers
          </p>
        </div>

        <div className="w-24 h-24 rounded-full border-4 border-pink-500 flex items-center justify-center font-bold">
          30:00:00
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-6">
        {booksData.slice(0, 2).map((book) => (
          <BookMiniCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
