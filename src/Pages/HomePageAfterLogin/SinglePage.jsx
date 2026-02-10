import React from "react";
import heroImg from "../../assets/hero2.png";

export default function SinglePage() {
  return (
    <div className="min-h-screen">
      <img src={heroImg} alt="" className="h-[25vh] w-full object-cover" />

      <div className="flex w-full max-w-7xl mx-auto py-10 px-4 md:px-8">
        <div className="flex flex-col  gap-2 pt-1">
          <img src={heroImg} alt="" className="h-[40vh] w-51.5 object-cover" />
          <div className="flex items-center gap-1">
            <img
              src={heroImg}
              alt=""
              className="h-[10vh] w-12.5 object-cover"
            />
            <img
              src={heroImg}
              alt=""
              className="h-[10vh] w-12.5 object-cover"
            />
            <img
              src={heroImg}
              alt=""
              className="h-[10vh] w-12.5 object-cover"
            />
          </div>
        </div>

        <div className="flex-1 flex  flex-col gap-1 ml-4 ">
          {/* Title */}
          <h1 className="text-2xl font-bold ">Rich Dad And Poor Dad</h1>
          <p className="text-sm text-gray-500 w-[60%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.
          </p>

          {/* Author */}

          <div className="flex items-center gap-4 mt-3">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">Author</span>
              <span className="font-semibold text-xs">Robert Kiyosaki</span>
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
          <div className="mt-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">Rating:</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
