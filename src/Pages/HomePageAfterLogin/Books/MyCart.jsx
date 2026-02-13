import React, { useMemo, useState } from "react";
import book5 from "../../../assets/book5.png";
import { IconTruckDelivery } from "@tabler/icons-react";
import heroImg from "../../../assets/hero2.png";
import { FaRegTrashAlt } from "react-icons/fa";

export default function MyCart() {
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

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );
  const tax = 4;
  const total = subtotal + tax;
 
  return (
    <div className="min-h-screen bg-[#f1f1f1]">
      <div className="first">
        <img src={heroImg} alt="" className="h-[25vh] w-full object-cover" />
      </div>
      {/* cart */}
      <div className="cart w-full md:max-w-7xl mx-auto px-4 mt-[2em] ">
        {/* cart_header */}
        <div className="cart_header hidden lg:grid grid-cols-12 font-medium px-10 mb-4 ">
          <span className=" col-span-6 px-15">Item</span>
          <span className="col-span-2 text-center">Quantity</span>
          <span className="col-span-2 text-center">Price</span>
          <span className="col-span-2 text-center">Total Price</span>
        </div>

        {/* cart_body  */}
        <div className="cart_body flex flex-col items-center w-full pt-5  ">
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
        </div>


        {/* Payment */}
        <div className="w-full bg-[#3B2F4A1A] px-[1em]  md:px-[6em] py-[2em] grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[3em] mb-[7em] ">
          {/* Left side */}
          <div>
            <div className="flex flex-col gap-2  ">
              <h1 className="text-2xl font-bold ">Payment Summary</h1>
              <p className="text-gray-400 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.
              </p>
            </div>

            <div className=" mt-10 flex flex-col  gap-4 text-gray-400">
              <span>Have a discount code?</span>
              <div className="flex flex-col sm:flex-row gap-3 w-[90%]">
                <input
                  type="text"
                  placeholder="Enter your code"
                  className="border-2 border-gray-400 rounded-md px-4 py-1.5  text-black placeholder:text-gray-400 "
                />
                <button className="px-4 py-1.5 bg-[#D9176C] text-white rounded-md  ">
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="  lg:ml-[10em] md:flex-col md:justify-center ">
            <div className="space-y-4 text-md">
              <div className="flex  justify-between items-center  ">
                <span className="text-gray-500  ">Subtotal</span>
                <span className="font-semibold text-lg ">${subtotal}</span>
              </div>

              <div className="flex  justify-between items-center  ">
                <span className="text-gray-500  ">Shipping</span>
                <span className="font-semibold text-lg ">Free Delivery</span>
              </div>

              <div className="flex  justify-between items-center ">
                <span className="text-gray-500  ">Tax</span>
                <span className="font-semibold text-lg">${tax}</span>
              </div>

              <hr className="my-6" />

              <div className="flex justify-between items-center ">
                <span className="text-gray-500  ">Total</span>
                <span className="text-[#D9176C] text-3xl font-bold ">${total}</span>
              </div>

              <button className=" bg-[#D9176C] text-white py-3 w-full rounded-lg mb-3 hover:bg-[#D9176C80]">
                Check out
              </button>
              <button className=" border-2 border-[#D9176C] text text-[#D9176C] py-3 w-full rounded-lg mb-3 hover:bg-[#D9176C80] hover:text-white">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}