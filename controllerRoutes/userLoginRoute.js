import { UserDataModel } from '../schemas/user/userSchema.js';
import bcrypt from 'bcrypt';
import { createAccessToken } from '../security/jwt_auth.js';

const login = async (req, res) => {
    console.log('Login process started... ');

    //Find: userData in userDB
    const userFromDB = await UserDataModel.findOne({
        $or: [{ username: req.body.identifier }, { mail: req.body.identifier }],
    });

    !userFromDB;

    console.log(userFromDB);
    try {
        // COMPARE: loginData === userData
        const isLogedIn = await bcrypt.compare(
            req.body.password,
            userFromDB.password
        );

        if (!isLogedIn) {
            console.log('Wrong Data');
            return;
        }

        const userData = {
            userID: userFromDB._id,
            username: userFromDB.username,
            usergroup: userFromDB.group,
        };

        const generateToken = createAccessToken(userData);

        // Send Data to Frontend
        res.send({ isLogedIn: isLogedIn, auth: generateToken, user: userData });
    } catch (error) {
        console.log('ERROR:', 'Error by Login!', error);
    }
};

export default login;
