import React from "react";
import avatar from "../../icon/avatar.jpg";
function Home(props) {
  return (
    <div className="container flex justify-center items-center p-5 h-screen bg-transparent">
      <div className="w-[540px] h-full bg-neutral-400">
        <div className="w-full h-60 py-2 flex gap-2 bg-slate-500 overflow-auto">
          {/* list card */}
          <div className="w-32 h-full bg-white rounded-xl flex-shrink-0">
            {/* ảnh người dùng đang login */}
            <div className="w-full h-44">
              <img
                src={avatar}
                alt="avatar"
                className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
              />
            </div>
            {/* ảnh người dùng đang login */}
            <div className="w-full h-[calc(100%_-_176px)] rounded-br-xl rounded-bl-xl bg-[#242526]">
              <span className="text-[#fff]">Tạo tin</span>
            </div>
          </div>

          <div className="w-32 h-full bg-white rounded-xl flex-shrink-0">
            {/* ảnh người dùng đang login */}
            <div className="w-full h-44">
              <img
                src={avatar}
                alt="avatar"
                className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
              />
            </div>
            {/* ảnh người dùng đang login */}
            <div className="w-full h-[calc(100%_-_176px)] rounded-br-xl rounded-bl-xl bg-[#242526]">
              <span className="text-[#fff]">Tạo tin</span>
            </div>
          </div>

          <div className="w-32 h-full bg-white rounded-xl flex-shrink-0">
            {/* ảnh người dùng đang login */}
            <div className="w-full h-44">
              <img
                src={avatar}
                alt="avatar"
                className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
              />
            </div>
            {/* ảnh người dùng đang login */}
            <div className="w-full h-[calc(100%_-_176px)] rounded-br-xl rounded-bl-xl bg-[#242526]">
              <span className="text-[#fff]">Tạo tin</span>
            </div>
          </div>

          <div className="w-32 h-full bg-white rounded-xl flex-shrink-0">
            {/* ảnh người dùng đang login */}
            <div className="w-full h-44">
              <img
                src={avatar}
                alt="avatar"
                className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
              />
            </div>
            {/* ảnh người dùng đang login */}
            <div className="w-full h-[calc(100%_-_176px)] rounded-br-xl rounded-bl-xl bg-[#242526]">
              <span className="text-[#fff]">Tạo tin</span>
            </div>
          </div>
          <div className="w-32 h-full bg-white rounded-xl flex-shrink-0">
            {/* ảnh người dùng đang login */}
            <div className="w-full h-44">
              <img
                src={avatar}
                alt="avatar"
                className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
              />
            </div>
            {/* ảnh người dùng đang login */}
            <div className="w-full h-[calc(100%_-_176px)] rounded-br-xl rounded-bl-xl bg-[#242526]">
              <span className="text-[#fff]">Tạo tin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
