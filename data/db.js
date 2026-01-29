const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',   // ✅ FIXED
    user: 'root',
    password: '',
    database: 'demo_kec'
});

connection.connect((err) => {
    if (err) {
        console.error('❌ Error connecting to database:', err.message);
        return;
    }
    console.log('✅ Connected to database successfully');
});

module.exports = connection;
