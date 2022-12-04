import React from "react";
import { BsCaretRightFill } from "react-icons/bs";
import { BsCaretLeftFill } from "react-icons/bs";

const Pagination = () => {
    return (
        <div className="flex justify-between mt-3 items-center">
            <div>Hiển thị 5/10 sản phẩm</div>
            <div className="flex gap-2 items-center">
                <button><BsCaretLeftFill/></button>
                <button className="w-8 h-8 rounded-xl btn-primary">1</button>
                <button className="btn-second w-8 h-8 rounded-xl">2</button>
                <button className="btn-second w-8 h-8 rounded-xl">3</button>
                <button><BsCaretRightFill/></button>
            </div>
        </div>
    );
};
export default Pagination;