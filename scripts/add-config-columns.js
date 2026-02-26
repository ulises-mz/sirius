const mysql = require('mysql2/promise');
require('dotenv').config({ path: '.env.local' });

async function addConfigColumns() {
    let connection;
    try {
        const DB_CONFIG = {
            host: process.env.DB_HOST || 'srv487.hstgr.io',
            port: parseInt(process.env.DB_PORT || '3306'),
            user: process.env.DB_USER || 'u491289285_sirius',
            password: process.env.DB_PASSWORD || 'Ulisesmendez1+',
            database: process.env.DB_NAME || 'u491289285_sirius',
        };

        connection = await mysql.createConnection(DB_CONFIG);

        console.log('Connected to database.');

        // Add schedule column
        try {
            await connection.execute(`ALTER TABLE config ADD COLUMN schedule TEXT`);
            console.log('Column "schedule" added successfully.');
        } catch (e) {
            if (e.code === 'ER_DUP_FIELDNAME') {
                console.log('Column "schedule" already exists.');
            } else {
                throw e;
            }
        }

        // Add whatsappNumber column
        try {
            await connection.execute(`ALTER TABLE config ADD COLUMN whatsappNumber VARCHAR(50)`);
            console.log('Column "whatsappNumber" added successfully.');
        } catch (e) {
            if (e.code === 'ER_DUP_FIELDNAME') {
                console.log('Column "whatsappNumber" already exists.');
            } else {
                throw e;
            }
        }

        // Use default values for schedule and whatsappNumber
        await connection.execute(`
        UPDATE config 
        SET schedule = 'Lunes a viernes 8am a 5pm y sábados de 8 a 12md.',
            whatsappNumber = '+50672217873'
        WHERE id = 'site-config'
    `);

        console.log('Default values for schedule and whatsappNumber seeded.');


    } catch (error) {
        console.error('Migration failed:', error);
    } finally {
        if (connection) {
            await connection.end();
            console.log('Database connection closed.');
        }
    }
}

addConfigColumns();
