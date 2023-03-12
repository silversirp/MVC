const express = require('express');
const app = express();
const itemsController = require('./controllers/ItemsController');
const port = 3001;

// Set up the view engine to use Pug
app.set('view engine', 'pug');
app.set('views', './views');

// Set up a route to render the home page using Pug
app.get('/', itemsController.getIndex);

// Set up a route to render the "List of items" page /items using Pug and retrieve a list of items from a database (itemsdb.sqlite) and display in a table
app.get('/items', itemsController.getItems);

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port} http://localhost:${port}`);
});