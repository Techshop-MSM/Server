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
export const mongoCollectionInstance = (data, cat) => {
    console.log(cat);
    switch (cat) {
        case 'case':
            caseCreator(data, cat);
            break;

        case 'cpu':
            cpuCreator(data, cat);
            break;

        case 'gpu':
            gpuCreator(data, cat);
            break;

        case 'mainboard':
            mainboardCreator(data, cat);
            break;

        case 'power':
            powerCreator(data, cat);
            break;

        case 'ram':
            ramCreator(data, cat);
            break;

        case 'sound':
            soundCreator(data, cat);
            break;

        case 'storage':
            storageCreator(data, cat);
            break;

        default:
            console.log('Model not found!');
            break;
    }
};
