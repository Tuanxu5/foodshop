import React from "react";
import { MdOutlineContactMail } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import ModelAddAddress from "../Composables/Modal/ModelAddAddress";

const ContactCheckout = () => {
    return (
        <div>
            <div className="items-center w-full justify-between bg-white px-5 py-4 rounded-lg shadow-lg">
                <div className="border-b w-full">
                    <span className="text-[20px] font-bold">Thông Tin Vận Chuyển</span>
                </div>
                <div className="mt-5 flex gap-6">
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030.7084253687274!2d105.77440032075049!3d21.01924462510459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454a941aee62d%3A0xf01074bd90c931dc!2zNDcgTmfDtSAxNTQgxJDGsOG7nW5nIMSQw6xuaCBUaMO0biwgTeG7uSDEkMOsbmgsIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1669341443216!5m2!1svi!2s" width="320" height="220" className="rounded-lg border"></iframe>
                    </div>
                    <div className="w-full text-[13px]">
                        <div className="text-[18px]">
                            <span className="font-bold">Chick Garden Mart - Ngọc Lâm</span>
                        </div>
                        <div>
                            <span className="font-bold">Thời gian giao hàng : </span>
                            <span className="font-[500]">20 phút (1,7km)</span>
                        </div>
                        <div className="mt-5 flex gap-5">
                            <div>
                                <span className="font-bold">Thành Phố</span><br/>
                                <select disabled className="border font-bold h-[40px] rounded-lg px-3 text-center outline-none mt-1">
                                    <option className="border rounded-lg p-2" value="" selected>--Chọn Thành Phố--</option>
                                    <option className="border rounded-lg p-2" value="" selected>Hà Nội</option>
                                </select>
                            </div>
                            <div>
                                <span className="font-bold">Quận/Huyện</span><br/>
                                <select disabled className="border font-bold h-[40px]  rounded-lg px-3 py-2 text-center outline-none mt-1">
                                    <option className="border rounded-lg p-2" value="">--Chọn Quận/Huyện--</option>
                                    <option className="border rounded-lg p-2" value="">Quận Ba Đình</option>
                                    <option className="border rounded-lg p-2" value="">Quận Bắc Từ Liêm</option>
                                    <option className="border rounded-lg p-2" value="">Quận Cầu Giấy</option>
                                    <option className="border rounded-lg p-2" value="">Quận Đống Đa</option>
                                    <option className="border rounded-lg p-2" value="">Quận Hà Đông</option>
                                    <option className="border rounded-lg p-2" value="">Quận Hai Bà Trưng</option>
                                    <option className="border rounded-lg p-2" value="">Quận Hoàn Kiếm</option>
                                    <option className="border rounded-lg p-2" value="">Quận Hoàng Mai</option>
                                    <option className="border rounded-lg p-2" value="">Quận Long Biên</option>
                                    <option className="border rounded-lg p-2" value="" selected>Quận Nam Từ Liêm</option>
                                    <option className="border rounded-lg p-2" value="">Quận Tây Hồ</option>
                                    <option className="border rounded-lg p-2" value="">Quận Thanh Xuân</option>
                                    <option className="border rounded-lg p-2" value="">Thị xã Sơn Tây</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Ba Vì</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Chương Mỹ</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Đan Phượng</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Đông Anh</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Gia Lâm</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Hoài Đức</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Mê Linh</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Mỹ Đức</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Phú Xuyên</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Phúc Thọ</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Quốc Oai</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Sóc Sơn</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Thạch Thất</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Thanh Oai</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Thanh Trì</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Thường Tín</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Ứng Hòa</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-[13px] mt-5">
                            <span className="font-bold">Địa chỉ giao hàng </span><br/>
                            <input type="text" className="mt-1 border font-[500] w-full rounded-lg h-[40px] px-2 text-[13px] outline-0 border-[#c5c5c5]" placeholder="Địa chỉ giao hàng" value="47 ngõ 154, Đình Thôn, Mỹ Đình 1" readOnly disabled/>
                        </div>
                        <div className="text-[13px] mt-5">
                            <span className="font-bold">Ghi chú cho tài xế </span><br/>
                            <textarea className="mt-1 border font-[500] w-full rounded-lg p-2 text-[13px] outline-0 border-[#888]" placeholder="Ví Dụ : Hãy đợi tôi ở sảnh"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center w-full justify-between bg-white px-5 py-4 rounded-lg mt-2 shadow-lg">
                <div className="flex items-center gap-5">
                    <span><MdOutlineContactMail/></span>
                    <span>
                        <span className="text-[14px] font-semibold flex items-center gap-2">Đăng Nhập <BsCheckLg/></span>
                        <div className="flex gap-5 text-[15px] font-bold mt-1">
                            <span>Lê Hoàng Tuấn</span>
                            <span>+86 386-426-150</span>
                        </div>
                    </span>
                </div>
                <div>
                    <span className="text-[14px] font-bold cursor-pointer hover:text-[#F19457]">Thay Đổi</span>
                </div>
            </div>
            <ModelAddAddress/>
        </div>
    );
};
export default ContactCheckout;