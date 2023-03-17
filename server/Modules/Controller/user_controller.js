const { 
    register, login_auth 
} = require('../Auth/user_auth');
const DbConn = require('../dbConn/conn');
const helperFunction = require('../helper_function')
require('dotenv').config();
// const { sendMail } from '../Mailer/Mailer';
const SEND_FROM = process.env.SEND_FROM
const senderAuthentication = require('../Mailer/Mailer')
const nodemailer = require('nodemailer')



const sign_up = (req, res) => {//User Registration
    const otp = Math.floor(1000 + Math.random() * 9000);
    const { error, value } = register.validate(req.body)
    if(error) return res.json(error.message)
    let transport = nodemailer.createTransport({
        service: "gmail",
        port: 2525,
        auth: {
            user: "goodluckhart340",
            pass: "mhebhgdrisoonlvl"
        }
    });
    let mailOptions = {
        from: SEND_FROM,
        to: value.email,
        subject: 'Verification Code From EasyGoData',
        text: 'Hey there, it’s our first message sent with Nodemailer ',
        html: `OTP: <h1>${otp.toString()}</h1>`,
    };
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.json('Connection timeout')
        }else{
            // Success
            let new_user = `INSERT INTO users(
                username, phone, email, password, otp) VALUES (?, ?, ?, ?, ?)`
            DbConn.query(new_user, [
                helperFunction.generate_username(value.email), 
                value.phone, value.email, value.password, otp
            ], (err, result) => {
                if(err) return res.json('Email or Phone number already exist')
                res.json(true)
            })
        }
    });
};

let currentUser;
const cornfirm_email = (req, res) => {// Confrim mail
    if(req.body.otp){
        let user = `SELECT * FROM users WHERE email="${req.body.email}"`
        DbConn.query(user, (err, result) => {
            if(err) {
                res.json('Something went wrong')
            }else{
                if(req.body.otp == result[0].otp){
                    res.json(true)
                    delete result[0].password; req.session.user = result;
                    return currentUser = req.session.user;
                }else{
                    res.json('Invalid otp')
                }
            }
        })
    }else{
        // Resend Otp
        
    }
}


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
            res.json(true);
            delete result[0].password; req.session.user = result;
            return currentUser = req.session.user;
        }
    })
};

const edit_email = (req, res) => {// Edit email
    const { editedEmail, id } = req.body.value
    const updateMail = `UPDATE users SET email ="${editedEmail}" WHERE id=${id}`
    DbConn.query(updateMail, (err, result) => {
        if (err) return register.json('Something went wrong while editing!.')
        res.json(true); 
    })
}

const user_session = async (req, res) => res.json(currentUser) //verify user session
const user_logout = (req, res) => {req.session.destroy(); return currentUser = '';}

module.exports = {
    sign_up,
    cornfirm_email,
    user_login,
    user_session,
    edit_email,
    user_logout
}