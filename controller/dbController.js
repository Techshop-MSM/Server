import { mongoCollectionInstance } from '../factories/collectionInstance.js';
import { caseModel } from '../schemas/article/components/caseSchema.js';
import { cpuModel } from '../schemas/article/components/cpuSchema.js';

export const dbController = async (req, res) => {
    const reason = req.body.reason;
    const group = req.body.group;
    const data = req.body.data;
    const cat = req.body.category;

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
            // group === 'admin' &&
            console.log(
                group,
                'user try to',
                reason,
                data[0],
                'data to the Database.'
            );
            mongoCollectionInstance(data, cat);
            res.send('uploaded');
            break;

        default:
            console.log(`${reason} or ${group} not found`);
            break;
    }
};
