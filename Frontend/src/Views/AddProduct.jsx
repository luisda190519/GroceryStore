import { getRequest } from "../Components/Request";
import { useEffect, useState } from "react";

const AddProduct = function ({setHome}) {
    const [vendors, setVendors] = useState([]);

    async function getVendors(){
        const vendors = await getRequest("/api/vendors")
        setVendors(vendors)
    }

    async function createProduct(e){
        e.preventDefault();
    }

    useEffect(() =>{
        getVendors();
    },[vendors])


    return (
        <div className="container mt-4 w-75 mb-5">
            <button className="btn btn-primary mb-4" onClick={(e) => setHome()}>
                Back to all Products
            </button>
            <div className="card" id="productDescription">
                <div className="card-header">Add Product</div>
                <div className="card-body">
                    <div class="mb-3">
                        <label
                            for="exampleFormControlInput1"
                            class="form-label"
                        >
                            Name
                        </label>
                        <input
                            type="Name"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Product Name"
                        />
                    </div>

                    <div class="mb-3">
                        <label
                            for="exampleFormControlTextarea1"
                            class="form-label"
                        >
                            Description
                        </label>
                        <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                        ></textarea>
                    </div>

                    <div class="mb-3">
                        <label
                            for="exampleFormControlInput2"
                            class="form-label"
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            class="form-control"
                            id="exampleFormControlInput2"
                            placeholder="$45.14"
                            min="1" step="any"
                        />
                    </div>

                    <div class="mb-3">
                        <label
                            for="exampleFormControlInput3"
                            class="form-label"
                        >
                            Category
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput3"
                            placeholder="Fast food"
                        />
                    </div>

                    <div class="mb-3">
                        <label
                            for="exampleFormControlInput4"
                            class="form-label"
                        >
                            Image URL
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput4"
                            placeholder=""
                        />
                    </div>



                    <div class="mb-3">
                        <label
                            for="exampleFormControlInput5"
                            class="form-label"
                        >
                            Vendor
                        </label>
                        <select id="exampleFormControlInput5" class="form-control">
                            {vendors.map((vendor, key) => {
                                return <option key={key}>{vendor.name}</option>;
                            })}
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary mb-5 w-75" style={{marginLeft:"8rem"}}  onClick={(e) => createProduct(e)}>
                Create Product
            </button>
            </div>
        </div>
    );
};

export default AddProduct;
