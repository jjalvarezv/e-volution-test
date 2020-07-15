
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const PRIVATE_KEY = 'jwt_private_key';

const userController = {
    
    saveUser: function(req, res) {

        const userData = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        });

        userData.save((err, savedUser) => {

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

    }
}

module.exports = userController;
