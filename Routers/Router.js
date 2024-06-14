const exp = require('express')
const multer = require('../Configuration/multer')
const router = exp.Router()
const control = require('../Controllers/Controller')

router.get('/status', control.status)

router.post('/api/form', multer.single('file'), control.fileUpload)

module.exports = router