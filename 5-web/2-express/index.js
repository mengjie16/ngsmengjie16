const express = require('express');

const server = express();


server.get("/",(req,res)=>{
  res.send(["1","2"]);// .send can send not only string ,.write only write string. ,.... .write needs .end in the end, .send does not need .end
});
server.get("/about",(req,res)=>{
  res.send("hello about");// .send can send not only string ,.write only write string. ,.... .write needs .end in the end, .send does not need .end
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});
// npm init -yes
//npm i express