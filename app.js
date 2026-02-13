const express = require("express");
const app = express();  // initializing the server
app.use(express.urlencoded({ extended: true }));
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", indexRouter);
app.use("/info", indexRouter);

const PORT = 3002;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My first Express app - listening on port ${PORT}!`);
});