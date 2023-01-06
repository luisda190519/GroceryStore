import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { getRequest } from "../Components/Request";

const ProductView = function ({ products, setProcutFocus, categoryFocus }) {
    return (
        <div>
            <h1 className="text-center mt-5">{categoryFocus}</h1>
            <div className="row row-cols-auto">
                {products.map((product, key) => {
                    return (
                        <div className="" key={key}>
                            <div className="col">
                                <div className="mt-5 mx-2">
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
