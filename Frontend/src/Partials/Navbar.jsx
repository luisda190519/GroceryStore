import { getRequest, postRequest } from "../Components/Request";
import { useState, useEffect } from "react";

const Navbar = function ({ setAddProduct, setAddVendor, setHome, goToChek }) {
    const [cart, setCart] = useState({});
    const [user, setUser] = useState(() =>
        localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : false
    );

    async function logout(e) {
        e.preventDefault();
        const user = await postRequest("/auth/logout", {});
        localStorage.clear();
        window.location.reload(true);
    }

    async function getCart(){
        const cart = await getRequest("/api/cart/" + user.id)
        setCart(cart)
    }

    useEffect(()=>{
        getCart();
    },[cart])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <a className="navbar-brand mt-2 mt-lg-0" href="#">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Olimpical.png"
                            height="35"
                            alt="MDB Logo"
                            loading="lazy"
                        />
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="clickNav"
                                onClick={(e) => setHome()}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="clickNav"
                                onClick={(e) => setAddProduct()}
                            >
                                Add Product
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="clickNav"
                                onClick={(e) => setAddVendor()}
                            >
                                Add Vendor
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="d-flex align-items-center">
                    <a className="text-reset me-3" id="clickNav" onClick={e => goToChek()}>
                        <i className="fas fa-shopping-cart"></i>
                        <span className="badge rounded-pill badge-notification bg-danger">
                            {cart.length}
                        </span>
                    </a>

                    <div className="dropdown">
                        <a
                            className="dropdown-toggle d-flex align-items-center hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuAvatar"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                className="rounded-circle"
                                height="25"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuAvatar"
                        >
                            <li>
                                <a className="dropdown-item" href="#">
                                    My profile
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    onClick={(e) => logout(e)}
                                    href="/login"
                                >
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
