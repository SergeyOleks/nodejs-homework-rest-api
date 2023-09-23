const express = require("express");

const ctrl = require("../../controllers/auth");
const router = express.Router();

const { authenticate, validateBody, upload } = require("../../middlewares/");
const { schemas } = require("../../models/user");

//signup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.get("/verify/:verificationCode", ctrl.verifyEmail);

router.post("/verify", validateBody(schemas.emailSchema), ctrl.resendVerifyEmail);

//signin
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

//current
router.post("/current", authenticate, ctrl.getCurrent);

//logout
router.post("/logout", authenticate, ctrl.logout);

//add avatars
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
