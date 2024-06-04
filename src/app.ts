import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.urlencoded({ limit: '5mb', extended: true }));
app.use(express.json({ limit: '5mb' }));
app.use(router)

export { app }