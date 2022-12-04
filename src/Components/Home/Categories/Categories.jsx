import React from 'react';
import ListCategories from "./ListCategories"
import ListProductCategories from "./ListProductCategories"
import { BiChevronRight } from "react-icons/bi"

const Categories = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <span className="text-[20px]">Menu Categories</span>
                <span className="flex items-center text-[14px] cursor-pointer hover:text-[#EC7905]">
                    <span>View All</span>
                    <button className="text-white bg-[#EC7905] rounded-full text-[15px] ml-1 p-[1px]">
                        <BiChevronRight></BiChevronRight>
                    </button>
                </span>
            </div>
            <ListCategories></ListCategories>
            <ListProductCategories></ListProductCategories>
        </div>
    );
};
export default Categories;