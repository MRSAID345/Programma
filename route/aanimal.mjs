import express from "express";
import animal from "../db/animal.mjs";


const router = express.Router();

router.get('/animal', (req,res) =>{
    res.json(animal);
});

export default router;