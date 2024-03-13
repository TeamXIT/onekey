const express = require('express');
const {createAsync, getAllAsync, getByPkAsync, deleteAsync, updateAsync} = require('../controllers/userController');
const router = express.Router();
router.post("/create",createAsync);
router.get("/getAll",getAllAsync);
router.get("/getByPk/:user_id",getByPkAsync);
router.delete("/delete/:user_id",deleteAsync);
router.put("/update/:user_id",updateAsync);

module.exports = router;