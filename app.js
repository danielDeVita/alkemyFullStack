const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const methodOverride = require("method-override");
const cors = require("cors");

const routes = require("./routes");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(cors());

app.use('/', routes)

app.listen(port, () => console.log(`server running on port ${port}`))