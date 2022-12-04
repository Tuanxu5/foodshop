import React from 'react';
import TableListProduct from "../../Composables/Table/TableListProduct.jsx";
import Pagination from "../../Composables/Pagination/Pagination.jsx";
import ModalAddProduct from '../../Composables/Modal/ModalAddProduct.tsx';
const ProductManagement = () => {
    return (
        <div className="pl-[300px] pt-[100px] pr-[20px] pb-[70px] h-auto font-bold text-[13px] bg-[#FEFAF3]">
            <span className="text-[20px] text-primary">Quản Lí Sản Phẩm</span>
            <div className="flex items-center justify-between mt-5">
                
                <ModalAddProduct/>
                <div className="flex items-center gap-5">
                    <select name="" id="" className="h-[35px] text-center border rounded-md w-[130px] border-[#BABFC3] text-[#999] outline-none shadow">
                        <option value="">--Doanh Thu--</option>
                        <option value="">Tăng Dần</option>
                        <option value="">Giảm Dần</option>
                    </select>
                    <select name="" id="" className="h-[35px] text-center border rounded-md w-[135px] border-[#BABFC3] text-[#999] outline-none shadow">
                        <option value="">--Trạng Thái--</option>
                        <option value="">Hoạt Động</option>
                        <option value="">Tạm Ẩn</option>
                    </select>
                    <input type="text" placeholder="Tìm Kiếm" className="h-[35px] px-2 border rounded-md w-[220px] border-[#BABFC3] text-[#999] text-[13px] outline-none placeholder:font-bold shadow"/>
                </div>
            </div>
            <div className="mt-4 w-full font-bold text-[13px]">
                <TableListProduct/>
                <Pagination/>
            </div>
        </div>
    );
};

export default ProductManagement;