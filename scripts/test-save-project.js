const mysql = require('mysql2/promise');
require('dotenv').config({ path: '.env.local' });

async function testSave() {
    try {
        const DB_CONFIG = {
            host: process.env.DB_HOST || 'srv487.hstgr.io',
            port: parseInt(process.env.DB_PORT || '3306'),
            user: process.env.DB_USER || 'u491289285_sirius',
            password: process.env.DB_PASSWORD || 'Ulisesmendez1+',
            database: process.env.DB_NAME || 'u491289285_sirius',
        };
        const pool = await mysql.createPool(DB_CONFIG);
        const data = {
            slug: 'bpcreation',
            title: 'Test Title',
            description: 'Test Desc',
            backgroundImage: '',
            category: 'Web',
            technologies: ['React'],
            content: 'Test content',
            keywords: 'test',
            challenge: 'test challenge',
            solution: 'test solution',
            results: 'test results',
            gallery: []
        };

        await pool.execute(
            `INSERT INTO projects (slug, title, description, backgroundImage, category, technologies, content, keywords, challenge, solution, results, gallery)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
             ON DUPLICATE KEY UPDATE
             title=VALUES(title), description=VALUES(description), backgroundImage=VALUES(backgroundImage),
             category=VALUES(category), technologies=VALUES(technologies), content=VALUES(content),
             keywords=VALUES(keywords), challenge=VALUES(challenge), solution=VALUES(solution),
             results=VALUES(results), gallery=VALUES(gallery)`,
            [
                data.slug,
                data.title || '',
                data.description || '',
                data.backgroundImage || null,
                data.category || null,
                JSON.stringify(data.technologies || []),
                data.content || null,
                data.keywords || null,
                data.challenge || null,
                data.solution || null,
                data.results || null,
                JSON.stringify(data.gallery || [])
            ]
        );
        console.log("Success!");
        await pool.end();
    } catch (e) {
        console.error("SQL_ERROR", e);
    }
}

testSave();
