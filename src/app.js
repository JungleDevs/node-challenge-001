import express from 'express';
import morgan from 'morgan  ';

const app = express();

app.use(morgan('common'));

app.get('*', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || '8080');
