import mongoose from 'mongoose';
import { basicArticleData } from '../basicData&Settings/basicArticleData.js';
import { schemaSettings } from '../basicData&Settings/schemaSettings.js';

export const cpuSchema = mongoose.Schema({
    baseData: basicArticleData,
    cpuTyp: schemaSettings.string,
    model: schemaSettings.string,
    socket: schemaSettings.string,
    cores: schemaSettings.number,
    coreClock: schemaSettings.string,
    boostClock: schemaSettings.string,
    boxed: schemaSettings.bool,
    onboardGPU: schemaSettings.string,
    tdp: schemaSettings.string,
    info: schemaSettings.string,
},
{ versionKey: false });
export const cpuModel = mongoose.model('cpu', cpuSchema);
