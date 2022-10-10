import mongoose from 'mongoose';
import { schemaSettings } from '../article/basicData&Settings/schemaSettings.js';

export const companySchema = mongoose.Schema(
    {
        name: schemaSettings.reqString,
        mail: schemaSettings.reqString,
        sex: schemaSettings.string,
        contact: schemaSettings.reqString,
        group: schemaSettings.reqString,
        street: schemaSettings.string,
        nr: schemaSettings.number,
        zip: schemaSettings.number,
        city: schemaSettings.string,
        country: schemaSettings.string,
        iban: schemaSettings.string,
        bank: schemaSettings.string,
    },
    {
        articles: schemaSettings.array,
    }
);

export const CompanyDataModel = mongoose.model('supplies', companySchema);