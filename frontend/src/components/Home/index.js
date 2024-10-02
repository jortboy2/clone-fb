import React from "react";
import Storycard from "./Storycard";

function Home(props) {
  return (
    <div className="container flex justify-center items-center p-5  bg-transparent">
      <div className="w-[35em] h-full bg-transparent">
        {/*start story */}
        <Storycard />
        {/*end story */}
        <div className="h-screen"></div>
      </div>
    </div>
  );
}

export default Home;
