import React from "react";
// import { GiSandsOfTime } from "react-icons/gi";
// import { TbTruckReturn } from "react-icons/tb";
// import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
// import { CiDeliveryTruck } from "react-icons/ci";
import { HiQrCode } from "react-icons/hi2";
import { HiOutlineClock } from "react-icons/hi";
// import ItemOverView from "./ItemOverView";
import kh1 from "../../../../public/image/producthome/pr1.jpg"
import { Button, Popover } from 'antd';

const content = (
    <div className="font-bold text-[13px]">
    <span className="text-[18px] mb-5 inline-block">Thông Tin Khách Hàng</span><br/>
    <span>Địa Chỉ : 47 Ngõ 154, Đình Thôn, Mỹ Đình 1</span><br />
    <span>Nam Từ Liêm, Hà Nội</span><br/>
    <span>Số Điện Thoại : 0386426150</span>
  </div>
);
const OrderManagement = () => {
    return (
        <div>
            <div className="mt-5 w-full font-bold">
                <div class="w-full">
                    <div className="bg-[#EC7905] w-full flex text-center py-3 rounded-md shadow text-white">
                        <span class="w-[4%] text-center px-5">#</span>
                        <span class="w-[18%] text-start">Khách Hàng</span>
                        <span class="w-[12%] align-center">Mã Vận Đơn</span>
                        <span class="w-[12%]">Tổng Tiền</span>
                        <span class="w-[18%]">Thanh Toán</span>
                        <span class="w-[15%]">Vận Chuyển</span>
                        <span class="w-[10%]">Thời Gian Đặt</span>
                        <span class="w-[12%]">Trạng Thái</span>
                    </div>
                    <div className="bg-white w-full flex text-center py-3 rounded-md mt-[5px] shadow items-center">
                        <span class="w-[4%] text-center px-5">1</span>
                        <span class="w-[18%] text-start flex justify-start items-center gap-3">
                            <img src={kh1} alt="" className="w-10 h-10 rounded-full" />
                            <div>
                                <span className="text-[14px]">Lê Hoàng Tuấn</span><br />
                                <Popover content={content}>
                                    <Button type="" className="px-2 text-[12px] mt-1 btn-second rounded h-[20px]">
                                        Xem Thông Tin
                                    </Button>
                                </Popover>
                            </div>
                        </span>
                        <span class="w-[12%] align-middle flex items-center gap-1 justify-center"><HiQrCode/>DH25092001</span>
                        <span class="w-[12%] align-middle">516.000đ</span>
                        <span class="w-[18%] align-middle">Thanh Toán Khi Nhận Hàng</span>
                        <span class="w-[15%] align-middle">Grab</span>
                        <span class="w-[10%] align-middle">
                            <span className="flex items-center justify-center gap-1"><HiOutlineClock></HiOutlineClock>11 : 01 AM<br /></span>
                            25-09-2001
                        </span>
                        <div class="w-[12%]">
                            <button className="border-[#EC7905] border-2 text-[#EC7905] w-[110px] h-[26px] rounded-full text-[13px]">Đang Giao</button>
                        </div>
                    </div>
                    <div className="bg-white w-full flex text-center py-3 rounded-md mt-[5px] shadow items-center">
                        <span class="w-[4%] text-center px-5">2</span>
                        <span class="w-[18%] text-start flex justify-start items-center gap-3">
                            <img src={kh1} alt="" className="w-10 h-10 rounded-full" />
                            <div>
                                <span className="text-[14px]">Lê Hoàng Tuấn</span><br />
                                <Popover content={content}>
                                    <Button type="" className="px-2 text-[12px] mt-1 btn-second rounded h-[20px]">
                                        Xem Thông Tin
                                    </Button>
                                </Popover>
                            </div>
                        </span>
                        <span class="w-[12%] align-middle flex items-center gap-1 justify-center"><HiQrCode/>DH11032004</span>
                        <span class="w-[12%] align-middle">1.516.000đ</span>
                        <span class="w-[18%] align-middle">Thanh Toán Qua Ví MoMo</span>
                        <span class="w-[15%] align-middle">Grab</span>
                        <span class="w-[10%] align-middle">
                            <span className="flex items-center justify-center gap-1"><HiOutlineClock></HiOutlineClock>11 : 01 AM <br /></span>
                            25-09-2001
                        </span>
                        <div class="w-[12%]">
                            <button className="border-[#EC7905] border-2 text-[#EC7905] w-[110px] h-[26px] rounded-full text-[13px]">Đang Giao</button>
                        </div>
                    </div>
                    <div className="bg-white w-full flex text-center py-3 rounded-md mt-[5px] shadow items-center">
                        <span class="w-[4%] text-center px-5">3</span>
                        <span class="w-[18%] text-start flex justify-start items-center gap-3">
                            <img src={kh1} alt="" className="w-10 h-10 rounded-full" />
                            <div>
                                <span className="text-[14px]">Lê Hoàng Tuấn</span><br />
                                <Popover content={content}>
                                    <Button type="" className="px-2 text-[12px] mt-1 btn-second rounded h-[20px]">
                                        Xem Thông Tin
                                    </Button>
                                </Popover>
                            </div>
                        </span>
                        <span class="w-[12%] align-middle flex items-center gap-1 justify-center"><HiQrCode/>DH20112022</span>
                        <span class="w-[12%] align-middle">516.000đ</span>
                        <span class="w-[18%] align-middle">Thanh Toán Khi Nhận Hàng</span>
                        <span class="w-[15%] align-middle">Giao Hàng Nhanh</span>
                        <span class="w-[10%] align-middle">
                            <span className="flex items-center justify-center gap-1"><HiOutlineClock></HiOutlineClock>11 : 01 AM<br /></span>
                            25-09-2001
                        </span>
                        <div class="w-[12%]">
                            <button className="border-[#03e128] border-2 text-[#03e128] w-[110px] h-[26px] rounded-full text-[13px]">Hoàn Thành</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderManagement;