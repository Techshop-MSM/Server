import mongoose from 'mongoose'
import { basicArticleData } from '../basicData&Settings/basicArticleData'
import { schemaSettings } from '../basicData&Settings/schemaSettings'

export const storageSchema = mongoose.Schema({
    baseData: basicArticleData,
    zoll: schemaSettings.number,
    capacity: schemaSettings.number,
    Umdrehung: schemaSettings.number,
    cache: schemaSettings.number,
    maxPowerConsumption: schemaSettings.number,
    shockResistance: schemaSettings.number,
})
export const ArticleStorageModel = mongoose.model('storageCol', storageSchema)
