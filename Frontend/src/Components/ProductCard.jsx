const ProductCard = function ({ product }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                src="https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg"
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <p className="card-text">
                    <div>{product.name}</div>
                    <div>{product.vendor}</div>
                    <div>
                        ${product.price}
                        <button type="button" className="btn btn-primary">
                            Buy Now!
                        </button>
                    </div>
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
