const { Router } = require('express');

const router = Router();

const profileController = require('./controllers/profileController');

router.get('/profiles', profileController.getProfile);

router.post('/profile', profileController.addProfile);





module.exports = router;