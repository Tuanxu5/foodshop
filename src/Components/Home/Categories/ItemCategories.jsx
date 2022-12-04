import React from 'react';
import { BiChevronRight } from "react-icons/bi"

function ItemCategories(props){
    return (
            <div className="bg-[#fff] h-[180px] px-5 py-6 text-center rounded-[20px] shadow-md cursor-pointer">
                <img src={props.image} className="w-10 h-10 ml-[50%] translate-x-[-50%]" alt={props.name}/>
                <div className="my-3 border-b-2 border-[#F19457] pb-4">
                    <span className="text-[14px] mt-2 font-[700] hidden-1-line">{props.name}</span>
                </div>
                <button className="mt-6 btn-primary rounded-full ml-[50%] translate-x-[-50%] w-5 h-5">
                    <BiChevronRight></BiChevronRight>
                </button>
            </div>
    );
};
export default ItemCategories;