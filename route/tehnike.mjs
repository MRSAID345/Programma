import express from "express";
import tehnika from "../db/tehnika.mjs";

const router = express.Router();

router.get('/tehnika', (req,res) =>{
    res.json(tehnika);
});

export default router;