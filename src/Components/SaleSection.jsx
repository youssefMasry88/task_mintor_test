import SaleBook from "./salebook";

export default function SaleSection({ books }) {
    
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mb-10">
        <div>
          <h2 className="text-2xl font-bold">Flash Sale</h2>
          <p className="text-gray-500 text-sm max-w-md mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="w-24 h-24 rounded-full border-4 border-pink-500 flex items-center justify-center font-bold">
          30:00:00
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row  lg:justify-center gap-6">
        {books.slice(0, 2).map((book) => (
          <SaleBook key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
