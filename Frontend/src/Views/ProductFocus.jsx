import { getRequest } from "../Components/Request";
import { useEffect, useState } from "react";

const ProductFocus = function ({ product, setProcutFocus }) {
    const [vendor, setVendor] = useState(null);

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
                                <h5 className="card-title">
                                    Price: ${product.price}
                                </h5>
                                {product.quantity ? (
                                    <div></div>
                                ) : (
                                    <button className="btn btn-danger w-25 mx-5 ">
                                        Buy!
                                    </button>
                                )}
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
