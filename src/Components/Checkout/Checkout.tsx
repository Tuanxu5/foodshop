import React from 'react';
import PaymentMethod from "./PaymentMethod";
import ShippingMethod from "./ShippingMethod";
import ContactCheckout from "./ContactCheckout";
import OrderCheckout from "./OrderCheckout";
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div className="pl-[150px] pr-[20px] bg-[#f8f8f8] pt-[90px] pb-[90px]">
            <div className="font-bold text-[16px]">
                <div>
                    <Link to="/">Trang Chủ / </Link>
                    <Link to="/checkout" className="text-[#EC7905]">Thanh Toán</Link>
                </div>
            </div>
            <div className="flex items-start justify-start mt-5 gap-6">
                <div>
                    <ContactCheckout></ContactCheckout>
                    <ShippingMethod/>
                    <PaymentMethod />
                </div>
                <OrderCheckout></OrderCheckout>
            </div>
            <div className="border-t bg-white fixed bottom-0 w-full left-[0px] pl-[120px] py-4 shadow-top">
                <div className="justify-around flex items-center">
                    <div className="text-[22px] font-bold">
                        <span>Tổng : </span>
                        <span>520.000đ</span>
                    </div>
                    <div>
                        <button
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="btn-primary w-[200px] h-[45px] rounded-md text-[15px] font-bold shadow-md outline-0">
                            <span>Tiến Hành Đặt Hàng</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Checkout;