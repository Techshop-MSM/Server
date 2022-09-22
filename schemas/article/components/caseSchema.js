import mongoose from 'mongoose';
import { basicArticleData } from '../basicData&Settings/basicArticleData.js';
import { schemaSettings } from '../basicData&Settings/schemaSettings.js';

export const caseSchema = mongoose.Schema({
    baseData: basicArticleData, //{fgfg}
    type: schemaSettings.string,
    color: schemaSettings.string,
    drive: schemaSettings.string,
    powerSupply: schemaSettings.string,
});
export const caseModel = mongoose.model('case', caseSchema);
