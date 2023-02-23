
const express = require("express");


const app  = express();
const port= 8800

app.listen(port,  ()=>{

    console.log(`${port} ' una bağlandı`)
   

})

