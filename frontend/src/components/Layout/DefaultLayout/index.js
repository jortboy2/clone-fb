import React from "react";
import Headers from "./Headers";
import SideBar from "./Sidebar";
import MessageBar from "./Message";

function DefaultLayout({ children }) {
  return (
    <div>
      <Headers />
      <div className="w-full h-12"></div>
      <div className="container flex justify-between">
        <SideBar />
        <div className="content px-24">{children}</div>
        <MessageBar />
      </div>
    </div>
  );
}

export default DefaultLayout;
