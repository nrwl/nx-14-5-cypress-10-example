import { ClapResponse } from '@cypress-test/api-interfaces';
import * as express from 'express';

const app = express();

let clapCount = 0;

app.get('/clap-count', (_req, res) => {
  res.send({ clapCount });
});

app.post<'/clap', void, ClapResponse>('/clap', (_req, res) => {
  clapCount++;
  console.log(`Clap signal received!! Current clap count: ${clapCount}`);
  res.send({ clapCount });
});

const port = '3333';

const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
server.on('error', console.error);
