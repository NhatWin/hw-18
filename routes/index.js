const router = require("express").Router();
const userRoutes = require("./user-routes");

router.use("/users", userRoutes);
router.use("/thoughts");

module.exports = router;
