import { useEffect, useState } from "react";

import Navbar from "../Partials/Navbar";
import Footer from "../Partials/Footer";
import Categories from "../Partials/Categories";
import ProductView from "./ProductViews";
import ProductFocus from "./ProductFocus";
import AddProduct from "./AddProduct";
import AddVendor from "./AddVendor";
import Checkout from "./Checkout";
import Flash from "../Components/Flash";
import { getRequest } from "../Components/Request";

//Css
import "../CSS/Home.css";

const Home = function ({ user }) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productFocus, setProcutFocus] = useState(false);
    const [addProduct, setAddProduct] = useState(false);
    const [vendor, setAddVendor] = useState(false);
    const [checkout, setCheckout] = useState(false);
    const [categoryFocus, setCategoryFocus] = useState("All Products");
    const [cart, setCart] = useState({});
    const [flash, setFlash] = useState(false);

    async function requestProducts() {
        const productos = await getRequest("/api/products");
        if (productos !== products) {
            setProducts(productos);
        }
    }

    async function requestCategories() {
        const categorias = await getRequest("/api/categories");
        if (categories !== categorias) {
            setCategories(categorias);
        }
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

    async function getCart() {
        const cart = await getRequest("/api/cart/" + user.id);
        setCart(cart);
    }

    function setHome() {
        setProcutFocus(false);
        setAddProduct(false);
        setAddVendor(false);
        setCheckout(false);
        setCategoryFocus("All Products");
        requestProducts();
        requestProducts();
        requestCategories();
        getCart();
    }

    function setProduct() {
        setProcutFocus(false);
        setAddProduct(true);
        setAddVendor(false);
        setCheckout(false);
    }

    function setVendor() {
        setProcutFocus(false);
        setAddProduct(false);
        setAddVendor(true);
        setCheckout(false);
    }

    function goToChek() {
        setProcutFocus(false);
        setAddProduct(false);
        setAddVendor(false);
        setCheckout(true);
    }

    function flashMessage(message) {
        setTimeout((message) => {
            setFlash(false);
        }, 5000);
        setFlash(message);
    }

    useEffect(() => {
        requestProducts();
        requestCategories();
        getCart();
    }, []);

    useEffect(() => {}, [
        products,
        categories,
        productFocus,
        categoryFocus,
        addProduct,
        vendor,
        cart,
    ]);

    return (
        <div id="main">
            <div>
                <Navbar
                    setAddProduct={setProduct}
                    setAddVendor={setVendor}
                    setHome={setHome}
                    goToChek={goToChek}
                    cart={cart}
                    getCart={getCart}
                />
            </div>

            <div className="container mt-4">
                {flash ? (
                    <Flash className="mt-5" message={flash} />
                ) : (
                    <div></div>
                )}
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
            ) : checkout ? (
                <Checkout
                    setHome={setHome}
                    flashMessage={flashMessage}
                    user={user}
                    setProcutFocus={setProcutFocus}
                />
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
                                    getCart={getCart}
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
