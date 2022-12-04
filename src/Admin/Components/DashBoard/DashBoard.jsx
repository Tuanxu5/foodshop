import React from "react";
import OverView from "./OverView/OverView.jsx";
import SalesAnalysis from "./SalesAnalysis/SalesAnalysis.jsx"
import OrderManagement from "./OrderManagement/OrderManagement.jsx"

const DashBoard = () => {
    return (
        <div className="pl-[300px] pt-[100px] pr-[20px] pb-[60px] w-full font-bold text-[14px] bg-[#fefaf3]">
            <span className="text-[20px] text-primary">Trang Chủ</span>
            <OverView />
            <SalesAnalysis />
            <OrderManagement />
        </div>
    );
};

export default DashBoard;