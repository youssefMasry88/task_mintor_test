import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import BookMiniCard from "./BookMiniCard";
export default function BooksMiniSwiper({ books = [] }) {
  return (
    <div className="relative">
      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={2}
        breakpoints={{
            0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2, 
        },
        1024: {
          slidesPerView: 2, 
        },
        }}
        className="w-full"
      >
        {books.map((book) => (
          <SwiperSlide key={book.bookId ?? book.id}>
            <div className="flex justify-center">
              <BookMiniCard book={book} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
