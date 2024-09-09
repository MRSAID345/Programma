import express from "express";
import plane from "../db/plane.mjs";

const router = express.Router();

router.get('/plane', (req,res) =>{
    res.json(plane);
});

export default router;