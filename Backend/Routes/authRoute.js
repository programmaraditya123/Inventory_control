const express = require('express');
const {homePageController,registerUserController, signinUserController} = require('../Controllers/authController');
const IsSignIn = require('../Middlewares/IsSignIn');

//router object
const router = express.Router();


router.get('/home',homePageController);


//register route
router.post('/registeruser',registerUserController);

//signin route
//router.post('/signin',IsSignIn,signinUserController);
router.post('/signin',signinUserController);

module.exports = router;