import { useEffect, useState } from "react";

import Navbar from "../Partials/Navbar";
import Footer from "../Partials/Footer";
import Categories from "../Partials/Categories";
import ProductView from "./ProductViews";
import ProductFocus from "./ProductFocus";
import AddProduct from "./AddProduct";
import AddVendor from "./AddVendor";
import { getRequest } from "../Components/Request";

//Css
import "../CSS/Home.css";

const Home = function () {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productFocus, setProcutFocus] = useState(false);
    const [addProduct, setAddProduct] = useState(false);
    const [vendor, setAddVendor] = useState(false);
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

    function setHome() {
        setProcutFocus(false);
        setAddProduct(false);
        setAddVendor(false);
        setCategoryFocus("All Products");
        requestProducts();
    }

    function setProduct() {
        setProcutFocus(false);
        setAddProduct(true);
        setAddVendor(false);
    }

    function setVendor() {
        setProcutFocus(false);
        setAddProduct(false);
        setAddVendor(true);
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
        vendor,
    ]);

    return (
        <div id="main">
            <div>
                <Navbar
                    setAddProduct={setProduct}
                    setAddVendor={setVendor}
                    setHome={setHome}
                />
            </div>

            {productFocus ? (
                <div id="ProductView" className="mx-auto">
                    <ProductFocus
                        product={productFocus}
                        setProcutFocus={setProcutFocus}
                    />
                </div>
            ) : addProduct ? (
                <AddProduct setHome={setHome} />
            ) : vendor ? (
                <AddVendor setHome={setHome} />
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

            <div className="mt-5">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
