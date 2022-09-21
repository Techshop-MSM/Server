import { createArticleNumber } from "./objectCreatorFactories/createArticleNumber.js";
import { createRandomProductNumber } from "./objectCreatorFactories/createProductNumber.js";

export const caseCreator = (data, cat) => {
    const caseObj = {
        articleName: data.name,
        articleNr: createArticleNumber(data.name, cat),
        category: cat,
        producerNr: createRandomProductNumber(),
        company: schemaSettings.companyID, // populate
        priceEK: data.price_usd,
        priceVK: priceEk * 1.2 * 1.19,
        counter: {
            stock: randomStock(),
            ratingCounter: data.rating_count,
            purchases: schemaSettings.number,
            ratings: schemaSettings.number,
            ratingAvg: ratingSum / ratingCounter,
        },
        comments: schemaSettings.array,

        type: data.type,
        color: data.color,
        drive: data.side_panel_window,
        powerSupply: data.power_supply,
        audioConnection: schemaSettings.string,
    };
};

export const cpuCreator = (data, cat) => {
    const cpuObj = {
        cpuTyp: schemaSettings.string,
        form: schemaSettings.string,
        socket: schemaSettings.number,
        pci: schemaSettings.string,
        coreName: schemaSettings.string,
        cores: schemaSettings.number,
        threads: schemaSettings.number,
        coretype: schemaSettings.string,
        frequenz: schemaSettings.string,
        unlocked: schemaSettings.bool,
        boxed: schemaSettings.bool,
        architecture: schemaSettings.string,
        cache: schemaSettings.string,
        fan: schemaSettings.string,
        channels: schemaSettings.number,
        ramSupport: schemaSettings.string,
        onboardGPU: schemaSettings.string,
        tdp: schemaSettings.number,
        info: schemaSettings.string,
    };
};
