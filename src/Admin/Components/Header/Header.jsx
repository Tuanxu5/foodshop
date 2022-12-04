import React from 'react';
import logo from "../../../public/image/logo.jpg";
import avatar1 from "../../../public/image/Avatar/avatar1.jpg"
import { BsCaretDownFill } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
// import { TbSearch } from "react-icons/tb";
const Header = () => {
    return (
        <div className="fixed top-0 w-full h-[70px] border-b-2 bg-white shadow-md rounded-b-lg z-[100]">
            <div className="flex justify-between pl-10 pr-10 items-center h-full text-[14px] font-bold">
                <div className="flex items-center">
                    <img src={logo} className="w-[20px] h-[20px] mr-2" alt=""/>
                    <div className="tracking-widest text-[20px]">
                        <span className="text-[#EC7905] tracking-widest">FOOD</span>SHOP
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    {/* <button className="text-[22px] text-primary bg-[#FEF0E1] w-10 h-10 flex justify-center items-center rounded-full">
                        <TbSearch />
                    </button> */}
                    <div className="flex items-center gap-5 text-[22px]">
                        <div className="relative cursor-pointer">
                            <AiOutlineMessage />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-[#EC7905] rounded-full"></span>
                        </div>
                        <div className="relative cursor-pointer">
                            <BiBell/>
                            <span className="absolute top-0 right-0 w-2 h-2 bg-[#EC7905] rounded-full"></span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>ENG</span>
                        <BsCaretDownFill/>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={avatar1} alt="" className="w-10 h-10 rounded-full"/>
                        <span>TUAN</span>
                        <BsCaretDownFill/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;