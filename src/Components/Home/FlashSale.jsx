import React from 'react';
import { BsFillLightningFill } from "react-icons/bs"
import flashsale1 from "../../public/image/flashsale/flashsale1.jpg"
import flashsale3 from "../../public/image/flashsale/flashsale3.jpg"
import flashsale4 from "../../public/image/flashsale/flashsale4.jpg"
import flashsale5 from "../../public/image/flashsale/flashsale5.jpg"
import { IoBagAddOutline } from "react-icons/io5";
import {BiChevronDown} from "react-icons/bi"

const FlashSale = () => {
    return (
        <div className="h-auto bg-[#fff] rounded-lg p-5 shadow-lg">
            <div className="flex justify-between items-center border-b pb-3">
                <span className="flex items-center text-[#EC7905] text-[18px] font-bold">F<BsFillLightningFill></BsFillLightningFill>ash Sale</span>
                <div className="text-center text-[12px] font-bold">
                    <span className="text-center w-full">Time Left</span><br />
                    <span className="text-white">
                        <button className="w-[22px] h-[22px] bg-black rounded-md">02</button>
                        <button className="w-[22px] h-[22px] bg-black rounded-md mx-1">54</button>
                        <button className="w-[22px] h-[22px] bg-black rounded-md">36</button>
                    </span>
                </div>
            </div>
            <div className="mt-5">
                <div className="flex items-start gap-2 mt-4">
                    <img src={flashsale1} alt="" className="w-[70px] h-[70px] rounded-md shadow-xl" />
                    <div className="w-[200px]">
                        <span className="text-[14px] font-[700]">Burger Bò BBQ kiểu Mỹ</span><br/>
                        <span className="text-[12px] price">89.000₫</span>
                    </div>
                    <button className="bg-[#EC7905] p-1 rounded-md text-white mt-10"><IoBagAddOutline/></button>
                </div>
                <div className="flex items-start gap-2  mt-4">
                    <img src={flashsale3} alt="" className="w-[70px] h-[70px] rounded-md shadow-xl" />
                    <div className="w-[200px]">
                        <span className="text-[14px] font-[700]">Taco Bò BBQ kiểu Mexico</span><br/>
                        <span className="text-[12px] price">78.000₫</span>
                    </div>
                    <button className="bg-[#EC7905] p-1 rounded-md text-white mt-10"><IoBagAddOutline/></button>
                </div>
                <div className="flex items-start gap-2  mt-4">
                    <img src={flashsale4} alt="" className="w-[70px] h-[70px] rounded-md shadow-xl" />
                    <div className="w-[200px]">
                        <span className="text-[14px] font-[700]">Salad rau trộn</span><br/>
                        <span className="text-[12px] price">50.000₫</span>
                    </div>
                    <button className="bg-[#EC7905] p-1 rounded-md text-white mt-10"><IoBagAddOutline/></button>
                </div>
                <div className="flex items-start gap-2  mt-4">
                    <img src={flashsale5} alt="" className="w-[70px] h-[70px] rounded-md shadow-xl" />
                    <div className="w-[200px]">
                        <span className="text-[14px] font-[700]">Đùi gà chiên lắc phô mai</span><br/>
                        <span className="text-[12px] price">45.000₫</span>
                    </div>
                    <button className="bg-[#EC7905] p-1 rounded-md text-white mt-10"><IoBagAddOutline/></button>
                </div>
                <div className="text-center mt-4">
                    <span className="font-bold text-[13px] flex justify-center items-center cursor-pointer hover:text-[#EC7905]">Show more <BiChevronDown></BiChevronDown></span>
                </div>
            </div>
        </div>
    );
};

export default FlashSale;