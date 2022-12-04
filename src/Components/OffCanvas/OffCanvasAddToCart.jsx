import React from "react";
import { CgClose } from "react-icons/cg";
import { TiStarFullOutline } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import product1 from "../../public/image/producthome/pr1.jpg"


const OffCanvasAddToCart  = () => {
    return (
        <div className="offcanvas right-0 w-[490px]" id="OffCanvasAddToCart">
            <div className="flex items-center justify-between px-5 py-3 text-[25px] font-bold border-b-2">
                <h5 className="">Thêm Vào Giỏ Hàng</h5>
                <button className="" data-bs-dismiss="offcanvas"><CgClose></CgClose></button>
            </div>
            <div className="flex-grow p-5 overflow-y-auto">
                <div className="flex items-start gap-5 justify-start">
                    <div><img src={product1} alt="" className="w-[100px] rounded-md"/></div>
                    <div>
                        <span className="text-[20px] font-bold">Gà Nướng Lu Rất Ngon</span><br/>
                        <span className="price text-[15px] font-bold">109.000₫</span>
                    </div>
                </div>
                <form className="mt-5 text-[14px] font-bold">
                    <span className="text-[18px] font-bold">Size</span><br/>
                    <label className="flex items-center gap-2 cursor-pointer w-full" for="sizem">
                        <input type="radio" name="radio" id="sizem" className="inputradio"/>
                        <span className="da">M</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer" for="sizel">
                        <input type="radio" name="radio" id="sizel" className="inputradio"/>
                        <span className="da">L + 8.000₫</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer" for="sizexl">
                        <input type="radio" name="radio"id="sizexl" className="inputradio"/>
                        <span className="da">XL + 15.000₫</span>
                    </label>
                </form>
                <form className="mt-5 text-[14px] font-bold">
                    <span className="text-[18px] font-bold">Topping</span><br/>
                    <label className="flex items-center gap-2 cursor-pointer" for="tranchauden">
                        <input type="checkbox" name="radio" id="tranchauden" className="inputradio"/>
                        <span className="topping">Trân Châu Đen + 6.000₫</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer" for="tranchautrang">
                        <input type="checkbox" name="radio" id="tranchautrang" className="inputradio"/>
                        <span className="topping">Trân Châu Trắng + 7.000₫</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer" for="tranchauhoangkim">
                        <input type="checkbox" name="radio"id="tranchauhoangkim" className="inputradio"/>
                        <span className="topping">Trân Châu Hoàng Kim + 7.000₫</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer" for="nhadam">
                        <input type="checkbox" name="radio"id="nhadam" className="inputradio"/>
                        <span className="topping">Nha Đam + 8.000₫</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer" for="kemcheese">
                        <input type="checkbox" name="radio"id="kemcheese" className="inputradio"/>
                        <span className="topping">Kem Cheese + 10.000₫</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer" for="kemtrung">
                        <input type="checkbox" name="radio"id="kemtrung" className="inputradio"/>
                        <span className="topping">Kem Trứng Brulee + 10.000₫</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer" for="vunduanuong">
                        <input type="checkbox" name="radio"id="vunduanuong" className="inputradio"/>
                        <span className="topping">Vụn Dừa Nướng + 6.000₫</span>
                    </label>
                </form>
                <form className="mt-5 text-[14px] font-bold">
                    <span className="text-[18px] font-bold">Đá</span><br/>
                    <label className="flex items-center gap-2 cursor-pointer" for="da100">
                        <input type="radio" name="radio" id="da100" className="inputradio"/>
                        <span className="da">100% Đá</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer" for="da75">
                        <input type="radio" name="radio" id="da75" className="inputradio"/>
                        <span className="da">75% Đá</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer" for="da50">
                        <input type="radio" name="radio"id="da50" className="inputradio"/>
                        <span className="da">50% Đá</span>
                    </label>
                </form>
                <form className="mt-5 text-[14px] font-bold">
                    <span className="text-[18px] font-bold">Đường</span><br/>
                    <label className="flex items-center gap-2 cursor-pointer" for="duong100">
                        <input type="radio" name="radio" id="duong100" className="inputradio"/>
                        <span className="da">100% Đường</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer" for="duong75">
                        <input type="radio" name="radio" id="duong75" className="inputradio"/>
                        <span className="da">75% Đường</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer" for="duong50">
                        <input type="radio" name="radio"id="duong50" className="inputradio"/>
                        <span className="da">50% Đường</span>
                    </label>
                </form>
                
                <div className="mt-5">
                    <span className="text-[18px] font-bold">Ghi Chú</span><span className="ml-2 text-[12px]">Không bắt buộc</span><br/>
                    <textarea className="text-[14px] w-full h-[80px] border-2 outline-0 rounded-md border-[#808080] py-2 mt-2 px-3" placeholder="Ví dụ : Không cho hành"/>
                </div>
                <div className="border-t-2 mt-5 py-2">
                    <span className="text-[18px] font-bold">Đánh Giá</span><br/>
                    <div className="w-full h-auto overflow-hidden mt-7">
                        <div className="flex items-start gap-3">
                            <div><img src={product1} alt="" className="w-[40px] rounded-full"/></div>
                            <div className="text-[#333]">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-[15px]">Lê Hoàng Tuấn</span>
                                    <button><BsThreeDotsVertical></BsThreeDotsVertical></button>
                                </div>
                                <div className="flex text-[12px] text-[#F19457]">
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                </div>
                                <p className="text-[13px] font-semibold mt-2">Gà Ngon lắm luôn ó, nước chấm va vừa văn , giao hàng nhanh</p>
                                <img src={product1} alt="" className="w-[80px] mt-1 rounded-md" />
                                <span className="font-semibold text-[13px]">25-09-2001 11:05</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto overflow-hidden mt-7">
                        <div className="flex items-start gap-3">
                            <div><img src={product1} alt="" className="w-[40px] rounded-full"/></div>
                            <div className="text-[#333]">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-[15px]">Lê Hoàng Tuấn</span>
                                    <button><BsThreeDotsVertical></BsThreeDotsVertical></button>
                                </div>
                                <div className="flex text-[12px] text-[#F19457]">
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                </div>
                                <p className="text-[13px] font-semibold mt-2">Gà Ngon lắm luôn ó, nước chấm pha vừa văn , giao hàng nhanh</p>
                                <img src={product1} alt="" className="w-[80px] mt-1 rounded-md" />
                                <span className="font-semibold text-[13px]">25-09-2001 11:05</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto overflow-hidden mt-7">
                        <div className="flex items-start gap-3">
                            <div><img src={product1} alt="" className="w-[40px] rounded-full"/></div>
                            <div className="text-[#333]">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-[15px]">Lê Hoàng Tuấn</span>
                                    <button><BsThreeDotsVertical></BsThreeDotsVertical></button>
                                </div>
                                <div className="flex text-[12px] text-[#F19457]">
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                </div>
                                <p className="text-[13px] font-semibold mt-2">Gà Ngon lắm luôn ó, nước chấm va vừa văn , giao hàng nhanh</p>
                                <img src={product1} alt="" className="w-[80px] mt-1 rounded-md" />
                                <span className="font-semibold text-[13px]">25-09-2001 11:05</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow-[20px_20px_20px_5px_rgba(0,0,0,0.8)] flex items-center justify-between px-5 py-3 text-[20px] font-bold border-t-2">
                <div className="flex items-center">
                    <button className="text-[#fff] bg-[#F19457] w-7 h-7 btn-primary rounded-md"><TiMinus></TiMinus></button>
                    <input type="text" className="w-[50px] bg-transparent text-center"  disabled value="1"/>
                    <button className="text-[#fff] bg-[#EC7905] w-7 h-7 btn-primary rounded-md"><TiPlus></TiPlus></button>
                </div>
                <div>
                    <button className="text-[15px] px-3 rounded-lg h-[50px] btn-primary">Thêm Giỏ Hàng - 109.000₫</button>
                </div>
            </div>
        </div>
    );
};
export default OffCanvasAddToCart;