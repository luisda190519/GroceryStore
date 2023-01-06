const ProductCard = function ({ product, setProcutFocus }) {

    function seeProduct(e){
        setProcutFocus(product);
    }

    return (
        <div className="card col" style={{ width: "18rem" }}>
            <img
                src={product.image_url}
                className="card-img-top"
                onClick={e => seeProduct(e)}
            />
            <div className="card-body">
                <div className="card-text">
                    <div className="fs-5">{product.name}</div>
                    <div className="fs-6">Vendor: {product.vendor}</div>
                    <div className="fs-4 mt-2">
                        ${product.price}
                        <button type="button" className="btn btn-primary ms-5">
                            Buy Now!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
