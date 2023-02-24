import express from "express";

import {createBill,getBill,getIdBıll,updateBıll,deleteBill}  from "../controllers/bill.js"
const router = express.Router();

//CREATE
router.post("/" ,createBill );

///GET ALL 

router.get("/" ,getBill )


///GET ID 

router.get("/:id" ,getIdBıll )


///UPDATE 

router.put("/:id" ,updateBıll )

///DELETE

router.delete("/:id" ,deleteBill )

export default router;