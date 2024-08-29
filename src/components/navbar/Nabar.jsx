
import React, { useState } from "react";
import {
 
  User,
  Edit,
  Lock,
  HelpCircle,
  ToggleRight,

} from "lucide-react";
import profile3 from "../../assets/post/profile-3.jpg";
import Notification from "../../shared/Notification";

const Navbar = ({ handleLogout, showNotifications, toggleNotifications }) => {
  const [showDropdown, setShowDropdown] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };
//   console.log(location.pathname);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <Notification
        toggleNotifications={toggleNotifications}
        showNotifications={showNotifications}
      />
      <div
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
      </div>
    </>
  );
};

export default Navbar;
