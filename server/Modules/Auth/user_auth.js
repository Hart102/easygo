const Joi = require('joi')

const register = Joi.object().keys({
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const login_auth = Joi.object().keys({
    phone_number: Joi.string().required(),
    user_password: Joi.string().required()
});

module.exports = {
    register,
    login_auth
}
