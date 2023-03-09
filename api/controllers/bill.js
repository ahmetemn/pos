
import Bill from "../models/Bill.js"

//CREATE 

export const createBill = async (req, res, next) => {

    const createBill = new Bill(req.body);
    try {
        const savedBill = await createBill.save();
        res.status(200).json(savedBill);

    } catch (error) {
        next(error)
    }
}


///GetAll 

export const getBill = async (req, res, next) => {

    try {

        const getBill = await Bill.find();
        res.status(200).json(getBill);


    } catch (error) {

        next(error)
    }
}

///getIdBıll 

export const getIdBıll = async (req, res, next) => {
    try {

        const getIdBill = await Bill.findById(req.params.id)

        if (!getIdBill) {
            res.send("Not found Bill")
        }
        else {
            res.status(200).json(getIdBill)
        }


    } catch (error) {
        next(error)
    }
}

///Update  

    export const updateBıll = async(req,res,next) =>{

        try {
            
            const updateBill = await Bill.findByIdAndUpdate(req.param.id , req.body , {new:true})
            res.send(200).json(updateBill)
        } catch (error) {
            next(error)
        }
    }

    export const deleteBill = async(req,res , next ) =>{

        try {
                await  Bill.findByIdAndDelete(req.params.id);
                res.status(200).send("Bill has been deleted")

        } catch (error) {

            next(error)
        }
    }