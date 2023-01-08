import { useEffect, useState } from "react";
import { getRequest, postRequest } from "../Components/Request";

const ProductCard = function ({ product, setProcutFocus }) {
    const numbers = [2, 3, 4, 5, 6, 7];
    const [vendor, setVendor] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);
    const [user, setUser] = useState(() =>
        localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : false
    );

    function productAdded(){
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
        const sentCart = await postRequest("/api/cart", cart);
    }

    function seeProduct(e) {
        setProcutFocus(product);
    }

    async function getVendorName() {
        const vendor = await getRequest("/api/vendorName/" + product.vendor);
        setVendor(vendor[0]);
    }

    useEffect(() => {
        getVendorName();
    }, [added]);

    return (
        <div className="card col" style={{ width: "18.5rem" }}>
            <img
                src={product.image_url}
                className="card-img-top"
                onClick={(e) => seeProduct(e)}
            />
            <div className="card-body">
                <div className="card-text">
                    <div className="fs-5">{product.name}</div>
                    <div className="fs-6">Vendor: {vendor.name}</div>
                    <div className="row fs-4 mt-2">
                        <div className="col">
                            <b className="fs-5">${product.price}</b>
                        </div>

                        <select
                            id="inputState"
                            className="col form-select ms-2"
                            onBlur={(e) => setQuantity(e.target.value)}
                        >
                            <option defaultValue>1</option>
                            {numbers.map((number, key) => {
                                return <option key={key}>{number}</option>;
                            })}
                        </select>
                    </div>

                    {added ? (
                        <button
                            type="button"
                            className="btn btn-success my-3"
                            style={{ width: "15.5rem" }}
                            onClick={(e) => addProductToCart(e)}
                        >
                            Product added
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="btn btn-primary my-3"
                            style={{ width: "15.5rem" }}
                            onClick={(e) => addProductToCart(e)}
                        >
                            Buy Now!
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
