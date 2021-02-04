import express from 'express';
import morgan from 'morgan';
import router from './routes';

const app = express();

app.use(morgan('common'));

app.use(router);

app.listen(process.env.PORT || '8080');
