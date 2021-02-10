const profileFactory = require('../services/cadexFactory');

const profileController = {
    getProfile: (request, response) => {
        response.json('Hello World');

        // si l'utilisateur est un thug et qu'il essaie d'écraser notre méthode glue
        // on lui retire cette possibilité en supprimant sa proposition de remplacement de glue
        delete request.query.glue;

        // NB : toutes les autres propriétés de query sont safe
        // ça générera un profil parfaitement normal (car glue ne prend que les 4 morceaux originaux en considération)

        // étape 1 : profileFactory.generate() retourne un objet littéral
        // { name: ??, job: ??, address: ??, country: ??, glue: ()}
        // request.query peut contenir des morceaux de profil décidés par l'utilisateur
        // { name: ??, job: ??, address: ??, country: ??, [*]}
        const baseProfile = {...profileFactory.generate(), ...request.query};
        // 0 manip, on génère le profil et on colle les morceaux tout de suite
        response.json(baseProfile.glue());
    }
};


module.exports = profileController;