import { UserDataModel } from '../schemas/user/userSchema';
import { authenticateToken, createAccessToken } from '../security/jwt_auth';

export const register = async (req, res) => {
    try {
        let dataOfUser = {};
        const hashPW = await bcrypt.hash(req.body.password, saltRounds);

        (dataOfUser = {
            mail: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: hashPW,
            group: userGroups[0],
        }),
            //SAVE: userData to userDB
            UserDataModel(dataOfUser).save();
        res.send('Successfull registrated!');
    } catch (error) {
        console.log('ERROR:', error, 'Error by registration!');
    }
};

// USERNAME: Martin
// PASSWORD: LoginPW123!

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
