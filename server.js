const http = require('http');
const fs = require('fs')

// declare server variables
const hostname = '127.0.0.1';
const port = 8080;

const display = http.createServer(function(request, response) {
  response.writeHeader (200, {'Content-Type':'text/html'});
  
  const readStream = fs.createReadStream('./index.html', 'utf8')
  readStream.pipe(response)
})
display.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
