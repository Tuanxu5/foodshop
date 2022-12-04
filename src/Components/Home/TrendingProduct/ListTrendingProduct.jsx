import React from 'react';
import { BiChevronRight } from "react-icons/bi"
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import ItemTrendingProduct from "./ItemTrendingProduct"
import { TrendingProductData } from "./TrendingProductData"

const ListTrendingProduct = () => {
    return (
        <div>
            <div className="flex justify-between items-center mt-10">
                <span className="text-[20px]">Trending Products</span>
                <span className="flex items-center text-[14px] cursor-pointer hover:text-[#EC7905]">
                    View All
                    <button className="btn-primary rounded-full text-[15px] ml-1 p-[1px]">
                        <BiChevronRight></BiChevronRight>
                    </button>
                </span>
            </div>
            <div className="mt-16 grid gap-x-5 gap-y-10 grid-cols-4 relative">
                <button className="btn-primary absolute left-[-15px] top-[48%] z-[1] w-[25px] h-[25px] rounded-full text-[20px]">
                    <HiChevronLeft></HiChevronLeft>
                </button>
                <button className="btn-primary absolute right-[-15px] top-[48%] z-[1] w-[25px] h-[25px] rounded-full text-[20px]">
                    <HiChevronRight></HiChevronRight>
                </button>
                {TrendingProductData.map(item=>(
                    <ItemTrendingProduct
                        image={item.image}
                        name={item.name}
                        count={item.count}
                        comment={item.comment}
                        price={item.price}
                    />
                ))}
            </div>
            
        </div>
    );
};
export default ListTrendingProduct;