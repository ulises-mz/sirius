const mysql = require('mysql2/promise');
require('dotenv').config({ path: '.env.local' });

async function checkProjectsTable() {
    try {
        const DB_CONFIG = {
            host: process.env.DB_HOST || 'srv487.hstgr.io',
            port: parseInt(process.env.DB_PORT || '3306'),
            user: process.env.DB_USER || 'u491289285_sirius',
            password: process.env.DB_PASSWORD || 'Ulisesmendez1+',
            database: process.env.DB_NAME || 'u491289285_sirius',
        };
        const connection = await mysql.createConnection(DB_CONFIG);
        const [rows] = await connection.execute('DESCRIBE projects');
        require('fs').writeFileSync('projects-schema-dump.txt', rows.map(r => `${r.Field}: ${r.Type}`).join("\n"));
        await connection.end();
    } catch (e) {
        console.error(e);
    }
}

checkProjectsTable();
