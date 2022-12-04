import React from 'react';

const ItemMenuChildren = (props) => {
    return (
        <div className={`pr-3 ${ props.border } rounded-sm`}>
            <span className="flex gap-2 justify-start items-center pl-6 pr-2  w-full hover:bg-[#FEF0E1] hover:text-[#EC7905] h-[50px] rounded-xl cursor-pointer mt-1 hover-item-menu">
                <span className="text-[20px]">{ props.icon }</span>
                <span>{ props.name }</span>
            </span>
        </div>
    );
};

export default ItemMenuChildren;