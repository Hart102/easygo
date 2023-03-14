const express = require('express')
const bodyParser = require('body-parser')
const Controllers = require('./Modules/Controller/user_controller')
const session = require('express-session')
const origin = require('./AccessOrigin/access')
const app = express()

app.use(origin)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const expDate = 60 * 60 * 1000 * 24; // 1 hour 1 day
app.use(session({
    name: "easygo",
    secret: '123',
    resave: true,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: expDate,
        secure: false,
        sameSite: true // 'strict'
    }
}))


// Routes 
app.post('/api/sign_up',  Controllers.sign_up) // user authentication routes
app.post('/api/user_login',  Controllers.user_login)
app.post('/api/edit_email', Controllers.edit_email)
app.get('/api/user_session', Controllers.user_session)
app.post('/api/user_logout', Controllers.user_logout)

app.listen(5000, () => console.log(`App running on port 5000`))