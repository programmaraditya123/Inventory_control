const express = require('express');
const cors = require('cors');
const authRoute = require('./Routes/authRoute');
const connectDB = require('./config/db.js');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//connect to db
connectDB();

//routes
app.use("/app/v1/auth",authRoute);

app.get("/",(req,res) => {
    res.send("hii thi sis server.js")

})



app.listen(8080,() => {
    console.log('Server is Runing on PORT 8080')
});