const { 
    register 
} = require('../Auth/user_auth');
const { conn, prepareDataBase } = require('../dbConn/conn');
const helperFunction = require('../helper_function')
const SEND_FROM = process.env.SEND_FROM
const { mailTransporter } = require('../Mailer/Mailer');

const sign_up = (req, res) => {//User Registration
    const otp = Math.floor(1000 + Math.random() * 9000);
    const { error, value } = register.validate(req.body)
    prepareDataBase().CreateDataBase()//Create database and tables if none exist
    if(error) return res.json(error.message)
    let mailOptions = {
        from: SEND_FROM,
        to: value.email,
        subject: 'Verification Code From EasyGoData',
        text: 'Hey there, it’s our first message sent with Nodemailer ',
        html: `OTP: <h1>${otp.toString()}</h1>`,
    };
    mailTransporter().sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.json('Connection timeout')
        }else{
            // Success
            let new_user = `INSERT INTO users(
                username, phone, email, password, otp) VALUES (?, ?, ?, ?, ?)`
            conn.query(new_user, [
                helperFunction.generate_username(value.email), 
                value.phone, value.email, value.password, otp
            ], (err, result) => {
                if(err) return res.json('Email or Phone number already exist')
                res.json(true)
            })
        }
    });
};

module.exports = { sign_up }