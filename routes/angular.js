var express = require('express');
var path = require('path');
const constants = require('../constants');
var router = express.Router();
var angularBuildPath = path.resolve(__dirname , constants.ANGULAR_LOCAL_PATH)

router.use(express.static(angularBuildPath));

router.get('*' , (req, res, next) => {
    if (req.url.startsWith('/api')) return next();
    res.sendFile(path.join(angularBuildPath,'index.html'));
  });
  
module.exports = router;