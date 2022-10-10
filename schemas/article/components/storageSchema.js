import mongoose from 'mongoose';
import { basicArticleData } from '../basicData&Settings/basicArticleData.js';
import { schemaSettings } from '../basicData&Settings/schemaSettings.js';

export const storageSchema = mongoose.Schema(
    {
        baseData: basicArticleData,
        form: schemaSettings.string,
        capacity: schemaSettings.string,
        type: schemaSettings.string,
        cache: schemaSettings.string,
        interface: schemaSettings.string,
        pricePerGB: schemaSettings.string,
        recommended: schemaSettings.string,
        info: schemaSettings.string,
    },
    { versionKey: false }
);
export const storageModel = mongoose.model('storage', storageSchema);
