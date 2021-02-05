import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import router from './routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('common'));
app.use(express.json());

app.use(router);

export default app;
