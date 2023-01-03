import Navbar from "../Partials/Navbar";
import Categories from "../Partials/Categories";
import ProductView from "./Productview";

//Css
import "../CSS/Home.css";

const Home = function () {
    return (
        <div>
            <div>
                <Categories />
            </div>
            <div>
                <Navbar />
            </div>

            <div id="ProductView" className="mt-5">
                adsadad
                <ProductView/>
            </div>

        </div>
    );
};

export default Home;
