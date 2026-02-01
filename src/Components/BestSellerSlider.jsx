import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function BestSellerSlider({ books = [] }) {
  return (
    <section className="bg-[#3B2F4A] py-20">
      <div className="w-full max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center text-white mb-8">
          <h2 className="text-2xl font-bold">Best Seller</h2>
          <p className="text-white/70 my-5 text-sm w-sm md:w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {books.map((book) => (
            <SwiperSlide key={book.id}>
              <div className="px-2">
                <div className="rounded-md overflow-hidden bg-white">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-66 object-cover overflow-hidden"
                    loading="lazy"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#D9176C] text-white px-8 py-2 rounded-md hover:opacity-90">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
}
