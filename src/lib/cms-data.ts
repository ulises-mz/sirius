import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src/data/cms');

/**
 * Read JSON file
 */
export async function readJSON<T>(filename: string): Promise<T> {
    try {
        const filePath = path.join(DATA_DIR, filename);
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading ${filename}:`, error);
        throw new Error(`Failed to read ${filename}`);
    }
}

/**
 * Write JSON file
 */
export async function writeJSON<T>(filename: string, data: T): Promise<void> {
    try {
        const filePath = path.join(DATA_DIR, filename);
        const jsonData = JSON.stringify(data, null, 2);
        await fs.writeFile(filePath, jsonData, 'utf-8');
    } catch (error) {
        console.error(`Error writing ${filename}:`, error);
        throw new Error(`Failed to write ${filename}`);
    }
}

/**
 * Get all services
 */
export async function getServices() {
    const data = await readJSON<{ services: any[]; lastUpdated: string }>('services.json');
    return data.services;
}

/**
 * Get service by slug
 */
export async function getServiceBySlug(slug: string) {
    const services = await getServices();
    return services.find((s) => s.slug === slug);
}

/**
 * Create or update service
 */
export async function saveService(service: any) {
    const data = await readJSON<{ services: any[]; lastUpdated: string }>('services.json');

    const existingIndex = data.services.findIndex((s) => s.slug === service.slug);

    if (existingIndex >= 0) {
        // Update existing
        data.services[existingIndex] = service;
    } else {
        // Add new
        data.services.push(service);
    }

    data.lastUpdated = new Date().toISOString();
    await writeJSON('services.json', data);

    return service;
}

/**
 * Delete service
 */
export async function deleteService(slug: string) {
    const data = await readJSON<{ services: any[]; lastUpdated: string }>('services.json');
    data.services = data.services.filter((s) => s.slug !== slug);
    data.lastUpdated = new Date().toISOString();
    await writeJSON('services.json', data);
}

/**
 * Get all projects
 */
export async function getProjects() {
    const data = await readJSON<{ projects: any[]; lastUpdated: string }>('projects.json');
    return data.projects;
}

/**
 * Get project by slug
 */
export async function getProjectBySlug(slug: string) {
    const projects = await getProjects();
    return projects.find((p) => p.slug === slug);
}

/**
 * Save project
 */
export async function saveProject(project: any) {
    const data = await readJSON<{ projects: any[]; lastUpdated: string }>('projects.json');

    const existingIndex = data.projects.findIndex((p) => p.slug === project.slug);

    if (existingIndex >= 0) {
        data.projects[existingIndex] = project;
    } else {
        data.projects.push(project);
    }

    data.lastUpdated = new Date().toISOString();
    await writeJSON('projects.json', data);

    return project;
}

/**
 * Delete project
 */
export async function deleteProject(slug: string) {
    const data = await readJSON<{ projects: any[]; lastUpdated: string }>('projects.json');
    data.projects = data.projects.filter((p) => p.slug !== slug);
    data.lastUpdated = new Date().toISOString();
    await writeJSON('projects.json', data);
}

/**
 * Get config
 */
export async function getConfig() {
    const data = await readJSON<{ config: any; users: any[]; lastUpdated: string }>('config.json');
    return data.config;
}

/**
 * Update config
 */
export async function updateConfig(config: any) {
    const data = await readJSON<{ config: any; users: any[]; lastUpdated: string }>('config.json');
    data.config = config;
    data.lastUpdated = new Date().toISOString();
    await writeJSON('config.json', data);
}

/**
 * Get user by email (for authentication)
 */
export async function getUserByEmail(email: string) {
    const data = await readJSON<{ config: any; users: any[]; lastUpdated: string }>('config.json');
    return data.users.find((u) => u.email === email);
}

/**
 * Update user password hash
 */
export async function updateUserPassword(email: string, passwordHash: string) {
    const data = await readJSON<{ config: any; users: any[]; lastUpdated: string }>('config.json');
    const user = data.users.find((u) => u.email === email);

    if (user) {
        user.passwordHash = passwordHash;
        data.lastUpdated = new Date().toISOString();
        await writeJSON('config.json', data);
    }
}
