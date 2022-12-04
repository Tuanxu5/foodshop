import React from 'react';
import BarChartDashBoard from "./BarChartDashBoard.jsx";
// import RadarChartDashBoard from './RadarChartDashBoard.jsx';
import { SlArrowDown } from "react-icons/sl";
import { HiOutlineTrendingDown, HiOutlineTrendingUp } from "react-icons/hi";
import { SlEye } from "react-icons/sl";
import { SlWallet } from "react-icons/sl";
import { SlHandbag } from "react-icons/sl";
import { BsBagCheck } from "react-icons/bs";

const styleIcon = { textAlign: "center",marginLeft:"38px",marginTop:"20px",fontSize:"25px" }

const SalesAnalysis = () => {
    return (
        <div className="mt-5 w-full font-bold text-[14px] grid grid-cols-5 gap-4">
            <div className="col-span-3 bg-white h-[380px] rounded-lg shadow p-5">
                <div className="flex justify-between text-[18px]">
                    <span>Phân Tích Bán Hàng</span>
                    <span className="cursor-pointer flex items-center gap-1 px-3 py-1    text-[12px]">
                        Hôm nay
                        <span className="text-[8px]"><SlArrowDown /></span>
                    </span>
                </div>
                <div className="flex mt-10 gap-6">
                    <BarChartDashBoard></BarChartDashBoard>
                    <div>
                        <div>
                            <span className="flex items-center gap-2"><SlEye></SlEye>Lượt Truy Cập</span>
                            <span className="text-[18px] text-[]">20</span><br/>
                            <span className="flex items-center gap-1 text-[#31ce31] text-[12px]"><HiOutlineTrendingUp></HiOutlineTrendingUp>với hôm qua 0.00%</span>
                        </div>
                        <hr className="mt-4"/>
                        <div className="mt-4">
                            <span className="flex items-center gap-2"><SlHandbag></SlHandbag>Đơn Hàng</span>
                            <span className="text-[18px]">20</span><br/>
                            <span className="flex items-center gap-1 text-[#cb2727] text-[12px]"><HiOutlineTrendingDown/>với hôm qua 0.00%</span>
                        </div>
                        <hr className="mt-4"/>
                        <div className="mt-4">
                            <span className="flex items-center gap-2"><SlWallet></SlWallet>Doanh Thu</span>
                            <span className="text-[18px]">200.000.000đ</span><br/>
                            <span className="flex items-center gap-1 text-[#31ce31] text-[12px]"><HiOutlineTrendingUp></HiOutlineTrendingUp>với hôm qua 0.00%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2 bg-white h-[380px] rounded-lg shadow p-5">
                <div className="flex justify-between text-[18px]">
                    <span>Voucher</span>
                    <span className="cursor-pointer flex items-center gap-1 px-3 py-1 text-[12px]">
                        Xem Tất Cả
                        <span className="text-[8px]"><SlArrowDown /></span>
                    </span>
                </div>
                <div className="flex mt-3 justify-start text-[#333]">
                    <div className="pl-2 w-[170px] h-[90px] bg-[#EC7905] text-white text-center rounded-md relative ">
                        <span className="w-[11px] h-[11px] absolute top-[6px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[23px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[40px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[57px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[73px] left-[-5px] bg-white rounded-full"></span>
                        <BsBagCheck style={styleIcon}></BsBagCheck>
                        <span className="text-[12px]">FOODSHOP</span>
                    </div>
                    <div className="ml-5 text-start w-full font-bold">
                        <div className="text-[16px] hidden-1-line">Giảm 10k</div>
                        <div className="text-[13px]">Mã Voucher : SF250901</div>

                        <div className="text-[12px] mt-2">
                            <button className=" text-[12px] border border-[#08cb08] text-[#08cb08] px-2 rounded-md">Đang diễn ra</button><br/>
                            <span>00:27 02/12/2022 - 01:27 02/12/2022</span>
                        </div>
                    </div>
                </div>
                <div className="flex mt-4 justify-start text-[#333]">
                    <div className="pl-2 w-[170px] h-[90px] bg-[#EC7905] text-white text-center rounded-md relative ">
                        <span className="w-[11px] h-[11px] absolute top-[6px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[23px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[40px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[57px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[73px] left-[-5px] bg-white rounded-full"></span>
                        <BsBagCheck style={styleIcon}></BsBagCheck>
                        <span className="text-[12px]">FOODSHOP</span>
                    </div>
                    <div className="ml-5 text-start w-full font-bold">
                        <div className="text-[16px] hidden-1-line">Giảm 8% </div>
                        <div className="text-[13px]">Mã Voucher : SF250901</div>
                        <div className="text-[12px] mt-2">
                            <button className="border border-[#08cb08] text-[#08cb08] px-2 rounded-md">Đang diễn ra</button><br/>
                            <span>00:27 02/12/2022 - 01:27 02/12/2022</span>
                        </div>
                    </div>
                </div>
                <div className="flex mt-4 justify-start text-[#333]">
                    <div className="pl-2 w-[170px] h-[90px] bg-[#EC7905] text-white text-center rounded-md relative ">
                        <span className="w-[11px] h-[11px] absolute top-[6px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[23px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[40px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[57px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[73px] left-[-5px] bg-white rounded-full"></span>
                        <BsBagCheck style={styleIcon}></BsBagCheck>
                        <span className="text-[12px]">FOODSHOP</span>
                    </div>
                    <div className="ml-5 text-start w-full font-bold">
                        <div className="text-[16px] hidden-1-line">Giảm 20k </div>
                        <div className="text-[13px]">Mã Voucher : SF250901</div>
                        <div className="text-[12px] mt-2">
                            <button className="border border-[#08cb08] text-[#08cb08] px-2 rounded-md">Đang diễn ra</button><br/>
                            <span>00:27 02/12/2022 - 01:27 02/12/2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesAnalysis;