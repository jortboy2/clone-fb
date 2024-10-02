import React from "react";
import { GoHomeFill, GoSearch } from "react-icons/go";
import { FaAngleDown, FaFacebookMessenger, FaUser } from "react-icons/fa";
import { PiMonitorPlayFill } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import avatar from "../../../../icon/avatar.jpg";
import { BsGrid3X3GapFill } from "react-icons/bs";

function Headers(props) {
  return (
    <header className="w-full h-12 bg-[#262728] border-b-[1px] border-solid border-[#757575]/20 flex justify-between items-center z-20 px-4 sticky top-0">
      {/* logo */}
      <div className="flex items-center justify-center gap-2">
        <div className="w-10 h-10 flex justify-between items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
            className="w-full h-full object-cover"
            alt="facebook"
          />
        </div>
        <div className="lg:w-56 w-10 h-10 bg-[#3A3B3C] rounded-full flex items-center justify-center gap-1 px-2 text-[#fff]/60 text-[20px]">
          <GoSearch />
          <input type="text" placeholder="Tìm kiếm trên Facebook"  className="w-full h-full text-[14px] bg-transparent outline-none px-2 rounded-full max-lg:hidden"/>
        </div>
      </div>
      {/* end logo */}
      {/* start menu list */}
      <div className="h-full bg-transparent flex justify-between list-none items-center text-[26px] text-[#B0B3B8]/50">
        <li className="px-12 h-4/5 flex items-center hover:bg-[#fff]/10 hover:rounded-xl my-1 relative">
          <GoHomeFill className="text-[#0866FF]" />
          <div className="absolute right-0 bottom-0 w-full h-1 after:content-[''] after:absolute after:right-0 after:bottom-[-5px] after:w-full after:h-1 after:bg-[#0866FF]"></div>
        </li>
        <li className="px-12 h-4/5 flex items-center  hover:bg-[#fff]/10 hover:rounded-xl ">
          <FaUser />
        </li>
        <li className="px-12 h-4/5 flex items-center  hover:bg-[#fff]/10 hover:rounded-xl ">
          <PiMonitorPlayFill />
        </li>
        <li className="px-12 h-4/5 flex items-center  hover:bg-[#fff]/10 hover:rounded-xl">
          <MdGroups />
        </li>
      </div>
      {/* end menu list */}
      {/* start user info */}
      <div className="px-4 h-full list-none flex items-center justify-center gap-2 bg-sl  ate-500 text-[20px] text-[#fff] ">
        <li className="w-10 h-10 bg-[#3A3B3C] rounded-full flex items-center justify-center relative hover:bg-[#fff]/20">
        <BsGrid3X3GapFill />

          
        </li>
        <li className="w-10 h-10 bg-[#3A3B3C] rounded-full flex items-center justify-center relative hover:bg-[#fff]/20">
          <FaFacebookMessenger  />
          <div className="absolute top-[-8px] right-[-10px] bg-[red] rounded-full text-[10px] p-1 font-bold">
            99+
          </div>
        </li>
        <li className="w-10 h-10 bg-[#3A3B3C] rounded-full flex items-center justify-center text-[28px] relative hover:bg-[#fff]/20">
          <IoIosNotifications />
          <div className="absolute top-[-8px] right-[-10px] bg-[red] rounded-full text-[10px] p-1 font-bold">
            99+
          </div>
        </li>
        <li className="w-10 h-10 bg-[#3A3B3C] rounded-full relative">
          <img
            src={avatar}
            alt="avatar"
            className="w-full h-full object-center object-cover  rounded-full"
          />
          <div className="absolute bottom-0 right-0 bg-[#3A3B3C] rounded-full text-[12px] flex justify-center items-center text-[#c6ccd2]">
            <FaAngleDown />
          </div>
        </li>
      </div>
      {/* end user info */}
    </header>
  );
}

export default Headers;
