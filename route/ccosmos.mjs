import express from "express";
import cosmos from "../db/cosmos.mjs";

const router = express.Router();

router.delete('/cosmos', (req,res) =>{
    const id = req.query.id

    const data = cosmos.filter((data) => data.id != id);

    res.send(data);
});

export default router;