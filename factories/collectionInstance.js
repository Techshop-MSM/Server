import { caseModel } from '../schemas/article/components/caseSchema.js';
import { cpuModel } from '../schemas/article/components/cpuSchema.js';
import { gpuModel } from '../schemas/article/components/gpuSchema.js';
import { mainboardModel } from '../schemas/article/components/mainboardSchema.js';
import { powerModel } from '../schemas/article/components/powerAdapterSchema.js';
import { ramModel } from '../schemas/article/components/ramSchema.js';
import { soundCardModel } from '../schemas/article/components/soundCardSchema.js';
import { storageModel } from '../schemas/article/components/storageSchema.js';
import { caseCreator, cpuCreator } from './objectCreator.js';

// handle different operations to different Collections
export const mongoCollectionInstance = (data, cat) => {
    console.log(cat);
    switch (cat) {
        case 'case':
            caseCreator(data, cat)
            break;

        case 'cpu':
            cpuCreator(data, cat);
            break;

        case 'gpu':
            gpuModel().save();
            break;

        case 'mainboard':
            mainboardModel().save();
            break;

        case 'power':
            powerModel().save();
            break;

        case 'ram':
            ramModel().save();
            break;

        case 'sound':
            soundCardModel().save();
            break;

        case 'storage':
            storageModel().save();
            break;

        default:
            console.log('Model not found!');
            break;
    }
};
