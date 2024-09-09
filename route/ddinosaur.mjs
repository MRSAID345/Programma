import express from "express";
import dinosaur from "../db/dinosaur.mjs";

const router = express.Router();

router.get('/dinosaur', (req,res) =>{
    res.json(dinosaur);
});

export default router;