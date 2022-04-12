import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import sum from './sum';

const port: number = parseInt(String(process.env.PORT || 3000), 10);
const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send(`Hello World! <a href="/sum/2/3">2+3=?</a>`));

app.get('/sum/:a/:b', (req, res) => {
  const { a, b } = req.params;
  res.json({
    a,
    b,
    sum: sum(+a, +b),
  });
});

let ready = true;
app.get('/_status', (req, res) => {
  if (!ready) {
    res.status(503);
  }
  res.json({
    ok: ready,
  });
});

app.listen(port, '0.0.0.0', () => console.log(`Example app running http://127.0.0.1:${port}/ !`));

// hax to make docker container exit properly

const gracefulShutdown = (singal: string): void => {
  const usableDelay = 10000;

  console.log(`[${singal}]: Trying Service graceful shutdown (gracefulDelay = ${usableDelay} ms`);
  ready = false;

  setTimeout(() => {
    console.log(`[${singal}]: Service graceful shutdown completed. Bye.`);
    process.exit(0);
  }, usableDelay);
};
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
