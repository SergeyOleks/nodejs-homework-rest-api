const express = require('express');

const ctrl = require('../../controllers/auth')
const router = express.Router();

const { authenticate, validateBody } = require("../../middlewares/");
const {schemas} = require('../../models/user')

//signup
router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

//signin
router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

//current
router.post('/current', authenticate, ctrl.getCurrent);

//logout
router.post("/logout", authenticate, ctrl.logout);

module.exports = router;