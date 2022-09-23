import mongoose from 'mongoose';
import { basicArticleData } from '../basicData&Settings/basicArticleData.js';
import { schemaSettings } from '../basicData&Settings/schemaSettings.js';

export const gpuSchema = mongoose.Schema({
    baseData: basicArticleData,
    size: schemaSettings.string,
    type: schemaSettings.string,
    model: schemaSettings.string,
    version: schemaSettings.string,
    chip: schemaSettings.string,
    gpuFrequenz: schemaSettings.string,
    OcModeBoost: schemaSettings.string,
    memory: schemaSettings.string,
    recommended: schemaSettings.string,
    info: schemaSettings.string,
});
export const gpuModel = mongoose.model('gpu', gpuSchema);
