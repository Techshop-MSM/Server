import { UserDataModel } from '../schemas/user/userSchema.js';
import { authenticateToken, createAccessToken } from '../security/jwt_auth.js';
import bcrypt from 'bcrypt';
import { CompanyDataModel } from '../schemas/company/companySchema.js';

export const loginController = async (req, res) => {
    console.log('Login process started... ');
    let userFromDB = {}

    //Find: userData in userDB
    console.log("kommt an", req.body.identifier)
    userFromDB = await UserDataModel.findOne({
        $or: [{ username: req.body.identifier }, { mail: req.body.identifier }],
    });

    if(!userFromDB){
        
        userFromDB = await UserDataModel.findOne({
            $or: [{ contact: req.body.identifier }, { mail: req.body.identifier }],
        });
        console.log("CompanyUser:", userFromDB)
    }

    try {
        // COMPARE: loginData === userData
        const isLogedIn = await bcrypt.compare(
            req.body.password,
            userFromDB.password
        );

        if (isLogedIn === false) return;

        let userData = {}
        if(userFromDB.group === 'private'){
            userData = {
                userID: userFromDB._id,
                username: userFromDB.username,
                sex: userFromDB.sex,
                group: userFromDB.group,
            }
        }else if(userFromDB.group === 'company'){
            userData = {
                userID: userFromDB._id,
                username: userFromDB.username,
                sex: userFromDB.sex,
                company: userFromDB.name,
                group: userFromDB.group,
            }
        }else if(userFromDB.group === 'admin'){
            userData = {
                userID: userFromDB._id,
                username: userFromDB.username,
                sex: userFromDB.sex,
                group: userFromDB.group,
            }
        }
        console.log("userFromDB", userFromDB, "userDataTofrontend", userData)
        const generateToken = createAccessToken(userData);
        //console.log(generateToken)
        // Send Data to Frontend
        res.send({
            isLogedIn: isLogedIn,
            auth: generateToken,
            userData,
        });
    } catch (error) {
        console.log('ERROR:', 'Error by Login!', error);
    }
};
