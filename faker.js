// ici j'utilise Faker.js pour générer mes données

const faker = require('faker');

const randomName = faker.name.findName();
const randomadress = faker.address.streetAddress();
const randomjob = faker.name.jobTitle();



console.log(randomjob);