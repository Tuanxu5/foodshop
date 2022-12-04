import React from 'react';
import appstore  from "../../public/image/appdownload/logo-appstore.svg"
import playstore from "../../public/image/appdownload/logo-playstore.svg"
import qr from "../../public/image/appdownload/qr.jpg"
const FoodShopApp = () => {
    return (
        <div className="h-auto bg-white rounded-lg mt-5 p-5 shadow-lg border">
            <div className="text-center">
                <span className="text-[18px] font-[500] text-[#EC7905]">ỨNG DỤNG FOODSHOPAPP</span>
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <img src={qr} className="w-[90px] cursor-pointer"  alt=""/>
                </div>
                <div>
                    <img src={appstore} className="w-[100px] cursor-pointer" alt=""/>
                    <img src={playstore} className="w-[100px] mt-2 cursor-pointer" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default FoodShopApp;