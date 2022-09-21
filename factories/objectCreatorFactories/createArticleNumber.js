export const createArticleNumber = (name, cat) => {
    let articleNumber = '';
    const brand = name.slice(0, 3);
    switch (cat) {
        case 'case':
            articleNumber = Math.floor(Math.random() * 100000);
            console.log(`C_${articleNumber}`);
            break;

        case 'cpu':
            articleNumber = Math.floor(Math.random() * 100000);
            console.log(`${brand}_${articleNumber}`);
            break;

        case 'gpu':
            articleNumber = Math.floor(Math.random() * 100000);
            console.log(`${brand}_${articleNumber}`);
            break;

        case 'mainboard':
            articleNumber = Math.floor(Math.random() * 100000);
            console.log(`${brand}_${articleNumber}`);
            break;

        case 'power':
            articleNumber = Math.floor(Math.random() * 100000);
            console.log(`P_${articleNumber}`);
            break;

        case 'ram':
            articleNumber = Math.floor(Math.random() * 100000);
            console.log(`RAM_${articleNumber}`);
            break;

        case 'sound':
            articleNumber = Math.floor(Math.random() * 100000);
            console.log(`S_${articleNumber}`);
            break;

        case 'storage':
            articleNumber = Math.floor(Math.random() * 100000);
            console.log(`HD_${articleNumber}`);
            break;

        default:
            console.log('Model not found!');
            break;
    }
};
