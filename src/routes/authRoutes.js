
const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');

router.get('/login',authControllers.authHome);
router.post('/login',authControllers.authLogin);
router.get('/register',authControllers.authRegister);
router.post('/register',authControllers.authRegisterInfo);
router.get('/logout',authControllers.authLogout);


module.exports = router;