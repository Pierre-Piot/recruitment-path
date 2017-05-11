const express = require('express')
const router = express.Router()
const multer = require('multer')


var uploading = multer({
  dest: __dirname + '../public/uploads/',
  limits: {fileSize: 1000000, files:1},
})

router.post('/upload', uploading, function(req, res) {

})

module.exports = router