/**
 * Script to generate admin password hash
 * Run with: npx ts-node scripts/generate-password.ts
 */

import bcrypt from 'bcryptjs';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter admin password: ', (password) => {
    const hash = bcrypt.hashSync(password, 10);
    console.log('\n✅ Password hash generated:\n');
    console.log(hash);
    console.log('\nCopy this hash and paste it into src/data/cms/config.json');
    console.log('Replace the empty "passwordHash" value for the admin user.\n');
    rl.close();
});
