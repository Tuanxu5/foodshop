import React from 'react';
import logo from '../../public/image/logo.jpg'
import vietnam from '../../public/image/vietnam.jpg'
import light from '../../public/image/light.jpg'
import england from '../../public/image/england.jpg'
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const styleIconSeacrh = { fontSize: "22px", position: "absolute", top: "22px", color: "#808080" };
const Header = () => {
    return (
        <div className="fixed top-0 w-full h-[70px] border-b-2 bg-white shadow-md rounded-b-lg z-[100]">
            <div className="flex justify-between pl-12 pr-12 items-center h-full">
                <div className="flex">
                    <img src={logo} className="w-[28px] h-[28px] mr-2" />
                    <div className="tracking-widest font-['Quicksand',ui-sans-serif] text-[20px] font-[600]">
                        <span className="text-[#EC7905] tracking-widest">FOOD</span>SHOP
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="mr-[100px]">
                        <input type="text" placeholder="Tìm món ăn, địa chỉ..." className="text-[#808080] border border-[#b6b6b6] px-4 py-[12px] rounded-3xl w-[400px] text-[13px] outline-none z-0" />
                        <button className="ml-[-40px] z-[1] text-[red]"><AiOutlineSearch style={styleIconSeacrh}/></button>
                    </div>
                    <div className="mr-[50px]">
                        <img src={light} alt="" className="w-[30px]"/>
                    </div>
                    <div className="flex items-center mr-[50px]">
                        <div className="mr-4 text-[14px] text-[#808080]">
                            Đăng Ký
                        </div>
                        <div>
                            <button className="w-[110px] text-[14px] bg-[#fff] text-[#EC7905] h-[40px] rounded-lg border border-[#EC7905] hover:bg-[#EC7905] hover:text-[#fff]">
                            Đăng Nhập
                            </button>
                        </div>
                    </div>
                    <button className="flex items-center justify-between text-[14px]">
                        <div className="flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/5373/5373330.png" className="w-[25px]" />&nbsp;VIE
                        </div>
                        <BiChevronDown></BiChevronDown>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;