const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const routes = require("./routes");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routes)

app.listen(port, () => console.log(`server running on port ${port}`))