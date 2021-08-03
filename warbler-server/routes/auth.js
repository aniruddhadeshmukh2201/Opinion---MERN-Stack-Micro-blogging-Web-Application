const express = require("express");
const router = express.Router();
const multer  = require('multer');
const upload = multer({dest: 'uploads/'});

const { signin, signup } = require("../handlers/auth");

router.post("/signin", signin);
router.post("/signup", upload.single('profileImageUrl'), signup);
// router.post("/signup", upload.single('profileImageUrl'), (req, res) => {
//     res.send(req.body);
// });
module.exports = router;