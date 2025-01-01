
const express = require("express");
const router = express.Router();
const authCon = require('../Controller/index')
const authstock =  require('../Controller/stockController')


router.post('/signin',authCon.authsignin)


// all stock

router.get('/allstockdata', authstock.getallstock)
router.get('/stockdataid/:id', authstock.getstockid)

module.exports = router