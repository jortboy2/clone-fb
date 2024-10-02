import React from "react";
import Headers from "./Headers";
import SideBar from "./Sidebar";
import MessageBar from "./Message";

function DefaultLayout({ children }) {
  return (
    <div>
      <Headers />
      {/* <div className="w-full h-12"></div> */}
      <div className="w-full m-0 p-0">
        <div className="w-full h-full flex gap-5">
        <SideBar />
          {/* <div className="w-80 top-14 left-0 h-screen sticky max-lg:hidden bg-transparent -z-10 pointer-events-none"></div> */}
          <div className="w-full ">{children}</div>
          {/* <div className="w-80 top-14 right-0 h-screen sticky  bg-transparent -z-10 pointer-events-none"></div> */}
        <MessageBar />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
