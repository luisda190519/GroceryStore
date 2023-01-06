import { useEffect, useState } from "react";

import Navbar from "../Partials/Navbar";
import Categories from "../Partials/Categories";
import ProductView from "./Productview";
import ProductFocus from "./ProductFocus";
import { getRequest } from "../Components/Request";

//Css
import "../CSS/Home.css";

const Home = function () {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productFocus, setProcutFocus] = useState(false);

    async function getProducts() {
        const products = await getRequest("/api/products");
        setProducts(products);
    }

    async function getCategories() {
        const categories = await getRequest("/api/categories");
        setCategories(categories);
    }

    function seeProduct(product) {
        console.log("hola");
        setProcutFocus(product);
    }

    useEffect(() => {
        getProducts();
        getCategories();
    }, [products, categories, productFocus]);

    if (productFocus) {
        return (
            <div id="main">
                <div>
                    <Navbar />
                </div>

                <div id="ProductView" className="mx-auto">
                    <ProductFocus
                        product={productFocus}
                        setProcutFocus={setProcutFocus}
                    />
                </div>
            </div>
        );
    }

    return (
        <div id="main">
            <div>
                <Navbar />
            </div>

            <div className="container">
                <div className="row">
                    <div id="categories" className="col-1">
                        <Categories categories={categories} />
                    </div>
                    <div id="ProductView" className="col-8">
                        <div className="d-flex">
                            <ProductView
                                products={products}
                                setProcutFocus={setProcutFocus}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
