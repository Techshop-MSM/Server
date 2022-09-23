import { mongoCollectionInstance } from '../factories/collectionInstance.js';
import { loadDataFromDB } from '../factories/loadDatafromDB.js';

export const dbController = async (req, res) => {
    const reason = req.body.reason;
    const group = req.body.group;
    const data = req.body.data;
    const cat = req.body.category;

    // group === 'admin' && switch (reason) {
    switch (reason) {
        case 'edit':
            console.log(group, 'try to', reason, data[0], 'at the Database.');
            break;
        case 'add':
            console.log(
                group,
                'try to',
                reason,
                data[0],
                'data to the Database.'
            );
            break;
        case 'delete':
            console.log(
                group,
                'try to',
                reason,
                data[0],
                'data to the Database.'
            );
            break;
        case 'upload':
            console.log(
                group,
                'user try to',
                reason,
                data[0],
                'data to the Database.'
            );
            mongoCollectionInstance(data, cat, reason);
            res.send('uploaded'); // try catch
            break;
        case 'load':
            console.log(
                group,
                'user try to',
                reason,
                'data from the Database.'
            );
            const result = await loadDataFromDB(cat)
            res.send(result)
            break;

        default:
            console.log(`${reason} or ${group} not found`);
            break;
    }
};
