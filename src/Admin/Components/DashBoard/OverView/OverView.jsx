import React from "react";
import { TbHourglassHigh } from "react-icons/tb";
import { TbTruckReturn } from "react-icons/tb";
import { TbCheckupList } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReportOff } from "react-icons/tb";
import ItemOverView from "./ItemOverView";

const OverView = () => {
    return (
        <div>
            <div className="mt-5 grid grid-cols-5 gap-4 text-center w-full font-bold">
                <ItemOverView name="Chờ Xác Nhận" icon={ <TbHourglassHigh/>} count="100" />
                <ItemOverView name="Chờ Lấy Hàng" icon={ <TbTruckDelivery/> } count="100"/>
                <ItemOverView name="Đã Xử Lý" icon={ <TbCheckupList/> } count="100"/>
                <ItemOverView name="Đơn Hủy" icon={ <TbReportOff/>} count="100" />
                <ItemOverView name="Đơn Hoàn Trả / Trả Lại" icon={ <TbTruckReturn/> } count="100"/>
            </div>
        </div>
    );
};

export default OverView;