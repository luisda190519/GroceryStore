import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { getRequest } from "../Components/Request";

const ProductView = function ({ products, setProcutFocus }) {
    return (
        <div>
            <div className="row row-cols-auto">
                {products.map((product, key) => {
                    return (
                        <div className="my-5 mx-3" key={key}>
                            <div className="col">
                                <div className="mt-5">
                                    <ProductCard
                                        product={product}
                                        setProcutFocus={setProcutFocus}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductView;
