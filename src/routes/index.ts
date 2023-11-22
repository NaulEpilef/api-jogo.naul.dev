import express from 'express';

import documentRoute from './documents.routes';

const router = express();

router.use("/documents", documentRoute);

export default router;