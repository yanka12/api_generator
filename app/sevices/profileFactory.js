const pluralize = require('pluralize');


// on va utiliser un DP nommé Factory

const profileController = require('../controllers/profileController');

// fonction qui génère un nombre aléatoire
const random = (min, max) => {
return Math.floor(Math.random() * (max - min)) + min;
};

// finction qui permet de récupérer un élément ds un tableau
const randomInArray = list => {
    return list[random(0, list.length)];
}
// ces deux fonctions, on ne les exporte pas car elles ne sont utiles que localement
/**
 * Un fake profil, une phrase aléatoire composée de 4 "morceaux"
 * @name profile
 * @typedef {profile} profile
 * @property {string} names - le nom dans la phrase
 * @property {string} jobs - le job dans la phrase
 * @property {string} address - l'adresse' dans la phrase
 * @property {string} countries - le pays dans la phrase
 * @method glue
 */


/**
 * Factory pour construire des cfakes profils
 * @requires "data/parts.json"
 */
const profileFactory = {
    data: require('../../data/parts.json'),
    /**
     * Retourne un nom au hasard parmi les propositions mémorisées
     * @returns {String} le nom choisi par les propositions
    */
    randomName: () => randomInArray(profileFactory.data.names),

    /**
     * Retourne un job au hasard parmi les propositions mémorisées
     * @returns {String} le job choisi par les propositions
    */
    randomJob: () => randomInArray(profileFactory.data.jobs),

    /**
     * Retourne une adresse au hasard parmi les propositions mémorisées
     * @returns {String} l'adresse choisi par les propositions
    */
    randomAddress: () => randomInArray(profileFactory.data.addresses),

    /**
     * Retourne un pays au hasard parmi les propositions mémorisées
     * @returns {String} le pays choisi par les propositions
    */
    randomCountry: () => randomInArray(profileFactory.data.countries),


    /**
     * Retourne un objet contenant tous les morceaux d'un profil et une méthode pour le transformer en string
     * @returns {profile} le profil prêt à l'emploi
     */
    generate: () => {

        return {
            name: profileFactory.randomName(),
            job: profileFactory.randomJob(),
            address: profileFactory.randomAddress(),
            country: profileFactory.randomCountry(),
            /* différence entre function() et () => : function permet de redéfinir this comment étant l'objet courant, => ne le fait pas */
            /**
             * Colle les morceaux du profil pour en faire une phrase
             * @function glue
             * @returns {string} la phrase finale
             */
            glue: function() {
                // un tableau temporaire qui devient une string grâce à join
                return [`Hello my name is ${this.name}, I'm a(an) ${this.job}, I live at ${this.address} in ${this.country}`].join(' ');
            }
        } 
    },
        /*
        on appelle add({
            name: "Jean Castex",
            job: "master agent",
            address: "196 Carleton Cliffs"
        })
        MAIS data contient names, jobs, address et countries (tous au pluriel)
        on va installer et utiliser un inflecteur pour passer les propriétés au pluriel
    */
    /**
     * Ajoute des propositions à celles disponibles dans la propriété data
     * @param {profile} propositions - les propositions à ajouter
     */
    add: (propositions) => {
    for (let type in propositions) {
        if (profileFactory.data[pluralize(type)]) { // car les noms sont au pluriel
            profileFactory.data[pluralize(type)].push(propositions[type]);
        }
    }
}
    
};
console.log(profileFactory.generate().glue());

module.exports = profileFactory;
