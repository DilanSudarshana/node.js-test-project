const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
    User.getAll((err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.getUser = (req, res) => {
    User.getById(req.params.id, (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
};

exports.createUser = (req, res) => {
    const {
        name,
        age
    } = req.body;
    User.create({
        name,
        age
    }, (err, result) => {
        if (err) throw err;
        res.json({
            id: result.insertId,
            name,
            age
        });
    });
};

exports.updateUser = (req, res) => {
    const {
        name,
        age
    } = req.body;
    User.update(req.params.id, {
        name,
        age
    }, (err) => {
        if (err) throw err;
        res.json({
            message: 'User updated'
        });
    });
};

exports.deleteUser = (req, res) => {
    User.delete(req.params.id, (err) => {
        if (err) throw err;
        res.json({
            message: 'User deleted'
        });
    });
};