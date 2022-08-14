const express = require("express");
const router = express.Router();
const controllers = require("./controllers")

router.get("/", controllers.home);
router.post('/', controllers.formProcess);
router.get("/api", controllers.api);
router.get("/:id", controllers.editView);
router.put("/:id", controllers.editProcess);
router.delete("/:id", controllers.delete);

module.exports = router