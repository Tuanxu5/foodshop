import React from "react";
import product1 from "../../../public/image/producthome/pr1.jpg"
import { IoCloseOutline } from "react-icons/io5";
import { Button, Popover } from 'antd';

const content = (
    <div className="font-bold text-[14px] w-[210px]">
        <div>Size : L</div>
        <div>Đá : 100%</div>
        <div>Đường : 100%</div>
        <div>
            Topping : Trân Châu Hoàng Kim, Trân Châu Đen
        </div>
    </div>
);
function CheckoutProductItem(){
    return (
        <div className="flex gap-4 items-start mt-5">
            <img src={product1} alt="" className="w-[75px] h-[75px] rounded-md"/>
            <div>
                <div className="text-[15px] font-bold mb-1">
                    <span>Gà Nướng Lu Rất Ngon</span>
                </div>
                <div className="text-[11px] text-white font-semibold">
                    <div className="text-[12px] text-white font-semibold">                                
                        <Popover content={content}>
                            <Button type="" className="w-[100px] h-[20px] btn-second text-[13px]">Xem tùy chọn</Button>
                        </Popover>
                        
                    </div>
                </div>
                <span className="flex items-center gap-1 text-[14px] font-bold">
                    <span>109.000đ</span>
                    <IoCloseOutline/>
                    <span>2</span>
                </span>
            </div>
        </div>      
    );
};
export default CheckoutProductItem;