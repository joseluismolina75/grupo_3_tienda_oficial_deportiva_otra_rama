const express = require('express');
const router = express.Router();

//let userController=require('../controllers/userController.js');
const { getLogin, postLogin, profile, logout, getRegister, processRegister } = require('../controllers/userController.js')

//Formulario de Login
router.get('/login', getLogin);

//Procesar el Login
router.post('/login', postLogin);

// Perfil de Usuario
//router.get('/profile/', authMiddleware, userController.profile);

// Logout
//router.get('/logout/', userController.logout);

router.get('/register', getRegister);

// Procesar el registro
//router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);
router.post('/register', processRegister);

module.exports=router;