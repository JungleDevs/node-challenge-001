import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

import router from './routes';

const app = express();

app.use(helmet());
app.use(morgan('common'));

app.use(router);

app.listen(process.env.PORT || '8080');
