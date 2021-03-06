import axios from 'axios';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';
import config from './config';

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`).then((res) => {
    return {
      initialMarkup: ReactDOMServer.renderToString(<App initialData={res.data} />),
      initialData: res.data,
    };
  });

export default serverRender;
