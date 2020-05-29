const http = require('http');
// const fs = require('fs');
require('dotenv').config();

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  /* fs.readFile('./index.html', (err, html) => {
    if (err) {
      throw err;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.write('<br>')
    res.end('Hello world2');
  });   */

  let api_key = process.env.API_KEY;


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`API Key = ${api_key}`);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});