import React from "react";
import { Tooltip } from 'antd';

const ShippingMethod = () => {
    return (
        <div className="bg-white px-5 py-4 text-[14px] font-bold mt-8 rounded-lg shadow-lg">
            <div>
                <span className="text-[18px]">Phương Thức Vận Chuyển</span>
                <div className="flex justify-between items-center mt-5">
                    <div className="">
                        <Tooltip placement="top" title="Phí vận chuyển : +22.000đ" color="#EC7905">
                            <label className="flex items-center gap-2 cursor-pointer" htmlFor="shipping1">
                                <input type="radio" name="ShippingMethod" id="shipping1" className="inputradio"/>
                                <span className="da hihi">Ninja Van</span>
                            </label>
                        </Tooltip>
                    </div>
                    <div className="">
                        <Tooltip placement="top" title="Phí vận chuyển : +20.000đ" color="#EC7905">
                            <label className="flex items-center gap-2 cursor-pointer" htmlFor="shipping2">
                                <input type="radio" name="ShippingMethod" id="shipping2" className="inputradio"/>
                                <span className="da">J&T Express</span>
                            </label>
                        </Tooltip>
                    </div>
                    <div className="">
                        <Tooltip placement="top" title="Phí vận chuyển : +18.000đ" color="#EC7905">
                            <label className="flex items-center gap-2 cursor-pointer" htmlFor="shipping3">
                                <input type="radio" name="ShippingMethod" id="shipping3" className="inputradio"/>
                                <span className="da hihi">Giao Hàng Nhanh</span>
                            </label>
                        </Tooltip>
                    </div>
                    <div className="">
                        <Tooltip placement="top" title="Phí vận chuyển : +26.000đ" color="#EC7905">
                            <label className=" items-center gap-2 cursor-pointer" htmlFor="shipping4">
                                <input type="radio" name="ShippingMethod" id="shipping4" className="inputradio"/>
                                <span className="da hi hi">Viettel Post</span>
                            </label>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ShippingMethod;