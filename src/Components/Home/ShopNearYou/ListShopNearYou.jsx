import React from 'react';
// import { BiChevronRight } from "react-icons/bi"
import { ShopNearYouData } from "./ShopNearYouData"
import ItemShopNearYou from "./ItemShopNearYou"

const ShopNearYou = () => {
    return (
        <div>
            {/* <div className="flex justify-between items-center mt-10">
                <span className="text-[20px]">Food Near You</span>
                <span className="flex items-center text-[14px] cursor-pointer hover:text-[#EC7905]">
                    View All
                    <button className="btn-primary rounded-full text-[15px] ml-1 p-[1px]">
                        <BiChevronRight></BiChevronRight>
                    </button>
                </span>
            </div> */}
            <div className="mt-5 grid gap-x-5 gap-y-8 grid-cols-3 relative">
                {ShopNearYouData.map(item => (
                    <ItemShopNearYou
                        image={item.image}
                        name={item.name}
                        vote={item.vote}
                        voucher={item.voucher}
                        time={item.time}
                        distance={item.distance}
                        categories={item.categories}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShopNearYou;