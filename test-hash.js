const bcrypt = require('bcryptjs');
const hash = '$2b$10$fQbnARc4kX0HwchG9iNXZ.SKcNcoLRdHm.UKDHlow5DWHGOeAoGwS';

async function test() {
    console.log("admin:", await bcrypt.compare("admin", hash));
    console.log("admin123:", await bcrypt.compare("admin123", hash));
    console.log("admin@siriusx.net:", await bcrypt.compare("admin@siriusx.net", hash));
    console.log("password:", await bcrypt.compare("password", hash));
    console.log("Sirius2025*:", await bcrypt.compare("Sirius2025*", hash));
    console.log("Ulisesmendez1+:", await bcrypt.compare("Ulisesmendez1+", hash));
    console.log("Sirius2024:", await bcrypt.compare("Sirius2024", hash));
}
test();
