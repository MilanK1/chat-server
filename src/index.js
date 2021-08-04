import express from 'express';
import errorHandler from './modules/core/errorHandler.js';
import logger from './modules/core/logger.js';
import parseResponse from './modules/core/parseResponse.js';
import cors from './modules/core/cors.js';
import routes from './modules/core/routes.js';
import dbConnect from './modules/core/db.js';

const app = express();
const PORT = 5000;
dbConnect();
logger(app);
parseResponse(app);
cors(app);
routes(app);
app.get("/", function(req,res){
    res.send("Working message!")
})

errorHandler(app);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});