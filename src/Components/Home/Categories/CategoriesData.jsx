import pizza from "../../../public/image/Categories/pizza.jpg";
import fruit from "../../../public/image/Categories/fruit.jpg";
import snack from "../../../public/image/Categories/snack.jpg";
import vegetable from "../../../public/image/Categories/vegetable.jpg";
import drink from "../../../public/image/Categories/drink.jpg";
import noodle from "../../../public/image/Categories/noodle.jpg";
import sushi from "../../../public/image/Categories/sushi.jpg";

import hamburger from "../../../public/image/Categories/humburgeritems.jpg";
import pizza2 from "../../../public/image/Categories/pizzaitem.jpg";
import garan from "../../../public/image/Categories/garanitem.jpg";
import khoaitaychien from "../../../public/image/Categories/khoaitaychienitem.jpg";
import hotdog from "../../../public/image/Categories/hotdogitem.jpg";

export const ListCategoriesData = [
    {
        id: 1,
        name: "Fast Food",
        image: pizza
    },
    {
        id: 2,
        name: "Fruit",
        image: fruit
    },
    {
        id: 3,
        name: "Snack",
        image: snack
    },
    {
        id: 4,
        name: "Veggies",
        image: vegetable
    },
    {
        id: 5,
        name: "Drink",
        image: drink
    },
    {
        id: 6,
        name: "Noodle",
        image: noodle
    },
    {
        id: 7,
        name: "Sushi",
        image: sushi
    },
];

export const ListProductCategoriesData = [
    {
        id: 1,
        image: hamburger,
        name: "Hamburger Bò",
        vote: 4.5,
        price: "79.000"
    },
    {
        id: 2,
        image: pizza2,
        name: "Pizza Phomai Trứng Muối",
        vote: 5.0,
        price: "99.000"
    },
    {
        id: 3,
        image: garan,
        name: "Gà Rán Chiên Bơ",
        vote: 4.5,
        price: "159.000"
    },
    {
        id: 4,
        image: khoaitaychien,
        name: "Khoai Tay Chiên Sốt Kem",
        vote: 4.8,
        price: "49.000"
    },
    {
        id: 5,
        image: hotdog,
        name: "Hot Dog Kẹp Phô Mai",
        vote: 4.9,
        price: "209.000"
    }
]