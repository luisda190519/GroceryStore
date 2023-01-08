import { getRequest, postRequest, deleteRequest } from "../Components/Request";
import { useState, useEffect } from "react";

const Checkout = function ({ setHome, flashMessage, user, setProcutFocus }) {
    const [cart, setCart] = useState({});
    const [products, setProducts] = useState([[{}]]);

    async function payTheCart() {
        const pay = await postRequest("/api/payCart/" + user.id);
        setHome();
        flashMessage("Cart succesfully paid");
    }

    async function getCart() {
        const cart = await getRequest("/api/cart/" + user.id);
        const products = await getRequest("/api/getProductsByUser/" + user.id);
        setCart(cart);
        setProducts(products);
    }

    async function viewProduct(e, product) {
        e.preventDefault();
        setProcutFocus(product)
    }

    async function deleteProduct(e, product) {
        e.preventDefault();
        const remove = await deleteRequest(
            "/api/cart/" + user.id + "/" + product.id
        );
        getCart();
    }

    useEffect(() => {
        getCart();
    }, []);

    useEffect(() => {}, [cart, products]);

    return (
        <div>
            {cart.length !== 0 ? (
                <div className="container">
                    <table className="table table-striped table-hover table-bordered mt-5">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Category</th>
                                <th scope="col">Vendor</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((product, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>
                                            {" "}
                                            <img
                                                src={product.image_url}
                                                className="img-thumbnail rounded "
                                                style={{
                                                    height: "8rem",
                                                    width: "14rem",
                                                }}
                                            />{" "}
                                        </td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.category}</td>
                                        <td>{product.vendor}</td>
                                        <td>
                                            <div
                                                className="btn-group"
                                                role="group"
                                                aria-label="Basic mixed styles example"
                                            >
                                                <button
                                                    type="button"
                                                    className="btn btn-success mx-1"
                                                    onClick={(e) =>
                                                        viewProduct(e, product)
                                                    }
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger mx-1"
                                                    onClick={(e) =>
                                                        deleteProduct(
                                                            e,
                                                            product
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <div className="d-grid gap-2 mt-5">
                        <button
                            className="btn btn-primary "
                            onClick={(e) => payTheCart(e)}
                        >
                            Buy!
                        </button>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="d-flex align-items-center justify-content-center vh-100">
                        <div className="text-center">
                            <h1 className="display-1 fw-bold">
                                Your cart is empty
                            </h1>
                            <p className="fs-3">
                                {" "}
                                <span className="text-primary">
                                    Add products{" "}
                                </span>{" "}
                                to your card!
                            </p>
                            <a
                                className="btn btn-primary"
                                onClick={(e) => setHome()}
                            >
                                Go Home
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;
