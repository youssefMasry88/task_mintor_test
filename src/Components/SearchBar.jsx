import { Field, Form, Formik } from "formik";
import React from "react";
import { IoMicOutline, IoSearch } from "react-icons/io5";

export default function SearchBar() {
    
  return (
    <div className=" ">
      <Formik initialValues={{ search: "" }} >
        <Form className="flex  justify-center w-full items-center ">
          <div className="father md:w-1/2 mt-40 md:mt-50">
            <div className="son relative w-full">
              <Field
                className="
                w-full bg-white rounded-full
                pl-5 pr-24 py-3
                text-gray-800 outline-none
                shadow"
                name="search"
                type="text"
                placeholder="Search"
              />
              {/* {btn_Mic} */}
              <button
                type="button"
                className="absolute right-17 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <IoMicOutline size={25} />
              </button>
              {/* {btn_Search} */}
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2
                  w-16 h-12 rounded-r-full
                  bg-[#D9176C] text-white
                  flex items-center justify-center
                  hover:opacity-90 transition
                  "
              >
                <IoSearch size={25} />
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
