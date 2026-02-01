import React from "react";
import heroImg from "../../assets/5176119115_f157862569_o 1.png";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import * as Yup from "yup";

export default function ResetPassPage() {
  const Navigate = useNavigate();

  const HandelPass = async (values) => {
    console.log(values);
    try {
      const payload = {
        email: values.email,
      };
      const res = await axios.post(
        "https://bookstore.eraasoft.pro/api/reset-password",
        payload,
      );
      console.log(res);
      Navigate("/login");
    } catch (err) {
      console.log(err.response.data);
    }
  };
  const ResetPassSchema = Yup.object({
    password: Yup.string().required("Password is required"),
    password_confirmation: Yup.string().required("Password is required"),
  });
  return (
    <div>
      <img src={heroImg} className="w-full h-[35vh] md:h-[40vh]" alt="" />
      <div className="reset_pass pb-30 ">
        <div className="flex flex-col items-center py-10 ">
          <h1 className=" font-bold text-[#D9176C] ">Create new password!</h1>
          <p className="text-gray-500 w-100 text-center">
            Create a strong password Your new password must be different from
            previous one
          </p>
        </div>
        <div className="flex items-center justify-center ">
          <Formik
            initialValues={{ password: "", password_confirmation: "" }}
            onSubmit={HandelPass}
            validationSchema={ResetPassSchema}
          >
            <Form className="reset_pass w-[90%] md:w-[60%] lg:w-[40%] flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <div className="Password">
                  <label htmlFor="Password">password</label>
                  <Field
                    name="password"
                    type="Password"
                    placeholder="Enter Password"
                    className="border border-gray-300 rounded-md p-2 mt-2 w-full bg-white  "
                  />
                  <p className="text-gray-400 text-xs  pt-1">
                    Must be at least 8 characterss
                  </p>
                  <ErrorMessage
                    name="password"
                    className="text-[#D9176C]"
                    component="span"
                  />
                </div>
                <div className="Confirm password">
                  <label htmlFor="Confirm password">Confirm password</label>
                  <Field
                    name="password_confirmation"
                    type="password"
                    placeholder="Enter password"
                    className="border border-gray-300 rounded-md p-2 mt-2 w-full bg-white "
                  />
                  <ErrorMessage
                    name="password_confirmation"
                    className="text-[#D9176C]"
                    component="span"
                  />
                </div>
                <div className="Agree flex items-center ">
                  <div className="flex items-center">
                    <Field
                      type="checkbox"
                      name="Agree"
                      id="Agree"
                      placeholder="Agree"
                      className="border-2 border-gray-300 rounded-md  placeholder:text-gray-400 text-black mr-2 cursor-pointer"
                    />
                    <label htmlFor="Agree" className="text-black text-sm">
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="btn pt-4">
                  <Link to="/login" className="text-[#D9176C] font-medium">
                    <button
                      type="submit"
                      className="bg-[#D9176C] text-white w-full py-2 rounded-md hover:shadow-xl hover:border-white"
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
