import { UserDataModel } from '../schemas/user/userSchema.js';
import bcrypt from 'bcrypt';

const register = async (req, res) => {
    const saltRounds = 10;

    try {
        let dataOfUser = {};
        const hashedRegisterPassword = await bcrypt.hash(
            req.body.password,
            saltRounds
        );

        (dataOfUser = {
            mail: req.body.email,
            username: req.body.username,
            password: hashedRegisterPassword,
            group: req.body.userGroupe,
        }),
            //SAVE: userData to userDB
            UserDataModel(dataOfUser).save();
        res.send('Successfull registrated!');
    } catch (error) {
        console.log('ERROR:', error, 'Error by registration!');
    }
};

export default register;
