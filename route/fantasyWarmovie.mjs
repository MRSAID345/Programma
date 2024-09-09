import express from "express";
import warmovie from "../db/warmovie.mjs";


const router = express.Router();

router.get('/warmovie', (req,res) =>{
    res.json(warmovie);
});

export default router;