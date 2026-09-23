const { createServer } = require('http');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

// cPanel Phusion Passenger dynamically assigns process.env.PORT (port number or socket path)
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Next.js app ready on port/socket: ${port}`);
  });
});
