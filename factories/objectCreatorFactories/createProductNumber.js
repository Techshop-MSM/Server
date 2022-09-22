export const createRandomProductNumber = () => {
    // random Abteilungsnummer_Produktnummer
    const abtNumber = Math.floor(Math.random() * 1000);
    const productNumber = Math.floor(Math.random() * 100000);
    return `${abtNumber}_${productNumber}`;
};
