export const createArticleNumber = (name, cat) => {
    let brand = name.slice(0, 3);
    let articleNumber = '';
    switch (cat) {
        case 'case':
            articleNumber = `C_${Math.floor(Math.random() * 100000)}`;
            break;

        case 'cpu':
            articleNumber = `${brand}_${Math.floor(Math.random() * 100000)}`;
            console.log(`${brand}_${articleNumber}`);
            break;

        case 'gpu':
            articleNumber = `${brand}_${Math.floor(Math.random() * 100000)}`;
            break;

        case 'mainboard':
            articleNumber = `${brand}_${Math.floor(Math.random() * 100000)}`;
            break;

        case 'power':
            articleNumber = `P_${Math.floor(Math.random() * 100000)}`;
            break;

        case 'ram':
            articleNumber = `RAM_${Math.floor(Math.random() * 100000)}`;
            break;

        case 'sound':
            articleNumber = `SOU_${Math.floor(Math.random() * 100000)}`;
            break;

        case 'storage':
            articleNumber = `HD_${Math.floor(Math.random() * 100000)}`;
            break;

        default:
            console.log('articleModel not found!');
            break;
    }
    return `${articleNumber}`;
};
