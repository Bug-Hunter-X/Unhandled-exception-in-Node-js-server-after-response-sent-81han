const http = require('http');

const server = http.createServer((req, res) => {
  setTimeout(() => {
    if (req.url === '/error') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('This is a test.');
      try {
          //Some code that might throw an error
          throw new Error('Simulated error after response started');
      } catch(error) {
          console.error('Error:', error);
          res.end();
          return;
      }
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    }
  }, 100); 
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});