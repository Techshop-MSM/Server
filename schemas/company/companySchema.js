import mongoose from 'mongoose'
import { schemaSettings } from '../article/basicData&Settings/schemaSettings'

export const companySchema = mongoose.Schema({
    company: {
        mail: schemaSettings.reqString,
        contact: schemaSettings.reqString,
        name: schemaSettings.string,
        groupe: schemaSettings.reqString,
        street: schemaSettings.reqString,
        nr: schemaSettings.reqNumber,
        zip: schemaSettings.reqNumber,
        city: schemaSettings.reqString,
        country: schemaSettings.reqString,
        iban: schemaSettings.reqString,
        bank: schemaSettings.reqString,
    },
    articles: schemaSettings.array,
})

export const CompanyDataModel = mongoose.model('companyCol', companySchema)
