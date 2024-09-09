import express from "express"
import bodyParser from "body-parser";
import fantasy from "./route/fantasyWarmovie.mjs";
import kartoon from "./route/kartoon.mjs";
import aanimal from "./route/aanimal.mjs";
import cconsols from "./route/cconsols.mjs";
import ccosmos from "./route/ccosmos.mjs";
import ddinosaur from "./route/ddinosaur.mjs";
import gguns from "./route/gguns.mjs";
import mmebels from "./route/mmebels.mjs";
import plene from "./route/plene.mjs";
import tehnike from "./route/tehnike.mjs";

const port = 3000;

const app = express()

app.use(fantasy);
app.use(kartoon);
app.use(aanimal);
app.use(cconsols);
app.use(ccosmos);
app.use(ddinosaur);
app.use(gguns);
app.use(mmebels);
app.use(plene);
app.use(tehnike);

app.use(bodyParser.json())



app.listen(port,()=>{
    console.log(`port is listening on port ${port}`)
   
})