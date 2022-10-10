import mongoose from 'mongoose';
import { caseModel } from '../schemas/article/components/caseSchema.js';
import { cpuModel } from '../schemas/article/components/cpuSchema.js';
import { loadDataFromDB } from './loadDatafromDB.js';
import {
    caseCreator,
    cpuCreator,
    gpuCreator,
    mainboardCreator,
    powerCreator,
    ramCreator,
    soundCreator,
    storageCreator,
} from './objectCreator.js';

// handle different operations to different Collections
export const mongoCollectionInstance = (data, cat, reason) => {
    console.log(cat);
    switch (cat) {
        case 'case':
            reason === 'upload' && caseCreator(data, cat);
            reason === 'load' && loadDataFromDB(cat);
            break;

        case 'cpu':
            reason === 'upload' && cpuCreator(data, cat);
            reason === 'load' && loadData(cat);
            break;

        case 'gpu':
            reason === 'upload' && gpuCreator(data, cat);
            reason === 'load' && loadData(cat);
            break;

        case 'mainboard':
            reason === 'upload' && mainboardCreator(data, cat);
            reason === 'load' && loadData(cat);
            break;

        case 'powerAdapter':
            reason === 'upload' && powerCreator(data, cat);
            reason === 'load' && loadData(cat);
            break;

        case 'ram':
            reason === 'upload' && ramCreator(data, cat);
            reason === 'load' && loadData(cat);
            break;

        case 'soundCard':
            reason === 'upload' && soundCreator(data, cat);
            reason === 'load' && loadData(cat);
            break;

        case 'storage':
            reason === 'upload' && storageCreator(data, cat);
            reason === 'load' && loadData(cat);
            break;

        default:
            console.log('Model not found!');
            break;
    }
};
