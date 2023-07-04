const Account = require('../models/Account');
const Parent = require('../models/Parent');
const Sitter = require('../models/Sitter');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const signUp = async (req, res) => {
    const {user_name, password, role} = req.body;
    try {
        const account = await Account.findOne({where: {user_name}});
        if (account) {
            res.status(400).json({message: 'Username already exists'});
        }
        const newAccount = await Account.create({user_name, password, role});
        res.status(201).json(newAccount);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const signIn = async (req, res) => {
    const {user_name, password} = req.body;
    try {
        const account = await Account.scope('withPassword').findOne({where: {user_name}});
        if (!account) {
            return res.status(401).json({message: 'Username or password is incorrect'});
        }
        if (account.password !== password) {
            return res.status(401).json({message: 'Username or password is incorrect'});
        } else {
            const token = jwt.sign(
                {id: account.id, user_name: user_name},
                process.env.SECRET_KEY, {
                    expiresIn: '30days'
                })
            // res.status(200)
            //     .header('Authorization', `Bearer ${token}`)
            //     .status(200).json(account);
            return res
              .status(200)
              .json({
                token,
                account,
                type: "Bearer",
                expiresIn: 30 * 24 * 60 * 60 * 1000,
              });
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const getMeInfo = async (req, res) => {
    try {
        if (req.userData.role === "parent") {
            const parent = await Parent.findOne({ where: { id: req.userData.id } });
            res.status(200).json({account: req.userData, parent});
        } else if (req.userData.role === "sitter") {
            const sitter = await Sitter.findOne({ where: { id: req.userData.id } });
            res.status(200).json({account: req.userData, sitter});
        }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
};

const parentUpdateInfo = async (req, res) => {
    try {
        const parent = await Parent.findOne({ where: { id: req.userData.id } });
        if (!parent) {
            const newParent = await Parent.create({
                ...req.body,
                id: req.userData.id,
                // use default avatar
                avatar: "https://i.imgur.com/3GvwE0f.png",
                state: "accepted",
                rate: 0,
            });
            res.status(201).json(newParent);
        } else {
            await Parent.update(req.body, {
                where: { id: req.userData.id },
            });
            res.status(200).json({
                ...parent,
                ...req.body,
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal server error"});
    }
}

const sitterUpdateInfo = async (req, res) => {
    try {
        const sitter = await Sitter.findOne({ where: { id: req.userData.id } });
        if (!sitter) {
            const newSitter = await Sitter.create({
                ...req.body,
                id: req.userData.id,
                // use default avatar
                avatar: "https://i.imgur.com/3GvwE0f.png",
                state: "accepted",
                rate: 0,
                address: 'None'
            });
            res.status(201).json(newSitter);
        } else {
            await Sitter.update(req.body, {
                where: { id: req.userData.id },
            });
            res.status(200).json({
                ...sitter,
                ...req.body,
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal server error"});
    }
}

module.exports = {
    signUp,
    signIn,
    getMeInfo,
    parentUpdateInfo,
    sitterUpdateInfo
}