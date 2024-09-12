import express from "express"

import animal from "./db/animal.mjs";
import cartoon from "./db/cartoon.mjs";
import consols from "./db/consols.mjs";
import cosmos from "./db/cosmos.mjs";
import dinosaur from "./db/dinosaur.mjs"
import guns from "./db/guns.mjs";
import mebel from "./db/mebel.mjs";
import plane from "./db/plane.mjs";
import tehnika from "./db/tehnika.mjs";
import warmovie from "./db/warmovie.mjs";





const port = 3000;

const app = express()

app.get("/cartoon", (req,res) =>{
   res.json(cartoon)
})
app.get("/consols", (req,res) =>{
   res.json(consols)
})
app.get("/cosmos", (req,res) =>{
   res.json(cosmos)
})
app.get("/guns", (req,res) =>{
   res.json(guns)
})
app.get("/dinosaur", (req,res) =>{
   res.json(dinosaur)
})
app.get("/mebel", (req,res) =>{
   res.json(mebel)
})
app.get("/plane", (req,res) =>{
   res.json(plane)
})
app.get("/tehnika", (req,res) =>{
   res.json(tehnika)
})
app.get("/warmovie", (req,res) =>{
   res.json(warmovie)
})


app.get("/animal", (req,res) =>{
    res.json(animal);
});





app.listen(port,()=>{
    console.log(`port is listening on port ${port}`)
   
})