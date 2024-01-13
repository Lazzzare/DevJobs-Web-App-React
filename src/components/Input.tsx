import SearchIcon from "../assets/mobile/Search.svg";
import PopupIcon from "../assets/mobile/Popup.svg";
import DesktopSearchIcon from "../assets/mobile/DesktopSearch.svg";
import LocationIcon from "../assets/mobile/Location.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import dataType from "./dataTypes";

interface Props {
  setDarkMode: (e: boolean) => void;
  darkMode: boolean;
  search: string;
  setSearch: (e: string) => void;
  data: (typeof dataType)[];
}

const Input = ({ darkMode, search, setSearch }: Props) => {
  const [fullTimeCheck, setFullTimeCheck] = useState<boolean>(false);
  const [popUp, setPopUp] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 3, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="px-6 rounded -mt-6 md:w-[850px] lg:w-[1110px] md:mx-auto lg:flex lg:justify-center">
        <div
          className={`${
            darkMode ? "bg-VeryDarkBlue" : "bg-White"
          } flex justify-between items-center pr-4 rounded`}
        >
          <div className="flex flex-row items-center pl-6">
            <img
              src={DesktopSearchIcon}
              alt="DesktopSearchIcon"
              className="hidden md:flex"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Filter by title…"
              className={`flex pl-6 md:pl-4 py-4  focus:outline-none rounded ${
                darkMode ? "bg-VeryDarkBlue text-white" : "bg-White text-black"
              }`}
            />
            <div className="md:flex hidden">
              <div className="w-[1px] h-[60px] bg-[#113769] hidden md:flex"></div>
              {/* Location */}
              <div className="pl-6 flex flex-row">
                <img src={LocationIcon} alt="LocationIcon" />
                <input
                  type="text"
                  placeholder="Filter by location…"
                  className={`flex pl-6 md:pl-4 py-4  focus:outline-none rounded ${
                    darkMode
                      ? "bg-VeryDarkBlue text-white"
                      : "bg-White text-black"
                  }`}
                />
                <div className="w-[2px] h-[60px] bg-[#113769] hidden md:flex"></div>
              </div>
              {/* FullTime and Search */}
              <div className="pl-5 flex flex-row items-center gap-4">
                <div
                  onClick={() => setFullTimeCheck(!fullTimeCheck)}
                  className="flex flex-row items-center gap-2 cursor-pointer"
                >
                  <div
                    className={`w-6 h-6 rounded flex justify-center items-center text-center ${
                      fullTimeCheck ? "bg-LightViolet" : "bg-Gray"
                    }`}
                  >
                    {fullTimeCheck ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="12"
                        viewBox="0 0 15 12"
                        fill="none"
                      >
                        <path
                          d="M1 6.56948L4.57248 10.142L13.7144 1"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                    ) : null}
                  </div>
                  <h3
                    className={`font-bold leading-normal ${
                      darkMode ? "text-white" : "text-VeryDarkBlue"
                    }`}
                  >
                    Full Time
                  </h3>
                </div>
                <button className="py-3 px-[14px] bg-[#5964E0] ml-5 rounded-md text-white">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6 md:hidden">
            <img
              className="cursor-pointer"
              src={PopupIcon}
              alt="PopupIcon"
              onClick={() => setPopUp(!popUp)}
            />
            {/* PopUp */}
            {popUp ? (
              <div className="w-full h-screen absolute top-0 right-0 flex justify-center mx-auto items-center text-center bg-[rgb(0,0,0,0.47)]">
                <div className="p-6 bg-white relative">
                  <span
                    onClick={() => setPopUp(false)}
                    className="absolute top-1 right-4 cursor-pointer font-bold text-red-400 text-lg"
                  >
                    X
                  </span>
                  <div className="flex flex-row items-center gap-4 mb-6">
                    <img src={LocationIcon} alt="LocationIcon" />
                    <input
                      type="text"
                      placeholder="Filter by location…"
                      className={`focus:outline-none`}
                    />
                  </div>
                  <hr />
                  <div
                    onClick={() => setFullTimeCheck(!fullTimeCheck)}
                    className="flex flex-row items-center gap-4 mt-6 cursor-pointer"
                  >
                    <div
                      className={`w-6 h-6 rounded flex justify-center items-center text-center ${
                        fullTimeCheck ? "bg-LightViolet" : "bg-Gray"
                      }`}
                    >
                      {fullTimeCheck ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="12"
                          viewBox="0 0 15 12"
                          fill="none"
                        >
                          <path
                            d="M1 6.56948L4.57248 10.142L13.7144 1"
                            stroke="white"
                            strokeWidth="2"
                          />
                        </svg>
                      ) : null}
                    </div>
                    <h1>Full Time Only</h1>
                  </div>
                  <button className="py-3 px-12 bg-[#5964E0] w-[249px] text-white rounded-md mt-7">
                    Search
                  </button>
                </div>
              </div>
            ) : null}
            <img src={SearchIcon} alt="SearchIcon" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Input;
