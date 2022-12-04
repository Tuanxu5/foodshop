import React from "react";
import pr from "../../public/image/appdownload/qr.jpg"
const PaymentMethod = () => {
    return (
        <div className="bg-white px-5 py-4 text-[14px] font-bold mt-2 rounded-lg shadow-lg">
            <div>
                <span className="text-[18px]">Phương Thức Thanh Toán</span>
                <div>
                    <div className="mt-5">
                        <label className=" items-center gap-2 cursor-pointer" htmlFor="payment1">
                            <input type="radio" name="PaymentMethod" id="payment1" className="inputradio"/>
                            <span className="da hihi">Thanh Toán Bằng Tiền Mặt</span>
                        </label>
                    </div>
                    <div className="mt-3">
                        <label className=" items-center gap-2 cursor-pointer" htmlFor="payment2">
                            <input type="radio" name="PaymentMethod" id="payment2" className="inputradio"/>
                            <span className="da">Thanh Toán Bằng Momo</span>
                            <div className="payment-momo opacity-0 hidden">
                                <div className="flex items-center gap-[50px] ">
                                    <div className="ml-7 mt-2">
                                        <img src={pr} alt=""  className="w-[100px] border rounded-md"/>
                                        <span className="text-[11px]">* Quét để thanh toán</span>
                                    </div>
                                    <span>Hoặc</span>
                                    <div className="text-[13px]">
                                        <span>Chuyển tiền về tài khoản</span><br/>
                                        <span>Số tài khoản : 098385739</span><br/>
                                        <span>Chủ tài khoản : Phạm Thị Uyên</span><br />
                                        <span>Nội dung : CHUYENTIEN + "Mã đơn hàng"</span>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PaymentMethod;