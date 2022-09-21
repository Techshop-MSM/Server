import { mongoCollectionInstance } from '../factories/collectionInstance.js';
import { caseModel } from '../schemas/article/components/caseSchema.js';
import { cpuModel } from '../schemas/article/components/cpuSchema.js';

export const dbController = async (req, res) => {
    const data = req.body;
    const cat = req.body.category;
    //const comp = `${req.body.category}Model`;

    switch (data.reason) {
        case 'edit':
            console.log(
                data.group,
                'try to',
                data.reason,
                data.data[0],
                'at the Database.'
            );
            break;
        case 'add':
            console.log(
                data.group,
                'try to',
                data.reason,
                data.data[0],
                'data at the Database.'
            );
            break;
        case 'delete':
            console.log(
                data.group,
                'try to',
                data.reason,
                data.data[0],
                'data at the Database.'
            );
            break;
        case 'upload':
            console.log(
                data.group,
                'try to',
                data.reason,
                data.data[0],
                'data at the Database.'
            );
            // console.log('STRING', `${comp}`);
            // console.log('REAL', caseModel);
            // comp(data).save()

            mongoCollectionInstance(data, cat);

            break;

        default:
            console.log(data.reason, 'not found');
            break;
    }
};
