import mysql from 'mysql2/promise';

// Database configuration
const DB_CONFIG = {
    host: process.env.DB_HOST || 'srv487.hstgr.io',
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER || 'u491289285_sirius',
    password: process.env.DB_PASSWORD || 'Ulisesmendez1+',
    database: process.env.DB_NAME || 'u491289285_sirius',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

// Create connection pool
const pool = mysql.createPool(DB_CONFIG);

// Type Interfaces (matching existing structure)
export interface CMSContent {
    slug: string;
    [key: string]: unknown;
}

export interface Service {
    id?: number;
    slug: string;
    title?: string;
    description?: string;
    icon?: string;
    popular?: boolean;
    longDescription?: string;
    features?: string[];
    technologies?: string[];
    price?: string;
    category?: string;
    benefits?: string[];
    process?: string[];
    faq?: Array<{
        question: string;
        answer: string;
    }>;
    image?: string;
    [key: string]: unknown;
}

export interface Project {
    slug: string;
    id?: number;
    title?: string;
    description?: string;
    backgroundImage?: string;
    category?: string;
    technologies?: string[];
    content?: string;
    keywords?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    gallery?: string[];
    [key: string]: unknown;
}

export interface Testimonial {
    id: number;
    name?: string;
    title?: string;
    company?: string;
    rating?: number;
    quote?: string;
    result?: string;
    [key: string]: unknown;
}

export interface Config {
    siteName: string;
    contactEmail: string;
    phone?: string;
    address?: string;
    schedule?: string;
    whatsappNumber?: string;
}

export interface User {
    id: string;
    email: string;
    passwordHash: string;
    name: string;
    role: string;
}

// Helper to parse JSON fields
function parseJsonField(value: string | null): any {
    if (!value) return null;
    try {
        return JSON.parse(value);
    } catch {
        return value;
    }
}

/**
 * Get all services
 */
export async function getServices(): Promise<Service[]> {
    const [rows] = await pool.execute('SELECT * FROM services ORDER BY id');
    return (rows as any[]).map(row => ({
        ...row,
        features: parseJsonField(row.features),
        technologies: parseJsonField(row.technologies),
        benefits: parseJsonField(row.benefits),
        process: parseJsonField(row.process),
        faq: parseJsonField(row.faq)
    }));
}

/**
 * Get service by slug
 */
export async function getServiceBySlug(slug: string): Promise<Service | null> {
    const [rows] = await pool.execute('SELECT * FROM services WHERE slug = ?', [slug]);
    const services = rows as any[];
    if (services.length === 0) return null;

    const service = services[0];
    return {
        ...service,
        features: parseJsonField(service.features),
        technologies: parseJsonField(service.technologies),
        benefits: parseJsonField(service.benefits),
        process: parseJsonField(service.process),
        faq: parseJsonField(service.faq)
    };
}

/**
 * Save service (create or update)
 */
export async function saveService(service: Service): Promise<void> {
    const { slug, title, description, icon, popular, longDescription, features, technologies, price, category, benefits, process, faq, image } = service;

    await pool.execute(
        `INSERT INTO services (slug, title, description, icon, popular, longDescription, features, technologies, price, category, benefits, process, faq, image)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
         title=VALUES(title), description=VALUES(description), icon=VALUES(icon), popular=VALUES(popular),
         longDescription=VALUES(longDescription), features=VALUES(features), technologies=VALUES(technologies),
         price=VALUES(price), category=VALUES(category), benefits=VALUES(benefits), process=VALUES(process),
         faq=VALUES(faq), image=VALUES(image)`,
        [
            slug,
            title || '',
            description || '',
            icon || null,
            popular || false,
            longDescription || null,
            JSON.stringify(features || []),
            JSON.stringify(technologies || []),
            price || null,
            category || null,
            JSON.stringify(benefits || []),
            JSON.stringify(process || []),
            JSON.stringify(faq || []),
            image || null
        ]
    );
}

/**
 * Delete service
 */
export async function deleteService(slug: string): Promise<void> {
    await pool.execute('DELETE FROM services WHERE slug = ?', [slug]);
}

/**
 * Get all projects
 */
export async function getProjects(): Promise<Project[]> {
    const [rows] = await pool.execute('SELECT * FROM projects ORDER BY id DESC');
    return (rows as any[]).map(row => ({
        ...row,
        technologies: parseJsonField(row.technologies),
        gallery: parseJsonField(row.gallery)
    }));
}

/**
 * Get project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
    const [rows] = await pool.execute('SELECT * FROM projects WHERE slug = ?', [slug]);
    const projects = rows as any[];
    if (projects.length === 0) return null;

    const project = projects[0];
    return {
        ...project,
        technologies: parseJsonField(project.technologies),
        gallery: parseJsonField(project.gallery)
    };
}

/**
 * Save project (create or update)
 */
export async function saveProject(project: Project): Promise<void> {
    const { slug, title, description, backgroundImage, category, technologies, content, keywords, challenge, solution, results, gallery } = project;

    await pool.execute(
        `INSERT INTO projects (slug, title, description, backgroundImage, category, technologies, content, keywords, challenge, solution, results, gallery)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
         title=VALUES(title), description=VALUES(description), backgroundImage=VALUES(backgroundImage),
         category=VALUES(category), technologies=VALUES(technologies), content=VALUES(content),
         keywords=VALUES(keywords), challenge=VALUES(challenge), solution=VALUES(solution),
         results=VALUES(results), gallery=VALUES(gallery)`,
        [
            slug,
            title || '',
            description || '',
            backgroundImage || null,
            category || null,
            JSON.stringify(technologies || []),
            content || null,
            keywords || null,
            challenge || null,
            solution || null,
            results || null,
            JSON.stringify(gallery || [])
        ]
    );
}

/**
 * Delete project
 */
export async function deleteProject(slug: string): Promise<void> {
    await pool.execute('DELETE FROM projects WHERE slug = ?', [slug]);
}

/**
 * Get all testimonials
 */
export async function getTestimonials(): Promise<Testimonial[]> {
    const [rows] = await pool.execute('SELECT * FROM testimonials ORDER BY id DESC');
    return rows as Testimonial[];
}

/**
 * Get testimonial by ID
 */
export async function getTestimonialById(id: number): Promise<Testimonial | null> {
    const [rows] = await pool.execute('SELECT * FROM testimonials WHERE id = ?', [id]);
    const testimonials = rows as Testimonial[];
    return testimonials.length > 0 ? testimonials[0] : null;
}

/**
 * Save testimonial (create or update)
 */
export async function saveTestimonial(testimonial: Testimonial): Promise<void> {
    const { id, name, title, company, rating, quote, result } = testimonial;

    if (id) {
        // Update
        await pool.execute(
            'UPDATE testimonials SET name=?, title=?, company=?, rating=?, quote=?, result=? WHERE id=?',
            [name || '', title || null, company || null, rating || 5, quote || '', result || null, id]
        );
    } else {
        // Insert
        await pool.execute(
            'INSERT INTO testimonials (name, title, company, rating, quote, result) VALUES (?, ?, ?, ?, ?, ?)',
            [name || '', title || null, company || null, rating || 5, quote || '', result || null]
        );
    }
}

/**
 * Delete testimonial
 */
export async function deleteTestimonial(id: number): Promise<void> {
    await pool.execute('DELETE FROM testimonials WHERE id = ?', [id]);
}

/**
 * Get config
 */
export async function getConfig(): Promise<Config> {
    const [rows] = await pool.execute('SELECT * FROM config WHERE id = ?', ['site-config']);
    const configs = rows as any[];

    if (configs.length === 0) {
        // Return default config
        return {
            siteName: 'Sirius',
            contactEmail: 'admin@siriusx.net',
            phone: '+506 7221 7872',
            address: 'Pozos de Santa Ana, San José, Costa Rica',
            schedule: 'Lunes a viernes 8am a 5pm y sábados de 8 a 12md.',
            whatsappNumber: '+50672217873'
        };
    }

    return configs[0];
}

/**
 * Update config
 */
export async function updateConfig(config: Config): Promise<void> {
    await pool.execute(
        `INSERT INTO config (id, siteName, contactEmail, phone, address, schedule, whatsappNumber)
         VALUES (?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
         siteName=VALUES(siteName), contactEmail=VALUES(contactEmail), phone=VALUES(phone), address=VALUES(address),
         schedule=VALUES(schedule), whatsappNumber=VALUES(whatsappNumber)`,
        ['site-config', config.siteName, config.contactEmail, config.phone || null, config.address || null, config.schedule || null, config.whatsappNumber || null]
    );
}

/**
 * Get user by email
 */
export async function getUserByEmail(email: string): Promise<User | null> {
    const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    const users = rows as User[];
    return users.length > 0 ? users[0] : null;
}

/**
 * Update user password hash
 */
export async function updateUserPassword(email: string, passwordHash: string): Promise<void> {
    await pool.execute('UPDATE users SET passwordHash = ? WHERE email = ?', [passwordHash, email]);
}
