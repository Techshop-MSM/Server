import express from 'express';
import { login } from '../controller/userController.js';

const loginRouter = express.Router();

loginRouter.get('/', (req, res) => {
    res.send('<h1>welcome to the login</h1>');
});

loginRouter.post('/', login);

export default loginRouter;
