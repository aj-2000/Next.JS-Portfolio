import React, { useRef } from "react";
// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Model from "./ModelDraco";
import { AiOutlineHome } from "react-icons/ai";
import { useForm, ValidationError } from "@formspree/react";
const ContactMe = (props) => {
  const [state, handleSubmit] = useForm("xknyeqed");
  console.log(state);
  return (
    <div className="px-8 py-12">
      <div className="flex justify-center items-center gap-x-3 w-full">
        <p className="text-white text-md font-bold">GO BACK TO </p>
        <AiOutlineHome
          onClick={props.contactMeToHomeHandler}
          className="text-yellow font-bold text-5xl cursor-pointer"
        />
      </div>
      <div className="max-w-screen-xl mt-12 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-white text-gray-dark rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-dark leading-tight">
              Lets talk about everything!
            </h2>
            <div className="text-gray-700 mt-8">
              Hate forms? Send us an <a className="underline" href = "mailto: hi@ajaysharma.dev">email</a>{" "}
              instead.
            </div>
          </div>
          <div className="flex justify-center mt-8 text-center">
            <img
              className="max-h-72"
              src="/images/contact_form_illustration.svg"
            />
          </div>
        </div>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">
                Full Name
              </span>
              <input
                className="w-full bg-gray-white text-dark mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                id="id"
                placeholder=""
                required
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Email
              </span>
              <input
                className="w-full bg-gray-white text-dark mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea
                className="w-full h-32 bg-gray-white text-dark mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                disabled={state.submitting}
                className="uppercase text-sm font-bold tracking-wide bg-pink text-white p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
          {(state.succeeded && !state.submitting) && (
            <div
              className="mt-4 bg-green-100 rounded-lg py-5 px-6 text-base text-green-700"
              role="alert"
            >
              Form Successfully Submitted.
            </div>
          )}
          {state.errors?.length!==0 && (
            <div
              className="mt-4 bg-red-100 rounded-lg py-5 px-6 text-base text-red-700"
              role="alert"
            >
              {`${state.errors[0].field.toUpperCase()} ${state.errors[0].message}.`}
            </div>
          )}
          {state.submitting && (
            <div
              className="mt-4 bg-orange-100 rounded-lg py-5 px-6 text-base text-orange-700"
              role="alert"
            >
              Sending...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
