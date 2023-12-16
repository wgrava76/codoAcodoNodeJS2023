
const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopControllers');

router.get('/',shopControllers.shopHome);
router.get('/item/:id',shopControllers.shopItemID);
router.post('/item/:id/add',shopControllers.shopItemAdd);
router.get('/cart',shopControllers.cart);
router.post('/cart',shopControllers.cartAdd);

module.exports = router;