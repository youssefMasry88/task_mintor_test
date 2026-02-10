import React, { useEffect, useState } from "react";
import heroImg from "../../assets/hero2.png";
import FiltersSideBar from "../../Components/BooksPage/FiltersSidebar";
import BooksTopBar from "../../Components/BooksPage/BooksTopBar";
import CategoryChips from "../../Components/BooksPage/CategoryChips";
import BookCards from "../../Components/BooksPage/BookCards";
import Pagination from "../../Components/BooksPage/Pagination";
import axios from "axios";

export default function BooksPage() {
  {
    /* hooks */
  }
  const [search, setSearch] = useState("");
  const [activeChip, setActiveChip] = useState(["All Categories"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [books, setBooks] = useState([]);
  const [sort, setSort] = useState("relevance");
  const perPage = 12;

  {
    /* All Categories */
  }
  const ALL_CATEGORIES = [
    "All Categories",
    "Business",
    "Kids",
    "Art",
    "History",
    "Romance",
    "Fantasy",
    "Self Help",
    "Cooking",
    "Sports",
  ];
  const Chips = ALL_CATEGORIES;

  {
    /* useEffect */
  }
  useEffect(() => {
    setPage(1);
  }, [search, activeChip]);

  useEffect(() => {
    const controller = new AbortController();

    const catchBooks = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get("https://bookstore.eraasoft.pro/api/book", {
          signal: controller.signal,
          params: {
            page,
            per_page: perPage,
            search: search || undefined,
            category: activeChip === "All Categories" ? undefined : activeChip,

          },
          headers: {
            Accept: "application/json",
          },
        });
        const payload = res.data;

        const list = payload?.data?.books ?? [];
        setBooks(Array.isArray(list) ? list : []);

        const meta = payload?.data?.pagination_links?.meta;
        setTotalPages(meta?.last_page ?? 1);

        console.log("API response:", payload);
      } catch (e) {
        if (e?.code === "ERR_CANCELED" || e?.name === "CanceledError") return;

        console.log(e);
        setError(
          e?.response?.data?.message || e?.message || "Failed to load books",
        );
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };
    catchBooks();

    return () => controller.abort();
  }, [page, search, activeChip]);
  return (
    <div className="min-h-screen bg-[#F5F5F5] ">
      <img src={heroImg} alt="" className="h-[25vh] w-full object-cover" />
      <div className="w-full max-w-7xl mx-auto py-10 px-4 md:px-8 ">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[290px_1fr] rounded-xl p-4">
          {/* Sidebar */}
          <FiltersSideBar
            categories={ALL_CATEGORIES}
            activeCategory={activeChip}
            onCategoryChange={setActiveChip}
            initialValues={{ categories: [activeChip] }}
            onApply={() => setPage(1)}
          />

          {/* right column */}
          <div className="space-y-4 lg:border-l-2 lg:border-gray-200 lg:pl-4 min-w-0  ">
            <BooksTopBar search={search} onSearchChange={setSearch} sort={sort} onSortChange={setSort} />

            {/* <CategoryChips*/}
            <div className="w-full min-w-0">
              <CategoryChips
                chips={Chips}
                active={activeChip}
                onChange={setActiveChip}
              />
            </div>
            {/* Loading */}
            {loading && (
              <div className="py-10 text-center text-gray-500">Loading...</div>
            )}

            {/* Error */}
            {!loading && error && (
              <div className="py-6 px-4 rounded-lg bg-red-50 text-red-700">
                {error}
              </div>
            )}

            {/* Not Found */}
            {!loading && !error && books.length === 0 && (
              <div className="py-10 text-center text-gray-500">
                No books found
              </div>
            )}

            {/* Book Cards */}

            {!loading && !error && books.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
                {books.map((book) => (
                  <BookCards key={book.bookId} book={book} />
                ))}
              </div>
            )}

            {/* pagination */}
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </div>
        </div>
      </div>
    </div>
  );
}
