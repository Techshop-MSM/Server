import { caseModel } from '../schemas/article/components/caseSchema.js';
import { cpuModel } from '../schemas/article/components/cpuSchema.js';
import { gpuModel } from '../schemas/article/components/gpuSchema.js';
import { mainboardModel } from '../schemas/article/components/mainboardSchema.js';
import { powerModel } from '../schemas/article/components/powerAdapterSchema.js';
import { ramModel } from '../schemas/article/components/ramSchema.js';
import { soundCardModel } from '../schemas/article/components/soundCardSchema.js';
import { storageModel } from '../schemas/article/components/storageSchema.js';
import { CompanyDataModel } from '../schemas/company/companySchema.js';
import { createArticleNumber } from './objectCreatorFactories/createArticleNumber.js';
import { createRandomProductNumber } from './objectCreatorFactories/createProductNumber.js';
import { randomStock } from './objectCreatorFactories/randomStock.js';

const baseData = (article, cat) => {
    let brand = { name: article.name.split(' ') };
    return {
        baseData: {
            articleName: article.name,
            articleNr: createArticleNumber(article.name, cat),
            category: cat,
            brand: brand.name,
            producerNr: createRandomProductNumber(),
            //company: CompanyDataModel.findOne(brand.name), // populate
            priceEK: article.price_usd,
            stock: randomStock(),
            purchases: article.rating_count,
            ratingCounter: 5,
            ratings: [3, 5, 2, 4, 1],
            comments: [],
        },
    };
};

export const caseCreator = (data, cat) => {
    const casesUpload = [];

    data.map((article) => {
        let caseObj = {
            ...baseData(article, cat),
            type: article.type,
            color: article.color,
            drive: article.side_panel_window,
            powerSupply: article.power_supply,
        };
        casesUpload.push(caseObj);
        caseModel(caseObj).save();
    });
    console.log('Case 01:', casesUpload[0]);
};

export const cpuCreator = (data, cat) => {
    const cpuUpload = [];
    data.map((article) => {
        let nameDetails = { type: article.name.split(' ') };

        const cpuObj = {
            ...baseData(article, cat),
            cpuTyp: `${nameDetails.type[1]} ${nameDetails.type[2]}`,
            model: nameDetails.type[3],
            socket: 'k.A',
            cores: article.core_count,
            coreClock: article.core_clock,
            boostClock: article.boost_clock,
            boxed: article.smt,
            onboardGPU: article.integrated_graphics,
            tdp: article.tdp,
            info: 'k.A',
        };
        cpuUpload.push(cpuObj);
        cpuModel(cpuObj).save();
    });
    console.log('CPU 01:', cpuUpload[0]);
};

export const gpuCreator = (data, cat) => {
    const gpuUpload = [];
    data.map((article) => {
        let nameDetails = { type: article.chipset.split(' ') };

        const gpuObj = {
            ...baseData(article, cat),
            type: nameDetails.type[1],
            model: nameDetails.type[2],
            version: nameDetails.type[3] || 'basic',
            size: article.length,
            chip: article.chipset,
            gpuFrequenz: article.core_clock,
            OcModeBoost: article.boost_clock,
            memory: article.memory,
            recommended: 'k.A',
            info: 'k.A',
        };
        gpuUpload.push(gpuObj);
        gpuModel(gpuObj).save();
    });
    console.log('GPU 01:', gpuUpload[0]);
};

export const mainboardCreator = (data, cat) => {
    const mainboardUpload = [];
    data.map((article) => {
        let nameDetails = { type: article.name.split(' ') };

        const mainboardObj = {
            ...baseData(article, cat),
            typeModelVersion: [
                nameDetails.type[1],
                nameDetails.type[2],
                nameDetails.type[3],
            ],
            form: article.form_factor,
            socket: article.socket,
            supportedCPUs: [],
            maxMemory: article.memory_max,
            ramSocket: article.memory_slots,
            supportedRamTypes: [],
            recommended: 'k.A',
            info: 'k.A',
        };
        mainboardUpload.push(mainboardObj);
        mainboardModel(mainboardObj).save();
    });
    console.log('mainboard 01:', mainboardUpload[0]);
};

export const powerCreator = (data, cat) => {
    const powerUpload = [];
    data.map((article) => {
        console.log(article);
        let nameDetails = { type: article.efficiency_rating.split(' ') };

        const powerObj = {
            ...baseData(article, cat),
            form: article.form_factor,
            maxPower: article.wattage,
            efficiency: nameDetails.type[0],
            effiClass: nameDetails.type[1] || 'k.A',
            shockResistance: article.modular,
            cableManagement: article.modular,
            recommended: 'k.A',
            info: 'k.A',
        };
        powerUpload.push(powerObj);
        powerModel(powerObj).save();
    });
    console.log('power 01:', powerUpload[0]);
};

export const ramCreator = (data, cat) => {
    const ramUpload = [];
    data.map((article) => {
        let form = { ddr: article.speed.split('-') };
        const ramObj = {
            ...baseData(article, cat),
            form: form.ddr[0],
            capacity: article.speed,
            modules: article.modules,
            physicRate: article.cas_latency,
            firstLatency: article.first_word_latency,
            color: article.color,
            pricePerGB: article.pricePerGB,
            recommended: 'k.A',
            info: 'k.A',
        };
        ramUpload.push(ramObj);
        ramModel(ramObj).save();
    });
    console.log('ram 01:', ramUpload[0]);
};

export const soundCreator = (data, cat) => {
    const soundUpload = [];
    data.map((article) => {
        const soundObj = {
            ...baseData(article, cat),
            soundchip: article.chipset,
            channel: article.channels,
            digital: article.digital_audio,
            audio: article.snr,
            sampleRate: article.sample_rate,
            powerConnection: article.interface,
            recommended: 'k.A',
            info: 'k.A',
        };
        soundUpload.push(soundObj);
        soundCardModel(soundObj).save();
    });
    console.log('sound 01:', soundUpload[0]);
};

export const storageCreator = (data, cat) => {
    const storageUpload = [];
    data.map((article) => {
        const storageObj = {
            ...baseData(article, cat),
            form: article.form_factor,
            capacity: article.capacity,
            type: article.type,
            cache: article.cache,
            interface: article.interface,
            pricePerGB: article.pricePerGB,
            recommended: 'k.A',
            info: 'k.A',
        };
        storageUpload.push(storageObj);
        storageModel(storageObj).save();
    });
    console.log('storage 01:', storageUpload[0]);
};
