import React, { useRef } from "react";
import heroImg from "../../assets/5176119115_f157862569_o 1.png";
import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";

export default function AddCodePage() {
  const navigate = useNavigate();
  const inputsRef = useRef([]);

  const handleSubmit = (values, { setSubmitting }) => {
    const otp = values.d1 + values.d2 + values.d3 + values.d4;

    try {
      if (otp.length !== 4) {
        alert("Please enter the 4-digit code");
        return;
      }

      
      localStorage.setItem("otp", otp);

      
      navigate("/reset_pass");
    } catch (error) {
      console.log(error?.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F5F5F5]">
      <img src={heroImg} className="h-[35vh] md:h-[40vh] w-full" alt="" />

      <div className="md:h-[70vh] h-[55vh] flex flex-col items-center justify-center pb-30">
        <h1 className="text-center font-bold text-[#D9176C] pt-10 md:pt-20">
          Enter verification code
        </h1>

        <p className="text-center pt-4 pb-5 text-sm text-gray-400 md:text-lg">
          Enter the 4 digits code that you received on your email
        </p>

        <Formik initialValues={{ d1: "", d2: "", d3: "", d4: "" }} onSubmit={handleSubmit}>
          <Form className="Login_content">
            <div className="Email flex gap-5">
              {[0, 1, 2, 3].map((i) => (
                <Field key={i} name={`d${i + 1}`}>
                  {({ field }) => (
                    <input
                      {...field}
                      ref={(el) => (inputsRef.current[i] = el)}
                      maxLength="1"
                      className="w-12 h-12 border text-center rounded-lg text-xl"
                      onChange={(e) => {
                        if (!/^\d?$/.test(e.target.value)) return;
                        field.onChange(e);

                        if (e.target.value && i < 3) {
                          inputsRef.current[i + 1]?.focus();
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Backspace" && !field.value && i > 0) {
                          inputsRef.current[i - 1]?.focus();
                        }
                      }}
                    />
                  )}
                </Field>
              ))}
            </div>

            <div className="btn pt-5">
              <button
                type="submit"
                className="bg-[#D9176C] text-white w-full py-2 rounded-md hover:shadow-xl hover:border-white"
              >
                Continue
              </button>
            </div>

            <div className="account_login flex items-center justify-center pt-7">
              <p>
                Didn’t receive a code?
                <Link to="/forgot-password" className="text-[#D9176C] ml-1 font-medium">
                  Send again
                </Link>
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
