import React from "react";
import "./home.scss";
import avatar from "../../icon/avatar.jpg";
import { FaPlus } from "react-icons/fa6";
function Storycard(props) {
  return (
    <div className="w-full h-60 py-1 px-1 flex justify-center items-center gap-2 bg-transparent z-40 overflow-auto">
      {/* list card */}
      {/* main user card */}
      <div className="w-32 h-full bg-transparent rounded-xl flex-shrink-0 ">
        {/* ảnh người dùng đang login */}
        <div className="w-full h-44 relative">
          <img
            src={avatar}
            alt="avatar"
            className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
          />
          <div className="w-full h-full layout absolute top-0"></div>
        </div>

        {/* ảnh người dùng đang login */}
        <div className="w-full h-[calc(100%_-_176px)] relative flex items-center justify-center rounded-br-xl  rounded-bl-xl bg-[#242526]">
          <div className="w-10 h-10 bg-[#242526] rounded-full absolute top-[-24px] p-1">
            <div className="w-full h-full bg-[#0866FF] flex items-center align-middle justify-center rounded-full text-[16px] text-[#fff]">
              <FaPlus />
            </div>
          </div>
          <span className="text-[#fff] absolute bottom-3 font-semibold text-[13px]">
            Tạo tin
          </span>
        </div>
      </div>
      {/* main user card */}

      {/* friends user card */}
      <div className="w-32 h-full bg-white rounded-xl flex-shrink-0 relative cursor-pointer">
        {/* ảnh người dùng đang login */}
        <div className="w-full h-full">
          <img
            src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/435112519_2428673067327923_3166085528589869132_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGuCoxvznCh9p-pw4Er9650Aq_JU7rTkGwCr8lTutOQbFHkH2wVK9ms342skZPlPMfG445RAYW6A72e9WiTUA6X&_nc_ohc=ihH4YQY2t6wQ7kNvgH-mIZe&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=A8xJ5jhQupMnjGBgm54y-FC&oh=00_AYAdWRHsOPZsEr5BIw1b_7Yjtt4k14RaJSTZywD71F98cg&oe=670319F5"
            alt="avatar"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="w-10 h-10 absolute top-2 left-2 bg-[#0866FF] rounded-full p-1">
            <div className="w-full h-full rounded-full">
              <img
                src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/435112519_2428673067327923_3166085528589869132_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGuCoxvznCh9p-pw4Er9650Aq_JU7rTkGwCr8lTutOQbFHkH2wVK9ms342skZPlPMfG445RAYW6A72e9WiTUA6X&_nc_ohc=ihH4YQY2t6wQ7kNvgH-mIZe&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=A8xJ5jhQupMnjGBgm54y-FC&oh=00_AYAdWRHsOPZsEr5BIw1b_7Yjtt4k14RaJSTZywD71F98cg&oe=670319F5"
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-3 h-3 rounded-full bg-[#000] absolute bottom-0 p-[0.15rem] right-0">
              <div className="w-full h-full rounded-full bg-[#00A400]"></div>
            </div>
          </div>
          <div className="w-full h-full absolute layout px-2 bottom-0 rounded-xl">
            <div className="w-full h-full relative">
              <span className="text-[#fff] absolute bottom-3 font-semibold text-[13px]">
                Nghị mắt hít
              </span>
            </div>
          </div>
        </div>
        {/* ảnh người dùng đang login */}
      </div>
      <div className="w-32 h-full bg-white rounded-xl flex-shrink-0 relative cursor-pointer">
        {/* ảnh người dùng đang login */}
        <div className="w-full h-full">
          <img
            src={avatar}
            alt="avatar"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="w-10 h-10 absolute top-2 left-2 bg-[#0866FF] rounded-full p-1">
            <div className="w-full h-full rounded-full">
              <img
                src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/271248016_666354864722697_3011922906744329171_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHRLtrfSaokQEhKnJmO2icco3mLMgAC7gijeYsyAALuCExVxpK_QVHZDmNVUx-__1V-8wtKe9RQ1unMv4ROEhen&_nc_ohc=0IthWsvflbQQ7kNvgHUCnH_&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=A0AVcLuCPJp309VIP9N4EGQ&oh=00_AYDhfRTUMvVU9-DPeXs2dcujk5RPYhvTSD4feYORlaeHAA&oe=6702FCBD"
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-3 h-3 rounded-full bg-[#000] absolute bottom-0 p-[0.15rem] right-0">
              <div className="w-full h-full rounded-full bg-[#00A400]"></div>
            </div>
          </div>
          <div className="w-full h-full absolute layout px-2 bottom-0 rounded-xl">
            <div className="w-full h-full relative">
              <span className="text-[#fff] absolute bottom-3 font-semibold text-[13px]">
                Vân vũ
              </span>
            </div>
          </div>
        </div>
        {/* ảnh người dùng đang login */}
      </div>
      <div className="w-32 h-full bg-white rounded-xl flex-shrink-0 relative cursor-pointer">
        {/* ảnh người dùng đang login */}
        <div className="w-full h-full">
          <img
            src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/332258329_1185557622321869_3673154378989835580_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHxELu48PikOsMDp1XGVP4IXxQ8hzHRecFfFDyHMdF5wQC2pBV4GFXULIKGvfwN4fzIbTltaINyD8Sr3lG1pw4P&_nc_ohc=RmUKplExPv0Q7kNvgFOd8Eo&_nc_ht=scontent.fsgn5-5.fna&oh=00_AYBhbwzet6ZZjlzOXPlC09Jkg2jAz-cWf2SvwBe6mt7vrA&oe=67033314"
            alt="avatar"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="w-10 h-10 absolute top-2 left-2 bg-[#0866FF] rounded-full p-1">
            <div className="w-full h-full rounded-full">
              <img
                src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/332258329_1185557622321869_3673154378989835580_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHxELu48PikOsMDp1XGVP4IXxQ8hzHRecFfFDyHMdF5wQC2pBV4GFXULIKGvfwN4fzIbTltaINyD8Sr3lG1pw4P&_nc_ohc=RmUKplExPv0Q7kNvgFOd8Eo&_nc_ht=scontent.fsgn5-5.fna&oh=00_AYBhbwzet6ZZjlzOXPlC09Jkg2jAz-cWf2SvwBe6mt7vrA&oe=67033314"
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-3 h-3 rounded-full bg-[#000] absolute bottom-0 p-[0.15rem] right-0">
              <div className="w-full h-full rounded-full bg-[#00A400]"></div>
            </div>
          </div>
          <div className="w-full h-full absolute layout px-2 bottom-0 rounded-xl">
            <div className="w-full h-full relative">
              <span className="text-[#fff] absolute bottom-3 font-semibold text-[13px] two-lines">
                Nguyễn Anh Tuấn 
              </span>
            </div>
          </div>
        </div>
        {/* ảnh người dùng đang login */}
      </div>
      {/* friends user card */}
      {/* list card */}
    </div>
  );
}

export default Storycard;
