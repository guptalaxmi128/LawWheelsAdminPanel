import React from "react";
import { Bell } from "lucide-react";
import profile3 from "../assets/post/profile-3.jpg";
import profile12 from "../assets/post/profile-12.jpg";
import profile13 from "../assets/post/profile-13.jpg";

const Notification = ({ showNotifications, toggleNotifications }) => {
    console.log(showNotifications)
  return (
    <div
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
              </div>
  );
};

export default Notification;
