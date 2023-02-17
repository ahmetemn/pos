import React from "react"
import Categories from "../components/categories/Categories.js"
import Products from "../components/products/Products.js"
import CardTotal  from "../components/card/CardTotal.js"
import Header from "../components/header/Header.js"

const HomePage=()=>{
        return(

             <>
            <Header />
             
            <div className="home px-6 flex flex-col justify-between gap-10 md:flex-row">
                <div className="categories ">
                    <div>
                      <Categories />
                    </div>
                </div>
            <div className="products flex-[9]  px-1">
                    <div className="">
                      <Products /> 
                    </div>
                </div>
                <div>
                    <div className="card-wrapper min-w-[300px] md:-mr-[24px] border"> 
                            <CardTotal/>
                    </div>
                </div>
            </div>
            </>
        )
}

export default HomePage;