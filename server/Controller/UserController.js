const User = require("../Models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const Register = async (req, res) => {
    try {
        const { name, email, password, phoneNumber } = req.body;
        // console.log("req.body:::", req.body)
        if (!(name && email && password && phoneNumber)) {
            res.status(201).send("All Inputs Required !");
        } else {
            const oldUser = await User.findOne({ email });
            if (oldUser) {
                console.log(oldUser);
                res.status(201).send("User Already Exists. Please Login!");
            } else {
                const encryptedPassword = await bcrypt.hash(password, 10);

                await User.create({
                    name,
                    phone_number: phoneNumber,
                    email: email.toLowerCase(), // sanitize: convert email to lowercase
                    password: encryptedPassword,
                    user_type: "buyer"
                });

                const user = await User.findOne({ email }, {password: 0}).lean();

                // delete user["password"];
                console.log(user);
                // Create token
                const token = jwt.sign(
                    { id: user._id, email, userName: user.name, phone_number: user.phone_number, user_type: user.user_type },
                    process.env.TOKEN_KEY,
                    // {
                    //     expiresIn: "",
                    // }
                );
                // save user token
                user.token = token;
                // console.log("token", user);

                // return new user
                res.status(200).send(user);
            }
        }

    } catch (e) {
        res.send(e);
    }
}


const Login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        if (!(email && password)) {
            res.status(201).send("All fields are required!!")
        } else {
            const user = await User.findOne({ email }).lean();
            if (user) {
                if (await bcrypt.compare(password, user.password)) {
                    // console.log("inside!!!")
                    // console.log("user::::", user);  
                    // const user = await User.findOne({ email }, { password: 0 });

                    const token = jwt.sign(
                        { id: user._id, email, userName: user.name, phone_number: user.phone_number, user_type: user.user_type },
                        process.env.TOKEN_KEY,
                        // {
                        //     expiresIn: "",
                        // }
                    )
                    user.token = token;
                    delete user.password;

                    res.status(200).send(user);
                } else {
                    res.status(201).send("Invalid Credentials !");
                }
            } else {
                res.status(201).send("User does not exist! Please Create your account first.")
            }
        }
    } catch (e) {
        res.send(e);
    }
}


module.exports = {
    Login,
    Register
}