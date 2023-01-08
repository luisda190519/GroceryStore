import { getRequest, postRequest } from "../Components/Request";
import { useEffect, useState } from "react";

const ProductFocus = function ({ product, setProcutFocus, getCart, user }) {
    const [vendor, setVendor] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);
    const numbers = [2, 3, 4, 5, 6, 7];

    function goBack(e) {
        setProcutFocus(false);
    }

    async function getVendorName() {
        if (
            typeof product.vendor === "string" ||
            product.vendor instanceof String
        ) {
            return setVendor(product.vendor);
        }
        const vendor = await getRequest("/api/vendorName/" + product.vendor);
        return setVendor(vendor[0].name);
    }

    function productAdded() {
        setAdded(false);
    }

    async function addProductToCart(e) {
        e.preventDefault();
        const total = quantity * product.price;
        const cart = {
            total: total,
            userID: user.id,
            productID: product.id,
            vendorID: vendor.id,
        };

        setAdded(true);
        setTimeout(productAdded, 3000);
        getCart();
        const sentCart = await postRequest("/api/cart", cart);
    }

    useEffect(() => {
        getVendorName();
    }, []);

    return (
        <div className="container mt-4 w-75">
            <button className="btn btn-primary mb-4" onClick={(e) => goBack(e)}>
                Back to all Products
            </button>
            <div className="card" id="productDescription">
                <div className="card-header">View Product</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <img src={product.image_url} className="card-img" />
                            <div className="row row-cols-auto mt-3">
                                <div className="row d-flex center">
                                    <h5 className="card-title col">
                                        Price: ${product.price}
                                    </h5>
                                    {product.quantity ? (
                                        <div></div>
                                    ) : (
                                        <div className="col">
                                            <select
                                                id="inputState"
                                                className="col form-select w-125 mt-3"
                                                onBlur={(e) =>
                                                    setQuantity(e.target.value)
                                                }
                                            >
                                                <option defaultValue>1</option>
                                                {numbers.map((number, key) => {
                                                    return (
                                                        <option key={key}>
                                                            {number}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    )}
                                </div>
                                <div className="col">
                                    {added ? (
                                        <button
                                            type="button"
                                            className="btn btn-success my-3"
                                            style={{ width: "12rem" }}
                                            onClick={(e) => addProductToCart(e)}
                                        >
                                            Product added
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            className="btn btn-primary my-3"
                                            style={{ width: "12rem" }}
                                            onClick={(e) => addProductToCart(e)}
                                        >
                                            Buy Now!
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text" id="prodDes">
                                {product.description}
                            </p>
                            <p className="card-text">
                                Category: {product.category}
                            </p>
                            <p className="card-text">Vendor: {vendor}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFocus;
