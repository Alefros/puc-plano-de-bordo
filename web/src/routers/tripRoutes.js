const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');
const auth = require('../controllers/authController');
const Constants = ('../utils/constants')

router.get('/',
        auth.authenticate(app),
        auth.hasPermission(app, Constants.PERMISSIONS.VIEW_TRIP),
        tripController.getTrips);

router.post('/', 
        auth.authenticate(app),
        auth.hasPermission(app, Constants.PERMISSIONS.EDIT_TRIP),        
        tripController.createTrip);

router.put('/:id', 
        auth.authenticate(app),
        auth.hasPermission(app, Constants.PERMISSIONS.EDIT_TRIP), 
        tripController.updateTrip);

router.delete('/:id', 
        auth.authenticate(app),
        auth.hasPermission(app, Constants.PERMISSIONS.VIEW_TRIP), 
        tripController.deleteTrip);

module.exports = router;
