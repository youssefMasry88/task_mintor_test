import React from "react";

export default function Pagination({ page, setPage, totalPages }) {
  if (totalPages <= 1) return null;

  const Prev = () => {
    if (page > 1) setPage(page - 1);
  };

  const Next = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const getPages = () => {
    const pages = [];
    let start = Math.max(1, page -2)
    let end = Math.min(totalPages, page + 2)

    if (page <= 3){
      start = 1;
      end = 5
      end = Math.min(4, totalPages)
    }
    if (page >= totalPages - 2){
      start = Math.max(1, totalPages - 4)
      end = totalPages
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }


    // for (let i = start; i <= end; i++) {
    //   pages.push(i);
    // }

    return pages;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 py-6">
      <div className="flex items-center gap-2">
        {/* Previous */}
        <button
          type="button"
          onClick={Prev}
          disabled={page === 1}
          className={`px-2 text-sm font-semibold ${
            page === 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-pink-600 hover:text-pink-700"
          }`}
        >
          ‹ Previous
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-2">
          {getPages().map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              className={`h-8 w-8 rounded-lg text-sm font-semibold transition ${
                p === page
                  ? "bg-[#D9176C] text-white"
                  : "border border-gray-200 text-gray-700 hover:bg-pink-50"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={Next}
          disabled={page === totalPages}
          className={`px-2 text-sm font-semibold ${
            page === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "text-pink-600 hover:text-pink-700"
          }`}
        >
          Next ›
        </button>
      </div>

      {/* Info */}
      <div className="text-xs text-gray-500">
        Page {page} of {totalPages}
      </div>
    </div>
  );
}
