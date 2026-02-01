import React from "react";
import heroImg from "../../assets/5176119115_f157862569_o 1.png";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router";
import axios from "axios";

export default function ForgetPassPage() {
  const Navigate = useNavigate();

  const HandelPass = async (values) => {
    console.log(values);
    try {
      const payload = {
        email: values.email,
      };
      const res = await axios.post(
        "https://bookstore.eraasoft.pro/api/forget-password",
        payload,
      );
      console.log(res);
      Navigate("/add_code");
    } catch (err) {
      console.log(err.response.data);
    }
  }
  return (
    <div className=" bg-[#F5F5F5]">
      <img src={heroImg} className="h-[35vh] md:h-[40vh] w-full" alt="" />

      <div className="forget_pass md:h-[75vh] h-[55vh] flex flex-col items-center justify-center pb-20 ">
        <h1 className="text-center font-bold text-[#D9176C] pt-10 md:pt-20 ">
          Forget Password?
        </h1>
        <p className="text-center py-5  text-gray-500">
          Enter your email to reset your password
        </p>
        <Formik initialValues={{ email: "" }} onSubmit={HandelPass}>
          <Form className="Login_content w-[90%] md:w-[60%] lg:w-xl flex flex-col gap-3">
            <div className="Email">
              <label htmlFor="Email">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className="border border-gray-300 rounded-md p-2 w-full bg-white "
              />
              <ErrorMessage
                name="email"
                className="text-[#D9176C]"
                component="span"
              />
            </div>
            <div className="btn pt-5">
              <button
                type="submit"
                className="bg-[#D9176C] text-white w-full py-2 rounded-md hover:shadow-xl hover:border-white"
              >
                Send reset code
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
