import React from 'react';
import { GiReceiveMoney } from "react-icons/gi";
const styleIcon = { textAlign: "center",marginLeft:"38px",marginTop:"20px",fontSize:"28px" }
const VoucherRefundCheckout = (props) => {
    return (
        <label
            className="flex mt-4 justify-center text-[#333] border pr-5 items-center rounded-xl shadow-md cursor-pointer" htmlFor={"Sale" + props.id}>
            <div className="pl-2 w-[180px] h-[90px] bg-[#EC7905] text-white text-center rounded-l-md rounded-r relative">
                <span className="w-[11px] h-[11px] absolute top-[6px] left-[-5px] bg-white rounded-full"></span>
                <span className="w-[11px] h-[11px] absolute top-[23px] left-[-5px] bg-white rounded-full"></span>
                <span className="w-[11px] h-[11px] absolute top-[40px] left-[-5px] bg-white rounded-full"></span>
                <span className="w-[11px] h-[11px] absolute top-[57px] left-[-5px] bg-white rounded-full"></span>
                <span className="w-[11px] h-[11px] absolute top-[73px] left-[-5px] bg-white rounded-full"></span>
                <GiReceiveMoney style={styleIcon}></GiReceiveMoney>
                <span className="text-[13px]">Hoàn Trả</span>
            </div>
            <div className="ml-5 text-start w-full text-[12px]">
                <div className="text-[15px] font-bold hidden-1-line">{ props.name }</div>
                <div>{ props.limit }</div>
                <div className="flex items-end gap-5 mt-3">
                    <span>Điều Kiện</span>
                </div>
            </div>
            <div>
                <label className="items-center gap-2 cursor-pointer"  htmlFor={"Sale" + props.id}>
                    <input type="radio" name="Sale" id={"Sale" + props.id} className="inputradio"/>
                    <span className="da w-[27px]"></span>            
                </label>
            </div>
        </label>
    );
};
export default VoucherRefundCheckout;