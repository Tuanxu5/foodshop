import React from 'react';
import { Link } from 'react-router-dom';
import ItemCategories from "./ItemCategories"
import { ListCategoriesData } from "./CategoriesData";

function ListCategories() {
    return (
        <div className="grid grid-cols-7 gap-5 text-center mt-3">
            {ListCategoriesData.map((item) => (
                <Link to="/detailcategories">
                <ItemCategories
                    key={item.id}
                    name={item.name}
                    image={item.image}
                />
                </Link>
            ))}
        </div>
    );
};
export default ListCategories;