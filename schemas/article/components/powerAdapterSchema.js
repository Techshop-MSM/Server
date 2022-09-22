import mongoose from 'mongoose';
import { basicArticleData } from '../basicData&Settings/basicArticleData.js';
import { schemaSettings } from '../basicData&Settings/schemaSettings.js';

export const powerAdapterSchema = mongoose.Schema({
    baseData: basicArticleData,
    form: schemaSettings.string,
    maxPower: schemaSettings.string,
    efficiency: schemaSettings.string,
    effiClass: schemaSettings.string,
    shockResistance: schemaSettings.string,
    cableManagement: schemaSettings.string,
    recommended: schemaSettings.string,
    info: schemaSettings.string,
});
export const powerModel = mongoose.model('powerAdapter', powerAdapterSchema);
