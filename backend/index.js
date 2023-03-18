const express = require('express');
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv');
dotenv.config();
const Login=require('./Routes/login')
const Register=require('./Routes/register');
const profile=require('./Routes/login');

const app = express();

const whitelist = process.env.WHITELISTED_DOMAINS
   
console.log(whitelist)

const corsOptions = {
    origin:true,
    credentials: true,
    exposedHeaders: ["set-cookie"],
};

app.use(cors(corsOptions));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", `${whitelist}`);
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});



app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cookieParser());

const dbUrl = process.env.MONGO_DB_CONNECTION_STRING;
const connectionParams = {
    useNewUrlParser: true,
};


mongoose.set('strictQuery', true);
mongoose
    .connect(dbUrl, connectionParams)
    .then(() => {
        console.info("connected to DB");
    })
    .catch((e) => {
        console.log("Error:", e);
    });
mongoose.set('strictQuery', true);

app.use(Login);
app.use(Register);
app.use(profile);

const Port = process.env.PORT;
app.listen(Port, "127.0.0.1");
console.log(`Node server running on port ${Port}`);


