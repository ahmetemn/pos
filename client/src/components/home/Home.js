import React from "react";
import Categories from "../categories/Categories";

const Home = () => {
    return (
        <>
            <div className="home px-6 flex justify-between">
                <div className="categories">
                    <div>
                      <Categories />
                    </div>
                </div>
                <div className="products">
                    <div className="">
                        Products
                    </div>
                </div>
                <div>
                    <div>cart totals</div>
                </div>
            </div>


        </>

    )
}

export default Home; 