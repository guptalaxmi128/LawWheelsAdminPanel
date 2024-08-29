import React, { useState } from "react";
import {
  ChevronDown,
  Activity,
  Eye,
  FileText,
  X,
  Image,
  AlignLeft,
  Code,
} from "lucide-react";
import ReactQuill from "react-quill";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import "react-quill/dist/quill.snow.css";
import "tailwindcss/tailwind.css";
import profile3 from "../../assets/post/profile-3.jpg";
import profile10 from "../../assets/post/profile-10.jpg";
import profile12 from "../../assets/post/profile-12.jpg";
import profile13 from "../../assets/post/profile-13.jpg";

const profiles = [
  { name: "Kate Winslet", image: `${profile10}` },
  { name: "Nicolas Cage", image: `${profile3}` },
  { name: "Al Pacino", image: `${profile10}` },
  { name: "Denzel Washington", image: `${profile12}` },
  { name: "Johnny Depp", image: `${profile13}` },
];

const options = [
  { value: "1", label: "Horror" },
  { value: "2", label: "Sci-fi" },
  { value: "3", label: "Action" },
  { value: "4", label: "Drama" },
  { value: "5", label: "Comedy" },
];

const options1 = [
  { value: "1", label: "Leonardo DiCaprio" },
  { value: "2", label: "Johnny Deep" },
  { value: "3", label: "Robert Downey, Jr" },
  { value: "4", label: "Samuel L. Jackson" },
  { value: "5", label: "Morgan Freeman" },
];

const PostPage = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [saveDropDown, setSaveDropDown] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);
  const [activeTab, setActiveTab] = useState("content");
  const [editorContent, setEditorContent] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const initialSelectedOptions = [{ value: "1", label: "Leonardo DiCaprio" }];

  const handleTagChange = (selectedOptions) => {
    console.log("Selected Options:", selectedOptions);
    // Handle selected options here if needed
  };

  const handleChange = (selectedOptions) => {
    console.log("Selected Options:", selectedOptions);
    // Handle selected options here if needed
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownVisible(false); // Close the dropdown after selection
  };

  const toggleSaveDropdown = () => {
    setSaveDropDown(!saveDropDown);
  };

  const handleSaveOption = (option) => {
    console.log(option);
  };

  const toggleImageDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectProfile = (profile) => {
    setSelectedProfile(profile);
    setDropdownVisible(false);
  };

  return (
    <>
      <div className="intro-y mt-8 flex flex-col items-center sm:flex-row">
        <h2 className="mr-auto text-lg font-medium font-space-grotesk">Add New Post</h2>
        <div className="mt-4 flex w-full sm:mt-0 sm:w-auto">
          <div className="dropdown relative mr-2">
            <button
              onClick={toggleDropdown}
              aria-expanded={isDropdownVisible}
              className="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed !box flex"
            >
              {selectedLanguage}
              <ChevronDown className="stroke-1.5 ml-2 h-4 w-4" />
            </button>
            {isDropdownVisible && (
              <div className="dropdown-menu absolute z-[9999]">
                <div className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40">
                  <a
                    className="cursor-pointer font-space-grotesk flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    onClick={() => handleLanguageSelect("English")}
                  >
                    <Activity className="stroke-1.5 mr-2 h-4 w-4" />
                    <span className="truncate font-space-grotesk">English</span>
                  </a>
                  <a
                    className="cursor-pointer font-space-grotesk flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    onClick={() => handleLanguageSelect("Indonesian")}
                  >
                    <Activity className="stroke-1.5 mr-2 h-4 w-4" />
                    <span className="truncate font-space-grotesk">Indonesian</span>
                  </a>
                </div>
              </div>
            )}
          </div>
          <button
            data-tw-merge=""
            type="button"
            className="transition font-space-grotesk duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed !box ml-auto mr-2 flex sm:ml-0"
          >
            <Eye className="stroke-1.5 mr-2 h-4 w-4" />
            Preview
          </button>
          <div className="dropdown relative mr-2">
            <button
              onClick={toggleSaveDropdown}
              aria-expanded={saveDropDown}
              className="transition font-space-grotesk duration-200 border items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary flex shadow-md"
            >
              Save
              <ChevronDown className="stroke-1.5 ml-2 h-4 w-4" />
            </button>
            {saveDropDown && (
              <div className="dropdown-menu absolute z-[9999]">
                <div className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40">
                  <a
                    className="cursor-pointer font-space-grotesk flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    onClick={() => handleSaveOption("As New Post")}
                  >
                    <FileText className="stroke-1.5 mr-2 h-4 w-4" />
                    As New Post
                  </a>
                  <a
                    className="cursor-pointer font-space-grotesk flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    onClick={() => handleSaveOption("As Draft")}
                  >
                    <FileText className="stroke-1.5 mr-2 h-4 w-4" />
                    As Draft
                  </a>
                  <a
                    className="cursor-pointer font-space-grotesk flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    onClick={() => handleSaveOption("Export to PDF")}
                  >
                    <FileText className="stroke-1.5 mr-2 h-4 w-4" />
                    Export to PDF
                  </a>
                  <a
                    className="cursor-pointer font-space-grotesk flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    onClick={() => handleSaveOption("Export to Word")}
                  >
                    <FileText className="stroke-1.5 mr-2 h-4 w-4" />
                    Export to Word
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="intro-y mt-5 grid grid-cols-12 gap-5">
        <div className="intro-y col-span-12 lg:col-span-8">
          <input
            data-tw-merge=""
            type="text"
            placeholder="Title"
            className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 intro-y !box px-4 py-3 pr-10"
          />
          <div className="intro-y box mt-5 overflow-hidden">
            <div>
              <ul className="border-b w-full flex flex-col border-transparent bg-slate-200 dark:border-transparent dark:bg-darkmode-800 sm:flex-row">
                <li
                  id="content-tab"
                  className="focus-visible:outline-none -mb-px"
                >
                  <button
                    onClick={() => handleTabChange("content")}
                    role="tab"
                    className={`cursor-pointer appearance-none border border-transparent dark:text-slate-400 ${
                      activeTab === "content"
                        ? "dark:text-white bg-white font-medium dark:border-b-darkmode-600 text-primary border-transparent dark:bg-darkmode-600 dark:border-x-transparent dark:border-t-transparent"
                        : "hover:border-transparent hover:bg-transparent hover:text-slate-600 hover:dark:bg-transparent hover:dark:text-slate-300"
                    } rounded-t-md dark:border-transparent flex items-center justify-center w-full px-0 py-0 sm:w-40 text-slate-500`}
                  >
                    <span
                      className="tooltip font-space-grotesk cursor-pointer flex w-full items-center justify-center py-4"
                      aria-controls="content"
                      aria-selected={activeTab === "content"}
                    >
                      <FileText className="stroke-1.5 mr-2 h-4 w-4" />
                      Content
                    </span>
                  </button>
                </li>
                <li
                  id="meta-title-tab"
                  className="focus-visible:outline-none -mb-px"
                >
                  <button
                    onClick={() => handleTabChange("meta-title")}
                    role="tab"
                    className={`cursor-pointer appearance-none border border-transparent dark:text-slate-400 ${
                      activeTab === "meta-title"
                        ? "dark:text-white bg-white font-medium dark:border-b-darkmode-600 text-primary border-transparent dark:bg-darkmode-600 dark:border-x-transparent dark:border-t-transparent"
                        : "hover:border-transparent hover:bg-transparent hover:text-slate-600 hover:dark:bg-transparent hover:dark:text-slate-300"
                    } rounded-t-md dark:border-transparent flex items-center justify-center w-full px-0 py-0 sm:w-40 text-slate-500`}
                  >
                    <span
                      className="tooltip font-space-grotesk cursor-pointer flex w-full items-center justify-center py-4"
                      aria-controls="meta-title"
                      aria-selected={activeTab === "meta-title"}
                    >
                      <Code className="stroke-1.5 mr-2 h-4 w-4" />
                      Meta Title
                    </span>
                  </button>
                </li>
                <li
                  id="keywords-tab"
                  className="focus-visible:outline-none -mb-px"
                >
                  <button
                    onClick={() => handleTabChange("keywords")}
                    role="tab"
                    className={`cursor-pointer appearance-none border border-transparent dark:text-slate-400 ${
                      activeTab === "keywords"
                        ? "dark:text-white bg-white font-medium dark:border-b-darkmode-600 text-primary border-transparent dark:bg-darkmode-600 dark:border-x-transparent dark:border-t-transparent"
                        : "hover:border-transparent hover:bg-transparent hover:text-slate-600 hover:dark:bg-transparent hover:dark:text-slate-300"
                    } rounded-t-md dark:border-transparent flex items-center justify-center w-full px-0 py-0 sm:w-40 text-slate-500`}
                  >
                    <span
                      className="tooltip font-space-grotesk cursor-pointer flex w-full items-center justify-center py-4"
                      aria-controls="keywords"
                      aria-selected={activeTab === "keywords"}
                    >
                      <AlignLeft className="stroke-1.5 mr-2 h-4 w-4" />
                      Keywords
                    </span>
                  </button>
                </li>
              </ul>

              <div className="tab-content">
                {activeTab === "content" && (
                  <div
                    id="content"
                    role="tabpanel"
                    aria-labelledby="content-tab"
                    className="tab-pane active p-5"
                  >
                    <div className="rounded-md border border-slate-200/60 p-5 dark:border-darkmode-400">
                      <div className="flex items-center border-b border-slate-200/60 pb-5 font-medium dark:border-darkmode-400 font-space-grotesk">
                        <ChevronDown className="stroke-1.5 mr-2 h-4 w-4" />
                        Text Content
                      </div>
                      <div className="mt-5">
                        <div className="editor">
                          {/* <p>Content of the editor.</p> */}

                          <ReactQuill
                            value={editorContent}
                            onChange={handleEditorChange}
                            className="h-35 rounded-lg"
                            theme="snow"
                            modules={{
                              toolbar: [
                                [
                                  { header: "1" },
                                  { header: "2" },
                                  { font: [] },
                                ],
                                [{ list: "ordered" }, { list: "bullet" }],
                                ["bold", "italic", "underline"],
                                ["link", "image"],
                                ["clean"],
                              ],
                            }}
                            formats={[
                              "header",
                              "font",
                              "list",
                              "bullet",
                              "bold",
                              "italic",
                              "underline",
                              "link",
                              "image",
                            ]}
                          />
                        </div>
                        {/* <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Content Preview:</h3>
        <div
          className="border border-gray-300 p-4 rounded-lg"
          dangerouslySetInnerHTML={{ __html: editorContent }}
        ></div>
      </div>
    </div> */}
                      </div>
                    </div>
                    <div className="mt-5 rounded-md border border-slate-200/60 p-5 dark:border-darkmode-400">
                      <div className="flex items-center border-b border-slate-200/60 pb-5 font-medium dark:border-darkmode-400 font-space-grotesk">
                        <ChevronDown className="stroke-1.5 mr-2 h-4 w-4" />
                        Caption & Images
                      </div>
                      <div className="mt-5">
                        <div>
                          <label
                            htmlFor="post-form-7"
                            className="inline-block font-space-grotesk mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                          >
                            Caption
                          </label>
                          <input
                            id="post-form-7"
                            type="text"
                            placeholder="Write caption"
                            className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10"
                          />
                        </div>
                        <div className="mt-3">
                          <label className="inline-block font-space-grotesk mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                            Upload Image
                          </label>
                          <div className="rounded-md border-2 border-dashed pt-4 dark:border-darkmode-400">
                            <div className="flex flex-wrap px-4">
                              <div className="image-fit zoom-in relative mb-5 mr-5 h-24 w-24 cursor-pointer">
                                <img
                                  className="rounded-md"
                                  src={profile12}
                                  alt="image"
                                />
                                <div
                                  title="Remove this image?"
                                  className="tooltip cursor-pointer absolute right-0 top-0 -mr-2 -mt-2 flex h-5 w-5 items-center justify-center rounded-full bg-danger text-white"
                                >
                                  <X className="stroke-1.5 h-4 w-4" />
                                </div>
                              </div>
                              <div className="image-fit zoom-in relative mb-5 mr-5 h-24 w-24 cursor-pointer">
                                <img
                                  className="rounded-md"
                                  src={profile13}
                                  alt="image"
                                />
                                <div
                                  title="Remove this image?"
                                  className="tooltip cursor-pointer absolute right-0 top-0 -mr-2 -mt-2 flex h-5 w-5 items-center justify-center rounded-full bg-danger text-white"
                                >
                                  <X className="stroke-1.5 h-4 w-4" />
                                </div>
                              </div>
                              <div className="image-fit zoom-in relative mb-5 mr-5 h-24 w-24 cursor-pointer">
                                <img
                                  className="rounded-md"
                                  src={profile10}
                                  alt="image"
                                />
                                <div
                                  title="Remove this image?"
                                  className="tooltip cursor-pointer absolute right-0 top-0 -mr-2 -mt-2 flex h-5 w-5 items-center justify-center rounded-full bg-danger text-white"
                                >
                                  <X className="stroke-1.5 h-4 w-4" />
                                </div>
                              </div>
                              <div className="image-fit zoom-in relative mb-5 mr-5 h-24 w-24 cursor-pointer">
                                <img
                                  className="rounded-md"
                                  src={profile12}
                                  alt="image"
                                />
                                <div
                                  title="Remove this image?"
                                  className="tooltip cursor-pointer absolute right-0 top-0 -mr-2 -mt-2 flex h-5 w-5 items-center justify-center rounded-full bg-danger text-white"
                                >
                                  <X className="stroke-1.5 h-4 w-4" />
                                </div>
                              </div>
                            </div>
                            <div className="relative flex cursor-pointer items-center px-4 pb-4">
                              <Image className="stroke-1.5 mr-2 h-4 w-4" />
                              <span className="mr-1 text-primary font-space-grotesk">
                                Upload a file
                              </span>
                              or drag and drop
                              <input
                                type="file"
                                className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 absolute left-0 top-0 h-full opacity-0"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "meta-title" && (
                  <div
                    id="meta-title"
                    role="tabpanel"
                    aria-labelledby="meta-title-tab"
                    className="tab-pane active p-5"
                  >
                    <h1 className="font-space-grotesk">Meta Title Content</h1>
                    {/* Add your Meta Title content here */}
                  </div>
                )}
                {activeTab === "keywords" && (
                  <div
                    id="keywords"
                    role="tabpanel"
                    aria-labelledby="keywords-tab"
                    className="tab-pane active p-5"
                  >
                    <h1 className="font-space-grotesk">Keywords Content</h1>
                    {/* Add your Keywords content here */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="intro-y box p-5">
            <div>
              <label className="inline-block font-space-grotesk mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right">
                Written By
              </label>
              <div className="dropdown relative w-full">
                <button
                  onClick={toggleImageDropdown}
                  aria-expanded={dropdownVisible}
                  className="transition duration-200 border shadow-sm items-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 flex w-full justify-start dark:border-darkmode-800 dark:bg-darkmode-800"
                >
                  <div className="image-fit mr-3 h-6 w-6">
                    <img
                      className="rounded"
                      src={selectedProfile.image}
                      alt="image"
                    />
                  </div>
                  <div className="truncate">{selectedProfile.name}</div>
                  <ChevronDown className="stroke-1.5 ml-auto h-4 w-4" />
                </button>
                {dropdownVisible && (
                  <div className="dropdown-menu absolute z-[9999] mt-1 w-full">
                    <div className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600">
                      {profiles.map((profile) => (
                        <a
                          key={profile.name}
                          onClick={() => selectProfile(profile)}
                          className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                        >
                          <div className="image-fit mr-3 h-6 w-6">
                            <img
                              className="rounded "
                              src={profile.image}
                              alt="image"
                            />
                          </div>
                          <div className="ml-8 pl-1 font-space-grotesk">{profile.name}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-3">
              <label
                data-tw-merge=""
                for="post-form-2"
                className="inline-block font-space-grotesk mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
              >
                Post Date
              </label>

              <div>
                <DatePicker
                  style={{ width: "100%" }}
                  id="date-range"
                  selected={startDate}
                  onChange={handleDateChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10"
                  dateFormat="MMMM d, yyyy"
                />
              </div>
            </div>
            <div className="mt-3">
              <label
                data-tw-merge=""
                for="post-form-3"
                className="inline-block font-space-grotesk mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
              >
                Categories
              </label>
              <Select
                id="tag-select"
                options={options}
                isMulti
                onChange={handleChange}
                classNamePrefix="tag-select"
                className="w-full"
              />
            </div>
            <div className="mt-3">
              <label
                data-tw-merge=""
                for="post-form-4"
                className="inline-block font-space-grotesk mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
              >
                Tags
              </label>
              <Select
                id="tag-select-actors"
                options={options1}
                isMulti
                defaultValue={initialSelectedOptions}
                onChange={handleTagChange}
                classNamePrefix="tag-select"
                className="w-full"
              />
            </div>
            <div data-tw-merge="" className="flex mt-3 flex-col items-start">
              <label
                data-tw-merge=""
                for="post-form-5"
                className="cursor-pointer mb-2 ml-0 font-space-grotesk"
              >
                Published
              </label>
              <input
                data-tw-merge=""
                type="checkbox"
                className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 w-[38px] h-[24px] p-px rounded-full relative before:w-[20px] before:h-[20px] before:shadow-[1px_1px_3px_rgba(0,0,0,0.25)] before:transition-[margin-left] before:duration-200 before:ease-in-out before:absolute before:inset-y-0 before:my-auto before:rounded-full before:dark:bg-darkmode-600 checked:bg-primary checked:border-primary checked:bg-none before:checked:ml-[14px] before:checked:bg-white"
                id="post-form-5"
              />
            </div>
            <div data-tw-merge="" className="flex mt-3 flex-col items-start">
              <label
                data-tw-merge=""
                for="post-form-6"
                className="cursor-pointer mb-2 ml-0 font-space-grotesk"
              >
                Show Author Name
              </label>
              <input
                data-tw-merge=""
                type="checkbox"
                className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 w-[38px] h-[24px] p-px rounded-full relative before:w-[20px] before:h-[20px] before:shadow-[1px_1px_3px_rgba(0,0,0,0.25)] before:transition-[margin-left] before:duration-200 before:ease-in-out before:absolute before:inset-y-0 before:my-auto before:rounded-full before:dark:bg-darkmode-600 checked:bg-primary checked:border-primary checked:bg-none before:checked:ml-[14px] before:checked:bg-white"
                id="post-form-6"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPage;
