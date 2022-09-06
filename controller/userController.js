import { CompanyDataModel } from '../schemas/company/companySchema';
import { UserDataModel } from '../schemas/user/userSchema';
import { authenticateToken, createAccessToken } from '../security/jwt_auth';

export const register = async (req, res) => {
    try {
        const hashPW = await bcrypt.hash(req.body.password, saltRounds);

        //SAVE: userData to userDB
        if (req.body.userGroupe === 'company') {
            const dataOfCompany = {
                mail: req.body.mail,
                companyName: req.body.company,
                contactPerson: req.body.contactPerson,
                password: hashPW,
                group: req.body.userGroupe,
            };
            CompanyDataModel(dataOfCompany).save();
            res.send('Successfull registrated!');
        } else {
            const dataOfUser = {
                mail: req.body.mail,
                username: req.body.username,
                password: hashPW,
                group: req.body.userGroupe,
            };
            UserDataModel(dataOfUser).save();
            res.send('Successfull registrated!');
        }
    } catch (error) {
        console.log('ERROR:', error, 'Error by registration!');
    }
};

exports.login = async (req, res) => {
    console.log('Login process started... ');

    //Find: userData in userDB
    const userFromDB = await UserDataModel.findOne({
        username: req.body.username,
    });
    try {
        // COMPARE: loginData === userData
        const isLogedIn = await bcrypt.compare(
            req.body.password,
            userFromDB.password
        );

        if (isLogedIn === false) return;

        const userData = {
            userID: userFromDB._id,
            username: userFromDB.username,
            usergroup: userFromDB.group,
        };

        const generateToken = createAccessToken(userData);

        // Send Data to Frontend
        res.send({
            isLogedIn: isLogedIn,
            generateToken: generateToken,
            userData,
        });
    } catch (error) {
        console.log('ERROR:', 'Error by Login!', error);
    }
};
