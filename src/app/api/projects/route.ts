
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { getProjects, saveProject } from "@/lib/cms-data";

export async function GET() {
    try {
        const projects = await getProjects();
        return NextResponse.json(projects);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const data = await request.json();

        // Validation could go here

        await saveProject(data);
        return NextResponse.json({ success: true, slug: data.slug });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
    }
}
