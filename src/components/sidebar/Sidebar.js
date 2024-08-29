import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  BarChart2,
  XCircle,
  Home,
  FileText,
  Edit3,
  User,
  Edit,
  Lock,
  HelpCircle,
  ToggleRight,
  Search,
  Bell,
  PhoneIcon,
  MessageCircle,
} from "lucide-react";
import { useDispatch } from "react-redux";
import logo from "../../assets/images/image 419.png";
import PostPage from "../post/PostPage";
import MDForm from "../mdForm/MDForm";
import profile3 from "../../assets/post/profile-3.jpg";
import profile10 from "../../assets/post/profile-10.jpg";
import profile12 from "../../assets/post/profile-12.jpg";
import profile13 from "../../assets/post/profile-13.jpg";
import Contact from "../contact/Contact";
import toast from "react-hot-toast";
import { logout } from "../../actions/auth/auth";
import Navbar from "../navbar/Nabar";
import ReachOut from "../reachOut/ReachOut";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  console.log(location.pathname)
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  console.log(location.pathname);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Admin logout successfully!");
    navigate("/");
  };
  const isActive = (path) => location.pathname === path;
  return (
    <>
      <div className="rubick px-5 sm:px-8 py-5 before:content-[''] before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 dark:before:from-darkmode-800 dark:before:to-darkmode-800 before:fixed before:inset-0 before:z-[-1]">
        {/* <!-- BEGIN: Mobile Menu --> */}
        <div
          className={`mobile-menu group top-0 inset-x-0 fixed bg-theme-1/90 z-[60] border-b border-white/[0.08] dark:bg-darkmode-800/90 md:hidden ${
            isSidebarVisible ? "mobile-menu--active" : ""
          }`}
        >
          {isSidebarVisible ? (
            ""
          ) : (
            <div
              className={`fixed top-0 inset-x-0 bg-[#1e40ad]  z-[61] shadow-sm transition-all duration-300 ease-in-out ${
                isSidebarVisible ? "hidden" : ""
              }`}
            >
              <div className="flex h-[70px] items-center px-3 sm:px-8">
                <a className="mr-auto flex" href="#">
                  <img className="w-6" src={logo} alt="image" />
                </a>
                <a
                  className="mobile-menu-toggler"
                  href="#"
                  onClick={toggleSidebar}
                >
                  <BarChart2 className="stroke-1.5 h-8 w-8 -rotate-90 transform text-white" />
                </a>
              </div>
            </div>
          )}

          <div
            className={`scrollable h-screen z-20 top-0 left-0 w-[270px] -ml-[100%] bg-primary transition-all duration-300 ease-in-out dark:bg-darkmode-800 ${
              isSidebarVisible ? "ml-0" : ""
            }`}
          >
            <a
              href="#"
              className={`fixed top-0 right-0 mt-4 mr-4 transition-opacity duration-200 ease-in-out ${
                isSidebarVisible ? "visible opacity-100" : "invisible opacity-0"
              }`}
              onClick={toggleSidebar}
            >
              <XCircle className="stroke-1.5 mobile-menu-toggler h-8 w-8 -rotate-90 transform text-white" />
            </a>
            <ul className="py-2">
              {/* <!-- BEGIN: First Child --> */}

              <div className="mb-4 text-center mt-2">
                <img className="w-24 mx-auto" src={logo} alt="image" />
              </div>
              <li>
                <Link
                  to="/admin/dashboard"
                  className={`menu ${
                    isActive("/admin/dashboard") ? "menu--active" : ""
                  }`}
                >
                  <div className="menu__icon">
                    <Home className="stroke-1.5 w-5 h-5" />
                  </div>
                  <div className="menu__title font-space-grotesk">
                    Dashboard
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  to="/admin/md-form"
                  className={`menu ${
                    isActive("/admin/md-form") ? "menu--active" : ""
                  }`}
                >
                  <div className="menu__icon">
                    <Edit3 className="stroke-1.5 w-5 h-5" />
                  </div>
                  <div className="menu__title font-space-grotesk">MD Form</div>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/post"
                  className={`menu ${
                    isActive("/admin/post") ? "menu--active" : ""
                  }`}
                >
                  <div className="menu__icon">
                    <FileText className="stroke-1.5 w-5 h-5" />
                  </div>
                  <div className="menu__title font-space-grotesk">Post</div>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/contact"
                  className={`side-menu ${
                    isActive("/admin/contact") ? "side-menu--active" : ""
                  }`}
                >
                  <div className="side-menu__icon">
                    <PhoneIcon className="stroke-1.5 w-5 h-5" />
                  </div>
                  <div className="side-menu__title font-space-grotesk">
                    Contact
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/reach-out"
                  className={`side-menu ${
                    isActive("/admin/reach-out") ? "side-menu--active" : ""
                  }`}
                >
                  <div className="side-menu__icon">
                    <MessageCircle className="stroke-1.5 w-5 h-5" />
                  </div>
                  <div className="side-menu__title font-space-grotesk">
                    Reach Out
                  </div>
                </Link>
              </li>
              {/* <!-- END: First Child --> */}
            </ul>
          </div>
        </div>
        {/* <!-- END: Mobile Menu --> */}
        <div className="mt-[4.7rem] flex md:mt-0">
          {/* <!-- BEGIN: Side Menu --> */}
          <nav className="side-nav hidden w-[80px] overflow-x-hidden pb-16 pr-5 md:block xl:w-[230px]">
            <a className="flex items-center pt-4 pl-5 intro-x" href="/">
              <img className="w-6" src={logo} alt="image" />
              <span className="hidden ml-3 text-lg text-white xl:block font-space-grotesk">
                Law Wheels{" "}
              </span>
            </a>
            <div className="my-6 side-nav__divider"></div>
            <ul>
              <li>
                <Link
                  to="/admin/dashboard"
                  className={`side-menu ${
                    isActive("/admin/dashboard") ? "side-menu--active" : ""
                  }`}
                >
                  <div className="side-menu__icon">
                    <Home className="stroke-1.5 w-5 h-5" />
                  </div>
                  <div className="side-menu__title font-space-grotesk">
                    Dashboard
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/md-form"
                  className={`side-menu ${
                    isActive("/admin/md-form") ? "side-menu--active" : ""
                  }`}
                >
                  <div className="side-menu__icon">
                    <Edit3 className="stroke-1.5 w-5 h-5" />
                  </div>
                  <div className="side-menu__title font-space-grotesk">
                    MD Form
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/post"
                  className={`side-menu ${
                    isActive("/admin/post") ? "side-menu--active" : ""
                  }`}
                >
                  <div className="side-menu__icon">
                    <FileText className="stroke-1.5 w-5 h-5" />
                  </div>
                  <div className="side-menu__title font-space-grotesk">
                    Post
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/contact"
                  className={`side-menu ${
                    isActive("/admin/contact") ? "side-menu--active" : ""
                  }`}
                >
                  <div className="side-menu__icon">
                    <PhoneIcon className="stroke-1.5 w-5 h-5" />
                  </div>
                  <div className="side-menu__title font-space-grotesk">
                    Contact
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/reach-out"
                  className={`side-menu ${
                    isActive("/admin/reach-out") ? "side-menu--active" : ""
                  }`}
                >
                  <div className="side-menu__icon">
                    <MessageCircle className="stroke-1.5 w-5 h-5" />
                  </div>
                  <div className="side-menu__title font-space-grotesk">
                    Reach Out
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
          {/* <!-- END: Side Menu -->
            <!-- BEGIN: Content --> */}
          <div className="md:max-w-auto min-h-screen min-w-0 max-w-full flex-1 rounded-[30px] bg-slate-100 px-4 pb-10 before:block before:h-px before:w-full before:content-[''] dark:bg-darkmode-700 md:px-[22px]">
            {/* <!-- BEGIN: Top Bar --> */}
            <div className="relative z-[51] flex h-[67px] items-center border-b border-slate-200">
              {/* <!-- BEGIN: Breadcrumb --> */}
              <nav
                aria-label="breadcrumb"
                className="flex -intro-x mr-auto hidden sm:flex"
              >
                <ol className="flex items-center text-theme-1 dark:text-slate-300">
                  <li className="font-space-grotesk">
                    <a href="#">Application</a>
                  </li>
                  <li className="relative font-space-grotesk ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                    <a href="#">Dashboard</a>
                  </li>
                </ol>
              </nav>
              {/* <!-- END: Breadcrumb -->
                    <!-- BEGIN: Search --> */}
              <div className="search intro-x relative mr-3 sm:mr-6">
                <div className="relative hidden sm:block">
                  <input
                    data-tw-merge=""
                    type="text"
                    placeholder="Search..."
                    className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent ease-in-out text-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-opacity-40 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 w-56 rounded-full border-transparent bg-slate-300/50 pr-8 shadow-none transition-[width] duration-300 focus:w-72 focus:border-transparent dark:bg-darkmode-400/70"
                  />

                  <Search className="stroke-1.5 w-5 h-5 absolute inset-y-0 right-0 my-auto mr-3 text-slate-600 dark:text-slate-500" />
                </div>
                <a className="relative text-slate-600 sm:hidden" href="#">
                  <Search className="stroke-1.5 w-5 h-5 dark:text-slate-500" />
                </a>
                <div
                  data-transition=""
                  data-selector=".show"
                  data-enter="transition-all ease-linear duration-150"
                  data-enter-from="mt-5 invisible opacity-0 translate-y-1"
                  data-enter-to="mt-[3px] visible opacity-100 translate-y-0"
                  data-leave="transition-all ease-linear duration-150"
                  data-leave-from="mt-[3px] visible opacity-100 translate-y-0"
                  data-leave-to="mt-5 invisible opacity-0 translate-y-1"
                  className="search-result absolute right-0 z-10 mt-[3px] hidden"
                >
                  <div className="box w-[450px] p-5">
                    <div className="mb-2 font-medium">Pages</div>
                    <div className="mb-5">
                      <a className="flex items-center" href="#">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/20 text-success dark:bg-success/10">
                          <i
                            data-tw-merge=""
                            data-lucide="inbox"
                            className="stroke-1.5 h-4 w-4"
                          ></i>
                        </div>
                        <div className="ml-3">Mail Settings</div>
                      </a>
                      <a className="mt-2 flex items-center" href="#">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pending/10 text-pending">
                          <i
                            data-tw-merge=""
                            data-lucide="users"
                            className="stroke-1.5 h-4 w-4"
                          ></i>
                        </div>
                        <div className="ml-3">Users & Permissions</div>
                      </a>
                      <a className="mt-2 flex items-center" href="#">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary/80 dark:bg-primary/20">
                          <i
                            data-tw-merge=""
                            data-lucide="credit-card"
                            className="stroke-1.5 h-4 w-4"
                          ></i>
                        </div>
                        <div className="ml-3">Transactions Report</div>
                      </a>
                    </div>
                    <div className="mb-2 font-medium">Users</div>
                    <div className="mb-5">
                      <a className="mt-2 flex items-center" href="#">
                        <div className="image-fit h-8 w-8">
                          <img
                            className="rounded-full"
                            src={profile3}
                            alt="image"
                          />
                        </div>
                        <div className="ml-3">Kevin Spacey</div>
                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                          kevinspacey@left4code.com
                        </div>
                      </a>
                      <a className="mt-2 flex items-center" href="#">
                        <div className="image-fit h-8 w-8">
                          <img
                            className="rounded-full"
                            src={profile10}
                            alt="image"
                          />
                        </div>
                        <div className="ml-3">Tom Cruise</div>
                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                          tomcruise@left4code.com
                        </div>
                      </a>
                      <a className="mt-2 flex items-center" href="#">
                        <div className="image-fit h-8 w-8">
                          <img
                            className="rounded-full"
                            src={profile13}
                            alt="image"
                          />
                        </div>
                        <div className="ml-3">Kate Winslet</div>
                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                          katewinslet@left4code.com
                        </div>
                      </a>
                      <a className="mt-2 flex items-center" href="#">
                        <div className="image-fit h-8 w-8">
                          <img
                            className="rounded-full"
                            src={profile13}
                            alt="image"
                          />
                        </div>
                        <div className="ml-3">Sylvester Stallone</div>
                        <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                          sylvesterstallone@left4code.com
                        </div>
                      </a>
                    </div>
                    <div className="mb-2 font-medium">Products</div>
                    <a className="mt-2 flex items-center" href="#">
                      <div className="image-fit h-8 w-8">
                        <img
                          className="rounded-full"
                          src={profile10}
                          alt="image"
                        />
                      </div>
                      <div className="ml-3">Sony Master Series A9G</div>
                      <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                        Electronic
                      </div>
                    </a>
                    <a className="mt-2 flex items-center" href="#">
                      <div className="image-fit h-8 w-8">
                        <img
                          className="rounded-full"
                          src={profile3}
                          alt="image"
                        />
                      </div>
                      <div className="ml-3">Nike Tanjun</div>
                      <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                        Sport & Outdoor
                      </div>
                    </a>
                    <a className="mt-2 flex items-center" href="#">
                      <div className="image-fit h-8 w-8">
                        <img
                          className="rounded-full"
                          src={profile3}
                          alt="image"
                        />
                      </div>
                      <div className="ml-3">Apple MacBook Pro 13</div>
                      <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                        PC & Laptop
                      </div>
                    </a>
                    <a className="mt-2 flex items-center" href="#">
                      <div className="image-fit h-8 w-8">
                        <img
                          className="rounded-full"
                          src={profile13}
                          alt="image"
                        />
                      </div>
                      <div className="ml-3">Nike Tanjun</div>
                      <div className="ml-auto w-48 truncate text-right text-xs text-slate-500">
                        Sport & Outdoor
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- END: Search  -->
                    <!-- BEGIN: Notifications --> */}
              {/* <div
                data-tw-merge=""
                data-tw-placement="bottom-end"
                className="dropdown relative intro-x mr-auto sm:mr-6"
              >
                <div
                  data-tw-toggle="dropdown"
                  aria-expanded={showNotifications}
                  className="cursor-pointer relative block text-slate-600 outline-none before:absolute before:right-0 before:top-[-2px] before:h-[8px] before:w-[8px] before:rounded-full before:bg-danger before:content-['']"
                  onClick={toggleNotifications}
                >
                  <Bell className="stroke-1.5 w-5 h-5 dark:text-slate-500" />
                </div>
                <div
                  className={`dropdown-menu absolute z-[9999] ${
                    showNotifications ? "block" : "hidden"
                  }`}
                  style={{ top: "28px", right: "5px" }} // Adjust the top and right properties as needed
                >
                  <div
                    data-tw-merge=""
                    className="dropdown-content rounded-md border-transparent bg-white shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 mt-2 w-[280px] p-5 sm:w-[350px]"
                  >
                    <div className="mb-5 font-medium">Notifications</div>
                    <div className="cursor-pointer relative flex items-center">
                      <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                        <img
                          className="rounded-full"
                          src={profile3}
                          alt="image"
                        />
                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
                      </div>
                      <div className="ml-2 overflow-hidden">
                        <div className="flex items-center">
                          <a className="mr-5 truncate font-medium" href="#">
                            Kevin Spacey
                          </a>
                          <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                            01:10 PM
                          </div>
                        </div>
                        <div className="mt-0.5 w-full truncate text-slate-500">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem
                        </div>
                      </div>
                    </div>
                    <div className="cursor-pointer relative flex items-center mt-5">
                      <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                        <img
                          className="rounded-full"
                          src={profile13}
                          alt="image"
                        />
                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
                      </div>
                      <div className="ml-2 overflow-hidden">
                        <div className="flex items-center">
                          <a className="mr-5 truncate font-medium" href="#">
                            Tom Cruise
                          </a>
                          <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                            05:09 AM
                          </div>
                        </div>
                        <div className="mt-0.5 w-full truncate text-slate-500">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500
                        </div>
                      </div>
                    </div>
                    <div className="cursor-pointer relative flex items-center mt-5">
                      <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                        <img
                          className="rounded-full"
                          src={profile12}
                          alt="image"
                        />
                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
                      </div>
                      <div className="ml-2 overflow-hidden">
                        <div className="flex items-center">
                          <a className="mr-5 truncate font-medium" href="#">
                            Kate Winslet
                          </a>
                          <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                            01:10 PM
                          </div>
                        </div>
                        <div className="mt-0.5 w-full truncate text-slate-500">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500
                        </div>
                      </div>
                    </div>
                    <div className="cursor-pointer relative flex items-center mt-5">
                      <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                        <img
                          className="rounded-full"
                          src={profile13}
                          alt="image"
                        />
                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
                      </div>
                      <div className="ml-2 overflow-hidden">
                        <div className="flex items-center">
                          <a className="mr-5 truncate font-medium" href="#">
                            Sylvester Stallone
                          </a>
                          <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                            01:10 PM
                          </div>
                        </div>
                        <div className="mt-0.5 w-full truncate text-slate-500">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500
                        </div>
                      </div>
                    </div>
                    <div className="cursor-pointer relative flex items-center mt-5">
                      <div className="image-fit relative mr-1 h-12 w-12 flex-none">
                        <img
                          className="rounded-full"
                          src={profile3}
                          alt="image"
                        />
                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"></div>
                      </div>
                      <div className="ml-2 overflow-hidden">
                        <div className="flex items-center">
                          <a className="mr-5 truncate font-medium" href="#">
                            Russell Crowe
                          </a>
                          <div className="ml-auto whitespace-nowrap text-xs text-slate-400">
                            05:09 AM
                          </div>
                        </div>
                        <div className="mt-0.5 w-full truncate text-slate-500">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <!-- END: Notifications  -->
                    <!-- BEGIN: Account Menu --> */}
              {/* <div
                data-tw-merge=""
                data-tw-placement="bottom-end"
                className="dropdown relative"
              >
                <button
                  data-tw-toggle="dropdown"
                  aria-expanded={showDropdown}
                  className="cursor-pointer image-fit zoom-in intro-x block h-8 w-8 overflow-hidden rounded-full shadow-lg"
                  onClick={toggleDropdown}
                >
                  <img src={profile3} alt="image" />
                </button>
                <div
                  data-transition=""
                  data-selector=".show"
                  data-enter="transition-all ease-linear duration-150"
                  data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                  data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                  data-leave="transition-all ease-linear duration-150"
                  data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                  data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                  className={`dropdown-menu absolute z-[9999] ${
                    showDropdown ? "block" : "hidden"
                  }`}
                  style={{ top: "50px", right: "0px" }}
                >
                  <div
                    data-tw-merge=""
                    className="dropdown-content rounded-md border-transparent p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 mt-px w-56 bg-theme-1 text-white"
                  >
                    <div className="p-2 font-medium font-normal">
                      <div className="font-medium">Law Wheels</div>
                      <div className="mt-0.5 text-xs text-white/70 dark:text-slate-500">
                        Business Account
                      </div>
                    </div>
                    <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400 bg-white/[0.08]"></div>
                    <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5">
                      <User className="stroke-1.5 mr-2 h-4 w-4" />
                      Profile
                    </a>
                    <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5">
                      <Edit className="stroke-1.5 mr-2 h-4 w-4" />
                      Add Account
                    </a>
                    <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5">
                      <Lock className="stroke-1.5 mr-2 h-4 w-4" />
                      Reset Password
                    </a>
                    <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5">
                      <HelpCircle className="stroke-1.5 mr-2 h-4 w-4" />
                      Help
                    </a>
                    <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400 bg-white/[0.08]"></div>
                    <button
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5"
                      onClick={handleLogout}
                    >
                      <ToggleRight className="stroke-1.5 mr-2 h-4 w-4" />
                      Logout
                    </button>
                  </div>
                </div>
              </div> */}
              <Navbar handleLogout={handleLogout} showNotifications={showNotifications} toggleNotifications={toggleNotifications}  />
              {/* <!-- END: Account Menu --> */}
            </div>
            {/* <!-- END: Top Bar --> */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 2xl:col-span-9">
                <div className="grid grid-cols-12 gap-6">
             
               
               
                
                  <div className="col-span-12 mt-2 lg:col-span-12 xl:col-span-12">
                    {location.pathname === "/admin/post" && <PostPage />}
                    {location.pathname === "/admin/md-form" && <MDForm />}
                    {location.pathname === "/admin/contact" && <Contact />}
                    {location.pathname === "/admin/dashboard" && <Contact />}
                    {location.pathname === "/admin/reach-out" && <ReachOut />}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END: Content --> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
