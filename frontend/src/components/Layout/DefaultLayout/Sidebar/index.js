import React, { useEffect, useRef, useState } from "react";
import avatar from "../../../../icon/avatar.jpg";
import "./sidebar.scss";
import { FaChevronDown } from "react-icons/fa";
function SideBar(props) {
  const sidebarRef = useRef(null); // Tạo tham chiếu đến thanh sidebar
  const [scrollPosition, setScrollPosition] = useState(0); // Lưu vị trí cuộn

  // Hàm lưu vị trí cuộn khi hover
  const handleMouseEnter = () => {
    if (sidebarRef.current) {
      setScrollPosition(sidebarRef.current.scrollLeft); // Lưu vị trí cuộn ngang
      sidebarRef.current.style.overflow = "auto"; // Thay đổi overflow thành auto
    }
  };

  // Khôi phục vị trí cuộn khi không hover
  const handleMouseLeave = () => {
    if (sidebarRef.current) {
      sidebarRef.current.scrollLeft = scrollPosition; // Khôi phục vị trí cuộn
      sidebarRef.current.style.overflow = "hidden"; // Đặt lại overflow
    }
  };
  useEffect(() =>{
    console.log(scrollPosition)
  }, [scrollPosition])
  return (
    <div
      className="w-80 bg-transparent text-[#fff] p-3 sidebar sticky left-0 top-14 z-10 max-lg:hidden"
      onMouseEnter={handleMouseEnter} // Bắt sự kiện hover vào
      onMouseLeave={handleMouseLeave} // Bắt sự kiện hover ra
      ref={sidebarRef} // Tham chiếu sidebar
    >
      <div className="w-full border-solid border-b border-[#f3f4f5]/30">
        <div className="list-none py-2">
          <li className="py-[6px] px-2 flex items-center gap-3 hover:bg-[#fff]/10 hover:rounded-lg">
            <div className="w-9 h-9 rounded-full">
              <img
                src={avatar}
                alt="avatar"
                className="w-full h-full rounded-full object-cover object-center"
              />
            </div>
            <span className="font-semibold text-[14px]">Thanh Phong</span>
          </li>
          <li className="py-[6px] px-2 flex items-center gap-3 hover:bg-[#fff]/10 hover:rounded-lg">
            <i
              style={{
                backgroundImage:
                  "url('https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/-GSeaf19sqF.png?_nc_eui2=AeFs8BJVC7zERcdCWGCm7sRN5qOts__qrZ3mo62z_-qtnavY1wD1EuQygyH208CUs6CqvWKVzQOU5hatQcdtGtUL')",
                backgroundPosition: "0 -333px",
                backgroundSize: "auto",
                width: "36px",
                height: "36px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            <span className="font-semibold text-[14px]">Bạn bè</span>
          </li>
          <li className="py-[6px] px-2 flex items-center gap-3 hover:bg-[#fff]/10 hover:rounded-lg">
            <i
              style={{
                backgroundImage:
                  "url('https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/-GSeaf19sqF.png?_nc_eui2=AeFs8BJVC7zERcdCWGCm7sRN5qOts__qrZ3mo62z_-qtnavY1wD1EuQygyH208CUs6CqvWKVzQOU5hatQcdtGtUL')",
                backgroundPosition: "0 -555px",
                backgroundSize: "auto",
                width: "36px",
                height: "36px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            <span className="font-semibold text-[14px]">Video</span>
          </li>
          <li className="py-[6px] px-2 flex items-center gap-3 hover:bg-[#fff]/10 hover:rounded-lg">
            <i
              style={{
                backgroundImage:
                  "url('https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/-GSeaf19sqF.png?_nc_eui2=AeFs8BJVC7zERcdCWGCm7sRN5qOts__qrZ3mo62z_-qtnavY1wD1EuQygyH208CUs6CqvWKVzQOU5hatQcdtGtUL')",
                backgroundPosition: "0 -37px",
                backgroundSize: "auto",
                width: "36px",
                height: "36px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            <span className="font-semibold text-[14px]">Nhóm</span>
          </li>
          <li className="py-[6px] px-2 flex items-center gap-3 hover:bg-[#fff]/10 hover:rounded-lg">
            <i
              style={{
                backgroundImage:
                  "url('https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/-GSeaf19sqF.png?_nc_eui2=AeFs8BJVC7zERcdCWGCm7sRN5qOts__qrZ3mo62z_-qtnavY1wD1EuQygyH208CUs6CqvWKVzQOU5hatQcdtGtUL')",
                backgroundPosition: "0 -481px",
                backgroundSize: "auto",
                width: "36px",
                height: "36px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            <span className="font-semibold text-[14px]">Kỷ niệm</span>
          </li>
          <li className="py-[6px] px-2 flex items-center gap-3 hover:bg-[#fff]/10 hover:rounded-lg">
            <i
              style={{
                backgroundImage:
                  "url('https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/-GSeaf19sqF.png?_nc_eui2=AeFs8BJVC7zERcdCWGCm7sRN5qOts__qrZ3mo62z_-qtnavY1wD1EuQygyH208CUs6CqvWKVzQOU5hatQcdtGtUL')",
                backgroundPosition: "0 -185px",
                backgroundSize: "auto",
                width: "36px",
                height: "36px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            <span className="font-semibold text-[14px]">Đã lưu</span>
          </li>
          <li className="py-[6px] px-2 flex items-center gap-3 hover:bg-[#fff]/10 hover:rounded-lg">
            <div className="w-9 h-9 bg-[#3A3B3C] rounded-full flex justify-center items-center text-[#fff]/60">
              <FaChevronDown />
            </div>
            <span className="font-semibold text-[14px]">Xem thêm</span>
          </li>
        </div>
      </div>
      {/* start  Shortcut*/}
      <div className="w-full my-2  bg-transparent ">
        <span className="px-2 text-[#B0B3B8] font-medium">Lối tắt của bạn</span>
        <div className="my-2 px-2 py-[6px] list-none ">
          <li className="py-[6px] flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg">
              <img
                src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.2081-6/115803868_1632927190200218_7726110434222976102_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=101&ccb=1-7&_nc_sid=ed3f67&_nc_eui2=AeHVm9mHZ9zoWG9evU3gVpcUorp2vdDVCWSiuna90NUJZIFPW264782poh0AIYt3pj30BL4MX2fCuWnr34Z4BUOd&_nc_ohc=Vsr8GQoXHZMQ7kNvgGzDs3D&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=AGw7wllUY6Wu0uw5kwYlDmo&oh=00_AYAZE70dndQHr_RWvQ8g2xV9afxmtStxqbFJvE9uCPIAAA&oe=6700A558"
                alt="icon"
                className="w-full h-wull rounded-lg object-cover"
              />
            </div>
            <span className="font-semibold text-[14px]">Cờ Caro</span>
          </li>
          <li className="py-[6px] flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg">
              <img
                src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/271248016_666354864722697_3011922906744329171_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHRLtrfSaokQEhKnJmO2icco3mLMgAC7gijeYsyAALuCExVxpK_QVHZDmNVUx-__1V-8wtKe9RQ1unMv4ROEhen&_nc_ohc=JaXnDLX_zPIQ7kNvgE7EIFk&_nc_ht=scontent-hkg4-1.xx&_nc_gid=AUOqp8V40GwCg8ydv2WOHn9&oh=00_AYCIyG3PNtM5v9T_KsONoNoDu-uewc4eoGKF5DZHHahOSQ&oe=670091FD"
                alt="icon"
                className="w-full h-wull rounded-lg object-cover"
              />
            </div>
            <span className="font-semibold text-[14px]">Vân vũ</span>
          </li>
          <li className="py-[6px] flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg">
              <img
                src="https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/435112519_2428673067327923_3166085528589869132_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGuCoxvznCh9p-pw4Er9650Aq_JU7rTkGwCr8lTutOQbFHkH2wVK9ms342skZPlPMfG445RAYW6A72e9WiTUA6X&_nc_ohc=dccy7w3rTJAQ7kNvgHGHTNY&_nc_ht=scontent-hkg1-2.xx&oh=00_AYCj5kip1LrRCX7quV-r3rGAjTk9ewfp9_17XbIM0g-bIw&oe=6700AF35"
                alt="icon"
                className="w-full h-wull rounded-lg object-cover"
              />
            </div>
            <span className="font-semibold text-[14px]">
              Nghị Mắt Hít ( 6 mắt )
            </span>
          </li>
          <li className="py-[6px] flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg">
              <img
                src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/332258329_1185557622321869_3673154378989835580_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHxELu48PikOsMDp1XGVP4IXxQ8hzHRecFfFDyHMdF5wQC2pBV4GFXULIKGvfwN4fzIbTltaINyD8Sr3lG1pw4P&_nc_ohc=RmUKplExPv0Q7kNvgF_cfBi&_nc_ht=scontent-hkg4-1.xx&_nc_gid=AFgWC6223i4fGU_zWDH0-Zf&oh=00_AYCot6plflssb9U_K5aBzueWYjPuNJmJTxF4XWJPdsEtEQ&oe=67009014"
                alt="icon"
                className="w-full h-wull rounded-lg object-cover"
              />
            </div>
            <span className="font-semibold text-[14px]">
              Nguyễn Tuấn ( 4 mắt )
            </span>
          </li>
          <li className="py-[6px] flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg">
              <img
                src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.2081-6/162926260_1625910364263414_7478372245749395343_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=105&ccb=1-7&_nc_sid=ed3f67&_nc_eui2=AeHRbafvwd1uWCggac5dEiDqRRTu-Po0CLRFFO74-jQItPFdQzlXPBj26HHWRsjPZMxbtV8tj7_NMPEgmqND2cyi&_nc_ohc=e83L5XTBvbwQ7kNvgEW91Lf&_nc_ht=scontent-hkg1-1.xx&oh=00_AYCvjqNqn7PTWw5piIwJc12hKSd26QvlDghXwZRwEMR7wA&oe=67009CC4"
                alt="icon"
                className="w-full h-wull rounded-lg object-cover"
              />
            </div>
            <span className="font-semibold text-[14px]">Cờ Caro</span>
          </li>
          <li className="py-[6px] flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg">
              <img
                src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.2081-6/162926260_1625910364263414_7478372245749395343_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=105&ccb=1-7&_nc_sid=ed3f67&_nc_eui2=AeHRbafvwd1uWCggac5dEiDqRRTu-Po0CLRFFO74-jQItPFdQzlXPBj26HHWRsjPZMxbtV8tj7_NMPEgmqND2cyi&_nc_ohc=e83L5XTBvbwQ7kNvgEW91Lf&_nc_ht=scontent-hkg1-1.xx&oh=00_AYCvjqNqn7PTWw5piIwJc12hKSd26QvlDghXwZRwEMR7wA&oe=67009CC4"
                alt="icon"
                className="w-full h-wull rounded-lg object-cover"
              />
            </div>
            <span className="font-semibold text-[14px]">Cờ Caro</span>
          </li>
        </div>
      </div>
      {/* end  Shortcut*/}
    </div>
  );
}

export default SideBar;
