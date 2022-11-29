module.exports = function validLogin(request, response, next) {
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/i;
    const { email } = request.body;
    if (!email) {
        return response.status(400).json({
            message: 'O campo "email" é obrigatório',
          });
    } 
    if (emailRegex.test(email) === false) {
        return response.status(400).json({
            message: 'O "email" deve ter o formato "email@email.com"',
        });
    }
    next();
};