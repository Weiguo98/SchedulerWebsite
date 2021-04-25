// connect database with backend
const pg = require('pg');
function connectPgPool(sqlStr,callback){
    const pgConfig = {
        user:'postgres',
        datebase:'postgres',
        password:'8927168',
        host:'localhost',
        port: '5432',
        poolSize:5,
        poolIdleTimeout: 30000,
        reapIntervalMillis: 10000
    };

    var pgPool = new pg.Pool(pgConfig);
    pgPool.connect(function (isErr, client, done) {
        if (isErr) {
            console.log('connect query:' + isErr.message);
        }
        client.query(sqlStr, [], function (isErr, rst) {
            done();
            if (isErr) {
                console.log('query error:' + isErr.message);
            } else {
                callback(isErr,rst);
                console.log('success');
            }
            client.end();
        })
    });
}

exports.connectPgPool = connectPgPool;