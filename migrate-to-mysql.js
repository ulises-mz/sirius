const mysql = require('mysql2/promise');
const fs = require('fs/promises');
const path = require('path');

const DB_CONFIG = {
    host: 'srv487.hstgr.io',
    port: 3306,
    user: 'u491289285_sirius',
    password: 'Ulisesmendez1+',
    database: 'u491289285_sirius'
};

async function setupTables(connection) {
    console.log('\\n📦 Creating tables...');

    // Users table
    await connection.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id VARCHAR(191) PRIMARY KEY,
      email VARCHAR(191) UNIQUE NOT NULL,
      passwordHash VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      role VARCHAR(50) DEFAULT 'admin',
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
    console.log('✅ Users table created');

    // Services table
    await connection.execute(`
    CREATE TABLE IF NOT EXISTS services (
      id INT PRIMARY KEY AUTO_INCREMENT,
      slug VARCHAR(191) UNIQUE NOT NULL,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      icon VARCHAR(255),
      popular BOOLEAN DEFAULT FALSE,
      longDescription TEXT,
      features JSON,
      technologies JSON,
      price VARCHAR(100),
      category VARCHAR(100),
      benefits JSON,
      process JSON,
      faq JSON,
      image VARCHAR(500),
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
    console.log('✅ Services table created');

    // Projects table  
    await connection.execute(`
    CREATE TABLE IF NOT EXISTS projects (
      id INT PRIMARY KEY AUTO_INCREMENT,
      slug VARCHAR(191) UNIQUE NOT NULL,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      backgroundImage VARCHAR(500),
      category VARCHAR(100),
      technologies JSON,
      content TEXT,
      keywords TEXT,
      challenge TEXT,
      solution TEXT,
      results TEXT,
      gallery JSON,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
    console.log('✅ Projects table created');

    // Testimonials table
    await connection.execute(`
    CREATE TABLE IF NOT EXISTS testimonials (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      title VARCHAR(255),
      company VARCHAR(255),
      rating INT DEFAULT 5,
      quote TEXT NOT NULL,
      result TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
    console.log('✅ Testimonials table created');

    // Config table
    await connection.execute(`
    CREATE TABLE IF NOT EXISTS config (
      id VARCHAR(191) PRIMARY KEY DEFAULT 'site-config',
      siteName VARCHAR(255) NOT NULL,
      contactEmail VARCHAR(255) NOT NULL,
      phone VARCHAR(50),
      address TEXT,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
    console.log('✅ Config table created');
}

async function migrateData(connection) {
    console.log('\\n📊 Migrating data from JSON files...');

    const dataDir = path.join(__dirname, 'src/data/cms');

    // Migrate config
    try {
        const configData = JSON.parse(await fs.readFile(path.join(dataDir, 'config.json'), 'utf8'));
        await connection.execute(
            'INSERT INTO config (id, siteName, contactEmail, phone, address) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE siteName=VALUES(siteName), contactEmail=VALUES(contactEmail), phone=VALUES(phone), address=VALUES(address)',
            ['site-config', configData.config.siteName, configData.config.contactEmail, configData.config.phone || '', configData.config.address || '']
        );
        console.log('✅ Config migrated');

        // Migrate users
        for (const user of configData.users) {
            await connection.execute(
                'INSERT INTO users (id, email, passwordHash, name, role) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE email=VALUES(email), passwordHash=VALUES(passwordHash), name=VALUES(name), role=VALUES(role)',
                [user.id, user.email, user.passwordHash, user.name, user.role]
            );
        }
        console.log(`✅ ${configData.users.length} user(s) migrated`);
    } catch (error) {
        console.error('⚠️  Config migration skipped:', error.message);
    }

    // Migrate services
    try {
        const servicesData = JSON.parse(await fs.readFile(path.join(dataDir, 'services.json'), 'utf8'));
        for (const service of servicesData.services || []) {
            await connection.execute(
                `INSERT INTO services (slug, title, description, icon, popular, longDescription, features, technologies, price, category, benefits, process, faq, image)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE title=VALUES(title), description=VALUES(description), icon=VALUES(icon), popular=VALUES(popular), longDescription=VALUES(longDescription), features=VALUES(features), technologies=VALUES(technologies), price=VALUES(price), category=VALUES(category), benefits=VALUES(benefits), process=VALUES(process), faq=VALUES(faq), image=VALUES(image)`,
                [
                    service.slug,
                    service.title || '',
                    service.description || '',
                    service.icon || null,
                    service.popular || false,
                    service.longDescription || null,
                    JSON.stringify(service.features || []),
                    JSON.stringify(service.technologies || []),
                    service.price || null,
                    service.category || null,
                    JSON.stringify(service.benefits || []),
                    JSON.stringify(service.process || []),
                    JSON.stringify(service.faq || []),
                    service.image || null
                ]
            );
        }
        console.log(`✅ ${servicesData.services.length} service(s) migrated`);
    } catch (error) {
        console.error('⚠️  Services migration skipped:', error.message);
    }

    // Migrate projects
    try {
        const projectsData = JSON.parse(await fs.readFile(path.join(dataDir, 'projects.json'), 'utf8'));
        for (const project of projectsData.projects || []) {
            await connection.execute(
                `INSERT INTO projects (slug, title, description, backgroundImage, category, technologies, content, keywords, challenge, solution, results, gallery)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE title=VALUES(title), description=VALUES(description), backgroundImage=VALUES(backgroundImage), category=VALUES(category), technologies=VALUES(technologies), content=VALUES(content), keywords=VALUES(keywords), challenge=VALUES(challenge), solution=VALUES(solution), results=VALUES(results), gallery=VALUES(gallery)`,
                [
                    project.slug,
                    project.title || '',
                    project.description || '',
                    project.backgroundImage || null,
                    project.category || null,
                    JSON.stringify(project.technologies || []),
                    project.content || null,
                    project.keywords || null,
                    project.challenge || null,
                    project.solution || null,
                    project.results || null,
                    JSON.stringify(project.gallery || [])
                ]
            );
        }
        console.log(`✅ ${projectsData.projects.length} project(s) migrated`);
    } catch (error) {
        console.error('⚠️  Projects migration skipped:', error.message);
    }

    // Migrate testimonials
    try {
        const testimonialsData = JSON.parse(await fs.readFile(path.join(dataDir, 'testimonials.json'), 'utf8'));
        for (const testimonial of testimonialsData.testimonials || []) {
            await connection.execute(
                `INSERT INTO testimonials (name, title, company, rating, quote, result)
         VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    testimonial.name || '',
                    testimonial.title || null,
                    testimonial.company || null,
                    testimonial.rating || 5,
                    testimonial.quote || '',
                    testimonial.result || null
                ]
            );
        }
        console.log(`✅ ${testimonialsData.testimonials.length} testimonial(s) migrated`);
    } catch (error) {
        console.error('⚠️  Testimonials migration skipped:', error.message);
    }
}

async function main() {
    let connection;
    try {
        connection = await mysql.createConnection(DB_CONFIG);
        console.log('✅ Connected to MySQL');

        await setupTables(connection);
        await migrateData(connection);

        console.log('\\n🎉 Migration complete!');
    } catch (error) {
        console.error('❌ Error:', error);
    } finally {
        if (connection) await connection.end();
    }
}

main();
