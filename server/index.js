import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import todoRouter from './router/todo.js';
import { sequelize } from './db/database.js';

const app = express();

app.use(express.json());
// 사용자 로그
app.use(morgan('tiny'));

app.use('/todo', todoRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.log(error);
  res.sendStatus(500);
});

sequelize.sync().then(() => {
  app.listen(8080);
  console.log('서버에 연결되었습니다');
});
