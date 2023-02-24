 import User from "../models/User.js" ; 



 export const getUser = async(req , res , next ) =>{
      
    
       try {

        const getUser = await User.find(); 

         res.status(200).json(getUser)

       } catch (error) {
        res.status(500).json({error:"bulunamadı"})
       }
 }

 export const getIdUser = async(req,res,next) =>{
     
        try {
                const getIdUser = await User.findById(req.params.id)
                res.status(200).json(getIdUser)

        } catch (error) {
            res.status(500).json({error:"bulunamadı"})
        }
 }