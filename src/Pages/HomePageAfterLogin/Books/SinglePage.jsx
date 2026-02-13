import React, { useState } from "react";
import { FaFacebook, FaRegHeart, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import { HiOutlineShare } from "react-icons/hi";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { IconTruckDelivery } from "@tabler/icons-react";
import CustomerReviews from "../../../Components/BooksPage/customerReviews";
import RecommendedSection from "../../../Components/RecommendedSection";
import { FiShoppingCart } from "react-icons/fi";
import heroImg from "../../../assets/hero2.png";

export default function SinglePage() {
  const [activeTab, setActiveTab] = useState("details");

  const details = [
    { label: "Book Title", value: "Rich Dad And Poor Dad" },
    { label: "Author", value: "Robert T. Kiyosaki" },
    { label: "Publication Date", value: "1997" },
    { label: "ASIN", value: "B09TWSRMCB" },
    { label: "Language", value: "English" },
    { label: "Publisher", value: "Printer" },
    { label: "Pages", value: "336" },
    { label: "Book Format", value: "Hard Cover" },
    { label: "Best Seller Rank", value: "#3" },
  ];

  return (
    <div className="min-h-screen">
      <img src={heroImg} alt="" className="h-[25vh] w-full object-cover" />
      {/* Product Details */}
      <div className="w-full max-w-7xl mx-auto py-10 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-2 pt-1 w-full md:w-65 lg:w-75 shrink-0">
            <img
              src={heroImg}
              alt=""
              className="w-full h-80 md:h-[53vh] object-cover rounded-xl"
            />

            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <img
                src={heroImg}
                alt=""
                className="h-20 w-16 object-cover rounded-lg border border-gray-200 shrink-0"
              />
              <img
                src={heroImg}
                alt=""
                className="h-20 w-16 object-cover rounded-lg border border-gray-200 shrink-0"
              />
              <img
                src={heroImg}
                alt=""
                className="h-20 w-16 object-cover rounded-lg border border-gray-200 shrink-0"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 flex flex-col gap-2 min-w-0 md:ml-4 md:mt-0">
            {/* Title */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h1 className="text-xl sm:text-2xl font-bold">
                Rich Dad And Poor Dad
              </h1>

              <div className="Right_Icons flex items-center gap-4 sm:justify-end flex-wrap">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook size={20} color="#1877F2" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiInstagramLine size={20} color="#E1306C" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube size={20} color="#FF0000" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <FaXTwitter size={20} color="#1DA1F2" />
                </a>
                <button type="button">
                  <HiOutlineShare size={28} color="gray" />
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-500 w-full md:w-[75%] leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo. Aliquam in justo varius, sagittis neque ut,
              malesuada leo. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Mauris et ultricies est. Aliquam in justo varius, sagittis
              neque ut, malesuada leo.
            </p>

            {/* Book details */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-2">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-500">Author</span>
                <span className="font-semibold text-xs">
                  Robert T. Kiyosaki
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-500">Publication Year</span>
                <span className="font-semibold text-xs">1997</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-500">Book</span>
                <span className="font-semibold text-xs">1 Of 1</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-500">Pages</span>
                <span className="font-semibold text-xs">336</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-500">Language</span>
                <span className="font-semibold text-xs">English</span>
              </div>
            </div>

            {/* Rating */}

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mt-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Rating:</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-2 text-xs text-[#25D994] border border-gray-300 px-3 py-1 rounded-lg">
                  <HiMiniCheckBadge size={20} color="#25D994" />
                  <span>In Stock</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500 border border-gray-300 px-3 py-1 rounded-lg">
                  <IconTruckDelivery size={20} />
                  <span>Free Shipping Today</span>
                </div>
              </div>
            </div>

            {/* Rate + discount */}
            <div className="flex md:items-center md:justify-between gap-4  ">
              <div className="mt-2 md:mt-0">
                <p className="text-md text-gray-500">
                  Rate:
                  <span className="text-md font-bold text-gray-800">4.5</span>
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg px-2 py-1">
                <span className="text-[#EAA451]  text-sm">
                  Discount code: Ne212
                </span>
              </div>
            </div>

            {/* Price + buttons */}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <span className="text-2xl font-bold text-gray-800">$40.00</span>
                <span className="line-through text-gray-500 ml-2">$50.00</span>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-15 py-3 md:px-5 md:py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition">
                  Add To Cart
                  <FiShoppingCart size={18} color="white" />
                </button>
                <button className=" px-4 py-3 md:px-3 md:py-2 bg-white text-pink-600 border-2 border-pink-600 rounded-md hover:bg-pink-50 transition">
                  <FaRegHeart size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="w-full max-w-7xl mx-auto pb-12 px-4 md:px-8 mt-10">
        {/* Tabs Header */}
        <div className="border-b border-gray-200">
          <div className="flex items-center gap-6 overflow-hidden md:overflow-none">
            <button
              type="button"
              onClick={() => setActiveTab("details")}
              className={[
                "relative pb-3 text-sm font-semibold transition shrink-0",
                activeTab === "details"
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-700",
              ].join(" ")}
            >
              Product Details
              {activeTab === "details" && (
                <span className="absolute left-0 -bottom-px h-0.5 w-full bg-[#D9176C]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("reviews")}
              className={[
                "relative pb-3 text-sm font-semibold transition shrink-0",
                activeTab === "reviews"
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-700",
              ].join(" ")}
            >
              Customer Reviews
              {activeTab === "reviews" && (
                <span className="absolute left-0 -bottom-px h-0.5 w-full bg-[#D9176C]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("recommended")}
              className={[
                "relative pb-3 text-sm font-semibold transition shrink-0",
                activeTab === "recommended"
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-700",
              ].join(" ")}
            >
              Recommended For You
              {activeTab === "recommended" && (
                <span className="absolute left-0 -bottom-px h-0.5 w-full bg-[#D9176C]" />
              )}
            </button>
          </div>
        </div>

        {/* tab content */}
        <div className="pt-6">
          {/* product details */}
          {activeTab === "details" && (
            <div className="text-md text-gray-600">
              <ul className="space-y-2">
                {details.map((item) => (
                  <li key={item.label}>
                    <span className="font-bold">{item.label}</span>:{" "}
                    <span className="text-gray-600 ">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/*customer reviews */}
          <div>{activeTab === "reviews" && <CustomerReviews />}</div>
          <div>{activeTab === "recommended" && <RecommendedSection />}</div>
        </div>
      </div>
    </div>
  );
}
