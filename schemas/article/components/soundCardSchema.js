import mongoose from 'mongoose';
import { basicArticleData } from '../basicData&Settings/basicArticleData.js';
import { schemaSettings } from '../basicData&Settings/schemaSettings.js';

export const soundCardSchema = mongoose.Schema({
    baseData: basicArticleData,

    soundchip: schemaSettings.string,
    channel: schemaSettings.number,
    digital: schemaSettings.string,
    audio: schemaSettings.string,
    sampleRate: schemaSettings.string,
    powerConnection: schemaSettings.string,
    recommended: schemaSettings.string,
    info: schemaSettings.string,
});
export const soundCardModel = mongoose.model('soundCard', soundCardSchema);
