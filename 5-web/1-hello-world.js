const http = require('http');

const server = http.createServer((req, res) => {
  //req res are stream
  console.dir(req,{depth:0})
  console.dir(req.url);
  console.dir(res,{depth:0})
  res.end('Hello World\n');//res.write('Hello World\n'); res.end();
});

server.listen(4242, () => {
  console.log('Server is running...');
});

///2
const requestListener =(req, res) => {
  res.end('Hello World\n');
};
const server1 = http.createServer(requestListener);
server1.listen(4243, () => {
  console.log('Server1 is running...');
});


///3
const requestListener2 =(req, res) => {
  res.end('Hello World\n');
};
const server2 = http.createServer();
server2.on("request",requestListener2);
server2.listen(4244, () => {
  console.log('Server1 is running...');
});


//monitor
//nodemon