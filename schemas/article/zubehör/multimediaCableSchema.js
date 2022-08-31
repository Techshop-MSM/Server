import mongoose from 'mongoose'
import { basicArticleData } from '../basicData&Settings/basicArticleData'
import { schemaSettings } from '../basicData&Settings/schemaSettings'

export const multimediaCableSchema = mongoose.Schema({
    baseData: basicArticleData,
    length: schemaSettings.number,
    color: schemaSettings.string,
    connection: {
        from: schemaSettings.string,
        to: schemaSettings.string,
    },
    transmissionSpeed: schemaSettings.string,
    supportedResolution: schemaSettings.array,
})
export const ArticleMultimediaCableModel = mongoose.model(
    'multimediaCableCol',
    multimediaCableSchema
)
