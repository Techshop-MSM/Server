import mongoose from 'mongoose';
import { envConfig } from '../scripts&helpertools/config.js';

mongoose
    .connect(envConfig.DB_MONGO_URL)
    .then(() => console.log('Mongo Connection established'))
    .catch((err) => console.log('Error: ', err.message));
