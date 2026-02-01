import React from "react";
import heroImg from "../../assets/5176119115_f157862569_o 1.png";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router";
import Google from "../../Components/UI/GoogleBTn";
import Facebook from "../../Components/UI/FacebookBtn";
import axios from "axios";
import * as Yup from "yup";

export default function SignUpPage() {
  const Navigate = useNavigate();
  const HandleRegister = async (values) => {
    if (values.password !== values.password_confirmation) {
      alert("Passwords do not match");
    } else {
      try {
        const payload = {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          password: values.password,
          password_confirmation: values.password_confirmation,
        };
        const res = await axios.post(
          "https://bookstore.eraasoft.pro/api/register",
          payload,
        );
        console.log(res);
        Navigate("/login");
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };
  const SignUpSchema = Yup.object({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    password_confirmation: Yup.string().required("Password is required"),
  });
  return (
    <div className="bg-[#F5F5F5]">
      <img src={heroImg} className="h-[35vh] md:h-[40vh] w-full" alt="" />
      <div className="SignUp_content flex flex-col items-center justify-center pb-30 pt-10 ">
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
          }}
          onSubmit={HandleRegister}
          validationSchema={SignUpSchema}
        >
          <Form className="SignUp_content w-[90%] md:w-[60%] lg:w-[40%] flex flex-col gap-3">
            <div className="Name flex gap-3">
              <div className="First_Name flex flex-col w-full">
                <label htmlFor="FirstName"> First Name</label>
                <Field
                  name="first_name"
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 rounded-md p-2 mt-2 w-full bg-white "
                />
                <ErrorMessage
                  name="first_name"
                  className="text-[#D9176C]"
                  component="span"
                />
              </div>
              <div className="last_name flex flex-col w-full ">
                <label htmlFor="LastName"> Last Name</label>
                <Field
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 rounded-md p-2 mt-2 w-full bg-white "
                />
                <ErrorMessage
                  name="last_name"
                  className="text-[#D9176C]"
                  component="span"
                />
              </div>
            </div>
            <div className="Email">
              <label htmlFor="Email">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className="border border-gray-300 rounded-md p-2 w-full mt-2 bg-white "
              />
              <ErrorMessage
                name="email"
                className="text-[#D9176C]"
                component="span"
              />
            </div>
            <div className="Password">
              <label htmlFor="Password" >password</label>
              <Field
                name="password"
                type="Password"
                placeholder="Enter Password"
                className="border border-gray-300 rounded-md p-2 mt-2 w-full bg-white  "
              />
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
            <div className="Agree flex ">
              <Field
                type="checkbox"
                name="Agree"
                id="Agree"
                placeholder="Agree"
                className="border-2 border-gray-300 rounded-md  placeholder:text-gray-400 text-black mr-2 cursor-pointer"
              />
              <label htmlFor="Agree" className="text-sm ">
                Agree with
                <span className="text-[#D9176C] cursor-pointer">
                  Terms & Conditions.
                </span>
              </label>
            </div>
            <div className="btn">
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
  );
}
