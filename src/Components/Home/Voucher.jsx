import React from 'react';
import { GiReceiveMoney } from "react-icons/gi";
import { BsBagCheck } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import {BiChevronDown} from "react-icons/bi"

const styleIcon = { textAlign: "center",marginLeft:"38px",marginTop:"20px",fontSize:"25px" }

const Voucher = () => {
    return (
        <div className="h-auto bg-white rounded-lg mt-5 p-5 shadow-lg border">
            <div className="text-center">
                <span className="text-[18px] text-[#EC7905] font-bold">Voucher Dành Cho Bạn</span>
            </div>
            <hr className="mt-3" />
            <div>
                <div className="flex mt-5 justify-start text-[#333]">
                    <div className="pl-2 w-[180px] h-[90px] bg-[#EC7905] text-white text-center rounded-md relative ">
                        <span className="w-[11px] h-[11px] absolute top-[6px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[23px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[40px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[57px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[73px] left-[-5px] bg-white rounded-full"></span>
                        <BsBagCheck style={styleIcon}></BsBagCheck>
                        <span className="text-[13px]">FOODSHOP</span>
                    </div>
                    <div className="ml-5 text-start w-full font-bold">
                        <div className="text-[16px] hidden-1-line">Giảm 8%</div>
                        <div className="text-[12px] leading-3 font-semibold">Không giới hạn giá trị</div>
                        <div className="flex items-end justify-between gap-5">
                            <button className="rounded-md w-[100px] h-[35px] mt-3 border-2 text-[14px] btn-second">
                                Dùng Ngay
                            </button>
                            <div className="text-[11px] mt-1">Điều kiện</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex mt-5 justify-start text-[#333]">
                    <div className="pl-2 w-[180px] h-[90px] bg-[#EC7905] text-white text-center justify-center rounded-md relative">
                        <span className="w-[11px] h-[11px] absolute top-[6px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[23px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[40px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[57px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[73px] left-[-5px] bg-white rounded-full"></span>
                        <GiReceiveMoney style={styleIcon}></GiReceiveMoney>
                        <span className="text-[13px]">Hoàn Xu</span>
                    </div>
                    <div className="ml-5 text-start w-full font-bold">
                        <div className="text-[16px] hidden-1-line">Hoàn 5% xu</div>
                        <div className="text-[12px] leading-3 font-semibold">Hoàn tối đa 200k xu</div>
                        <div className="flex items-end justify-between gap-5">
                            <button className="rounded-md w-[100px] h-[35px] mt-3 border-2 text-[14px] btn-second">Dùng Ngay</button>
                            <div className="text-[11px] mt-1">Điều kiện</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex mt-5 justify-start text-[#333]">
                    <div className="pl-2 w-[180px] h-[90px] bg-[#26AA99] text-white text-center justify-center rounded-md relative">
                        <span className="w-[11px] h-[11px] absolute top-[6px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[23px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[40px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[57px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[73px] left-[-5px] bg-white rounded-full"></span>
                        <FaShippingFast style={styleIcon}></FaShippingFast>
                        <span className="text-[13px]">Free Shipping</span>
                    </div>
                    <div className="ml-5 text-start w-full font-bold">
                        <div className="text-[16px] hidden-1-line">Áp dụng cho toàn sản phẩm</div>
                        <div className="text-[12px] leading-3 font-semibold">Giảm tối đa 15k</div>
                        <div className="flex items-end justify-between gap-5">
                            <button className="rounded-md w-[100px] h-[35px] mt-3 border-2 text-[14px] btn-second">Dùng Ngay</button>
                            <div className="text-[11px] mt-1">Điều kiện</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                    <span className="text-[13px] flex justify-center items-center cursor-pointer hover:text-[#EC7905]">Show more <BiChevronDown></BiChevronDown></span>
                </div>
        </div>
    );
};

export default Voucher;