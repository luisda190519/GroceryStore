import { useState } from "react";

const Categories = function ({ categories, requestProductsByCategory }) {
    const [numberCategories, setNumber] = useState(4);

    function showAllCategories(e, more) {
        if (more) {
            return setNumber(10000);
        }
        return setNumber(4);
    }

    async function setCategory(e, name){
        requestProductsByCategory(name)
    }

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-header" id="allCat" onClick={e=> setCategory(e, "All Products")}>
                <b>All Categories</b>
            </div>
            <ul className="list-group list-group-flush">
                {categories.map((category, key) => {
                    if (key <= numberCategories) {
                        return (
                            <li className="list-group-item" key={key} onClick={e=> setCategory(e, category.category)}>
                                {category.category}
                            </li>
                        );
                    }
                })}
                <li className="list-group-item">
                    {numberCategories == 4 ? (
                        <button
                            className="btn btn-secondary my-2 mx-4"
                            onClick={(e) => showAllCategories(e, true)}
                        >
                            Show all categories...
                        </button>
                    ) : (
                        <button
                            className="btn btn-secondary my-2 mx-4"
                            onClick={(e) => showAllCategories(e, false)}
                        >
                            Show less...
                        </button>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Categories;
