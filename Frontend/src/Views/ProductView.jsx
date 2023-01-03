import ProductCard from "../Components/ProductCard";

const ProductView = function () {
    let data = [
        {
            name: "Hola",
            vendor: "zzz",
            price: 99,
            categories: "zzz",
        },
        {
            name: "Hola",
            vendor: "zzz",
            price: 99,
            categories: "zzz",
        },
        {
            name: "Hola",
            vendor: "zzz",
            price: 99,
            categories: "zzz",
        },
        {
            name: "Hola",
            vendor: "zzz",
            price: 99,
            categories: "zzz",
        },
    ];

    return (
        <div>
            <div className="row row-cols-auto">
                {data.map((product, key) => {
                    return (
                        <div className="my-3 mx-3" key={key}>
                            <div className="col">
                                <div className="">
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
