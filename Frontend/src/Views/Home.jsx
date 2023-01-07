import { useEffect, useState } from "react";

import Navbar from "../Partials/Navbar";
import Categories from "../Partials/Categories";
import ProductView from "./ProductViews";
import ProductFocus from "./ProductFocus";
import AddProduct from "./AddProduct";
import { getRequest } from "../Components/Request";

//Css
import "../CSS/Home.css";

const Home = function () {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productFocus, setProcutFocus] = useState(false);
    const [addProduct, setAddProduct] = useState(false);
    const [categoryFocus, setCategoryFocus] = useState("All Products");

    async function requestProducts() {
        const products = await getRequest("/api/products");
        setProducts(products);
    }

    async function requestCategories() {
        const categories = await getRequest("/api/categories");
        setCategories(categories);
    }

    async function requestProductsByCategory(category) {
        const products = await getRequest(
            "/api//products/category/" + category
        );

        setCategoryFocus(category);
        setProducts(products);

        if (products.length === 0) {
            setCategoryFocus("All Products");
            return requestProducts();
        }
    }

    useEffect(() => {
        requestProducts();
        requestCategories();
    }, []);

    useEffect(() => {}, [
        products,
        categories,
        productFocus,
        categoryFocus,
        addProduct,
    ]);

    return (
        <div id="main">
            <div>
                <Navbar setAddProduct={setAddProduct} />
            </div>

            {productFocus ? (
                <div id="ProductView" className="mx-auto">
                    <ProductFocus
                        product={productFocus}
                        setProcutFocus={setProcutFocus}
                    />
                </div>
            ) : addProduct ? (
                <AddProduct setAddProduct={setAddProduct} />
            ) : (
                <div className="container">
                    <div className="row">
                        <div id="categories" className="col-1">
                            <Categories
                                categories={categories}
                                requestProductsByCategory={
                                    requestProductsByCategory
                                }
                            />
                        </div>
                        <div id="ProductView" className="col">
                            <div className="d-flex">
                                <ProductView
                                    products={products}
                                    setProcutFocus={setProcutFocus}
                                    categoryFocus={categoryFocus}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
