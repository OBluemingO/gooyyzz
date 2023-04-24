import React from "react";
import { TbArrowRight } from "react-icons/tb";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactUs = () => {
    const validationSchema = Yup.object({
        first_name: Yup.string().required("Required"),
        last_name: Yup.string().required("Required"),
        email: Yup.string().required("Required"),
        phone_number: Yup.string().required("Required"),
        message: Yup.string().required("Required"),
    });

    const { handleSubmit, handleChange, values, errors, handleBlur, touched } =
        useFormik({
            initialValues: {
                first_name: "",
                last_name: "",
                email: "",
                phone_number: "",
                message: "",
            },
            validationSchema,
            onSubmit(values) {
                console.log(values);
            },
        });

    return (
        <div className="w-full lg:h-screen relative lg:max-h-[798px] lg:max-w-[1440px] mx-auto flex mt-[60px]">
            <div className="w-[50%] text-white flex flex-col items-center pt-[20px] md:pb-[120px] lg:pb-0 overflow-hidden">
                <h1 className="md:text-6xl lg:text-8xl ">
                    we'd love to
                    <br /> hear from you
                </h1>
                <div className="flex md:pt-[50px] lg:pt-[100px] justify-center w-full md:h-auto lg:h-full">
                    <div className="border-white border-[2px] md:w-[200px] md:h-[200px] lg:w-[40%] lg:h-[60%] rounded-full"></div>
                    <div className="border-white border-[2px] md:w-[200px] md:h-[200px] lg:w-[40%] lg:h-[60%] rounded-full  border-dashed -ml-[135px]"></div>
                    <div className="border-white border-[2px] md:w-[200px] md:h-[200px] lg:w-[40%] lg:h-[60%] rounded-full -ml-[135px]"></div>
                </div>
                <div className="absolute md:bottom-[30px]">
                    <p className="capitalize">
                        privacy policy • modern day statement social impact
                        statement
                    </p>
                </div>
            </div>
            <div className="w-[50%] flex flex-col md:justify-center items-center text-white relative ">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-wrap items-center lg:gap-y-[40px] gap-[20px] justify-center"
                >
                    <div className="basis-[45%] relative">
                        <label htmlFor="first_name" className="block uppercase">
                            first name
                        </label>
                        <input
                            className={`w-full border-b-[1px] border-white bg-transparent focus:outline-none ${
                                errors.first_name && touched.first_name
                                    ? "placeholder:text-red-400"
                                    : "placeholder:text-gray-800"
                            } `}
                            type="text"
                            name="first_name"
                            value={values.first_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={"Enter your first name"}
                        />
                        {errors.first_name && touched.first_name && (
                            <div className="text-red-400 absolute lg:-bottom-[30px]">
                                {errors.first_name}
                            </div>
                        )}
                    </div>
                    <div className="basis-[45%] relative">
                        <label htmlFor="last_name" className="block uppercase">
                            last name
                        </label>
                        <input
                            className={`w-full border-b-[1px] border-white bg-transparent focus:outline-none ${
                                errors.last_name && touched.last_name
                                    ? "placeholder:text-red-400"
                                    : "placeholder:text-gray-800"
                            } `}
                            type="text"
                            name="last_name"
                            value={values.last_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={"Enter your last name"}
                        />
                        {errors.last_name && touched.last_name && (
                            <div className="text-red-400 absolute lg:-bottom-[30px]">
                                {errors.last_name}
                            </div>
                        )}
                    </div>
                    <div className="basis-[45%] relative">
                        <label htmlFor="email" className="block uppercase">
                            emil
                        </label>
                        <input
                            className={`w-full border-b-[1px] border-white bg-transparent focus:outline-none ${
                                errors.email && touched.email
                                    ? "placeholder:text-red-400"
                                    : "placeholder:text-gray-800"
                            } `}
                            type="text"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={"Enter your email"}
                        />
                        {errors.email && touched.email && (
                            <div className="text-red-400 absolute lg:-bottom-[30px]">
                                {errors.email}
                            </div>
                        )}
                    </div>
                    <div className="basis-[45%] relative">
                        <label
                            htmlFor="phone_number"
                            className="block uppercase"
                        >
                            phone number
                        </label>
                        <input
                            className={`w-full border-b-[1px] border-white bg-transparent focus:outline-none ${
                                errors.phone_number && touched.phone_number
                                    ? "placeholder:text-red-400"
                                    : "placeholder:text-gray-800"
                            } `}
                            type="text"
                            name="phone_number"
                            value={values.phone_number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={"Enter your phone number"}
                        />
                        {errors.phone_number && touched.phone_number && (
                            <div className="text-red-400 absolute lg:-bottom-[30px]">
                                {errors.phone_number}
                            </div>
                        )}
                    </div>
                    <div className="basis-[92.5%] relative">
                        <label htmlFor="message" className="block uppercase">
                            message
                        </label>
                        <input
                            className={`w-full border-b-[1px] border-white bg-transparent focus:outline-none ${
                                errors.message && touched.message
                                    ? "placeholder:text-red-400"
                                    : "placeholder:text-gray-800"
                            } `}
                            type="text"
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={"Enter your phone number"}
                        />
                        {errors.message && touched.message && (
                            <div className="text-red-400 absolute lg:-bottom-[30px]">
                                {errors.message}
                            </div>
                        )}
                    </div>
                    <div className="w-[92.5%]">
                        <button
                            type="submit"
                            className="
                        flex items-center
                        relative transition-all w-min-content
                        before:w-0 before:h-[1px] before:absolute before:bottom-0 before:right-0 before:bg-white before:transition-all before:duration-500
                        hover:before:w-full hover:before:left-0 hover:before:bg-white
                        "
                        >
                            Submit <TbArrowRight className="lg:ml-[10px]" />
                        </button>
                    </div>
                </form>
                <div className="flex lg:gap-x-[10px] absolute md:bottom-[30px] right-[5%] text-white">
                    <p>phayuphat118@gmail.com</p>
                    <p>instagram</p>
                    <p>facebook</p>
                    <p>github</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
