

 import express from "express"; 

 import {getUser , getIdUser} from "../controllers/users.js"

 const router = express.Router() 


 router.get("/" , getUser);
 
 router.get("/:id" , getIdUser);

 export default router;
