const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();
const MONGO_URL = "mongodb+srv://mahbub045:G71rEXEZ47BCoN6G@cluster0.ed6fkc3.mongodb.net/friendbuzz?retryWrites=true&w=majority";

mongoose.connect(MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB:', err);
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
    console.log("Backend server is running!");
});