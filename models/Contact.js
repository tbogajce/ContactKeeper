const moongose = require('mongoose');

const ContactSchema = moongose.Schema({
    // create a relation with users table
    user: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'users',
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    type: {
        type: String,
        default: 'personal',
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = moongose.model('contact', ContactSchema);
