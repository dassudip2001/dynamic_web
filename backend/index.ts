import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import heroRouter from './src/routes/heroRouter';
import ourServiceRoute from './src/routes/ourServiceRoute';
import workRoute from './src/routes/ourWorkRoute';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;
console.log('PORT', PORT);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.use('/api/v1', heroRouter);
app.use('/api/v1', ourServiceRoute);
app.use('/api/v1', workRoute);

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});
