var express = require('express');
var router = express.Router();
var cenct = require('./connection');

router.get('/', function(req, res, next) {
    //res.json({'camels': camels});
    cenct.connectPgPool('SELECT * from staff1', function(isErr,rst){
        if(isErr){
            res.json({'employees':[]});
        } else {
            res.json({'employees':rst});
        }
    })
});

router.post('/id', function(req,res,next){
    let name = req.body.name;
    var sql = `SELECT emp_id from staff1 where emp_name ='${name}'`;
    let starttime = parseInt(req.body.starttime);
    let endtime = parseInt(req.body.endtime);
    cenct.connectPgPool(sql,function(isErr,rst){
        if(isErr){
            console.log('database choose eid fail');
        } else {
            console.log('database choose eid success');
            console.log(rst.rows[0].emp_id);
            var id = rst.rows[0].emp_id;
            var sql2 =`INSERT INTO schedule (employee_id,start_time,end_time,area) values('${id}',${starttime},${endtime},'${req.body.zone}');`;
            cenct.connectPgPool(sql2,function(isErr,rst){
            if(isErr){
                 console.log('database insert eid fail');
            } else {
            console.log('database insert eid success');
            // console.log(rst)
                    }
            });
        }
    });    
    cenct.end
});


module.exports = router;
