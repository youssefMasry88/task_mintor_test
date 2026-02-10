

import React, { useEffect, useMemo, useState } from "react";
import { IconAdjustmentsFilled, IconChevronDown } from "@tabler/icons-react";

export default function FiltersSidebar({
  categories = [],
  activeCategory = ["All Categories"],
  onCategoryChange,
}) {
  const [selected, setSelected] = useState(activeCategory);
  const [open, setOpen] = useState(false); 



  useEffect(() => {
    setSelected(activeCategory);
  }, [activeCategory]);

  const handleCategoryToggle = (cat) => {
    let next = [...selected];

    if (cat === "All Categories") {
      next = ["All Categories"];
    } else {
      next = next.filter((c) => c !== "All Categories");

      if (next.includes(cat)) {
        next = next.filter((c) => c !== cat);
      } else {
        next.push(cat);
      }

      if (next.length === 0) next = ["All Categories"];
    }

    setSelected(next);
    onCategoryChange?.(next);
  };
  
  
  const maxHeightClass = useMemo(() => {
    
    const approx = Math.min(600, 80 + categories.length * 40);
    return approx;
  }, [categories.length]);

  return (
    <aside className="p-4 ">
      <div className="mb-4 flex items-center gap-2">
        <IconAdjustmentsFilled className="text-gray-700" />
        <span className="text-lg font-semibold text-gray-900">Filter</span>
      </div>

      <div className="rounded-2xl bg-white p-4 shadow">
        {/* Header */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="py-1 flex w-full items-center justify-between"
        >
          <h3 className="text-sm font-semibold text-gray-800">Categories</h3>

          <IconChevronDown
            stroke={2}
            className={`transition-transform duration-800 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        {/* Animation */}
        <div
          className={[
            "overflow-hidden transition-all duration-1000 ease-in-out  ",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{
            maxHeight: open ? `${maxHeightClass}px` : "0px",
          }}
        >
          {/* Content */}

            <div className="space-y-3 pt-1">
              {categories.map((cat) => (
                <label
                  key={cat}
                  className="flex cursor-pointer items-center gap-2 text-sm "
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(cat)}
                    onChange={() => handleCategoryToggle(cat)}
                    className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500 trans"
                  />
                  <span className="text-gray-700">{cat}</span>
                </label>
              ))}

              <div className="flex justify-center">
                <button
                  type="button"
                  className="mt-2 text-sm font-semibold text-pink-600 hover:text-pink-700"
                >
                  Load More
                </button>
              </div>
            </div>

        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-white p-4 shadow">
        <button
          type="button"className=" flex w-full items-center justify-between"
        >
          <h3 className="text-sm font-semibold text-gray-800">Publisher</h3>

          <IconChevronDown/>
        </button>
      </div>
    </aside>
  );
}




