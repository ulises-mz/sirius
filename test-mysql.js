const mysql = require('mysql2/promise');

async function testConnection() {
    try {
        const connection = await mysql.createConnection({
            host: 'srv487.hstgr.io',
            port: 3306,
            user: 'u491289285_sirius',
            password: 'Ulisesmendez1+',
            database: 'u491289285_sirius'
        });

        console.log('✅ MySQL connection successful!');
        const [rows] = await connection.execute('SELECT DATABASE() as db');
        console.log('Connected to database:', rows[0].db);
        await connection.end();
        return true;
    } catch (error) {
        console.error('❌ MySQL connection failed:');
        console.error(error.message);
        return false;
    }
}

testConnection();
