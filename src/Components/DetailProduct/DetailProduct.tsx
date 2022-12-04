import React from "react";
import shop1 from "../../public/image/shopnearyou/shop3.jpg"
import { BsDot } from "react-icons/bs"
import { AiOutlineTags } from "react-icons/ai"
import ItemTrendingProduct from "../Home/TrendingProduct/ItemTrendingProduct";
import { TrendingProductData } from "../Home/TrendingProduct/TrendingProductData"
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import OffCanvasAddToCart from "../OffCanvas/OffCanvasAddToCart.jsx"
import OffCanvasCart from "../OffCanvas/OffCanvasCart.jsx"

const DetailProduct = () => {
    
    return (
        <div className="pl-[150px] pr-[20px] bg-[#fff]  pt-[90px] pb-5 ">
            <div className="font-[700] text-[16px]">
                <span>Home / Shop / <span className="text-[#F19457]">Chick Garden Mart - Ngọc Lâm</span></span><br />
            </div>
            <div className="mt-5 bg-white p-5 rounded-xl shadow-md relative border">
                <div className="flex">
                    <img src={shop1} alt="" className="w-[36%] rounded-md"/>
                    <div className="ml-8">
                        <span className="text-[12px] font-semibold text-[#808080]">SHOP / CỬA HÀNG</span><br />
                        <span className="font-bold text-[22px]">Chick Garden Mart - Ngọc Lâm</span><br/>
                        <span className="font-semibold text-[14px]">137 Ngọc Lâm, P. Ngọc Lâm, Long Biên, Hà Nội</span><br />
                        <div className="font-bold text-[13px] text-[#808080] flex items-center">
                            <span className="flex items-center"><span className="text-[20px]"><BsDot></BsDot></span>Giờ Mở Cửa : </span>
                                <span>&nbsp;07:00 - 23:59</span>
                                <button className="text-white bg-[#47c947] w-11 h-6 ml-3 rounded">Open</button>
                                
                        </div>
                        <div className="font-semibold text-[15px] mt-3 flex items-center">
                            <span className="flex items-center">
                                <span className="text-[#F19457]">
                                    <AiOutlineTags />
                                </span>&nbsp;Ưu đãi đến 60K
                            </span>
                            <span className="text-[#00a5cf] ml-5">Xem Chi Tiết</span>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="stickyy bg-white shadow-md rounded-b-xl gap-14 font-[600] z-[100] border-b border-l border-r">
                <div className="hover:text-[#F19457] cursor-pointer"><HiChevronLeft></HiChevronLeft></div>
                <a href="#id1" className="hover:text-[#F19457] cursor-pointer hover:border-b-2 px-2 hover:border-[#F19457]">Gà Nướng Hảo Hạn</a>
                <a href="#id2" className="hover:text-[#F19457] cursor-pointer hover:border-b-2 px-2 hover:border-[#F19457]">Pizza</a>
                <a href="#id3" className="hover:text-[#F19457] cursor-pointer hover:border-b-2 px-2 hover:border-[#F19457]">Đồ Uống</a>
                <a href="#id4" className="hover:text-[#F19457] cursor-pointer hover:border-b-2 px-2 hover:border-[#F19457]">Đồ Ăn Khác</a>
                <div className="hover:text-[#F19457] cursor-pointer"><HiChevronRight></HiChevronRight></div>
            </nav>
            <div className="relative">
                <section className="absolute top-[-200px] text-transparent" id="id1">ganuonghaohan</section>
                <div className="mt-10 flex items-center justify-between relative">
                    <span className="text-[22px] font-[600]">Gà Nướng Hảo Hạn</span>
                    <div className="flex">
                        <button className="btn-primary text-[20px] rounded-full text-center w-[25px] h-[25px] mr-1">
                            <HiChevronLeft></HiChevronLeft>
                        </button>
                        <button className="btn-primary text-[20px] rounded-full text-center w-[25px] h-[25px] mr-1">
                            <HiChevronRight></HiChevronRight>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-6 relative">
                    {TrendingProductData.map(item => (
                        <ItemTrendingProduct
                            image={item.image}
                            name={item.name}
                            count={item.count}
                            comment={item.comment}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
            <div className="relative">
                <div className="absolute top-[-200px] text-transparent" id="id2">pizza</div>
                <div className="mt-10 flex items-center justify-between relative">
                    <span className="text-[22px] font-[600]">Pizza</span>
                    <div className="flex">
                        <button className="btn-primary text-[20px] rounded-full text-center w-[25px] h-[25px] mr-1">
                            <HiChevronLeft></HiChevronLeft>
                        </button>
                        <button className="btn-primary text-[20px] rounded-full text-center w-[25px] h-[25px] mr-1">
                            <HiChevronRight></HiChevronRight>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-5 relative">
                    {TrendingProductData.map(item => (
                        <ItemTrendingProduct
                            image={item.image}
                            name={item.name}
                            count={item.count}
                            comment={item.comment}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
            <div className="relative">
                <div className="absolute top-[-200px] text-transparent" id="id3">douong</div>
                <div className="mt-10 flex items-center justify-between relative">
                    <span className="text-[22px] font-[600]">Đồ Uống</span>
                    <div className="flex">
                        <button className="btn-primary text-[20px] rounded-full text-center w-[25px] h-[25px] mr-1">
                            <HiChevronLeft></HiChevronLeft>
                        </button>
                        <button className="btn-primary text-[20px] rounded-full text-center w-[25px] h-[25px] mr-1">
                            <HiChevronRight></HiChevronRight>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-5 relative">
                    {TrendingProductData.map(item => (
                        <ItemTrendingProduct
                            image={item.image}
                            name={item.name}
                            count={item.count}
                            comment={item.comment}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
            <div className="relative">
                <div className="absolute top-[-200px] text-transparent" id="id4">douong</div>
                <div className="mt-10 flex items-center justify-between relative">
                    <span className="text-[22px] font-[600]">Đồ Ăn Khác</span>
                    <div className="flex">
                        <button className="btn-primary text-[20px] rounded-full text-center w-[25px] h-[25px] mr-1">
                            <HiChevronLeft></HiChevronLeft>
                        </button>
                        <button className="btn-primary text-[20px] rounded-full text-center w-[25px] h-[25px] mr-1">
                            <HiChevronRight></HiChevronRight>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-5 relative">
                    {TrendingProductData.map(item => (
                        <ItemTrendingProduct
                            image={item.image}
                            name={item.name}
                            count={item.count}
                            comment={item.comment}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
            <OffCanvasAddToCart></OffCanvasAddToCart>
            <OffCanvasCart></OffCanvasCart>
        </div>
    );
};
export default DetailProduct;