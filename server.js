import express from 'express';
import config from './config';
import helmet from 'helmet';
import apiRouter from './api';

const server = express();

server.set('view engine', 'ejs');
server.use(helmet());

import serverRender from './serverRender';

server.get('/', (req, res) => {
  serverRender()
    .then(({ initialMarkup, initialData }) => {
      res.render('index', {
        initialMarkup,
        initialData,
      });
    })
    .catch(console.error);
});

server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port, config.host, () => {
  console.info(`Server listening on port ${config.port}`);
});
