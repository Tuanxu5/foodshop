import React from "react";
import Categories from "../Home/Categories/Categories"
import Company from './Company';
import FlashSale from './FlashSale';
import Voucher from "./Voucher";
import FoodShopApp from "./FoodShopApp";
import TabHome from "./TabHome.tsx";

const Home = () => {
    return (
        
        <div className="pl-[150px] pr-[20px] bg-[#FFF5EA] flex w-full items-center justify-around">
            <div className="flex w-[100vw] justify-between self-center flex-auto">
                <div className="relative w-[915px] pt-[90px]">
                    <Categories></Categories>
                    <TabHome></TabHome>
                </div>
                <div className="py-[20px] pl-5 overflow-x-hidden overscroll-y-contain top-[70px] bottom-0 w-[400px] fixed overflow-y-scroll h-auto right-0">
                    <FlashSale></FlashSale>
                    <Voucher></Voucher>
                    <FoodShopApp></FoodShopApp>
                    <Company></Company>
                </div>
            </div>
        </div>
    );
};
export default Home;