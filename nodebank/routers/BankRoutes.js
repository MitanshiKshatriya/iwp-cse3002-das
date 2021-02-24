const express = require('express')
const router = express.Router()

const BankController = require('../controllers/BankControllers')

router.get('/',BankController.index)
router.get('/show',BankController.show)
router.post('/store',BankController.store)
router.post('/update',BankController.update)
router.post('/debit',BankController.debit)
module.exports = router
