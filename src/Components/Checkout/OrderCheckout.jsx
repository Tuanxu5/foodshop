import React from 'react';
import ModelVoucher from "../Composables/Modal/ModelVoucher";
import CheckoutProductItem from "../Composables/ProductItem/CheckoutProductItem"

const OrderCheckout = () => {
    return (
        <div>
            <div className="bg-white w-[400px] h-auto rounded-lg shadow-lg p-5">
                <div className="border-b w-full font-bold flex items-center justify-between text-[14px]">
                    <div>
                        <span className="text-[20px]">Đơn Hàng </span>
                        <span>(3 sản phẩm)</span>
                    </div>
                    <div>#DH109602</div>
                </div>
                <div>
                    <CheckoutProductItem></CheckoutProductItem>
                    <CheckoutProductItem></CheckoutProductItem>
                    <CheckoutProductItem></CheckoutProductItem>
                </div>
            </div>
            <div className="bg-white w-[400px] h-auto rounded-lg shadow-lg p-5 mt-2 font-bold">
                <div className="text-[15px] font-bold">
                    <div className="text-[18px] flex items-center justify-between">
                        <span>Thành Tiền</span>
                        <span>500.000đ</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span>Phí Vận Chuyển</span>
                        <span>30.000đ</span>
                    </div>
                </div>
                <div className="pt-3"><ModelVoucher/></div>
            </div>
        </div>
    );
};
export default OrderCheckout;