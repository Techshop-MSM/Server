import mongoose from 'mongoose'
import { schemaSettings } from '../article/basicData&Settings/schemaSettings'

const userSchema = mongoose.Schema({
    kID: schemaSettings.string,
    mail: schemaSettings.reqString,
    username: schemaSettings.reqString,
    password: schemaSettings.reqString,
    group: schemaSettings.string,
    status: {
        type: schemaSettings.string,
        enum: ['pending', 'active'],
        default: 'pending',
    },
    order: {
        invoice: schemaSettings.array,
        articles: schemaSettings.array,
    },
    sex: string,
    firstname: schemaSettings.reqString,
    lastname: schemaSettings.reqString,
    address: {
        street: schemaSettings.string,
        nr: schemaSettings.number,
        zip: schemaSettings.number,
        city: schemaSettings.string,
        country: schemaSettings.string,
    },
    payment: {
        method: schemaSettings.string,
        iban: schemaSettings.string,
        bank: schemaSettings.string,
        sepa: schemaSettings.bool,
    },
    wishlist: schemaSettings.array,
    newsletter: schemaSettings.bool,
})

export const UserDataModel = mongoose.model('usersCol', userSchema)
