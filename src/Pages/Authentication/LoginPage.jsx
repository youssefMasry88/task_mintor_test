import React from "react";
import heroImg from "../../assets/5176119115_f157862569_o 1.png";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router";
import Facebook from "../../Components/UI/FacebookBtn";
import Google from "../../Components/UI/GoogleBTn";
import axios from "axios";
import * as Yup from "yup";
import { useAuthStore } from "../../store";


export default function LoginPage() {
  const Navigate = useNavigate();
  const { login } = useAuthStore(); // ✅

  const HandelLogin = async (values) => {
    try {
      const payload = {
        email: values.email,
        password: values.password,
      };

      const res = await axios.post(
        "https://bookstore.eraasoft.pro/api/login",
        payload
      );
      const token = res.data?.data?.token || res.data?.token;

      if (token) {
        login(token); 
        Navigate("/"); 
      } else {
        console.log("Token not found in response:", res.data);
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const LoginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <div className=" bg-[#F5F5F5] ">
      <img src={heroImg} className="w-full h-[35vh] md:h-[40vh] " alt="" />
<div className="px-4 sm:px-6 lg:px-8 py-20">
  
      <h1 className="text-center font-bold text-[#D9176C] pt-10 md:pt-20">LoginPage</h1>
      <div className="logIn  flex flex-col items-center justify-center ">
        <Formik initialValues={{email:"",password:""}} onSubmit={HandelLogin} validationSchema={LoginSchema}>
          <Form className="Login_content w-[95%] md:w-[80%] lg:w-[50%] flex flex-col gap-3 ">
            <div className="Email">
              <label htmlFor="Email">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className="border border-gray-300 rounded-md p-2 mt-2 w-full bg-white "
              />
              <ErrorMessage
                name="email"
                className="text-[#D9176C]"
                component="span"
              />
            </div>
            <div className="Password">
              <label htmlFor="Password">password</label>
              <Field
                name="password"
                type="Password"
                placeholder="Enter Password"
                className="border border-gray-300 rounded-md mt-2 p-2 w-full bg-white "
              />
              <ErrorMessage
                name="password"
                className="text-[#D9176C]"
                component="span"
              />
            </div>
            <div className="Agree flex items-center justify-between ">
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
              <div>
                <Link to="/forget_pass" className="text-[#D9176C] text-md">
                  Forget password?
                </Link>
              </div>
            </div>
            <div className="btn pt-4">
              <button
                type="submit"
                className="bg-[#D9176C] text-white w-full py-2 rounded-md hover:shadow-xl hover:border-white"
              >
                Sign Up
              </button>
            </div>
            <div className="account_login flex items-center justify-center flex-col gap-7 pt-5">
              <p>
                Already have an account?
                <Link
                  to="/login"
                  className="text-[#D9176C] cursor-pointer text-center "
                >
                  Login
                </Link>
              </p>
              <span className="text-gray-400 text-center">or</span>
            </div>
            <div className="social_btnS flex items-center justify-center flex-col gap-2 pt-5">
              <button className="w-full hover:shadow-xl">
                <Google />
              </button>
              <button className="w-full hover:shadow-xl">
                <Facebook />
              </button>
            </div>
          </Form>
        </Formik>
</div>
      </div>
    </div>
  );
}
