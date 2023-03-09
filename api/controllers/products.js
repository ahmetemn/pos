
import Product from "../models/Product.js";


//Create
export const createProduct = async (req, res, next) => {

    const newProduct = new Product(req.body);
    try {

        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
    } catch (error) {
        next(error)
    }
}

//Gets 

export const getAllProduct = async (req, res, next) => {

    try {
        const allProduct = await Product.find();
        res.status(200).json(allProduct)

    } catch (error) {
        next(error)
    }
}

///GetById 

export const getIdProduct = async (req, res, next) => {
    try {
        const idProduct = await Product.findById(req.params.id);

        if (!idProduct) {
            res.send("Not found Product")
        }
        else {
            res.status(200).json(idProduct)
        }


    } catch (error) {
        next(error)
    }
}


//Update 

export const updateProduct = async (req, res, next) => {

    try {
        const productUpdate = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(productUpdate);

    } catch (error) {
        next(error)
    }
}

///Delete 

export const deleteProduct = async (req, res, next) => {

    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).send("Product Has Been Deleted")
    } catch (error) {
        next(error)
    }
}