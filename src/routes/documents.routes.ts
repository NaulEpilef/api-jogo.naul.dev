import express from 'express';

import generateRandomDocs from '../services/documents/generateRandomDocs';

const route = express();

route.get("/random", async (req, res) => {
  const docs = await generateRandomDocs();

	res.status(200).json(docs);
});

export default route;