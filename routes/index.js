const express = require("express");
const router = express.Router();
const mstusers = require("../modules/mstusers/routes");
const mstroleuser = require("../modules/mstrole/routes");

router.use("/mstusers", mstusers);
router.use("/mstrole", mstroleuser);

module.exports = router;
