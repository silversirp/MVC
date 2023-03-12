const express = require('express');
const app = express();
const itemsController = require('./controllers/ItemsController');
const port = 3000;

// Set up the view engine to use Pug
app.set('view engine', 'pug');
app.set('views', './views');

// Set up a route to render the home page using Pug
app.get('/', itemsController.getIndex);

// Set up a route to render the "List of items" page /items using Pug and retrieve a list of items from a database (itemsdb.sqlite) and display in a table
app.get('/items', itemsController.getItems);

// Set up a route to fetch the attributes of a clicked item and render the "Item details" page using Pug
app.get('/items/:id', async (req, res) => {
    const id = parseInt(req.params.id); // get the ID of the clicked item
    const item = await prisma.item.findUnique({ where: { id } }); // fetch the attributes of the clicked item from the database

    if (!item) {
        return res.status(404).send('Item not found');
    }

    res.render('items/details', { item: item }); // render the "details" template and pass in the item attributes
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port} http://localhost:${port}`);
});