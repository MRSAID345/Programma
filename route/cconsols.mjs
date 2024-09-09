import express from "express";
import consols from "../db/consols.mjs";


const router = express.Router();

router.get('/consols', (req,res) =>{
    res.json(consols);
});

export default router;