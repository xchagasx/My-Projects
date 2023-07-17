if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('./passport-config');
const { request, response } = require('express');
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => user.find(user => user.id === id)
    )

const users = [];

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

function checkAuthenticated(request, response, next) {
    if (request.isAuthenticated()) {
        return next()
    }
    response.redirect('/login')
}

function checkNotAuthenticated(request, response, next) {
    if (request.isAuthenticated()) {
        return response.redirect('/')
    }
    next()
}

app.get('/', checkAuthenticated, (_request, response) => {
    response.render('index.ejs', { name: request.user.name })
})

app.get('/login', checkNotAuthenticated, (_request, response) => {
    response.render('login.ejs')
})

app.post('login', checkNotAuthenticated, passport.authenticate('local', {
    sucessRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (_request, response) => {
    response.render('register.ejs')
})

app.post('register', checkNotAuthenticated, async (request, response) => {
try {
    const hashedPassword = bcrypt.hash(request.body.password, 10)
    users.push({
        id: Date.now().toString(),
        name: request.body.name,
        email: request.body.email,
        password: hashedPassword
    })
    response.redirect('/login')
} catch {
    response.redirect('/register')
}
})

app.delete('/logout', (request, response) => {
    request.logOut()
    request.redirect('/login')
})

app.listen(3000)