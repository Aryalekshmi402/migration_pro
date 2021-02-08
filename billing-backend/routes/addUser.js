const express = require('express');
const router = express.Router();
module.exports = router;

const {addCustomer} = require('../controllers/addUser')

router.post("/addUser", addCustomer)

