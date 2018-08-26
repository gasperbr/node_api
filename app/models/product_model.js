const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type: String,
        Required: true
    },
    price:{
        type: Number,
        Required: true
    },
    available:{
        type: Boolean,
        Required: true
    },
    dateCreated:{
        type: String
    }
});
module.exports = mongoose.model('Product', productSchema);