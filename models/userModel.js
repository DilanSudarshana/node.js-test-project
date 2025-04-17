const db = require('../config/db');

const User = {
    getAll: (callback) => {
        db.query('SELECT * FROM users', callback);
    },

    getById: (id, callback) => {
        db.query('SELECT * FROM users WHERE id = ?', [id], callback);
    },

    create: (data, callback) => {
        db.query('INSERT INTO users (name, age) VALUES (?, ?)', [data.name, data.age], callback);
    },

    update: (id, data, callback) => {
        db.query('UPDATE users SET name = ?, age = ? WHERE id = ?', [data.name, data.age, id], callback);
    },

    delete: (id, callback) => {
        db.query('DELETE FROM users WHERE id = ?', [id], callback);
    }
};

module.exports = User;