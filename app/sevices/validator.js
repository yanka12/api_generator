const profileProposalSchema = require('../schemas/profileProposal');

const validateQuery = (request, response, next) => {
    // Joi nous protège maintenant des petits malins qui essaieraient de passer d'autres segments que ceux autorisés par l'application
    const validationResult = profileProposalSchema.validate(request.query);

    // si la validation génère une erreur, l'objet résultant aura une propriété error
    if (validationResult.error) {
        response.status(400).json(validationResult.error.message);
    } else {
        next();
    }
};

const validateBody = (request, response, next) => {
    // Joi nous protège maintenant des petits malins qui essaieraient de passer d'autres segments que ceux autorisés par l'application
    const validationResult = profileProposalSchema.validate(request.body);

    // si la validation génère une erreur, l'objet résultant aura une propriété error
    if (validationResult.error) {
        response.status(400).json(validationResult.error.message);
    } else {
        next();
    }
}

module.exports = {
    validateBody,
    validateQuery
};