import express from "express";
import mebel from "../db/mebel.mjs";

const router = express.Router();

router.get('/mebel', (req,res) =>{
    res.json(mebel);
});

export default router;