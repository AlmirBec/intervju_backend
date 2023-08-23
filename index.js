const express = require("express");
const app = express();
const cors = require("cors");
const funkcije = require('./functions')
app.use(cors());
app.use(express.json())

const port = 3001;

app.post("/sort-numbers", (req, res) => {
    let objekt = req.body;
    let arr = []
    for(const key in objekt){
        arr.push(objekt[key]);
    }
    for(let i = 0; i < arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }
    let sortedArr = funkcije.sortArray(arr);
    res.json({sortedArr})

});


app.listen(port, () => {
    console.log(`Server is up and listening to port ${port}`);
});
