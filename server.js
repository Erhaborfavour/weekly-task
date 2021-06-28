const http = require('http');
const fs = require('fs')


// declare server variables
const hostname = '127.0.0.1';
const port = 8080;


const server=http.createServer(function(req, resp) {

  resp.writeHeader (200, {'Content-Type':'text/html'});
  var readStream = fs.createReadStream('./MyPage.html', 'utf8')
  readStream.pipe(resp)
})
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});


// //create an object of EventEmitter class from events module
// const myEmitter = new events.EventEmitter();


// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// // //create an object of EventEmitter class from events module
// // const myEmitter = new events.EventEmitter();

// //  //Subscribe for ping event
// //  myEmitter.on('ping', function (data) {
// //     console.log('First event: ' + data);
// //  });

// //  // Raising ping event
// //  myEmitter.emit('ping', 'My first Node.js event has been triggered.');

// // const server = http.createServer((req, res) => {
// //   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/plain');
// //   res.end('Hello World\nWe are doing great');
// // });

// // server.listen(port, hostname, () => {
// //   console.log(`Server running at http://${hostname}:${port}/`);
// // });