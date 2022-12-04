import React from "react";

const ItemOverView = (props) => {
    return (
        <div className="bg-white text-center w-full h-auto py-5 rounded-lg shadow cursor-pointer">
            <div className="text-[20px] flex justify-center">
                <span className="w-10 h-10 flex justify-center items-center rounded-full bg-[#FEF0E1] text-[20px] text-[#000]">{props.icon}</span>
            </div>
            <span className="text-[35px]">{ props.count }</span><br/>
            <span className="">{ props.name }</span>
        </div>
    );
};

export default ItemOverView;