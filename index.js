const express = require("express");
const app = express();
const cors = require("cors");
const funkcije = require('./functions')
app.use(cors());
app.use(express.json())

const port = 3001;

app.post("/sort-numbers", (req, res) => {

    let arr = req.body.numbers;
    let sortedArr = funkcije.sortArray(arr);
    res.json({sortedArr})
    
});


app.listen(port, () => {
    console.log(`Server is up and listening to port ${port}`);
});
