import Navbar from "../Partials/Navbar";
import Categories from "../Partials/Categories";
import ProductView from "./Productview";

//Css
import "../CSS/Home.css";

const Home = function () {
    return (
        <div id="main">
            <div>
                <Navbar />
            </div>

            <div id="categories" className="ms-5">
                <Categories />
            </div>

            <div id="ProductView" className="">
                <ProductView />
            </div>
        </div>
    );
};

export default Home;
