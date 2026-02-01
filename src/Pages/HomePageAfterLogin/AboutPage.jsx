import React from "react";
import heroImg from "../../assets/hero2.png";
import { TbTruckDelivery } from "react-icons/tb";
import { IconCreditCardPay, IconRefreshDot } from "@tabler/icons-react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin, FiUser, FiEdit3 } from "react-icons/fi";
import { Field, Form, Formik } from "formik";
export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative">
        <img
          src={heroImg}
          alt="Hero"
          className="w-full h-[60vh]  md:h-screen object-cover"
        />

        <div className="absolute inset-0 py-40 md:py-0 bg-black/40 flex md:items-center md:justify-center">
          <div className="w-full md:w-1/2  ">
            <h1 className="text-center font-bold text-4xl md:text-5xl text-white">
              About Bookshop
            </h1>

            <p className="text-white/70 my-5 text-md md:text-lg max-w-lg mx-auto text-center px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="content  px-10">
        <div className="my-20">
          <h1 className="text-center font-bold text-3xl py-5">Our Mission</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-0 md:px-20  bg-[#f1f1f1]">
          <div className=" gap-2 border border-gray-400 p-5 bg-white rounded-lg ">
            <h1 className="font-bold text-black">Fast & Reliable Shipping</h1>
            <p className="text-gray-400 w-[70%]">
              Lorem ipsum dolor sit amet. consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam sollicitudin justo varius, sagittis neque
              ut, malesuada leo.
            </p>
            <div className="mt-4">
              <Link
                to="/contact"
                className="text-[#D9176C] flex items-center gap-5  hover:underline"
              >
                View More
                <FaArrowRightLong color="#D9176C" size={20} />
              </Link>
            </div>
          </div>
          <div className=" gap-2 border border-gray-400 p-5 bg-white rounded-lg ">
            <h1 className="font-bold text-black">Exceptional Service</h1>
            <p className="text-gray-400 w-[70%]">
              Lorem ipsum dolor sit amet. consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam sollicitudin justo varius, sagittis neque
              ut, malesuada leo.
            </p>
            <div className="mt-4">
              <Link
                to="/contact"
                className="text-[#D9176C] flex items-center gap-5  hover:underline"
              >
                View More
                <FaArrowRightLong color="#D9176C" size={20} />
              </Link>
            </div>
          </div>
          <div className=" gap-2 border border-gray-400 p-5 bg-white rounded-lg ">
            <h1 className="font-bold text-black">Set Up Stores</h1>
            <p className="text-gray-400 w-[70%]">
              Lorem ipsum dolor sit amet. consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam sollicitudin justo varius, sagittis neque
              ut, malesuada leo.
            </p>
            <div className="mt-4">
              <Link
                to="/contact"
                className="text-[#D9176C] flex items-center gap-5  hover:underline"
              >
                View More
                <FaArrowRightLong color="#D9176C" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full py-20 my-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#2B2236]/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-16 py-14">
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Have a Questions?
                <br /> Get in Touch
              </h2>

              <p className="mt-4 text-white/70 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.
              </p>
              <Formik initialValues={{ email: "" , name:"", message:""}}>
                <Form className="mt-10 space-y-5 max-w-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
                      <Field
                      name="name"
                        type="text"
                        placeholder="Name"
                        className="w-full bg-white/5 border border-white/15 rounded-lg pl-11 pr-4 py-3
                               text-white placeholder:text-white/40 outline-none"
                      />
                    </div>

                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
                      <Field
                      name="email"
                        type="email"
                        placeholder="Email Address"
                        className="w-full bg-white/5 border border-white/15 rounded-lg pl-11 pr-4 py-3
                               text-white placeholder:text-white/40 outline-none"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <FiEdit3 className="absolute left-4 top-4 text-white/50" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      className="w-full bg-white/5 border border-white/15 rounded-lg pl-11 pr-4 py-3
                             text-white placeholder:text-white/40 outline-none resize-none"
                    />
                  </div>

                  <button className="bg-[#D9176C] hover:bg-[#B71059] transition px-10 py-3 rounded-lg font-semibold">
                    Send Message
                  </button>
                </Form>
              </Formik>
            </div>

            {/* Right */}
            <div className="flex lg:justify-end">
              <div className="space-y-4 mt-2">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center text-pink-600">
                    <FiPhone />
                  </div>
                  <p className="text-white/85 pt-2">01123456789</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center text-pink-600">
                    <FiMail />
                  </div>
                  <p className="text-white/85 pt-2">Example@gmail.com</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center text-pink-600">
                    <FiMapPin />
                  </div>
                  <p className="text-white/85 pt-2 max-w-xs">
                    adipiscing elit. Mauris et ultricies est. Aliquam in justo
                    varius,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="service md:h-[50vh] bg-[#F5F5F5] md:pb-0 pb-20 my-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 px-10 pt-20">
          <div className="flex flex-col items-start justify-center gap-2">
            <TbTruckDelivery size={25} />
            <h1 className="font-bold text-black">Fast & Reliable Shipping</h1>
            <p className="text-gray-400 w-[95%]">
              Lorem ipsum dolor sit amet. consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam sollicitudin justo varius, sagittis neque
              ut, malesuada leo.
            </p>
          </div>

          <div className="flex flex-col items-start justify-center gap-2">
            <IconCreditCardPay stroke={2} size={25} />
            <h1 className="font-bold text-black">Secure Payment</h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet. consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam sollicitudin justo varius, sagittis neque
              ut, malesuada leo.
            </p>
          </div>

          <div className="flex flex-col items-start justify-center gap-2">
            <IconRefreshDot stroke={2} size={25} />
            <h1 className="font-bold text-black">Easy Returns</h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet. consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam sollicitudin justo varius, sagittis neque
              ut, malesuada leo.
            </p>
          </div>

          <div className="flex flex-col items-start justify-center gap-2">
            <RiCustomerService2Fill size={25} />
            <h1 className="font-bold text-black">24/7 Customer Support</h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet. consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam sollicitudin justo varius, sagittis neque
              ut, malesuada leo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
