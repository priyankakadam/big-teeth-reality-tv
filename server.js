const express = require("express");
const bodyParser = require("body-parser");
const routes =  require("./routes");
const cors = require("cors");

const app = express();

const db = require('./model');
db.sequelize.sync();
// db.sequelize.sync().then(() => {
//     console.log("Drop and re-sync db.");
// });


const corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    res.json({ message: "Welcome to Priyankas application." });
});

app.use('/participant', routes);

app.listen(3000);
