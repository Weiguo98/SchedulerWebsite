var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var cors = require('cors');
var history = require('connect-history-api-fallback');
var connectPgPool = require('./connection');
var port = process.env.PORT || 3000;
// var employeeController = require('./emcontroller');
var cenct = require('./connection');


// Create Express app
var app = express();
// Parse requests of content-type 'application/json'
app.use(bodyParser.json());
// HTTP request logger
app.use(morgan('dev'));
//cd Enable cross-origin resource sharing for frontend must be registered before api
app.options('*', cors());
app.use(cors());

const { Client } = require('pg');

const dbclient = new Client({
    user: 'postgres',
    host: 'database-2.c6ztee9rpkco.us-east-2.rds.amazonaws.com',
    database: '',
    password: 'Qwerty123',//add the password provided
    port: 5432,
});

dbclient.connect();

const query = 'select * from staff1;';
app.get('/allStaff', (req, response) => {
    dbclient.query(query, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        response.status(200).json(res.rows)
        /* for (let row of res.rows) {
            console.log(row);
        } */
    });
});

const scheduleQuery = "SELECT schedule.start_time, schedule.end_time, schedule.area, schedule.schedule_date, schedule.employee_id, schedule.start_minute, schedule.end_minute, staff1.emp_name, staff1.emp_position FROM schedule FULL OUTER JOIN staff1 ON schedule.employee_id=staff1.emp_id WHERE schedule.schedule_date != ''";
app.get('/schedule', (req, response) => {
    dbclient.query(scheduleQuery, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }

        response.status(200).json(res.rows)
        /* for (let row of res.rows) {
            console.log(row);
        } */
    });
});

app.post('/schedule', function (req, res, next) {
    let name = req.body.name;
    var sql = `SELECT emp_id from staff1 where emp_name ='${name}'`;
    let starttime = parseInt(req.body.starttime);
    let endtime = parseInt(req.body.endtime);
    let startmin = parseInt(req.body.startmin);
    let endmin = parseInt(req.body.endmin);
    cenct.connectPgPool(sql, function (isErr, rst) {
        if (isErr) {
            console.log('database choose eid fail');
        } else {
            console.log('database choose eid success');
            console.log(rst.rows[0].emp_id);
            // console.log(startmin)
            var id = rst.rows[0].emp_id;
            var sql2 = `INSERT INTO schedule (employee_id,start_time,end_time,schedule_date,area,start_minute,end_minute) values('${id}',${starttime},${endtime},'${req.body.date}','${req.body.area}',${startmin},${endmin});`;
            cenct.connectPgPool(sql2, function (isErr, rst) {
                if (isErr) {
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

app.post('/del', function (req, res, next) {
    let name = req.body.name;
    var sql = `SELECT emp_id from staff1 where emp_name ='${name}'`;
    cenct.connectPgPool(sql, function (isErr, rst) {
        if (isErr) {
            console.log('database choose eid fail');
        } else {
            console.log('database choose eid success');
            // console.log(rst);
            var id = rst.rows[0].emp_id;
            console.log(req.body.date)
            var sql2 = `delete from schedule where employee_id = '${id} 'and schedule_date ='${req.body.date}' and start_time='${req.body.start_time}'and end_time='${req.body.end_time}' `;
            cenct.connectPgPool(sql2, function (isErr, rst) {
                if (isErr) {
                    console.log('database delete fail');
                } else {
                    console.log('database delete success');
                    // console.log(rst)
                }
            });
        }
    });
    cenct.end
});

// Define routes
app.get('/api', function (req, res) {
    res.json({ 'message': 'Welcome to the EDA397/DIT192 backend ExpressJS project!' });
});
//res.json({'message': 'Welcome to hello world application'});
app.get('/api', function (req, res) {
    res.json({ 'message': 'welcome' });
});
// register to show the datapage
// app.use('/api/employees', employeeController);

// Catch all non-error handler for api (i.e., 404 Not Found)
app.use('/api/*', function (req, res) {
    res.status(404).json({ 'message': 'Not Found' });
});

// Configuration for serving frontend in production mode
// Support Vuejs HTML 5 history mode
app.use(history());
// Serve static assets
var root = path.normalize(__dirname + '/..');
var client = path.join(root, 'client', 'dist');
app.use(express.static(client));

// Error handler (i.e., when exception is thrown) must be registered last
var env = app.get('env');
// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
    console.error(err.stack);
    var err_res = {
        'message': err.message,
        'error': {}
    };
    if (env === 'development') {
        err_res['error'] = err;
    }
    res.status(err.status || 500);
    res.json(err_res);
});

app.listen(port, function (err) {
    if (err) throw err;
    console.log(`Express server listening on port ${port}, in ${env} mode`);
    console.log(`Backend: http://localhost:${port}/api/`);
});

module.exports = app;
