const { 
    register, login_auth 
} = require('../Auth/user_auth');
const DbConn = require('../dbConn/conn');
const helperFunction = require('../helper_function')

let current_user = '';
const sign_up = (req, res) => {//User Registration
    const { error, value } = register.validate(req.body)
    if (error) return res.json(error.message)
    let user_info = `INSERT INTO users(username, phone, email, password, otp) VALUES (?, ?, ?, ?, ?)`
    DbConn.query(
        user_info, 
        [
            helperFunction.generate_username(value.email), 
            value.phone, value.email, value.password, ""
        ], (err, result) => {
        if(err) return res.json('Email or Phone number already exist')
        let user = `SELECT * FROM users WHERE email="${value.email}"`
        DbConn.query(user, (err, result) => {
            if(err) return res.json('something went wrong')
            res.json(true); 
            delete result[0].password; req.session.user = result; 
            return current_user = req.session.user;
        })
    })
};


const user_login = (req, res) => {// User Login
    const { error, value } = login_auth.validate(req.body)
    if (error) return res.json(error.message)
    let user = `SELECT * FROM users WHERE phone="${value.phone_number}"`
    DbConn.query(user, (err, result) => {
        if(err) return res.json('Something went wrong please try again!')
        if(result == '') return res.json('User does not exist')
        if(result[0].password !== value.user_password){
            res.json('Incorrect phone number or password')
        }else{
            res.json(true)
            delete result[0].password; req.session.user = result;
            return current_user = req.session.user;
        }
    })
};

const user_session = (req, res) => res.json(current_user) //verify user session
const user_logout = (req, res) => {req.session.destroy(); return current_user = '';}

module.exports = {
    sign_up,
    user_login,
    user_session,
    user_logout
}