import React from "react";
import ShopNearYou from "./ShopNearYou/ListShopNearYou";

const TabHome = () => {
    return (
        <div className="mt-10 pb-5">
            <ul className="mt-5 nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 mb-4" id="tabs-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a href="#tabs-ganban" className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active" id="tabs-ganban-tab" data-bs-toggle="pill" data-bs-target="#tabs-ganban" role="tab" aria-controls="tabs-ganban" aria-selected="true">Gần Bạn</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="#tabs-banchay" className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-banchay-tab" data-bs-toggle="pill" data-bs-target="#tabs-banchay" role="tab" aria-controls="tabs-banchay" aria-selected="false">Bán Chạy</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="#tabs-giaonhanh" className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-giaonhanh-tab" data-bs-toggle="pill" data-bs-target="#tabs-giaonhanh" role="tab" aria-controls="tabs-giaonhanh" aria-selected="false">Giao Nhanh</a>
                </li>
            </ul>
            <div className="tab-content" id="tabs-tabContent">
                <div className="tab-pane fade show active" id="tabs-ganban" role="tabpanel" aria-labelledby="tabs-ganban-tab">
                    <ShopNearYou></ShopNearYou>
                </div>
                <div className="tab-pane fade" id="tabs-banchay" role="tabpanel" aria-labelledby="tabs-banchay-tab">
                    <ShopNearYou></ShopNearYou>
                </div>
                <div className="tab-pane fade" id="tabs-giaonhanh" role="tabpanel" aria-labelledby="tabs-giaonhanh-tab">
                    <ShopNearYou></ShopNearYou>
                </div>
            </div>
        </div>
    );
};
export default TabHome;