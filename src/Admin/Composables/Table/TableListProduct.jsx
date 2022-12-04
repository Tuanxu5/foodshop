import React from "react";
import { ProductManagmentData } from "../../Data/ProductManagmentData"
import TableItemsProduct from "./TableItemsProduct"

const ProductManagement = () => {
    return (
        <div class="w-full">
            <div className="bg-[#EC7905] text-[13px] w-full flex text-center py-3 rounded-md shadow  text-white">
                <span class="w-[5%] text-center px-5">#</span>
                <span class="w-[22%] text-start">Sản phẩm</span>
                <span class="w-[15%] align-center">Danh Mục</span>
                <span class="w-[15%]">Giá Sản Phẩm</span>
                <span class="w-[15%]">Doanh Thu</span>
                <span class="w-[15%]">Trạng Thái</span>
                <span class="w-[13%]">Tùy Chọn</span>
            </div>
            <div>
                {ProductManagmentData.map((item,index) => (
                    <TableItemsProduct
                        index={index+1}
                        name={item.name}
                        categories={item.categories}
                        price={item.price}
                        revenue={item.revenue}
                        status={item.status}
                        image={item.image}
                        view={item.view}
                        love={item.love}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductManagement;