import mongoose from 'mongoose';
import { basicArticleData } from '../basicData&Settings/basicArticleData.js';
import { schemaSettings } from '../basicData&Settings/schemaSettings.js';

export const gpuSchema = mongoose.Schema({
    baseData: basicArticleData,
    size: schemaSettings.string,
    type: schemaSettings.number,
    model: schemaSettings.string,
    version: schemaSettings.string,
    chip: schemaSettings.string,
    gpuFrequenz: schemaSettings.number,
    OcModeBoost: schemaSettings.number,
    memory: schemaSettings.number,
    recommended: schemaSettings.string,
    info: schemaSettings.string,
});
export const gpuModel = mongoose.model('gpu', gpuSchema);
