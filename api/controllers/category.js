import Category from "../models/Category.js";

///CREATE
export const createCategory = async (req, res, next) => {

    const newCategory = new Category(req.body)
    try {

        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory)

    } catch (err) {
        next(err)
    }

}

///GETS ALL 

export const getAllCategory = async (ref, res, next) => {

    try {

        const categories = await Category.find({});
        res.status(200).json(categories);

    } catch (err) {
        next(err)
    }


}

///GET ID 

export const getIdCategory = async (req, res, next) => {
    try {
        const getidCategory = await Category.findById(req.params.id)

                if(!getidCategory) {
                    
                   res.send("Category not found ")
                 
                }
                else {
                    res.status(200).json(getidCategory)                
                }

     
    } catch (err) {
        next(err)
    }
}


///UPDATE 

export const updateCategory = async(req,res , next) =>{
    try{
        const updateCategory = await Category.findByIdAndUpdate(req.params.id , req.body , {new:true})
        
        res.status(200).json(updateCategory)
    }catch(err){
        next(err)
    }
}

export const deleteCategory = async(req,res,next)=>{
    try{

        await Category.findByIdAndDelete(req.params.id)
        res.status(200).send("Category has been deleted")

    }catch(err){
        next(err)
    }
}
 