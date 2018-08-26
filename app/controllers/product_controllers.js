const Product = require('../models/product_model.js');

exports.create = (req, res) => {
    const product = new Product({
        name: req.body.name || "unknown",
        price: req.body.price || "unknown",
        available: req.body.available || "unknown",
        dateCreated: new Date + ""
    });
    product.save().then(data => {
        res.send(data);
    });
};
exports.findAll = (req, res) => {
    Product.find().then(products => {
        res.send(products);
    });
};
exports.findOne = (req, res) => {
    Product.findById(req.params.productId).then(product => {
        if(!product){
            return res.status(404).send({
                message: "product not found"
            });
        }
        res.send(product);
    })
};
exports.update = (req, res) => {
    Product.findByIdAndUpdate(req.params.productId, {
        name: req.body.name || "unknown",
        price: req.body.price || "unknown",
        available: req.body.available || "unknown",
        dateCreated: new Date + ""
    }, {new: true}).then(product => {
        if(!product){
            return res.status(404).send({
                message: "product not found"
            });
        }
        res.send(product);
    })
};
exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "product not found"
            });
        }
        res.send({message: "product deleted"});
    });
};