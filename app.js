const express = require('express');
const app = express();

const sqlite3 = require('sqlite3').verbose();
const prisma = require('./prismaClient'); // import Prisma client

// Open a new database connection
const db = new sqlite3.Database('itemsdb.sqlite');

// Create a new table
db.run('CREATE TABLE IF NOT EXISTS Item (id INTEGER PRIMARY KEY, name TEXT, image TEXT, description TEXT)', err => {
    if (err) {
        console.error(err.message);
        return;
    }
    // Insert some data into the table
    db.run('INSERT INTO Item (name, image, description) VALUES (?, ?, ?)', ['Item 1', 'image1.jpg', 'Description for item 1']);
    db.run('INSERT INTO Item (name, image, description) VALUES (?, ?, ?)', ['Item 2', 'image2.jpg', 'Description for item 2']);
    db.run('INSERT INTO Item (name, image, description) VALUES (?, ?, ?)', ['Item 3', 'image3.jpg', 'Description for item 3']);

    // To test error 404
    // db.run('DROP TABLE Item');

    // // Query the list of items
    // db.all('SELECT name, image, description FROM items', (err, rows) => {
    //     if (err) {
    //         console.error(err.message);
    //         return;
    //     }
    //     // Log the results to the console
    //     console.log(rows);
    // });
});

// Close the database connection when done
db.close();

// Set up the view engine to use Pug
app.set('view engine', 'pug');

// Set up a route to render the home page using Pug
app.get('/', (req, res) => {
    res.render('layout', { title: 'Items Repository' });
});

// Set up a route to render the "List of items" page /items using Pug and retrieve a list of items from a database (itemsdb.sqlite) and display in a table
app.get('/items', async (req, res) => {
    const items = await prisma.item.findMany(); // retrieve list of items from database
    res.render('/items/index', { items }); // render the "items" template and pass in the list of items
});


// Start the server
app.listen(3001, () => {
    console.log('Server started on port 3001 http://localhost:3001');
});
