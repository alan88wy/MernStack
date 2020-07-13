import express from 'express';
import config from './config';
import helmet from 'helmet';
import apiRouter from './api';

const server = express();

server.set('view engine', 'ejs');
server.use(helmet());

server.get('/', (req, res) => {
  res.render('index', {
    content: '...',
  });
});

server.use(express.static('public'));
server.use('/api', apiRouter);
server.listen(config.port, () => {
  console.info(`Server listening on port ${config.port}`);
});
