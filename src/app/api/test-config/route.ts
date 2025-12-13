
import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'src/data/cms/config.json');

        if (!fs.existsSync(filePath)) {
            return NextResponse.json({ status: 'error', message: 'File not found', path: filePath });
        }

        const content = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(content);

        return NextResponse.json({
            status: 'ok',
            path: filePath,
            userCount: data.users?.length,
            firstUserEmail: data.users?.[0]?.email,
            envSecretSet: !!process.env.NEXTAUTH_SECRET,
            envUrl: process.env.NEXTAUTH_URL
        });

    } catch (error: any) {
        return NextResponse.json({ status: 'error', message: error.message, stack: error.stack }, { status: 500 });
    }
}
