const sakila_routes = require('./sakila_routes');
const turma_23_routes = require('./turma_23_routes');
const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.json());
app.use(sakila_routes);
app.use(turma_23_routes);

app.get("/", (_request, response) => {
    response.json({message: 'ok'});
});

app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
})