import express from "express";
import cartoon from "../db/cartoon.mjs";

const router = express.Router();

router.get('/cartoon', (req,res) =>{
    res.json(cartoon);
});

export default router;