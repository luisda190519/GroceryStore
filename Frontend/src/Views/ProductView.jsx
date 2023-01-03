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
            {data.map((product, key) => {
                return (
                    <div className="" key={key}>
                        <ProductCard product={product}/>
                    </div>
                );
            })}
        </div>
    )
};

export default ProductView;
