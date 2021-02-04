import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import router from './routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('common'));

app.use(router);

app.listen(process.env.PORT || '8080');
