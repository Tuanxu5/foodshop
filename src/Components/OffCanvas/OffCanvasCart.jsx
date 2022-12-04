import React from "react";
import { CgClose } from "react-icons/cg";
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import product1 from "../../public/image/producthome/pr1.jpg"
import product2 from "../../public/image/producthome/pr2.jpg"
import product3 from "../../public/image/producthome/pr3.jpg"
import { HiOutlineClock } from "react-icons/hi";
import { Link } from "react-router-dom";


const OffCanvasCart  = () => {
    return (
        <div className="offcanvas right-0 w-[490px]" id="OffCanvasCart">
            <div className="flex items-center justify-between px-5 py-3 text-[25px] font-bold border-b-2">
                <h5 className="">Giỏ Hàng</h5>
                <button className="" data-bs-dismiss="offcanvas"><CgClose></CgClose></button>
            </div>
            <div className="flex-grow px-5 pt-2 pb-5 overflow-y-auto">
                <div className="text-center">
                    <span className="text-[21px] font-bold">Chick Garden Mart - Ngọc Lâm</span><br/>
                    <span className="text-[14px] font-semibold flex items-center justify-center">--&nbsp;<span className="mt-[1px]"><HiOutlineClock/></span> 25 phút  •  0,5 km&nbsp;--</span>
                </div>
                <div className="flex items-center gap-5 justify-between mt-5">
                    <div className="flex gap-5 items-center">
                        <img src={product1} alt="" className="w-[80px] rounded-md" />
                        <div>
                            <span className="text-[16px] font-bold">Gà Nướng Lu Rất Ngon</span><br/>
                            <span className="price text-[14px] font-bold">109.000₫</span>
                            <div className="text-[12px] text-white font-semibold">
                                <span className="inline-block bg-white border border-[#F19457] text-[#F19457] px-1 rounded-md mr-1 mb-1">Size L</span>
                                <span className="inline-block bg-white border border-[#F19457] text-[#F19457] px-1 rounded-md mr-1 mb-1">100% Đá</span>
                                <span className="inline-block bg-white border border-[#F19457] text-[#F19457] px-1 rounded-md mr-1 mb-1">100% Đường</span>
                                <span className="inline-block bg-white border border-[#F19457] text-[#F19457] px-1 rounded-md mr-1 mb-1">Trân Châu Hoàng Kim</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center">
                            <button className="text-[#fff] bg-[#F19457] w-[22px] h-[22px] btn-primary rounded-md"><TiMinus></TiMinus></button>
                            <input type="text" className="text-[15px] font-bold w-[30px] bg-transparent text-center" disabled value="1"/>
                            <button className="text-[#fff] bg-[#EC7905] w-[22px] h-[22px] btn-primary rounded-md"><TiPlus></TiPlus></button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-5 justify-between mt-5">
                    <div className="flex gap-5 items-center">
                        <img src={product2} alt="" className="w-[80px] rounded-md" />
                        <div>
                            <span className="text-[16px] font-bold">Gà Nướng Lu Rất Ngon</span><br/>
                            <span className="price text-[14px] font-bold">109.000₫</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center">
                            <button className="text-[#fff] bg-[#F19457] w-[22px] h-[22px] btn-primary rounded-md"><TiMinus></TiMinus></button>
                            <input type="text" className="text-[15px] font-bold w-[30px] bg-transparent text-center"  disabled value="1"/>
                            <button className="text-[#fff] bg-[#EC7905] w-[22px] h-[22px] btn-primary rounded-md"><TiPlus></TiPlus></button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-5 justify-between mt-5">
                    <div className="flex gap-5 items-center">
                        <img src={product3} alt="" className="w-[80px] rounded-md" />
                        <div>
                            <span className="text-[16px] font-bold">Gà Nướng Lu Rất Ngon</span><br/>
                            <span className="price text-[14px] font-bold">109.000₫</span>
                            <div className="text-[12px] text-white font-semibold">
                                <span className="inline-block bg-white border border-[#F19457] text-[#F19457] px-1 rounded-md mr-1 mb-1">Size L</span>
                                <span className="inline-block bg-white border border-[#F19457] text-[#F19457] px-1 rounded-md mr-1 mb-1">100% Đá</span>
                                <span className="inline-block bg-white border border-[#F19457] text-[#F19457] px-1 rounded-md mr-1 mb-1">100% Đường</span>
                                <span className="inline-block bg-white border border-[#F19457] text-[#F19457] px-1 rounded-md mr-1 mb-1">Trân Châu Hoàng Kim</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center">
                            <button className="text-[#fff] bg-[#F19457] w-[22px] h-[22px] btn-primary rounded-md"><TiMinus></TiMinus></button>
                            <input type="text" className="text-[15px] font-bold w-[30px] bg-transparent text-center"  disabled value="1"/>
                            <button className="text-[#fff] bg-[#EC7905] w-[22px] h-[22px] btn-primary rounded-md"><TiPlus></TiPlus></button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-5 justify-between mt-5">
                    <div className="flex gap-5 items-center">
                        <img src={product1} alt="" className="w-[80px] rounded-md" />
                        <div>
                            <span className="text-[16px] font-bold">Gà Nướng Lu Rất Ngon</span><br/>
                            <span className="price text-[14px] font-bold">109.000₫</span>
                            <div className="text-[12px] text-white font-semibold">
                                <span className="inline-block bg-white border border-[#F19457] text-[#F19457] px-1 rounded-md mr-1 mb-1">Size L</span>
                                <span className="inline-block bg-white border border-[#F19457] text-[#F19457] px-1 rounded-md mr-1 mb-1">100% Đá</span>
                                <span className="inline-block bg-white border border-[#F19457] text-[#F19457] px-1 rounded-md mr-1 mb-1">100% Đường</span>
                                <span className="inline-block bg-white border border-[#F19457] text-[#F19457] px-1 rounded-md mr-1 mb-1">Trân Châu Hoàng Kim</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center">
                            <button className="text-[#fff] bg-[#F19457] w-[22px] h-[22px] btn-primary rounded-md"><TiMinus></TiMinus></button>
                            <input type="text" className="text-[15px] font-bold w-[30px] bg-transparent text-center"  disabled value="1"/>
                            <button className="text-[#fff] bg-[#EC7905] w-[22px] h-[22px] btn-primary rounded-md"><TiPlus></TiPlus></button>
                        </div>
                    </div>
                </div>
                <span className="mt-5 text-[12px] font-semibold inline-block leading-5">(<span className="text-[#b70e0ed9] text-[20px] align-middle">*</span>) Tổng đơn hàng đã bao gồm thuế, phí phụ và phí vận chuyển sẽ được hiển thị khi thanh toán. </span>
            </div>
            
            <div className="shadow-[20px_20px_20px_5px_rgba(0,0,0,0.8)] flex items-center justify-between px-5 py-3 text-[20px] font-bold border-t-2">
                <div className="flex items-center">
                    <span className="text-[]">Tổng : 999.000₫</span>
                </div>
                <div>
                    <Link to="/checkout"><button className="text-[15px] px-5 rounded-lg h-[50px] btn-primary" data-bs-dismiss="offcanvas">Thanh Toán Đơn Hàng</button></Link>
                </div>
            </div>
        </div>
    );
};
export default OffCanvasCart;