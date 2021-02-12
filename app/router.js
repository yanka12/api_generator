const { Router } = require('express');

const router = Router();

const profileController = require('./controllers/profileController');
const { validateQuery, validateBody } = require('./sevices/validator');
/**
 * Génère un profil de manière aléatoire
 * @route GET /profiles
 * @group profiles - génération de fake profil
 * @param {string} names.query - le nom qu'on peut fournir
 * @param {string} jobs.query - le job qu'on peut fournir
 * @param {string} address.query - l'adresse' qu'on peut fournir
 * @param {string} countries.query - le pays qu'on peut fournir
 * @returns {string} 200 - le fake profil généré
 */
router.get('/profiles', validateQuery, profileController.getProfile);
/**
 * Ajoute des propositions de segments de profil et génère un fake profil basé sur les segments fournis
 * @route POST /profile
 * @group profile - génération de fakes profils
 * @param {string} names.body - le nom qu'on peut fournir
 * @param {string} jobs.body - le job qu'on peut fournir
 * @param {string} address.body - l'adresse' qu'on peut fournir
 * @param {string} countries.body - le pays qu'on peut fournir
 * @returns {string} 200 - le fake profil généré
 */
router.post('/profile', validateBody, profileController.addProfile);





module.exports = router;