var express = require('express');
var router = express.Router();
var cenct = require('./connection');

router.get('/', function(req, res, next) {
    //res.json({'camels': camels});
    cenct.connectPgPool('SELECT * from employee', function(isErr,rst){
        if(isErr){
            res.json({'employees':[]});
        } else {
            res.json({'employees':rst});
        }
    })
});


module.exports = router;
