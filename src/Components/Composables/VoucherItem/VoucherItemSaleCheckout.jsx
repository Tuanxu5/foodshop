import React from 'react';
import { BsBagCheck } from "react-icons/bs";

const styleIcon = { textAlign: "center", marginLeft: "38px", marginTop: "20px", fontSize: "28px" };
const VoucherItemSaleCheckout = (props) => {
    return (
        <label className="flex mt-4 justify-center text-[#333] border pr-5 items-center rounded-xl shadow-md cursor-pointer" htmlFor={ "Sale" + props.id }>
                    <div className="pl-2 w-[180px] h-[90px] bg-[#EC7905] text-white text-center rounded-l-md rounded-r relative ">
                        <span className="w-[11px] h-[11px] absolute top-[6px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[23px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[40px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[57px] left-[-5px] bg-white rounded-full"></span>
                        <span className="w-[11px] h-[11px] absolute top-[73px] left-[-5px] bg-white rounded-full"></span>
                        <BsBagCheck style={styleIcon}></BsBagCheck>
                        <span className="text-[13px]">FoodShop</span>
                    </div>
                    <div className="ml-5 text-start w-full">
                <div className="truncate text-[15px] font-bold text-ellipsis overflow-hidden">{ props.name }</div>
                <div className="text-[12px] leading-3">{ props.limit }</div>
                        <div className="flex items-end gap-5">
                            <div className="text-[11px] mt-3">Điều kiện</div>
                        </div>
                    </div>
              <div>
                <label className="items-center gap-2 cursor-pointer"  htmlFor={ "Sale" + props.id }>
                  <input type="radio" name="Sale" id={ "Sale" + props.id } className="inputradio"/>
                  <span className="da w-[27px]"></span>            
                </label>
              </div>
            </label>
    );
};
export default VoucherItemSaleCheckout;