import { isObjectIdOrHexString } from "mongoose";

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
    files: {
        type: File,
    },
    bool: {
        type: Boolean,
    },
    array: {
        type: Array,
    },
    sizes: {
        w: {type: number},
        h: {type: number},
        d: {type: number},
    },
    companyID: {
        type: iObjectId,
    }
}