const express = require("express")
const router = express();
router.set("views", "./views");
router.set("view engine","pug");
router.use('/css', express.static("./views/css"))
router.use('/js', express.static("./views/js"))

const controller = require("../controller/controller");

router.get("/", controller.LOAD)

module.exports = router