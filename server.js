const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");
const port = process.env.PORT || 3024;
const server = http.createServer(app);
console.log(port);
mongoose
  .connect(
    "mongodb://localhost:27017/Kronicle",{ useNewUrlParser: true,
    useUnifiedTopology: true }
    
  )
  .then((result) => {
    console.log("connected to database server starting");
    server.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });