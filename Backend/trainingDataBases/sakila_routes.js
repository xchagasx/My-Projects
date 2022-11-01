const express = require('express');
const routes = express.Router();
const conn = require('mysql2/promise').createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sakila',
    port: 3307
})

routes.get('/actor', async (_request, response) => {
    const [data] = await conn.execute('SELECT * FROM actor');

    response.json(data);
});

// add person
routes.post('/addactor/:first_name/:last_name', async(request, response) => {
    const first_name = request.params.first_name;
    const last_name = request.params.last_name;

    await conn.execute(`INSERT INTO actor VALUES (null, ${JSON.stringify(first_name)}, ${JSON.stringify(last_name)}, curdate())`);

    const [data] = await conn.execute('SELECT * FROM actor');
    const filter = data.filter((name) => name.first_name === first_name)

    response.json(filter);
})

routes.post('/add-actor', async(request, response) => {
    const { first_name, last_name } = request.body;
    await conn.execute(`INSERT INTO actor VALUES (null, ${JSON.stringify(first_name)}, ${JSON.stringify(last_name)}, curdate())`);

    const [data] = await conn.execute('SELECT * FROM actor');
    const filter = data.filter((name) => name.first_name === first_name)

    response.json(filter);
})

routes.get('/film', async(request, response) => {
    const [data] = await conn.execute('SELECT * FROM film');
    console.log(data)
})

module.exports = routes;
