import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

export default function CategoryChips({ chips = [], active = ["All Categories"], onChange }) {
  const selected = Array.isArray(active) ? active : ["All Categories"];

  const toggleChip = (chip) => {
    let next = [...selected];

    if (chip === "All Categories") {
      next = ["All Categories"];
    } else {

      next = next.filter((c) => c !== "All Categories");

      if (next.includes(chip)) {
        next = next.filter((c) => c !== chip);
      } else {
        next.push(chip);
      }

      if (next.length === 0) next = ["All Categories"];
    }

    onChange?.(next); 
  };

  return (
    <div className="w-full">
      <Swiper
        modules={[ FreeMode ]}
        slidesPerView="auto"
        freeMode
        spaceBetween={5}
        grabCursor
        className="w-full"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {chips.map((chip, index) => {
          const isActive = selected.includes(chip);

          return (
            <SwiperSlide key={index} className="w-auto!">
              <button
                type="button"
                onClick={() => toggleChip(chip)}
                className={[
                  "rounded-xl px-6 py-2 text-sm font-semibold transition",
                  isActive
                    ? "bg-[#D9176C] text-white"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-[#D9176C] hover:text-white",
                ].join(" ")}
              >
                {chip}
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
