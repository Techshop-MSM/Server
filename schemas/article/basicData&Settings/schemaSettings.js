import mongoose from 'mongoose';

export const schemaSettings = {
    reqString: {
        type: String,
        required: true,
    },
    string: {
        type: String,
    },
    reqNumber: {
        type: Number,
        required: true,
    },
    number: {
        type: Number,
    },
    bool: {
        type: Boolean,
    },
    array: {
        type: Array,
    },
    sizes: {
        w: { type: Number },
        h: { type: Number },
        d: { type: Number },
    },
    
    companyID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'companys'
    },
    
};
