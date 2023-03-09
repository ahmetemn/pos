

import express from "express" ; 
import {createProduct ,getAllProduct ,getIdProduct , updateProduct ,deleteProduct} from "../controllers/products.js"
const router = express.Router();


//CREATE
router.post("/" ,createProduct );

///GET ALL 

router.get("/" , getAllProduct)


///GET ID 

router.get("/:id" ,getIdProduct )


///UPDATE 

router.put("/:id" ,updateProduct )

///DELETE

router.delete("/:id" , deleteProduct)

export default router ; 