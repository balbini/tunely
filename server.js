const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static("public"));


app.listen(3000, function(){
  console.log("server working");
})
