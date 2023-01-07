const AddProduct = function () {
    let product = {
        name:"fdsf"
    }
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
                            <img  class="card-img" />
                            <div className="row row-cols-auto mt-3">
                                <h5 className="card-title">
                                    Price: 
                                </h5>
                                <button className="btn btn-danger w-25 mx-5 ">
                                    Buy!
                                </button>
                            </div>
                        </div>
                        <div className="col">
                            <h5 className="card-title"></h5>
                            <p className="card-text" id="prodDes">
                                
                            </p>
                            <p className="card-text">
                                Category: 
                            </p>
                            <p className="card-text">Vendor: </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
