import mongoose from 'mongoose'
import { basicArticleData } from '../basicData&Settings/basicArticleData'
import { schemaSettings } from '../basicData&Settings/schemaSettings'

export const ramSchema = mongoose.Schema({
    baseData: basicArticleData,
    serie: schemaSettings.string,
    modell: schemaSettings.string,
    family: schemaSettings.string,
    color: schemaSettings.string,
    form: schemaSettings.string,
    Kapazität: schemaSettings.string,
    pieces: schemaSettings.number,
    physicRate: schemaSettings.number,
    pins: schemaSettings.number,
    voltage: schemaSettings.number,
    timings: schemaSettings.string,
    feature: schemaSettings.string,
    info: schemaSettings.string,
})
export const ArticleRamModel = mongoose.model('ramCol', ramSchema)
