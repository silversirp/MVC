// controllers/ItemsController.js
const itemsModel = require('../models/ItemsModel');

exports.getIndex = async (req, res) => {
    res.render('layout', { title: 'Items Repository' });
};

exports.getItems = async (req, res) => {
    const items = await itemsModel.getItems();

    if (items.length === 0) {
        return res.status(404).send('No items found');
    }

    res.render('items/index', { items: items });
};