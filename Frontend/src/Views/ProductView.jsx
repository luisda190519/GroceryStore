import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

const ProductView = function ({products}) { 

    return (
        <div>
            <div className="row row-cols-auto">
                {products.map((product, key) => {
                    return (
                        <div className="my-5 mx-3" key={key}>
                            <div className="col">
                                <div className="mt-5">
                                    <ProductCard product={product} />
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
