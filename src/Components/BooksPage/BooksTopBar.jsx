import { Field, Form, Formik } from "formik";
// import { sort } from "list";
import React from "react";
import { IoMicOutline, IoSearch  } from "react-icons/io5";

export default function BooksTopBar({
  search,
  onSearchChange,
  sort,
  onSortChange,
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl md:flex-row md:items-center md:justify-between">
      {/* search bar */}
      <Formik initialValues={{ search: search || "" }} onSubmit={() => {}}>
        <Form className="flex w-full items-center gap-2 rounded-xl md:w-3xl ">
          <div className="son relative w-full ">
            <Field
              onChange={(e) => onSearchChange(e.target.value)}
              value={search}
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
              className="absolute right-20 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <IoMicOutline size={25} />
            </button>
            {/* {btn_Search} */}
            <button
              className="absolute right-2 w-16 top-1/2 -translate-y-1/2
                        h-12 rounded-r-full
                            text-[#D9176C] border-l border-gray-300 
                        flex items-center justify-center
                        hover:opacity-90 transition
                        "
            >
              <IoSearch size={25} />
            </button>
          </div>
        </Form>
      </Formik>
      {/* sort by */}
      <div className="flex items-center gap-2 ">
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className=" re rounded-3xl border border-gray-300 bg-[#F5F5F5] py-3 px-5  text-sm text-gray-500 outline-none "
        >
          <option value="relevance">Sort By</option>
          <option value="price_asc">Price: Low → High</option>
          <option value="price_desc">Price: High → Low</option>
          <option value="rating_desc">Rating: High → Low</option>
        </select>
      </div>
    </div>
  );
}
