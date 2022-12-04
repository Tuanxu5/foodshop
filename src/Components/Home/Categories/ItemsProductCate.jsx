import React from 'react';
import { AiFillStar } from "react-icons/ai"
import { MdAdd } from "react-icons/md"

const ItemsProductCate = (props) => {
    return (
        <div className="bg-[#fff] rounded-xl h-[180px] p-3 relative shadow-md cursor-pointer  border-[#ddd]">
            <div className="text-start">
                <img src={props.image} alt="" className="w-[100px] absolute bottom-[130px] left-[50%] translate-x-[-50%]"/>
                <div className="mt-[50px]">
                    <div className="text-[15px] font-[700] truncate text-ellipsis overflow-hidden w-[100%]">
                        {props.name}
                    </div>
                    <div>
                        <span className="flex text-[13px] text-[#F19457] mt-1">
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                        </span>
                    </div>
                    <div className="flex justify-between items-center mt-8">
                        <span className="text-[#F19457] text-[14px] font-[700]">{ props.price }</span>
                        <button className="btn-primary w-5 h-5 rounded-full"><MdAdd></MdAdd></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemsProductCate;