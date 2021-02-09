import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import './shared/database';
import routerV1 from './shared/router/v1';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('common'));
app.use(express.json());

app.use('/api/v1', routerV1);

export default app;
