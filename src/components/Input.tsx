import SearchIcon from "../assets/mobile/Search.svg";
import PopupIcon from "../assets/mobile/Popup.svg";
import DesktopSearchIcon from "../assets/mobile/DesktopSearch.svg";
import LocationIcon from "../assets/mobile/Location.svg";

const Input = () => {
  return (
    <div className="px-6 rounded -mt-6 md:w-[850px] lg:w-[1110px] md:mx-auto lg:flex lg:justify-center">
      <div className="bg-White flex justify-between items-center pr-4 rounded">
        <div className="flex flex-row items-center pl-6">
          <img
            src={DesktopSearchIcon}
            alt="DesktopSearchIcon"
            className="hidden md:flex"
          />
          <input
            type="text"
            placeholder="Filter by title…"
            className="flex pl-6 md:pl-4 py-4  focus:outline-none rounded"
          />
          <div className="md:flex hidden">
            <div className="w-[1px] h-[60px] bg-[#113769] hidden md:flex"></div>
            {/* Location */}
            <div className="pl-6 flex flex-row">
              <img src={LocationIcon} alt="LocationIcon" />
              <input
                type="text"
                placeholder="Filter by location…"
                className="flex pl-6 md:pl-4 py-4  focus:outline-none rounded"
              />
              <div className="w-[1px] h-[60px] bg-[#113769] hidden md:flex"></div>
            </div>
            {/* FullTime and Search */}
            <div className="pl-5 flex flex-row items-center gap-4">
              <div className="w-6 h-6 rounded bg-Gray"></div>
              <h3>Full Time</h3>
              <button className="py-3 px-[14px] bg-[#5964E0] ml-5 rounded-md">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-6 md:hidden">
          <img src={PopupIcon} alt="PopupIcon" />
          <img src={SearchIcon} alt="SearchIcon" />
        </div>
      </div>
    </div>
  );
};

export default Input;
