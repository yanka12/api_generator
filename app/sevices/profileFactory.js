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

const profileFactory = {
    data: require('../../data/parts.json'),

    randomName: () => randomInArray(profileFactory.data.names),
    randomJobs: () => randomInArray(profileFactory.data.jobs),
    randomAddress: () => randomInArray(profileFactory.data.address),
    randomCountry: () => randomInArray(profileFactory.data.countries),

    generate: () => {

        return {
            names: profileFactory.randomName(),
            jobs: profileFactory.randomJobs(),
            address: profileFactory.randomAddress(),
            countries: profileFactory.randomCountry(),

            /* différence entre function() et () => : function permet de redéfinir this comment étant l'objet courant, => ne le fait pas */
            glue: function() {
                // un tableau temporaire qui devient une string grâce à join
                return [`Hello my name is ${this.names}, I'm a(an) ${this.jobs}, I live at ${this.address} in ${this.countries}`].join(' ');
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
