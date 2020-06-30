const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

app.get("/api/customers", (req, res) => {
    res.send([
        {
            "id": 1,
            "name": "Steve Lee",
            "birthday": "900511",
            "gender": "male",
            "job": "Student",
            "image": "https://placeimg.com/64/64/1"
          },
          {
            "id": 2,
            "name": "James Park",
            "birthday": "930201",
            "gender": "male",
            "job": "Clerk",
            "image": "https://placeimg.com/64/64/2"
          },
          {
            "id": 3,
            "name": "Irene Kim",
            "birthday": "950603",
            "gender": "female",
            "job": "Designer",
            "image": "https://placeimg.com/64/64/3"
          }
    ])
})

app.listen(port, () => console.log(`Lisenting on port ${port}`))