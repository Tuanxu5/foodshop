import React from 'react';
import ListMenu from './ListMenu.jsx';

const Menu = () => {
    return (
        <div className="w-[280px] bg-[#fff] h-auto border-r-2 fixed left-0 top-0 bottom-0 z-[100] shadow-lg ">
            <div className="pt-[95px]">
                <ListMenu />
            </div>
        </div>
    );
};

export default Menu;