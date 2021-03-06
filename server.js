/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  [
    ['/questions/:queryId', '/question', 'queryId']
  ].forEach(([maskedUrl, actualUrl, id]) => {
    server.get(maskedUrl, (req, res) => {
      let queryParams;
      id ? queryParams = { queryId: '/questions/' + req.params[id] } : queryParams = {};
      app.render(req, res, actualUrl, { ...queryParams });
    });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
