const express = require("express");
const ctrl = require('../../controllers/contacts');
const Joi = require("joi");
const { isValidId, validateBody } = require("../../middlewares/");

const router = express.Router();

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean()
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});




router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(addSchema), ctrl.add);

router.put("/:contactId", isValidId, validateBody(addSchema), ctrl.updateById);

router.delete("/:contactId", isValidId, ctrl.deleteById);

router.patch("/:contactId/favorite", isValidId, validateBody(updateFavoriteSchema), ctrl.updateFavorite);


module.exports = router;
