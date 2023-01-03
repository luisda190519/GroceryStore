const Categories = function () {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">
                <b>Categories</b>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">
                    <button className="btn btn-secondary my-2 mx-4">
                        Show all categories...
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Categories;
