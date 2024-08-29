import React, { useState, useEffect } from "react";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getContact, getReachOut } from "../../actions/contact/contact";
import Loader from "../../shared/Loader";

const ReachOut = () => {
  const dispatch = useDispatch();
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await dispatch(getReachOut());
        if (res.success) {
          setRecords(res.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {

    return <div className="flex items-center justify-center h-full"> <Loader /></div>
  }

  return (
    <>
      <div className="mt-5 grid grid-cols-12 gap-6">
        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <table
            data-tw-merge=""
            className="w-full text-left -mt-2 border-separate border-spacing-y-[10px]"
          >
            <thead data-tw-merge="" className="">
              <tr data-tw-merge="" className="">
                <th
                  data-tw-merge=""
                  className="font-medium font-space-grotesk  px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0"
                >
                  NAME
                </th>
             
              
                <th
                  data-tw-merge=""
                  className="font-medium font-space-grotesk  px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0 text-center"
                >
                  EMAIL
                </th>
                <th
                  data-tw-merge=""
                  className="font-medium font-space-grotesk  px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0 text-center"
                >
                  MESSAGE
                </th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id} data-tw-merge="" className="intro-x">
                  <td
                    data-tw-merge=""
                    className="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                  >
                    {record.name}
                  </td>
                
                  <td
                    data-tw-merge=""
                    className="px-5 py-3 font-space-grotesk  border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 text-center shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                  >
                    {record.email}
                  </td>
                  <td
                    data-tw-merge=""
                    className="px-5 py-3 border-b font-space-grotesk  dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 text-center shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                  >
                    {record.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <!-- END: Data List -->
                    <!-- BEGIN: Pagination --> */}
        <div className="intro-y col-span-12 flex flex-wrap items-center sm:flex-row sm:flex-nowrap">
          <nav className="w-full sm:mr-auto sm:w-auto">
            <ul className="flex w-full mr-0 sm:mr-auto sm:w-auto">
              <li className="flex-1 sm:flex-initial">
                <a
                  data-tw-merge=""
                  className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                >
                  <ChevronsLeft className="stroke-1.5 h-4 w-4" />
                </a>
              </li>
              <li className="flex-1 sm:flex-initial">
                <a
                  data-tw-merge=""
                  className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                >
                  <ChevronLeft className="stroke-1.5 h-4 w-4" />
                </a>
              </li>
              <li className="flex-1 sm:flex-initial">
                <a
                  data-tw-merge=""
                  className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                >
                  ...
                </a>
              </li>
              <li className="flex-1 sm:flex-initial">
                <a
                  data-tw-merge=""
                  className="transition font-space-grotesk  duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                >
                  1
                </a>
              </li>
              <li className="flex-1 sm:flex-initial">
                <a
                  data-tw-merge=""
                  className="transition font-space-grotesk  duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3 !box dark:bg-darkmode-400"
                >
                  2
                </a>
              </li>
              <li className="flex-1 sm:flex-initial">
                <a
                  data-tw-merge=""
                  className="transition font-space-grotesk  duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                >
                  3
                </a>
              </li>
              <li className="flex-1 sm:flex-initial">
                <a
                  data-tw-merge=""
                  className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                >
                  ...
                </a>
              </li>
              <li className="flex-1 sm:flex-initial">
                <a
                  data-tw-merge=""
                  className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                >
                  <ChevronRight className="stroke-1.5 h-4 w-4" />
                </a>
              </li>
              <li className="flex-1 sm:flex-initial">
                <a
                  data-tw-merge=""
                  className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                >
                  <ChevronsRight className="stroke-1.5 h-4 w-4" />
                </a>
              </li>
            </ul>
          </nav>
          <select
            data-tw-merge=""
            className="disabled:bg-slate-100 font-space-grotesk  disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1 !box mt-3 w-20 sm:mt-0"
          >
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </select>
        </div>
        {/* <!-- END: Pagination --> */}
      </div>
    </>
  );
};

export default ReachOut;
