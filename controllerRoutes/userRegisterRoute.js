import { UserDataModel } from "../schemas/user/userSchema.js";
import bcrypt from "bcrypt"

const register = async (req, res) => {

    const saltRounds = 10
    console.log(req.body)
    try {
        let dataOfUser = {}
        const hashedRegisterPassword = await bcrypt.hash(req.body.password, saltRounds)

        dataOfUser = {
            mail: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: hashedRegisterPassword,
            group: req.body.userGroup,
            movies: 0,
            music: 0,
            images: 0,
            storage: 400000,
        },

        //SAVE: userData to userDB
        UserDataModel(dataOfUser).save()
        res.send('Successfull registrated!')

    } catch (error) {
        console.log("ERROR:", error, "Error by registration!")
    }
};

export default register;
