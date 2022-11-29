const namee = (request, response, next) => {
    const { name: nameTalker } = request.body;
    if (!nameTalker) {
        return response.status(400).json({ message: 'O campo "name" é obrigatório',
        });
    } if (nameTalker.length < 3) {
        return response.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres',
        });
    } next();
};

const agee = (request, response, next) => {
    const { age: ageTalker } = request.body;
    if (!ageTalker) {
        return response.status(400).json({ message: 'O campo "age" é obrigatório',
        });
    } if (Number(ageTalker) < 18) {
        return response.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade',
        });
    } next();
};

const talkW = (request, response, next) => {
    const { talk: { watchedAt } } = request.body;
    const formatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
    if (!watchedAt) {
        return response.status(400).json({
            message: 'O campo "watchedAt" é obrigatório',
        });
    } if (formatDate.test(watchedAt) === false) { 
        return response.status(400).json({ 
            message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
        });
    } next();
};

const talkR = (request, response, next) => {
    const { talk: { rate } } = request.body;
    const conditionRate = rate >= 1 && rate <= 5;
    if (!rate && rate !== 0) {
        return response.status(400).json({ message: 'O campo "rate" é obrigatório',
    });
} if (conditionRate === false) {
    return response.status(400).json({ 
        message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    } next();
};

const conferedTalk = (request, response, next) => {
    const { talk } = request.body;
    if (!talk) {
        return response.status(400).json({ message: 'O campo "talk" é obrigatório',
        });
    }
    next();
};

module.exports = {
    namee,
    agee,
    talkW,
    talkR,
    conferedTalk,
};