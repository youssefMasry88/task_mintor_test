import React from "react";
import BooksMiniSwiper from "./BooksPage/BooksMiniSwiper";
import { booksData } from "../data/book";

export default function RecommendedSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">


      <BooksMiniSwiper books={booksData.slice(0, 6)} />
    </section>
  );
}
