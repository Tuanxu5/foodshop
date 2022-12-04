import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { VscEye } from "react-icons/vsc";
import { TiHeartOutline } from "react-icons/ti";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { CiSquareMore } from "react-icons/ci";
import { Popover } from 'antd';
const option = (
    <div className="font-bold text-[12px] text-black w-auto">
        <div className="flex px-2 py-1 gap-2 items-center my-1 hover:bg-[#EC7905] hover:text-white rounded-md cursor-pointer"><AiOutlineDelete />Xóa Sản Phẩm</div>
        <div className="flex px-2 py-1 gap-2 items-center my-1 hover:bg-[#EC7905] hover:text-white rounded-md cursor-pointer"><VscEye />Chi Tiết Sản Phẩm</div>
        <div className="flex px-2 py-1 gap-2 items-center my-1 hover:bg-[#EC7905] hover:text-white rounded-md cursor-pointer"><HiOutlineWrenchScrewdriver/>Cập Nhật</div>
        <div className="flex px-2 py-1 gap-2 items-center my-1 hover:bg-[#EC7905] hover:text-white rounded-md cursor-pointer"><CiSquareMore/>Xem Thêm</div>
    </div>
);
const ProductManagement = (props) => {
    return (
        <div className="bg-white w-full flex text-center py-3 rounded-md mt-[5px] shadow items-center">
            <span class="w-[5%] px-5">{ props.index }</span>
            <span class="w-[22%] text-start flex justify-start items-center gap-3">
                <img src={props.image} alt={props.name} className="w-[50px] h-[50px] rounded-md" />
                <div>
                    <span>{ props.name }</span><br />
                    <div className="flex items-center gap-3 text-[12px] text-gray-500 font-[600]">
                        <span className="flex items-center gap-1"><VscEye /> { props.view }</span>
                        <span className="flex items-center gap-1"><TiHeartOutline /> { props.love }</span>
                    </div>
                </div>
            </span>
            <span class="w-[15%]">{ props.categories }</span>
            <span class="w-[15%]">{ props.price }</span>
            <span class="w-[15%]">{props.revenue}</span>
            { (props.status) == 1 ?
                <span class="w-[15%] text-[green]">Hoạt Động</span>
                :
                <span class="w-[15%] text-red-700">Tạm Ẩn</span>
            }
            <div class="w-[13%] justify-center flex text-[20px] cursor-pointer">
                <Popover content={option}><BsThreeDots/></Popover>
            </div>
        </div>
    );
};
export default ProductManagement;