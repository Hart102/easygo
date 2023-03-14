require('dotenv').config();
const nodemailer = require('nodemailer')

const senderAuthentication = () => {
    let transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'goodluckhart340',
            pass: 'mhebhgdrisoonlvl'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
        },
    });

    return mailTransporter
}

module.exports = { 
    senderAuthentication
}
