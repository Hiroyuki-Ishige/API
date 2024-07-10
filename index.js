//Public API list: https://github.com/appbrewery/public-api-lists/tree/master
// Alpha Vantage API documentation: https://www.alphavantage.co/documentation/ 



import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// connect to static files such as CSS under "public".
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res,)=>{    
    res.render("index.ejs", {sample: "changed folder name"})
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});