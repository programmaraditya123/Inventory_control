const express = require('express');
const {homePageController,registerUserController, signinUserController, generateQrController, allComponentsController, deleteComponentController, updateComponentController, componentByIDController, dispatchComponentController} = require('../Controllers/authController');
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

//delete component
router.delete('/delete/:id',deleteComponentController);

//update component
router.put('/update/:id',updateComponentController);

//get component by id
router.get('/getcomp/:id',componentByIDController);


//dispatch component controller
router.put('/dispatchcomp/:id',dispatchComponentController);

module.exports = router;