require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT
});

connection.connect((err) => {
    if (err) {
        console.error('FAIL: ', err);
        return;
    }

    console.log('SUCESS: ', connection.threadId);
});

module.exports = connection;