const express = require('express');
const router = express.Router();

const ItemsModel = require('../models/ItemsModel');

router.get('/', async (req, res) => {
    const items = await ItemsModel.getItems();

    res.render('items/index', { items });
});

router.get('/:id', async (req, res) => {
    const item = await ItemsModel.getItem(parseInt(req.params.id));

    if (!item) {
        return res.status(404).send('Item not found');
    }

    res.render('items/details', { item });
});

module.exports = router;
