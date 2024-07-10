//Public API list: https://github.com/appbrewery/public-api-lists/tree/master
// Alpha Vantage API documentation: https://www.alphavantage.co/documentation/ 



import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";
import {promises as fs} from "fs"; //to read file

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

async function readFile() {
    try {
      const data = await fs.readFile('secret/alphaAPI.txt', 'utf8');
      return data.trim(); // Remove any extraneous whitespace/newline
    } catch (err) {
      console.error(err);
      throw err; // Re-throw the error after logging it
    };
    
  }

// connect to static files such as CSS under "public".
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", async (req, res,)=>{
    try {
        const apiKey = await readFile(); //Await the promise to get the API key
        console.log(apiKey);
        res.render("index.ejs", {sample: "changed folder name v2"});
    } catch (err){
        res.status(500).send("Internet Server Error")
    }

});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});