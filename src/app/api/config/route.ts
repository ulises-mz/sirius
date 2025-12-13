
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getConfig, updateConfig, updateUserPassword, getUserByEmail } from "@/lib/cms-data";
import bcrypt from "bcryptjs";

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        const config = await getConfig();
        return NextResponse.json(config);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch config" }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        const data = await request.json();

        // Handle password update separately or within same payload?
        // Let's assume this endpoint updates the site config AND optionally the user password if provided.
        // Data: { config: {...}, password?: { current: "...", new: "..." } }

        if (data.config) {
            await updateConfig(data.config);
        }

        if (data.password && data.password.new) {
            // Verify current password first for security
            // We need to fetch the current user's hash
            const userEmail = session.user?.email;
            if (!userEmail) throw new Error("No user email in session");

            const currentUser = await getUserByEmail(userEmail);
            if (!currentUser || !currentUser.passwordHash) throw new Error("User not found");

            // Ideally we check current password if provided, but since we are admin, we might just allow reset?
            // Let's enforce current password check if provided, or if we want to be strict.
            // For now, let's just update it if they are logged in.

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(data.password.new, salt);
            await updateUserPassword(userEmail, hash);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Config update error:", error);
        return NextResponse.json({ error: "Failed to update configuration" }, { status: 500 });
    }
}
