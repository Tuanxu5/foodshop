import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi2';
import { IoFastFoodOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineComment } from "react-icons/ai";
import { HiOutlineClock } from "react-icons/hi";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import OffCanvasCart from "../OffCanvas/OffCanvasCart.jsx"

const styleIcon = { display: "flex", justifyContent: "center", width: "100%", fontSize: "23px" };
const textMenu = { fontSize: "13px", fontWeight: "700" }

const ListMenuItems = () => {
    return (
        <div className="pt-[95px]">
            <ul className="text-center px-6">
                <Link to="/"><li className="text-center w-full bg-[#FEF0E1] py-2 rounded-xl text-[#EC7905] cursor-pointer">
                    <HiOutlineHome style={styleIcon} />
                    <span style={textMenu}>Home</span>
                </li></Link>
                <Link to="/detailproduct">
                    <li className="mt-2 text-[#808080] cursor-pointer hover:text-[#EC7905] hover:bg-[#FEF0E1] hover:rounded-xl py-2">
                        <IoFastFoodOutline style={styleIcon} />
                        <span style={textMenu}>Menu</span>
                    </li>
                </Link>
                <li className="mt-2 text-[#808080] cursor-pointer hover:text-[#EC7905] hover:bg-[#FEF0E1] hover:rounded-xl py-2" data-bs-toggle="offcanvas" data-bs-target="#OffCanvasCart" aria-controls="OffCanvasCart">
                    <FiShoppingCart style={styleIcon} />
                    <span style={textMenu}>Giỏ Hàng</span>

                </li>

                <li className="mt-2 text-[#808080] cursor-pointer hover:text-[#EC7905] hover:bg-[#FEF0E1] hover:rounded-xl py-2">
                    <HiOutlineClock style={styleIcon} />
                    <span style={textMenu}>History</span>
                </li>
                <li className="mt-2 text-[#808080] cursor-pointer hover:text-[#EC7905] hover:bg-[#FEF0E1] hover:rounded-xl py-2">
                    <AiOutlineComment style={styleIcon} />
                    <span style={textMenu}>Report</span>
                </li>
                <li className="mt-2 text-[#808080] cursor-pointer hover:text-[#EC7905] hover:bg-[#FEF0E1] hover:rounded-xl py-2">
                    <HiOutlineBellAlert style={styleIcon} />
                    <span style={textMenu}>Alert</span>
                </li>
                <li className="mt-2 text-[#808080] cursor-pointer hover:text-[#EC7905] hover:bg-[#FEF0E1] hover:rounded-xl py-2">
                    <IoSettingsOutline style={styleIcon} />
                    <span style={textMenu}>Settings</span>
                </li>
            </ul>
            <div className="mt-11 text-[#808080] cursor-pointer text-center">
                <span className="text-[11px]">© 2022 foodshop</span>
                <div className="flex mx-8 mt-2">
                    <FaFacebookSquare style={styleIcon} />
                    <FaInstagramSquare style={styleIcon} />
                </div>
            </div>
        </div>
    );
};
export default ListMenuItems;