import React, {  useState } from "react";
import heroImg from "../../../assets/hero2.png";
import book5 from "../../../assets/book4.png";
import { IconTruckDelivery } from "@tabler/icons-react";
import { FaRegTrashAlt } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";

export default function WishList() {
     const [cart, setCart] = useState([
      {
        id: 1,
        title: "Rich Dad And Poor Dad",
        author: "Robert T. Kiyosanki",
        price: 40,
        qty: 1,
        image: book5,
        asin: "B09TWSRMCB",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut,",
      },
      {
        id: 2,
        title: "Rich Dad And Poor Dad",
        author: "Robert T. Kiyosanki",
        price: 40,
        qty: 1,
        image: book5,
        asin: "B09TWSRMCB",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut,",
      },
      {
        id: 3,
        title: "Rich Dad And Poor Dad",
        author: "Robert T. Kiyosanki",
        price: 40,
        qty: 1,
        image: book5,
        asin: "B09TWSRMCB",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut,",
      },
    ]);
    const increaseQty =(id) => {
      setCart((prev) =>(
        prev.map((item)=>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      ));
    };  
    const decreaseQty =(id) => {
      setCart((prev) => 
      prev.map ((item)=>
      item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item
      )
      );
    }
    const removeItem = (id) => {
      setCart((prev) => prev.filter((item) => item.id !== id));
    };
  

  return (
    <div>
      <div className="first">
        <img src={heroImg} alt="" className="h-[25vh] w-full object-cover" />
      </div>
      <div className="mb-[30em]">
        {/* cart */}
      <div className="cart w-full md:max-w-7xl mx-auto px-4 my-[2em] ">
        {/* cart_header */}
        <div className="cart_header hidden lg:grid grid-cols-12 font-medium px-10 mb-4 ">
          <span className=" col-span-6 px-15">Item</span>
          <span className="col-span-2 text-center">Quantity</span>
          <span className="col-span-2 text-center">Price</span>
          <span className="col-span-2 text-center">Total Price</span>
        </div>
 {cart.map((item) => (

          <div key={item.id} className=" grid grid-cols-12 items-center overflow-x-auto bg-white w-full my-2 p-8">
            <div className=" col-span-12 lg:col-span-6 flex items-center flex-col sm:flex-row gap-4">
              {/* image */}
              <div className="  md:h-[40vh] md:w-[30vh] w-[30vh] h-full shrink-0 overflow-hidden ">
                <img
                  src={item.image}
                  alt={item.title}
                  className=" w-full h-full object-cover rounded-md"
                />
              </div>

              {/* details */}
              <div className="flex flex-col gap-1 md:pb-0 pb-5">
                <h2 className="font-bold">{item.title}</h2>
                <p className="text-gray-400">
                  Author:
                  <span className="font-semibold text-black">
                    {item.author}
                  </span>
                </p>

                <p className="text-gray-400 w-full md:w-[70%]">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 w-fit mt-7 px-3 py-1.5 rounded-lg border-2 border-gray-200    ">
                  <IconTruckDelivery size={20} color="#22222280" />
                  <span className="text-xs text-gray-300">Free Shipping</span>
                </div>

                <p className="mt-3 text-xs text-gray-400">
                  <span className="text-gray-600 font-semibold">ASIN :</span>{" "}
                  {item.asin}
                </p>
              </div>
            </div>

            {/* Quantity */}
            <div className="col-span-6 lg:col-span-2 flex items-center justify-center gap-4">
                <button
                  className="border-2 border-[#D9176C] rounded-full w-5 h-5 flex items-center justify-center text-[#D9176C] font-semibold text-xl pb-1 "
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>

              <span className="font-semibold text-xl ">{item.qty}</span>
                <button
                  className="text-[#D9176C] font-semibold text-xl pb-1 border-2 border-[#D9176C] rounded-full w-5 h-5 flex items-center justify-center "
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
            
            </div>

            {/* price */}
            <div className="col-span-3 lg:col-span-2 text-center font-semibold text-lg ">
              <span className="font-bold text-black">${item.price}</span>
            </div>

            {/* Total */}
            <div className="  lg:col-span-1 text-center font-semibold text-lg  hidden lg:block ">
              <span className="font-bold text-black">${item.price * item.qty}</span>
            </div>

            {/* Delete */}
            <div className="col-span-3 lg:col-span-1 flex items-center justify-end">
              <button 
              onClick={() => removeItem(item.id)}
              className="text-pink-500 hover:text-pink-600 text-xl">
                <FaRegTrashAlt />
              </button>
            </div>
          </div>
        ))}
        
<div className="flex md:flex-row flex-col items-center justify-center  gap-3 mt-5">
  <button className=" bg-[#D9176C1A] text-[#D9176C] py-3 px-5 rounded-lg mb-3 hover:bg-[#D9176C] hover:text-white border-2 border-[#D9176C] ">
    Move to cart
  </button>

  <button className=" flex gap-[3em] items-center border-2 border-[#D9176C] bg-[#D9176C] text-white py-2 px-5 rounded-lg mb-3 hover:bg-[#D9176C80] hover:text-white">
    <div className="flex flex-col text-xs font-medium">
      <span>2 Item</span>
      <span>${cart.reduce((acc, item) => acc + item.price * item.qty, 0)}</span>
    </div>
   <span className="font-bold">Check out</span>
   <span className="rounded-md bg-white"><TiArrowRight size={28} color="#D9176C" /></span>
  </button>
</div>

      </div>
      </div>
    </div>
  );
}
