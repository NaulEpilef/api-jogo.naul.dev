import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes';

import twitchBot from './bots/twitchBot';

const app = express();
const port = 3333;

app.use(cors());
app.use(router);

app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
});

twitchBot();