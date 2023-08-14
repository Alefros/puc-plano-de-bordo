const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.getVersion);
router.get('/version', mainController.getVersion);
router.get('/api/version', mainController.getVersion);

const tripRouter = require('./tripRoutes');
router.use('/api/trips', tripRouter);

module.exports = router;
