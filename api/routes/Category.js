import express from "express";
import {createCategory , getAllCategory , getIdCategory , updateCategory , deleteCategory} from "../controllers/category.js";
const router = express.Router();


//CREATE
router.post("/" , createCategory);

///GET ALL 

router.get("/" ,getAllCategory )


///GET ID 

router.get("/:id" , getIdCategory)


///UPDATE 

router.put("/:id" , updateCategory)

///DELETE

router.delete("/:id" ,deleteCategory )

export default router;