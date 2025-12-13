
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';

const CONFIG_PATH = path.join(process.cwd(), 'src/data/cms/config.json');

async function resetPassword() {
    try {
        if (!fs.existsSync(CONFIG_PATH)) {
            console.error(`Config file not found at: ${CONFIG_PATH}`);
            return;
        }

        const data = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));

        // Find admin user
        const userIndex = data.users.findIndex((u: any) => u.email === 'admin@siriusx.net');

        if (userIndex === -1) {
            console.error('Admin user not found');
            return;
        }

        // Generate hash for 'admin123'
        const newHash = await bcrypt.hash('admin123', 10);

        // Update
        data.users[userIndex].passwordHash = newHash;
        data.lastUpdated = new Date().toISOString();

        fs.writeFileSync(CONFIG_PATH, JSON.stringify(data, null, 2));

        console.log('✅ Password reset successful!');
        console.log('New password is: admin123');

    } catch (error) {
        console.error('Error resetting password:', error);
    }
}

resetPassword();
