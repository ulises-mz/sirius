const mysql = require('mysql2/promise');
require('dotenv').config({ path: '.env.local' });

async function testConfig() {
    try {
        const DB_CONFIG = {
            host: process.env.DB_HOST || 'srv487.hstgr.io',
            port: parseInt(process.env.DB_PORT || '3306'),
            user: process.env.DB_USER || 'u491289285_sirius',
            password: process.env.DB_PASSWORD || 'Ulisesmendez1+',
            database: process.env.DB_NAME || 'u491289285_sirius',
        };
        const pool = await mysql.createPool(DB_CONFIG);
        const [rows] = await pool.execute('SELECT * FROM config WHERE id = ?', ['site-config']);
        require('fs').writeFileSync('configs-schema-dump.txt', JSON.stringify(rows, null, 2));
        await pool.end();
    } catch (e) {
        console.error("SQL_ERROR", e);
    }
}

testConfig();
