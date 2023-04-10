require('dotenv').config();
const nodemailer = require('nodemailer')

const mailTransporter = () => {
    let transport = nodemailer.createTransport({
        service: "gmail",
        port: 2525,
        auth: {
            user: "goodluckhart340",
            pass: "mhebhgdrisoonlvl"
        }
    });
    return transport
}

module.exports = { 
    mailTransporter
}
