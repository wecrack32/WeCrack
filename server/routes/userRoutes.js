const express = require('express');
const router = express.Router();
const {registerUser, login} = require('../controllers/userController');


router.post('/registerUser', registerUser);
router.post('/login', login);
router.post("/logout", verifyToken, logoutUser);


module.exports = router;
