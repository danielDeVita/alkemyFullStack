const express = require("express");
const router = express.Router();
const controllers = require("./controllers")

router.get("/", controllers.home);
router.post('/', controllers.formProcess);
router.get("/:id", controllers.editView);
router.put("/:id", controllers.editProcess);

module.exports = router