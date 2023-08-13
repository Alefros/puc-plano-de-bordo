const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.getVersion);
router.get('/version', mainController.getVersion);

module.exports = router;
