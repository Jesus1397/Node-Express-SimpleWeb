const express = require("express");
const app = express();
const path = require("path");

//CONFIG
app.set("port", 3000);
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

//MIDDLEWARES

//ROUTES
app.use(require("./routes/index"));

//STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

//SERVER START
app.listen(app.get("port"), () => {
  console.log("Server  http://localhost:" + app.get("port"));
});
