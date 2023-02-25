import React, { useState, useEffect } from "react"
import Categories from "../components/categories/Categories.js"
import Products from "../components/products/Products.js"
import CardTotal from "../components/card/CardTotal.js"



const HomePage = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {

        const getCategories = async () =>{

            try {
                 const res = await  fetch("http://localhost:8800/api/category")
                const data = await res.json();
                setCategories(data)
            } catch (error) {
                console.log(error)
            }
        }
        getCategories();
    }, [categories])
  
    return (
        <>
            <div className="home px-6 flex flex-col justify-between gap-10 md:flex-row">
                <div className="categories ">
                    <div>
                        <Categories categories={categories} />
                    </div>
                </div>
                <div className="products flex-[9]  px-1">
                    <div className="">
                        <Products />
                    </div>
                </div>
                <div>
                    <div className="card-wrapper min-w-[300px] md:-mr-[24px] border">
                        <CardTotal />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;