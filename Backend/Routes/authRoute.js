const express = require('express');
const {homePageController,registerUserController, signinUserController, generateQrController, allComponentsController} = require('../Controllers/authController');
const IsSignIn = require('../Middlewares/IsSignIn');

//router object
const router = express.Router();


router.get('/home',homePageController);


//register route
router.post('/registeruser',registerUserController);

//signin route
router.post('/signin',signinUserController);

//component add route
router.post('/generateqr',IsSignIn, generateQrController);


//get all components
router.get('/getcomponents',allComponentsController);

module.exports = router;