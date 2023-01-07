import { useEffect, useState } from "react";
import { getRequest } from "../Components/Request";

const ProductCard = function ({ product, setProcutFocus }) {
    const [vendor, setVendor] = useState(null);
    const numbers = [2, 3, 4, 5, 6, 7];

    function seeProduct(e) {
        setProcutFocus(product);
    }

    async function getVendorName() {
        const vendor = await getRequest("/api/vendorName/" + product.vendor);
        setVendor(vendor[0].name);
    }

    useEffect(() => {
        getVendorName();
    }, []);

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
                    <div className="fs-6">Vendor: {vendor}</div>
                    <div className="row fs-4 mt-2">
                        <div className="col">
                            <b className="fs-5">${product.price}</b>
                        </div>

                        <select id="inputState" className="col form-select ms-2">
                            <option defaultValue>1</option>
                            {numbers.map((number, key) => {
                                return <option key={key}>{number}</option>;
                            })}
                        </select>
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary my-3"
                        style={{ width: "15.5rem" }}
                    >
                        Buy Now!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
