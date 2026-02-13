import React, { useMemo, useState } from "react";
import heroImg from "../../../assets/hero2.png";
import { ErrorMessage, Field, Formik, Form } from "formik";
import book3 from "../../../assets/book3.png";
import * as Yup from "yup";
import { IconTruckDelivery } from "@tabler/icons-react";
export default function CheckOut() {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    zip: "",
    address: "",
    paymentMethod: "cash",
    note: "",
  };

  const schema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .required("Phone is required")
      .min(8, "Phone is too short"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("Zip is required"),
    address: Yup.string().required("Address is required"),
    paymentMethod: Yup.string().required("Choose payment method"),
  });
  const [orderItems, setOrderItems] = useState([
    {
      id: 1,
      title: "Rich Dad And Poor Dad",
      author: "Robert T. Kiyosanki",
      price: 100,
      qty: 1,
      image: book3,
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
      image: book3,
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
      image: book3,
      asin: "B09TWSRMCB",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut,",
    },
  ]);

  const incQty = (id) => {
    setOrderItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };
  const decQty = (id) => {
    setOrderItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item,
      ),
    );
  };

  const subtotal = useMemo(
      () => orderItems.reduce((sum, item) => sum + item.price * item.qty, 0),
      [orderItems],
    );
    const tax = 4;
    const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-[#f1f1f1]">
      <div>
        <img src={heroImg} alt="" className="h-[25vh] w-full object-cover" />
      </div>

      {/* Check Out */}
      <div className="w-full md:max-w-7xl mx-auto px-4 my-[4em] ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* left side */}
          <div className="lg:col-span-2 ">
            {/* Shipping information */}
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => console.log(values)}
              validationSchema={schema}
            >
              {({ values }) => (
                <Form id="checkout-form" className="space-y-6">
                  {/* Shipping */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-300">
                    <h2 className=" font-semibold mb-4">
                      Shipping information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="text-sm text-gray-500">
                          Name
                        </label>
                        <Field
                          name="name"
                          id="name"
                          placeholder="Name"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="form-error"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="text-sm text-gray-500"
                        >
                          Phone
                        </label>
                        <Field
                          name="phone"
                          id="phone"
                          placeholder="123456789"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="form-error"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor=" email"
                          className="text-sm text-gray-500"
                        >
                          Email
                        </label>
                        <Field
                          id="email"
                          name="email"
                          placeholder="Johnsmith@gmail.com"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="form-error"
                        />
                      </div>

                      {/* City */}
                      <div>
                        <label
                          htmlFor=" city"
                          className="text-sm text-gray-500"
                        >
                          City
                        </label>
                        <Field
                          name="city"
                          id="city"
                          placeholder="Maadi"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="city"
                          component="div"
                          className="form-error"
                        />
                      </div>

                      {/* State */}
                      <div>
                        <label
                          htmlFor=" state"
                          className="text-sm text-gray-500"
                        >
                          State
                        </label>
                        <Field
                          id="state"
                          name="state"
                          placeholder="Cairo"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="state"
                          component="div"
                          className="form-error"
                        />
                      </div>

                      {/* Zip */}
                      <div>
                        <label htmlFor=" zip" className="text-sm text-gray-500">
                          Zip
                        </label>
                        <Field
                          id="zip"
                          name="zip"
                          placeholder="11311"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="zip"
                          component="div"
                          className="form-error"
                        />
                      </div>

                      {/* Address */}
                      <div className="md:col-span-2">
                        <label
                          htmlFor=" address"
                          className="text-sm text-gray-500"
                        >
                          Address
                        </label>
                        <Field
                          id="address"
                          name="address"
                          placeholder="Maadi, Cairo, Egypt."
                          className="form-input"
                        />
                        <ErrorMessage
                          name="address"
                          component="div"
                          className="form-error"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-300">
                    <h2 className=" font-semibold mb-4">Payment Method</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {["online", "cash", "pos"].map((method) => (
                        <label
                          key={method}
                          className={`flex items-center gap-3 border rounded-xl py-3 px-4 text-sm cursor-pointer transition ${values.paymentMethod === method ? "border-pink-600 bg-pink-50 text-pink-600" : "border-gray-300 text-gray-700"} `}
                        >
                          <Field
                            type="radio"
                            name="paymentMethod"
                            className="hidden"
                            value={method}
                          />
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              values.paymentMethod === method
                                ? "border-pink-600"
                                : "border-gray-400"
                            }`}
                          >
                            {values.paymentMethod === method && (
                              <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                            )}
                          </div>
                          {method === "online" && "Online payment"}
                          {method === "cash" && "Cash on delivery"}
                          {method === "pos" && "POS on delivery"}
                        </label>
                      ))}
                    </div>
                    {/*  */}
                  </div>

                  {/* Note */}
                  <div className="bg-white p-8 rounded-2xl border border-gray-300">
                    <h2 className="font-semibold mb-6">Note</h2>
                    <textarea
                      name="note"
                      id="note"
                      placeholder="🖊️ Add note"
                      className="w-full border border-gray-300 rounded-xl p-4 min-h-40 resize-none"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          {/* Right */}
          <aside className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl border border-gray-300">
              <h2 className="font-semibold ">Order summary</h2>
              {/* Item */}
              {orderItems.map((item) => (
                <div key={item.id} className="flex gap-4 my-5">
                  <img
                    src={item.image}
                    alt=""
                    className=" h-35 object-cover rounded-md"
                  />

                  <div className="flex-1 ">
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="font-semibold text-gray-400 text-xs">
                      {" "}
                      Author: <span className="text-black">{item.author}</span>
                    </p>

                    <div className="flex items-center gap-2 w-fit my-4 px-3 py-1.5 rounded-lg border-2 border-gray-200    ">
                      <IconTruckDelivery size={20} color="#22222280" />
                      <span className="text-xs text-gray-300">
                        Free Shipping
                      </span>
                    </div>
                    <div className="flex justify-between items-center ">
                      {/* Price */}
                      <span className="font-bold text-black text-xl ">
                        ${item.price}
                      </span>

                      {/* Quantity */}
                      <div className="col-span-6 lg:col-span-2 flex items-center justify-center gap-4">
                        <button
                          className="border-2 border-[#D9176C] rounded-full w-5 h-5 flex items-center justify-center text-[#D9176C] font-semibold text-xl pb-1 "
                          type="button"
                          onClick={() => decQty(item.id)}
                        >
                          -
                        </button>

                        <span className="font-semibold text-xl ">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          className=" border-2 border-[#D9176C] rounded-full w-5 h-5 flex items-center justify-center text-[#D9176C] font-semibold text-xl pb-1 "
                          onClick={() => incQty(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex flex-col  gap-10">
                <div className=" mt-10 text-gray-400">
                  <span > Have a discount code?</span>
                  <div className="flex flex-col md:flex-row gap-3 mt-3">
                    <input
                      type="text"
                      placeholder="Enter your code"
                      className="border-2 border-gray-400 rounded-md px-4 py-1.5  text-black placeholder:text-gray-400 "
                    />
                    <button className="px-4 py-1.5 bg-[#3B2F4A] text-white rounded-md  ">
                        
                      Apply
                    </button>
                  </div>
                </div>
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

              <button
              type="submit"
              form="checkout-form"
               className=" bg-[#D9176C] text-white py-3 w-full rounded-lg mb-3 hover:bg-[#D9176C80]">
                Check out
              </button>
             
            </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}