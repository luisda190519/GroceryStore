import { useEffect, useState } from "react";

import Navbar from "../Partials/Navbar";
import Categories from "../Partials/Categories";
import ProductView from "./Productview";
import { getRequest } from "../Components/Request";

//Css
import "../CSS/Home.css";

const Home = function () {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    async function getProducts() {
        const products = await getRequest("/api/products");
        setProducts(products);
    }

    async function getCategories() {
        const categories = await getRequest("/api/categories");
        setCategories(categories);
    }

    useEffect(() => {
        getProducts();
        getCategories();
    }, [products, categories]);

    return (
        <div id="main">
            <div>
                <Navbar />
            </div>

            <div id="categories" className="ms-5">
                <Categories categories={categories}/>
            </div>

            <div id="ProductView" className="">
                <ProductView products={products} />
            </div>
        </div>
    );
};

export default Home;
