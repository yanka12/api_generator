const { Router } = require('express');

const router = Router();

const profileController = require('./controllers/profileController');

router.get('/profiles', profileController.getProfile);












module.exports = router;