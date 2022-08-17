const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginController')
const passport = require('passport')
const session = require('express-session');

// /users
router.get("/", loginController.login)

router.post("/login", passport.authenticate('local', {
  successRedirect: "/contatos/index",
  failureRedirect: "/",
  badRequestMessage: 'Preencha os campos!',
  failureFlash: true,
}))

router.get('/logout',loginController.logout)



module.exports = router