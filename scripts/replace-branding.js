const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(path.join(process.cwd(), 'src'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    if (content.includes('CodeINVEST')) {
        content = content.replace(/CodeINVEST/g, 'Sirius');
        changed = true;
    }
    if (content.includes('codeinvestcr\\.com')) {
        content = content.replace(/codeinvestcr\.com/g, 'siriusx.net');
        changed = true;
    }
    if (content.includes('codeinvestcr.com')) {
        content = content.replace(/codeinvestcr\.com/g, 'siriusx.net');
        changed = true;
    }

    if (changed) {
        console.log('Updated:', file);
        fs.writeFileSync(file, content);
    }
});
