const { response } = require('express');
const express = require('express');
const { request } = require('http');
const routes = express.Router();
const conn = require('mysql2/promise').createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'turma_23',
    port: 3307
})

routes.get('/turma_23', async(request, response) => {
    const [data] = await conn.execute('SELECT * FROM alunos');

    response.json(data);
})

routes.post('/addname/:nome/:sobrenome/:idade', async(request, response) => {
    const nome = request.params.nome;
    const sobrenome = request.params.sobrenome;
    const idade = request.params.idade;

    await conn.execute(`INSERT INTO alunos VALUES (null, ${JSON.stringify(nome)}, ${JSON.stringify(sobrenome)}, ${JSON.stringify(idade)})`)

    const [data] = await conn.execute('SELECT * FROM alunos');

    response.json(data)
})

routes.post('/add-name', async(request, response) => {
    const { nome, sobrenome, idade } = request.body;

    await conn.execute(`INSERT INTO alunos VALUES (null, ${JSON.stringify(nome)}, ${JSON.stringify(sobrenome)}, ${JSON.stringify(idade)})`)

    const [data] = await conn.execute('SELECT * FROM alunos');

    response.json(data)
})

routes.delete('/delete-name', async(request, response) => {
    const { id_turma } = request.body;
    await conn.execute(`DELETE FROM alunos WHERE id_turma = ${id_turma}`)

    const [data] = await conn.execute('SELECT * FROM alunos')
    
    response.json(data);
})

module.exports = routes;