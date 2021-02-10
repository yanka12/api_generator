
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

    randomName: () => randomInArray(profileFactory.data.name),
    randomJobs: () => randomInArray(profileFactory.data.jobs),
    randomAddress: () => randomInArray(profileFactory.data.address),
    randomCountry: () => randomInArray(profileFactory.data.country),


    generate: () => {

        return {
            name: profileFactory.randomName(),
            jobs: profileFactory.randomJobs(),
            address: profileFactory.randomAddress(),
            country: profileFactory.randomCountry(),
        }
        
    }
};

