import React from 'react';
import { HiOutlineClock } from "react-icons/hi"
import { AiFillStar } from "react-icons/ai"
import tag from "../../../public/image/shopnearyou/tag.jpg"
import { Link } from 'react-router-dom';

const ShopNearYou = (props) => {
    return (
        <Link to="/detaiproduct">
        <div className="bg-white rounded-xl p-3 shadow-md cursor-pointer border">
            <img src={props.image} alt={props.name} className="rounded-md"/>
            <div>
                <div className="text-[18px] mt-2 font-[700] hidden-1-line">{props.name}</div>
                <div className="text-[12px] text-[#808080]">{props.categories}</div>
                <div className="flex items-center justify-between mt-3 mb-2 text-[#808080]">
                <div className="flex items-center">
                    <span className="text-[#F19457] mr-1"><AiFillStar></AiFillStar></span>
                    <span className="text-[13px] font-bold">{props.vote}</span>
                </div>
                <div className="flex items-center">
                    <HiOutlineClock></HiOutlineClock>
                    <span className="text-[12px]">&nbsp;{props.time}&nbsp; | &nbsp;{props.distance}</span>
                </div>
            </div>
        </div>
        <hr />
        <div className="flex items-center justify-start mt-2 text-[12px] text-[#F19457] font-[700]">
            <img src={tag} alt="" className="w-6 h-6" />
            <span>&nbsp;{props.voucher}</span>
        </div>
            </div>
            </Link>
    );
};
export default ShopNearYou;