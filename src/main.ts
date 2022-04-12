import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import sum from './sum';
import double from './double';
import divide from './divide';

const port: number = parseInt(String(process.env.PORT || 3000), 10);
const app: Express = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) =>
  res.send(
    `Hello World!
<li>
  <ul>
    <a href="/sum/2/3">2+3=?</a>
  </ul>
  <ul>
    <a href="/double/12">12(double)=?</a>
  </ul>
  <ul>
  <a href="/divide/10/2">10/2=?</a>
  </ul>
</li>
`,
  ),
);

app.get('/sum/:a/:b', (req: Request, res: Response) => {
  const { a, b } = req.params;
  res.json({
    a,
    b,
    sum: sum(+a, +b),
  });
});

app.get('/double/:number/', (req: Request, res: Response) => {
  const { number } = req.params;
  res.json({
    number,
    double: double(+number),
  });
});

app.get('/divide/:a/:b/', (req: Request, res: Response) => {
  const { a, b } = req.params;
  res.json({
    a,
    b,
    divide: divide(+a, +b),
  });
});

let ready = true;
app.get('/_status', (req: Request, res: Response) => {
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
