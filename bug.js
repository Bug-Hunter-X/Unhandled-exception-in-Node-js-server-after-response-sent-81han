const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a delay to trigger the bug
  setTimeout(() => {
    if (req.url === '/error') {
      // Throw an error after the response has been started
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('This is a test.');
      throw new Error('Simulated error after response started');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    }
  }, 100); // Simulate some work
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});