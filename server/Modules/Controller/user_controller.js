const { login_auth } = require('../Auth/user_auth');
const { conn } = require('../dbConn/conn');


let currentUser;
const userAuthentication = () =>  {
    return{
        cornfirm_email(req, res){// Confrim mail
            if(req.body.otp){
                let user = `SELECT * FROM users WHERE email="${req.body.email}"`
                conn.query(user, (err, result) => {
                    if(err) {res.json('Something went wrong')
                    }else{
                        if(req.body.otp == result[0].otp){
                            res.json(true)
                            delete result[0].password; req.session.user = result;
                            return currentUser = req.session.user;
                        }else{res.json('Invalid otp')}
                    }
                })
            }else{// Resend Otp 
            }
        },
        user_login(req, res){// User Login
            const { error, value } = login_auth.validate(req.body)
            if (error) return res.json(error.message)
            let user = `SELECT * FROM users WHERE phone="${value.phone_number}"`
            conn.query(user, (err, result) => {
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
        },
        user_session(req, res){// verify user session
            return res.json(currentUser)
        }, 
        user_logout(req, res){// Logout 
            req.session.destroy(); return currentUser = '';
        }
    }
}

module.exports = { userAuthentication }