const multer = require('multer')
const store = multer.diskStorage({
    destination: function(req, file, next){
        next(null, '/Users/visheshgoyal/JavaScript WebDev/Utils/Uploads')
    }, 
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({storage:store})

module.exports = upload