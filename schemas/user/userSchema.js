import mongoose from 'mongoose'

const reqString = {
    type: String,
    required: true,
}

const string = {
    type: String,
}

const reqNumber = {
    type: Number,
    required: true,
}

const number = {
    type: Number,
}

const array = {
    type: Array,
}

const bool = {
    type: Boolean,
}

const userSchema = mongoose.Schema({
    kID: string,
    mail: reqString,
    username: reqString,
    password: reqString,
    group: string,
    status: {
        type: string,
        enum: ['pending', 'active'],
        default: 'pending',
    },
    order: {
        invoice: array,
        articles: array,
    },
    sex: string,
    firstname: reqString,
    lastname: reqString,
    address: {
        street: string,
        nr: number,
        zip: number,
        city: string,
        country: string,
    },
    payment: {
        method: string,
        iban: string,
        bank: string,
        sepa: bool,
    },
    wishlist: array,
    newsletter: bool,
})

export const UserDataModel = mongoose.model('usersCol', userSchema)
