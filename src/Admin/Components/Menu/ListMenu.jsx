import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi';
import { IoFastFoodOutline } from "react-icons/io5";
import { TbReportMoney } from "react-icons/tb";
import { AiOutlineShop } from "react-icons/ai";
import { FiTruck } from "react-icons/fi"
import { FaAngleDown, FaAngleRight } from "react-icons/fa"

import ItemMenu from './ItemMenu';
import ItemMenuChildren from './ItemMenuChildren';


const ListMenu = () => {
  const [show, setShow] = useState(false);
  function handleShowMenuChildren() {
    setShow(() => !show)
    const menuChildren = document.getElementById("menuChildren");
    menuChildren.style.transition = "all 0.5s ease"
  }
    return (
      <ul className="px-2.5 pr-2 font-bold text-[14px]">
            <Link to="/admin">
              <ItemMenu name="Trang Chủ" icon={<HiOutlineHome />} active="item-menu-active" border="item-menu-border" />
            </Link>
            
            <div onClick={handleShowMenuChildren}>
              <ItemMenu
                name="Quản Lí Sản Phẩm"
                icon={<IoFastFoodOutline />}
                iconRight={show ? <FaAngleDown /> : <FaAngleRight />}
              />
            </div>
            <div className={`overflow-hidden ${show ? "h-[162px]" : "h-[0]"} transition duration-[500] ease w-full pl-6`} id="menuChildren">
              <Link to="/admin/ProductManagement/">
                <ItemMenuChildren name="Tất Cả Sản Phấm" icon={<IoFastFoodOutline />}/>
              </Link>
              <ItemMenuChildren name="Danh Mục Sản Phẩm" icon={<IoFastFoodOutline />}></ItemMenuChildren>
              <ItemMenuChildren name="Voucher Sản Phẩm" icon={<IoFastFoodOutline />}></ItemMenuChildren>
            </div>
            <ItemMenu name="Quản Lí Đơn Hàng" icon={ <TbReportMoney/> }/>
            <ItemMenu name="Quản Lí Vận Chuyển" icon={<FiTruck />}/>
            <ItemMenu name="Quản Lí Cửa Hàng" icon={<AiOutlineShop />} />
        </ul>
    );
};

export default ListMenu;