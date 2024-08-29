import React, { useState, useEffect } from "react";
import {
  CheckSquare,
  Search,
  Trash,
  Plus,
  Printer,
  FileText,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  XCircle,
} from "lucide-react";
import toast from "react-hot-toast";
import { getUser } from "../../actions/user/user";
import { useDispatch } from "react-redux";
import Loader from "../../shared/Loader";



const MDForm = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false); 
  const [records,setRecords]=useState([]);
  const [loading,setLoading]=useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown state
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await dispatch(getUser());
        if (res.success) {
          setRecords(res.data)
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error(error.response.data.message);
      }finally{
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  const [isModal, setIsModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const openDeleteModal = (item) => {
    setItemToDelete(item);
    setIsModal(true);
  };

  const handleDelete = () => {
    // Implement your delete logic here
    console.log(`Deleting item with ID ${itemToDelete.id}`);
    // After deletion logic completes, close the modal
    setIsModal(false);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  if (loading) {

    return <div className="flex items-center justify-center h-full"> <Loader /></div>
  }

  return (
    <>
      <h2 className="intro-y mt-10 text-lg font-medium font-space-grotesk ">
        Data List Layout
      </h2>
      <div className="mt-5 grid grid-cols-12 gap-6">
        <div className="intro-y col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap">
          <button
            data-tw-merge=""
            className="transition font-space-grotesk  duration-200 border inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary mr-2 shadow-md"
          >
            Add New
          </button>
          <div
            data-tw-merge=""
            data-tw-placement="bottom-end"
            className="dropdown relative"
          >
            <button
              data-tw-merge=""
              data-tw-toggle="dropdown"
              aria-expanded={isOpen}
              onClick={toggleDropdown}
              className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed !box px-2"
            >
              <span className="flex h-5 w-5 items-center justify-center">
                <Plus className="stroke-1.5 h-4 w-4" />
              </span>
            </button>
            <div
              data-transition=""
              data-selector=".show"
              className={`dropdown-menu absolute z-[9999] ${
                isOpen ? "visible" : "hidden"
              }`}
            >
              <div
                data-tw-merge=""
                className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
              >
                <a
                  className="cursor-pointer font-space-grotesk  flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                  onClick={() => setIsOpen(false)}
                >
                  <Printer className="stroke-1.5 mr-2 h-4 w-4" />
                  Print
                </a>
                <a
                  className="cursor-pointer font-space-grotesk  flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                  onClick={() => setIsOpen(false)}
                >
                  <FileText className="stroke-1.5 mr-2 h-4 w-4" />
                  Export to Excel
                </a>
                <a
                  className="cursor-pointer font-space-grotesk  flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                  onClick={() => setIsOpen(false)}
                >
                  <FileText className="stroke-1.5 mr-2 h-4 w-4" />
                  Export to PDF
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto hidden text-slate-500 md:block font-space-grotesk ">
            Showing 1 to 10 of 150 entries
          </div>
          <div className="mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0">
            <div className="relative w-56 text-slate-500">
              <input
                data-tw-merge=""
                type="text"
                placeholder="Search..."
                className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 !box w-56 pr-10"
              />

              <Search className="stroke-1.5 absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4" />
            </div>
          </div>
        </div>
        {/* <!-- BEGIN: Data List --> */}
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
                {/* <th data-tw-merge="" className="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0">
                                       
                                    </th> */}
                <th
                  data-tw-merge=""
                  className="font-medium font-space-grotesk  px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0 text-center"
                >
                  CONTACT NUMBER
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
                  JOIN THROUGH
                </th>

                <th
                  data-tw-merge=""
                  className="font-medium font-space-grotesk  px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0 text-center"
                >
                  ACTIONS
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
                    <a
                      className="whitespace-nowrap font-space-grotesk  font-medium"
                      href={`md-form/${record.id}`}
                    >
                      {record.name}
                    </a>
                    <div className="mt-0.5 font-space-grotesk  whitespace-nowrap text-xs text-slate-500">
                      {record.city}
                    </div>
                  </td>
                  <td
                    data-tw-merge=""
                    className="px-5 py-3 border-b font-space-grotesk  dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 text-center shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                  >
                    {record.mobileNumber ? record.mobileNumber :"-" }
                  </td>
                  <td
                    data-tw-merge=""
                    className="px-5 py-3 font-space-grotesk  border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 text-center shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                  >
                    {record.email ? record.email :'-' }
                  </td>
                  <td
                    data-tw-merge=""
                    className="px-5 py-3 font-space-grotesk  border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 text-center shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600"
                  >
                    {record.joinByApp ? "App" : "Website"}
                  </td>

                  <td
                    data-tw-merge=""
                    className="px-5 py-3 border-b dark:border-darkmode-300 box w-56 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600 before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400"
                  >
                    <div className="flex items-center justify-center font-space-grotesk ">
                      <a className="mr-3 flex items-center" href="#">
                        <CheckSquare className="stroke-1.5 mr-1 h-4 w-4" />
                        Edit
                      </a>
                      <a
                        className="flex items-center text-danger font-space-grotesk "
                        data-tw-toggle="modal"
                        data-tw-target="#delete-confirmation-modal"
                        href="#"
                      >
                        <Trash
                          className="stroke-1.5 mr-1 h-4 w-4"
                          onClick={() => openDeleteModal(record)}
                        />
                        Delete
                      </a>
                    </div>
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
      {/* <!-- BEGIN: Delete Confirmation Modal --> */}
      {isModal && (
        <div
          //   id="delete-confirmation-modal"
          className="modal group bg-black/60 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s]"
        >
          <div className="w-[90%] mx-auto bg-white relative rounded-md shadow-md transition-[margin-top,transform] duration-[0.4s,0.3s] -mt-16 group-[.show]:mt-16 group-[.modal-static]:scale-[1.05] dark:bg-darkmode-600 sm:w-[460px]">
            <div className="p-5 text-center">
              <XCircle className="stroke-1.5 mx-auto mt-3 h-16 w-16 text-danger" />
              <div className="mt-5 text-3xl font-space-grotesk">
                Are you sure?
              </div>
              <div className="mt-2 text-slate-500 font-space-grotesk ">
                Do you really want to delete{" "}
                <strong>{itemToDelete?.name}</strong> with ID {itemToDelete?.id}
                ?
              </div>
            </div>
            <div className="px-5 pb-8 text-center">
              <button
                onClick={closeModal}
                className="transition font-space-grotesk  duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 mr-1 w-24"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="transition font-space-grotesk  duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-danger border-danger text-white dark:border-danger w-24"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MDForm;
