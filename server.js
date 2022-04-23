const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");
const port = process.env.PORT || 3024
const server = http.createServer(app);
console.log(port);
mongoose
  .connect(
    "mongodb+srv://kronicles:k4FE5pRs3u8OY8cg@cluster0.ocg8w.mongodb.net/kronicles?authSource=admin&replicaSet=atlas-hkjmcm-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",{ useNewUrlParser: true,
    useUnifiedTopology: true }
    
  )
  .then((result) => {
    console.log("connected to database server starting");
    server.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });