import React from "react";
import product1 from "../../public/image/producthome/pr1.jpg"
const Cart = () => {
    return (
        <div className="pl-[150px] pr-[20px] bg-[#fef8ee] pt-[90px]">
            <div className="font-[700] text-[16px]">
                <span>Trang Chủ / <span className="text-[#F19457]">Giỏ Hàng</span></span><br />
                <span className="text-[25px]"><span className="text-[#F19457]">Giỏ Hàng</span> Của Tôi</span><br />
            </div>
            <div className="relative w-full pb-5 flex items-center justify-between mt-5">
                <div>
                   <table className="border-collapse border border-slate-500 ...">
                        <thead>
                            <tr>
                                <th className="border border-slate-600">Sản Phẩm</th>
                                <th className="border border-slate-600">Giả Sản Phẩm</th>
                                <th className="border border-slate-600">Số Lượng</th>
                                <th className="border border-slate-600">Tổng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-700 flex items-center justify-around gap-5">
                                    <img src={product1} alt="" />
                                    <div>
                                        <span>Gà Nướng Lu Rất Ngon</span>
                                        <span>Size : L</span>
                                        <span>Size : L</span>
                                        <span>Size : L</span>
                                        <span>Size : L</span>
                                    </div>
                                </td>
                                <td className="border border-slate-700">Indianapolis</td>
                                <td className="border border-slate-700">Indiana</td>
                                <td className="border border-slate-700">Indianapolis</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-700">Indiana</td>
                                <td className="border border-slate-700">Indianapolis</td>
                                <td className="border border-slate-700">Indiana</td>
                                <td className="border border-slate-700">Indianapolis</td>
                            </tr>
                        </tbody>
                        </table>
                </div>
                <div>
                    46
                </div>
            </div>
        </div>
    );
};
export default Cart;