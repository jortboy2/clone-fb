import React from "react";
import Headers from "./Headers";

function DefaultLayout({ children }) {
  return (
    <div>
      <Headers />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
