import mongoose from 'mongoose';
import { basicArticleData } from '../basicData&Settings/basicArticleData.js';
import { schemaSettings } from '../basicData&Settings/schemaSettings.js';

export const ramSchema = mongoose.Schema({
    baseData: basicArticleData,
    form: schemaSettings.string,
    capacity: schemaSettings.string,
    modules: schemaSettings.string,
    physicRate: schemaSettings.string,
    firstLatency: schemaSettings.string,
    color: schemaSettings.string,
    pricePerGB: schemaSettings.string,
    recommended: schemaSettings.string,
    info: schemaSettings.string,
});
export const ramModel = mongoose.model('ram', ramSchema);
