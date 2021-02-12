const profileFactory = require('../sevices/profileFactory');


/**
 * Le controller chargé de centraliser les middlewares concernant les fakes profils
 */
const profileController = {
    /**
     * Middleware chargé de générer des fakes profils
     * L'utilisateur peut fournir des morceaux dans la query string
     * @param {Express.Request} request - l'objet représentant la requête
     * @param {Express.Response} response - l'objet représentant la réponse
     */
    getProfile: (request, response) => {
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
    },

    /**
     * Middleware chargé d'ajouter des propositions à la factory
     * Retourne également un fake profil utilisant les nouvelles propositions
     * @param {Express.Request} request - l'objet représentant la requête
     * @param {Express.Response} response - l'objet représentant la réponse
     */
    addProfile: (request, response) => {
    // dans request.body, on trouvera les propositions
    // une proposition de nom, de job, d'adresse ou de pays
    // ou les 4

    // 1. enregistrer les propositions
    // ici, si glue existe encore, c'est pas grave
    // car il n'y a pas de glues dans data
    profileFactory.add(request.body);

    delete request.body.glue;

    const baseProfile = {...profileFactory.generate(), ...request.body};

    response.json(baseProfile.glue());
    }
};


module.exports = profileController;