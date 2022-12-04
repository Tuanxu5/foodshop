import React from 'react';
import { AiOutlineComment } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"

const ListTrendingProduct = (props) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-4 mt-[50px] relative border product-item">
            <div className="relative mx-[15%] top-[-65px]">
                <img src={props.image} alt={props.name} className="border-b-[10px] border-red rounded-full border-[10px] border-[#fff] w-[auto]" />
                <div className="circle-image-product"></div>
            </div>
            <div className="mt-[-55px]">
                <div className="text-[17px] font-[600] hidden-1-line">{ props.name }</div>
                    <span className="text-[12px] text-[#333]">
                    <span>Đã được đặt&nbsp;</span>
                    <span className="font-[600]">{ props.count}</span>
                    <span>&nbsp;lần</span>
                    </span><br />
                        <span className="flex items-center justify-between text-[13px]">
                            <span className="flex text-primary">
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                            </span>
                            <span className="flex items-center">
                                <AiOutlineComment></AiOutlineComment>
                        <span className="font-medium text-[#333]">&nbsp;{ props.comment }</span>
                            </span>
                        </span>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                <span className="text-[14px] price">{ props.price }₫</span>
                        <button className="btn-primary rounded-md w-[85px] h-[35px] text-[13px]" data-bs-toggle="offcanvas" data-bs-target="#OffCanvasAddToCart" aria-controls="OffCanvasAddToCart">
                            <span>Mua Ngay</span>
                        </button>
                    </div>
                </div>
    );
};
export default ListTrendingProduct;