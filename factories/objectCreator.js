import { caseModel } from '../schemas/article/components/caseSchema.js';
import { CompanyDataModel } from '../schemas/company/companySchema.js';
import { createArticleNumber } from './objectCreatorFactories/createArticleNumber.js';
import { createRandomProductNumber } from './objectCreatorFactories/createProductNumber.js';
import { randomStock } from './objectCreatorFactories/randomStock.js';

export const caseCreator = (data, cat) => {
    const casesUpload = [];

    data.map((article) => {
        let brand = { name: article.name.split(' ') };
        let caseObj = {
            articleName: article.name,
            articleNr: createArticleNumber(article.name, cat),
            category: cat,
            brand: brand.name,
            producerNr: createRandomProductNumber(),
            //company: CompanyDataModel.findOne(brand.name), // populate
            priceEK: article.price_usd,
            counter: {
                stock: randomStock(),
                purchases: article.rating_count,
                ratingCounter: 5,
                ratings: [3, 5, 2, 4, 1],
            },
            comments: [],

            type: article.type,
            color: article.color,
            drive: article.side_panel_window,
            powerSupply: article.power_supply,
        };
        casesUpload.push(caseObj);
        caseModel(caseObj).save();
    });
    console.log('Case 01:', casesUpload[0]);
    return casesUpload;
};

export const cpuCreator = (data, cat) => {
    const cpuUpload = [];
    data.map((article) => {
        let nameDetails = { type: article.name.split(' ') };

        const cpuObj = {
            cpuTyp: `${nameDetails.type[1]} ${nameDetails.type[2]}`,
            model: nameDetails.type[3] || nameDetails.type[1],
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
    });
    console.log('CPU 01:', cpuUpload[0], 'CPU 05:', cpuUpload[4]);
};
