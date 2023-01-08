import { postRequest } from "../Components/Request";
import { useState } from "react";

const AddVendor = function ({ setHome, flashMessage }) {
    const [product, setProduct] = useState({});

    async function createVendor(e) {
        e.preventDefault();
        setHome();
        flashMessage("Vendor created succesfully")
        const vendor = await postRequest("/api/vendors", product);
    }

    function typeInput(e, property) {
        let p = product;
        p[property] = e.target.value;
        setProduct(p);
    }

    return (
        <div className="container mt-4 w-75 mb-5">
            <button className="btn btn-primary mb-4" onClick={(e) => setHome()}>
                Back to all Products
            </button>
            <div className="card" id="productDescription">
                <div className="card-header">Add Vendor</div>
                <div className="card-body">
                    <div class="mb-3">
                        <label
                            for="exampleFormControlInput1"
                            class="form-label"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder=""
                            onBlur={(e) => typeInput(e, "name")}
                        />
                    </div>

                    <div class="mb-3">
                        <label
                            for="exampleFormControlInput2"
                            class="form-label"
                        >
                            Location
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput2"
                            placeholder=""
                            onBlur={(e) => typeInput(e, "location")}
                        />
                    </div>

                    <div class="mb-3">
                        <label
                            for="exampleFormControlInput3"
                            class="form-label"
                        >
                            Empresa
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput3"
                            placeholder=""
                            onBlur={(e) => typeInput(e, "empresa")}
                        />
                    </div>
                </div>
                <button
                    className="btn btn-primary mb-5 w-75"
                    style={{ marginLeft: "8rem" }}
                    onClick={(e) => createVendor(e)}
                >
                    Create Vendor
                </button>
            </div>
        </div>
    );
};

export default AddVendor;
