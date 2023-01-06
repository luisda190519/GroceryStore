const Categories = function ({ categories }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">
                <b>Categories</b>
            </div>
            <ul className="list-group list-group-flush">
                {categories.map((category, key)=>{
                    if(key<=10){
                        return <li className="list-group-item" key={key}>{category.category}</li>
                    }
                })}
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
