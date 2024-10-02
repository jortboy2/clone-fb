import React from "react";
import Headers from "./Headers";
import SideBar from "./Sidebar";
import MessageBar from "./Message";

function DefaultLayout({ children }) {
  return (
    <div>
      <Headers />
      {/* <div className="w-full h-12"></div> */}
      <div className="w-full">
        <div className="w-full flex gap-5">
        <SideBar />
          <div className="w-full h-full">{children}</div>
        <MessageBar />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
