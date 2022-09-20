const express = require('express')
const router = express.Router()
const wordsController = require('../controllers/words') 
const { ensureAuth } = require('../middleware/auth')


router.get('/', ensureAuth, wordsController.getWords)

router.get('/timer', ensureAuth, wordsController.timerWords)

router.post('/createWords', wordsController.createWords)

router.delete('/deleteWords', wordsController.deleteWords)

module.exports = router