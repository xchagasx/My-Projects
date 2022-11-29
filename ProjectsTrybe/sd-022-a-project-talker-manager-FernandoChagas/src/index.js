const express = require('express');
const bodyParser = require('body-parser');
// my code
const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');
const validPassword = require('./middleware/validPassword');
const validLogin = require('./middleware/validLogin');
const { namee, agee, talkW, talkR, conferedTalk } = require('./middleware/validTalker');
const authenticated = require('./middleware/authenticated');

const DATA_TALKER = './talker.json';

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS_200 = 200;
const HTTP_OK_STATUS_201 = 201; // my 
const HTTP_OK_STATUS_204 = 204; // my code
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS_200).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

// my code Req-1
app.get('/talker', async (_request, response) => {
  const data = await fs.readFile(path.resolve(__dirname, DATA_TALKER));
  const dataJson = JSON.parse(data);
  response.status(HTTP_OK_STATUS_200).json(dataJson);
});

// my code Req-8
app.get('/talker/search', authenticated, async (request, response) => {
  const search = request.query.q;
  const data = await fs.readFile(path.resolve(__dirname, DATA_TALKER));
  const dataJson = JSON.parse(data);
  const filterData = dataJson.filter((a) => a.name.includes(search));
  console.log(filterData);
  if (!search) {
    return response.status(401).json([]);
  } return response.status(200).json(filterData);
});

// my code Req-2
app.get('/talker/:id', async (request, response) => {
    const { id } = request.params;
    const talker = JSON.parse(await fs.readFile(DATA_TALKER, 'utf-8'));
    const index = talker.find((elem) => elem.id === Number(id));
    if (!index) {
      return response.status(404).send({
        message: 'Pessoa palestrante não encontrada',
      });
    }
    response.status(HTTP_OK_STATUS_200).json(index);
});

// my code Req-3 and Req-4
app.post('/login', validLogin, validPassword, (_request, response) => {
  const tokenRandom = crypto.randomBytes(8).toString('hex');
  response.status(HTTP_OK_STATUS_200).json({ token: tokenRandom });
});

// my code Req-5
app.post('/talker', 
authenticated, 
namee, 
agee, 
conferedTalk, 
talkW, 
talkR, 
async (request, response) => {
  const pathName = path.resolve(__dirname, DATA_TALKER);
  const talkers = await JSON.parse(await fs.readFile(pathName, 'utf-8'));
  const { name, age, talk } = request.body;
  const talker = { name, age, id: talkers.length + 1, talk };
  talkers.push(talker);
  await fs.writeFile(pathName, JSON.stringify(talkers));
  response.status(HTTP_OK_STATUS_201).json({ ...talker });
});

// my code Req-6
app.put('/talker/:id', 
authenticated, 
namee, 
agee,
conferedTalk, 
talkW, 
talkR, 
async (request, response) => {
  const pathName = path.resolve(__dirname, DATA_TALKER);
  const talkers = await JSON.parse(await fs.readFile(pathName, 'utf-8'));
  const { id } = request.params;
  const { name, age, talk: { watchedAt, rate } } = request.body;
  const updateTalker = {
    id: Number(id),
    name, 
    age, 
    talk: { watchedAt, rate },
  };
  const oldTalker = [...talkers];
  const talkerIndex = talkers.findIndex((talker) => talker.id === Number(id));
  oldTalker[talkerIndex] = updateTalker;
  console.log(oldTalker);
  await fs.writeFile(pathName, JSON.stringify(oldTalker));
  return response.status(HTTP_OK_STATUS_200).json(updateTalker);
});

// my code Req-7
app.delete('/talker/:id', authenticated, async (request, response) => {
  const { id } = request.params;
  const pathName = path.resolve(__dirname, DATA_TALKER);
  const talker = JSON.parse(await fs.readFile(pathName, 'utf-8'));
  const talkerFilter = talker.filter((elem) => elem.id !== Number(id));
  const updateData = JSON.stringify(talkerFilter);
  await fs.writeFile(pathName, JSON.stringify(updateData));
  response.status(HTTP_OK_STATUS_204).json(updateData);
});
