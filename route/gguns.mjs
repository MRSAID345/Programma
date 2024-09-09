import express from "express";
import guns from "../db/guns.mjs";

const router = express.Router();

router.get('/guns', (req,res) =>{
    res.json(guns);
});

export default router;