
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';

const CONFIG_PATH = path.join(process.cwd(), 'src/data/cms/config.json');

async function testLogin(email: string, passwordPlain: string) {
    console.log(`Testing login for: ${email}`);

    try {
        if (!fs.existsSync(CONFIG_PATH)) {
            console.error(`Config file not found at: ${CONFIG_PATH}`);
            return;
        }

        const data = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
        const user = data.users.find((u: any) => u.email === email);

        console.log('User found:', user ? 'YES' : 'NO');

        if (!user) {
            console.error('User not found in config.json');
            return;
        }

        console.log('Stored Hash:', user.passwordHash);

        // Test with the plain password
        const match = await bcrypt.compare(passwordPlain, user.passwordHash);
        console.log(`Comparison with '${passwordPlain}':`, match ? 'MATCH' : 'NO MATCH');

        // Generate a new hash for 'admin123' just to show what it should be
        const demoHash = await bcrypt.hash('admin123', 10);
        console.log('---');
        console.log('If you want to reset password to "admin123", put this hash in config.json:');
        console.log(demoHash);

    } catch (error) {
        console.error('Error testing login:', error);
    }
}

// Probaremos con 'admin123' que es una contraseña común de fallback, 
// o simplemente veremos si el hash existe.
testLogin('admin@siriusx.net', 'admin123');
