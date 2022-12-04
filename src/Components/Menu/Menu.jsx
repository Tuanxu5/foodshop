import React from 'react';
import ListMenuItems from "./ListMenuItems"
const Menu = () => {
    return (
        <div className="w-[120px] bg-[#fff] h-[1000px] border-r-2 fixed z-[100] shadow-lg">
            <ListMenuItems></ListMenuItems>
        </div>
    );
};

export default Menu;