import express from 'express';
import cors from 'cors';
import './db/mongo-connect.js';
//import { loginRouter, registerRouter } from './controllerRoutes/userControllerRoute.js';
import { loginController } from './controller/loginController.js';
import { registerController } from './controller/registerController.js';
import { dbController } from './controller/dbController.js';
import { socketServer } from './socketserver.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>This is just a test!</h1>');
});

// Public Routes
app.use('/login', loginController);
app.use('/register', registerController);

// Management Routes
app.use('/updateDatabase', dbController);
//app.use('/admin_ticket', ticketController);

app.use((req, res, next) => {
    res.status(404).json;
});

const PORT = process.env.PORT || 5500;
const httpServer = app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

socketServer(httpServer);
