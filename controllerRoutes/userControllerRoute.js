import express from 'express';

import { register } from '../controller/userController.js';

const registerRouter = express.Router();

registerRouter.get('/', (req, res) => {
    res.send('<h1>welcome to the register</h1>');
});

registerRouter.post('/register', register);

export default registerRouter;
