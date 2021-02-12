// décrit ce qu'est concrètement une proposition de profil
const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string(),
    job: Joi.string(),
    address: Joi.string(),
    country: Joi.string()
});

module.exports = schema;