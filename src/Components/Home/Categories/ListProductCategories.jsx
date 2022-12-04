import React from 'react';
import ItemsProductCate from "./ItemsProductCate"
import { ListProductCategoriesData } from "./CategoriesData";

const ListProductCategories = () => {
    return (
        <div className="mt-[80px]">
            <div className="grid gap-5 grid-cols-5 items-center justify-center text-center">
                {ListProductCategoriesData.map(item => (
                    <ItemsProductCate
                        image = {item.image}
                        name = {item.name}
                        price = { item.price }
                    />
                ))}
            </div>
        </div>
    );
};
export default ListProductCategories;