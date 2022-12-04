import React from "react";
import { ShopNearYouData } from "../Home/ShopNearYou/ShopNearYouData"
import ItemShopNearYou from "../Home/ShopNearYou/ItemShopNearYou"

const DetailCategories = () => {
    return (
        <div className="pl-[150px] pr-[20px] bg-[#fff] pt-[90px]">
            <div className="font-[700] text-[16px]">
                <span>Home / <span className="text-[#F19457]">Fast Food</span></span><br />
                <span className="text-[25px]"><span className="text-[#F19457]">Fast Food</span> tại Hà Nội</span><br />
            </div>
            <div className="relative w-full pb-5 grid grid-cols-4 gap-x-5 gap-y-10 mt-5">
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
export default DetailCategories;