import React from 'react';

const ItemMenu = (props) => {
    return (
        <div className={`pr-3 ${ props.border } rounded-sm`}>
            <li className={`flex gap-3 justify-between items-center pl-6 p-2 w-full hover:bg-[#FEF0E1] hover:text-[#115E5D] h-[50px] rounded-xl cursor-pointer mt-1.5 hover-item-menu ${ props.active } `}>
                <div className="flex gap-2">
                    <span className="text-[20px]">{ props.icon }</span>
                    <span>{ props.name }</span>
                </div>
                <span>{ props.iconRight }</span>
            </li>
        </div>
    );
};

export default ItemMenu;