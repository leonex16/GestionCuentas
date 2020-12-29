const mysql = require('mysql');
const { promisify } = require('util'); // Pool not support promises but this module allow write promise to pool

const { database } = require('./keys'); // I used destructure a object
console.log(database)
const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err){
        switch(err.code){
            case 'PROTOCOL_CONNECTION_LOST':
                console.log('DATABASE CONNECTION WAS CLOSED');
                break;
            case 'ER_CON_COUNT_ERROR':
                console.log('DATABASE HAS TO MANY CONNECTIONS');
                break;
            case 'ECONNREFUSED':
                console.log('DATABASE CONNECTION WAS REFUSED');
                break;
            default:
                console.log(err.code);
                break;
        };
    };

   if(connection){
        connection.release();
        console.log('Connect correct');
        return;
   };
});

// Convert callback to promise with util.promisify
pool.query = promisify(pool.query)

module.exports = pool;