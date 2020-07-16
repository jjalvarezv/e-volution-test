
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const PRIVATE_KEY = 'jwt_private_key';

const userController = {
    
    saveUser: function(req, res) {

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        });

        newUser.save((err, savedUser) => {

            if (err) return res.status(500).send({message: 'Server Error'});

            // token for login
            const expiresIn = 24*60*60;
            const access_token = jwt.sign({_id: savedUser._id}, PRIVATE_KEY, {expiresIn});

            const userData = {
                name: savedUser.name,
                email: savedUser.email,
                access_token: access_token,
                expiresIn: expiresIn
            }

            return res.status(200).send(userData);

        });

    },

    login: function(req, res) {
        
        const loginData = {
            email: req.body.email,
            password: req.body.password
        }

        User.findOne({email: loginData.email}, (err, userFound) => {

            if (err) return res.status(500).send({message: 'Server error'});
            if (!userFound) return res.status(404).send({message: 'Something Incorrect'});

            // password validation
            const valPass = bcrypt.compareSync(loginData.password, userFound.password);
            if (valPass) {
                
                // token asigned
                const expiresIn = 24*60*60;
                const access_token = jwt.sign({_id: userFound._id}, PRIVATE_KEY, {expiresIn});
                const userData = {
                    name: userFound.name,
                    email: userFound.email,
                    access_token: access_token,
                    expiresIn: expiresIn
                }
                return res.status(200).send({userData});

            } else {
                // password incorrect
                return res.status(404).send({message: 'Something Incorrect'});
            }

        })

        

    }
}

module.exports = userController;
