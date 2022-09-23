import mongoose from 'mongoose';
import { basicArticleData } from '../basicData&Settings/basicArticleData.js';
import { schemaSettings } from '../basicData&Settings/schemaSettings.js';

export const mainboardSchema = mongoose.Schema({
    baseData: basicArticleData,
    typeModelVersion: schemaSettings.array,
    form: schemaSettings.string,
    socket: schemaSettings.string,
    supportedCPU: schemaSettings.array,
    maxMemory: schemaSettings.string,
    ramSocket: schemaSettings.string,
    supportedRamTypes: schemaSettings.array,
    recommended: schemaSettings.string,
    info: schemaSettings.string,
});
export const mainboardModel = mongoose.model('mainboard', mainboardSchema);
