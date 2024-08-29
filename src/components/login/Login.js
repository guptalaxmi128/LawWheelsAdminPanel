import React,{useState} from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import logo from "../../assets/images/image 419.png";
import { useDispatch } from "react-redux";
import { adminLogin } from "../../actions/auth/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [loading, setLoading] = useState(false);

  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      // rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        console.log(values);
        const res = await dispatch(adminLogin(values));
        console.log(res)
        if (res.success) {
          toast.success(res.message);
          navigate("admin/dashboard")
        }
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message|| "Something went wrong!");
      }finally{
        setLoading(false)
      }
    },
  });

  return (
    <div>
      <div className="p-3 sm:px-8 relative h-auto lg:h-screen xl:h-screen sm:h-auto lg:overflow-hidden bg-primary xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600 before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400 after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700">
        <div className="container relative z-10 sm:px-10">
          <div className="block grid-cols-2 gap-4 xl:grid">
            <div className="hidden min-h-screen flex-col xl:flex">
              <a className="-intro-x flex items-center pt-5" href="#">
                <img className="w-6" src={logo} alt="image" />
                <span className="ml-3 text-lg text-white font-space-grotesk">
                  Law Wheels
                </span>
              </a>
              <div className="my-auto">
                {/* <img
                  className="-intro-x -mt-16 w-1/2"
                  src="dist/images/illustration.svg"
                  alt="image"
                /> */}
                <div className="-intro-x mt-10 text-4xl font-medium leading-tight text-white font-space-grotesk">
                  A few more clicks to <br />
                  sign in to your account.
                </div>
                {/* <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400 font-space-grotesk">
                  Manage all your e-commerce accounts in one place
                </div> */}
              </div>
            </div>
            <div className="my-10 flex h-screen py-5 xl:my-0 sm:h-auto xl:py-0">
              <div className="mx-auto my-auto w-full rounded-md bg-white px-5 py-8 shadow-md dark:bg-darkmode-600 sm:w-3/4 sm:px-8 lg:w-2/4 xl:ml-20 xl:w-auto xl:bg-transparent xl:p-0 xl:shadow-none">
                <div className="block xl:hidden mb-4 text-center">
                  <img className="w-24 mx-auto" src={logo} alt="image" />
                </div>
                <h2 className="intro-x text-center text-2xl font-bold xl:text-left xl:text-3xl font-space-grotesk">
                  Sign In
                </h2>
                <div className="intro-x mt-2 text-center text-slate-400 xl:hidden font-space-grotesk">
                  A few more clicks to sign in to your account.
                   {/* Manage all your
                  e-commerce accounts in one place */}
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div className="intro-x mt-8">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className={`disabled:bg-slate-100 font-space-grotesk disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 intro-x block min-w-full px-4 py-3 xl:min-w-[350px] ${
                        formik.touched.email && formik.errors.email
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 text-xs mt-1">
                        {formik.errors.email}
                      </div>
                    ) : null}
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      className={`disabled:bg-slate-100 font-space-grotesk disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 intro-x mt-4 block min-w-full px-4 py-3 xl:min-w-[350px] ${
                        formik.touched.password && formik.errors.password
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-red-500 text-xs mt-1">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                  {/* <div className="intro-x mt-4 flex text-xs text-slate-600 dark:text-slate-500 sm:text-sm">
                    <div className="mr-auto flex items-center">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.rememberMe}
                        className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 mr-2 border"
                        id="remember-me"
                      />
                      <label
                        className="cursor-pointer select-none font-space-grotesk"
                        htmlFor="remember-me"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="font-space-grotesk">
                      Forgot Password?
                    </a>
                  </div> */}
                  <div className="intro-x mt-5 text-center xl:mt-8 xl:text-left">
                    <button
                      type="submit"
                      disabled={loading}
                      className="transition font-space-grotesk duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary w-full px-4 py-3 align-top xl:mr-3 xl:w-32"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="intro-x mt-10 text-center text-slate-600 dark:text-slate-500 xl:mt-24 xl:text-left font-space-grotesk">
                  By signing up, you agree to our
                  <a
                    className="text-primary dark:text-slate-200 font-space-grotesk"
                    href="#"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                  &nbsp;&
                  <a
                    className="text-primary dark:text-slate-200 font-space-grotesk"
                    href="#"
                  >
                    &nbsp;Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
