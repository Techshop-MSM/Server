import mongoose from 'mongoose';
import { schemaSettings } from './schemaSettings.js';

export const basicArticleData = mongoose.Schema({
    articleName: schemaSettings.reqString,
    articleNr: schemaSettings.number,
    category: schemaSettings.reqString,
    producerNr: schemaSettings.string,
    company: schemaSettings.companyID, // populate
    priceEK: schemaSettings.reqNumber,
    priceVK: schemaSettings.number,
    counter: {
        stock: schemaSettings.number,
        ratingCounter: schemaSettings.number,
        purchases: schemaSettings.number,
        ratings: schemaSettings.array,
        ratingAvg: schemaSettings.number,
    },
    comments: schemaSettings.array,
});
