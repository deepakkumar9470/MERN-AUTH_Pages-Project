const express = require('express')

const router = express.Router()
const { signup, login, logout, getSingleUser } = require('../controllers/userController');
const authProtect = require('../middleware/authentication');

// @ /api/user/resister 
router.post('/register', signup);

// @ /api/user/login 
router.post('/login', login);

// @ /api/user/123 

router.get('/:id', getSingleUser)


// @ /api/user/logout 
router.post('/logout', logout);

module.exports = router