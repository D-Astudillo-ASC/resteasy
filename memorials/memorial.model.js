const mongoose = require('mongoose');
const validator = require('validator')

const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    hash: { type: String, required: true },
    email: { 
        type: String, 
        unique: true, 
        required: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User', schema);