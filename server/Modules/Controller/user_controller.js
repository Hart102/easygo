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


let userId = '';
var otp = Math.floor(1000 + Math.random() * 9000);
const sign_up = (req, res) => {//User Registration
    const { error, value } = register.validate(req.body)
    if(error) return res.json(error.message)
    let user_info = `INSERT INTO users(
        username, phone, email, password, otp) VALUES (?, ?, ?, ?, ?)`
    DbConn.query(user_info,
        [
            helperFunction.generate_username(value.email), 
            value.phone, value.email, value.password, otp
        ], (err, result) => {
        if(err){
            return res.json('Email or Phone number already exist')

        }else{
            let transport = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 2525,
                auth: {
                    user: "goodluckhart340",
                    pass: "mhebhgdrisoonlvl"
                }
            });
            let mailOptions = {
                from: SEND_FROM,
                to: value.email,
                subject: 'VERIFICATION CODE FROM EASYGO.COM',
                text: 'Hey there, it’s our first message sent with Nodemailer ',
                html: `OTP: <h1>${otp.toString()}</h1>`,
                attachments: [
                  {
                    filename: 'mailtrap.png',
                    path: __dirname + '/mailtrap.png',
                    cid: 'uniq-mailtrap.png' 
                  }
                ]
            };

            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                  return console.log(error);
                }
                res.json('Message sent');
            });
        }

        if(req.body.note){
            // verify email
        }

    })



    // return
    // if(err) return res.json(error.message)
    // let user_info = `INSERT INTO users(
    //     username, phone, email, password, otp) VALUES (?, ?, ?, ?, ?)`
    // DbConn.query(
    //     user_info, 
    //     [
    //         helperFunction.generate_username(value.email), 
    //         value.phone, value.email, value.password, ""
    //     ], (err, result) => {
    //     if(err) return res.json('Email or Phone number already exist')
    //     let user = `SELECT * FROM users WHERE email="${value.email}"`
    //     DbConn.query(user, (err, result) => {
    //         if(err) return res.json('something went wrong')
    //         res.json(true);
    //         delete result[0].password; req.session.user = result; 
    //         return userId = req.session.user;
    //     })
    // })
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
            res.json(true);
            delete result[0].password; req.session.user = result;
            return userId = req.session.user;
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

const user_session = async (req, res) => res.json(userId) //verify user session
const user_logout = (req, res) => {req.session.destroy(); return userId = '';}

module.exports = {
    sign_up,
    user_login,
    user_session,
    edit_email,
    user_logout
}