import express from 'express';
import api     from './api';

const PORT = 3000;
const app = express();

app.use('/api', api);

export default {
  app,
  run() {
    if (!app.isListen) {
      app.listen(PORT, () => {
        console.log('listening at 3000');
        app.isListen = true;
      });
    }
  },
  PORT,
};
