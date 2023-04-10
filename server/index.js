const express = require('express')
const bodyParser = require('body-parser')
const Controllers = require('./Modules/Controller/user_controller')
const session = require('express-session')
const origin = require('./AccessOrigin/access')
const signUp = require('./Modules/Controller/SignUp')
const { getTransactions } = require('./Modules/Controller/transactions')

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
app.post('/api/sign_up',  signUp.sign_up) // user authentication routes
app.post('/api/confirm_mail',  Controllers.userAuthentication().cornfirm_email)
app.post('/api/user_login',  Controllers.userAuthentication().user_login)
app.get('/api/user_session', Controllers.userAuthentication().user_session)
app.post('/api/user_logout', Controllers.userAuthentication().user_logout)


// Transaction routes 
app.get('/api/getAllTransaction', getTransactions().getAllTransactions)
app.post('/api/getSingleTransaction', getTransactions().getSingleTransaction)
app.post('/api/deleteTransaction', getTransactions().deleteTransaction)



app.listen(5000, () => console.log(`App running on port 5000`))