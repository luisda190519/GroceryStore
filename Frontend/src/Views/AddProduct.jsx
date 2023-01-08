import { getRequest, postRequest } from "../Components/Request";
import { useEffect, useState } from "react";

const AddProduct = function ({ setHome, flashMessage }) {
    const [vendors, setVendors] = useState([]);
    const [product, setProduct] = useState({});

    async function getVendors() {
        const vendors = await getRequest("/api/vendors");
        setVendors(vendors);
    }

    async function createProduct(e) {
        e.preventDefault();
        const productCreated = await postRequest("/api/products", product);
        setHome()
        flashMessage("Product created succesfully")
    }

    function typeInput(e, property) {
        let p = product;
        p[property] = e.target.value;
        setProduct(p);
    }

    useEffect(() => {
        getVendors();
    }, []);

    return (
        <div className="container mt-4 w-75 mb-5">
            <button className="btn btn-primary mb-4" onClick={(e) => setHome()}>
                Back to all Products
            </button>
            <div className="card" id="productDescription">
                <div className="card-header">Add Product</div>
                <div className="card-body">
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Name
                        </label>
                        <input
                            type="Name"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Product Name"
                            onBlur={(e) => typeInput(e, "name")}
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                        >
                            Description
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            onBlur={(e) => typeInput(e, "description")}
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput2"
                            className="form-label"
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="exampleFormControlInput2"
                            placeholder="$45.14"
                            min="1"
                            step="any"
                            onBlur={(e) => typeInput(e, "price")}
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput3"
                            className="form-label"
                        >
                            Category
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput3"
                            placeholder="Fast food"
                            onBlur={(e) => typeInput(e, "category")}
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput4"
                            className="form-label"
                        >
                            Image URL
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput4"
                            placeholder=""
                            onBlur={(e) => typeInput(e, "image_url")}
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput5"
                            className="form-label"
                        >
                            Vendor
                        </label>
                        <select
                            id="exampleFormControlInput5"
                            className="form-control"
                            onBlur={(e) => typeInput(e, "vendor")}
                        >
                            {vendors.map((vendor, key) => {
                                return <option key={key}>{vendor.name}</option>;
                            })}
                        </select>
                    </div>
                </div>
                <button
                    className="btn btn-primary mb-5 w-75"
                    style={{ marginLeft: "8rem" }}
                    onClick={(e) => createProduct(e)}
                >
                    Create Product
                </button>
            </div>
        </div>
    );
};

export default AddProduct;
