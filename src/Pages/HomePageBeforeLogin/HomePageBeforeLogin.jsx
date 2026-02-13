import React from "react";
import heroImg from "../../assets/hero2.png";
import SearchBar from "../../Components/SearchBar";
import { TbTruckDelivery } from "react-icons/tb";
import { IconCreditCardPay, IconRefreshDot } from "@tabler/icons-react";
import { RiCustomerService2Fill } from "react-icons/ri";
import BestSellerSlider from "../../Components/BestSellerSlider";
import b1 from "../../assets/book1.png";
import b2 from "../../assets/book2.png";
import b3 from "../../assets/book3.png";
import b4 from "../../assets/book4.png";
import b5 from "../../assets/book5.png";
import b6 from "../../assets/book6.png";
import b7 from "../../assets/book7.png";
import BookCard from "../../Components/BookCard";
import SaleSection from "../../Components/RecommendedSection";
import SaleBook from "../../Components/salebook";


export default function HomePageBeforeLogin() {
    
  const book = [
    {
      id: 1,
      title: "Rich Dad And Poor Dad",
      author: "Robert T. Kiyosaki",
      image: b1,
      reviews: 180,
      rate: 4.2,
      oldPrice: 45,
      price: 30,
      left: 4,
      progress: 65,
    },
    {
      id: 2,
      title: "The Design Of Books",
      author: "Debbie Bernes",
      image: b2,
      price: "$12.99",
    },
    {
      id: 3,
      title: "The Design Of Books",
      author: "Debbie Bernes",
      image: b3,
      price: "$12.99",
    },
    {
      id: 4,
      title: "The Design Of Books",
      author: "John Smith",
      image: b4,
      price: "$12.99",
    },
    {
      id: 5,
      title: "The Design Of Books",
      author: "Debbie Bernes",
      image: b5,
      reviews: 180,
      rate: 4.2,
      oldPrice: 45,
      price: 40,
      left: 4,
      progress: 65,
    },
    {
      id: 6,
      title: "Book 6",
      author: "John Smith",
      image: b6,
      price: "$12.99",
    },
    {
      id: 7,
      title: "Book 7",
      author: "John Smith",
      image: b7,
      price: "$15.99",
    },
  ];
  const selectedBooks = book.filter((_, index) => index === 0 || index === 4);
  return (
    <div className="relative  ">
      <div className="relative">
        <img
          src={heroImg}
          alt="Hero"
          className="w-full object-cover h-[60vh] md:h-screen "
        />
        <div className="absolute inset-0 bg-black/40 flex md:items-center md:justify-center  ">
        
          <div className="w-full ">
            <SearchBar />
          </div>
        </div>
      </div>
      <div className="content ">
        <div className="service bg-[#F5F5F5] min-h-[50vh] pb-20 md:pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-10 py-20">
            <div className="flex flex-col items-start justify-center gap-2 ">
              <TbTruckDelivery size={25} />
              <h1 className="text-center font-bold text-black ">
                Fast & Reliable Shipping
              </h1>
              <p className="text-gray-400 w-[95%]">
                Lorem ipsum Lorem ipsum dolor sit amet. consectetur adipiscing
                elit. Mauris et ultricies est. Aliquam sollicitudin justo
                varius, sagittis neque ut, malesuada leo.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <IconCreditCardPay stroke={2} size={25} />
              <h1 className="text-center font-bold text-black ">
                Secure Payment
              </h1>
              <p className="text-gray-400">
                Lorem ipsum Lorem ipsum dolor sit amet. consectetur adipiscing
                elit. Mauris et ultricies est. Aliquam sollicitudin justo
                varius, sagittis neque ut, malesuada leo.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <IconRefreshDot stroke={2} size={25} />
              <h1 className="text-center font-bold text-black p">
                Easy Returns
              </h1>
              <p className="text-gray-400">
                Lorem ipsum Lorem ipsum dolor sit amet. consectetur adipiscing
                elit. Mauris et ultricies est. Aliquam sollicitudin justo
                varius, sagittis neque ut, malesuada leo.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <RiCustomerService2Fill size={25} />
              <h1 className="text-center font-bold text-black p">
                24/7 Customer Support
              </h1>
              <p className="text-gray-400">
                Lorem ipsum Lorem ipsum dolor sit amet. consectetur adipiscing
                elit. Mauris et ultricies est. Aliquam sollicitudin justo
                varius, sagittis neque ut, malesuada leo.
              </p>
            </div>
          </div>
        </div>
        <div className="slider ">
          <BestSellerSlider books={book} />
        </div>
        <div className="recommended bg-gray-200 py-20 px-10 ">
          <div className="info flex items-start ">
            <h1 className="text-start text-2xl font-bold py-10">
              Recommended For You
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
        <div>
          <SaleBook />

        </div>
      </div>
    </div>
  );
}
