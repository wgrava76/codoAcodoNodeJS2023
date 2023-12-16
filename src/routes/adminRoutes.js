
const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');

router.get('/',adminControllers.adminhome);
router.get('/create',adminControllers.adminCreate);
router.post('/create',adminControllers.adminCreateAdd);
router.get('/edit/:id',adminControllers.adminEdit);
router.put('/edit/:id',adminControllers.adminEditAdd);
router.delete('/delete/:id',adminControllers.adminDelete);

module.exports = router;