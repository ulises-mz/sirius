
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { getProjectBySlug, saveProject, deleteProject } from "@/lib/cms-data";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> } // Next.js 15: params is a Promise
) {
    const { slug } = await params;
    try {
        const project = await getProjectBySlug(slug);

        if (!project) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }

        return NextResponse.json(project);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch project" }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const data = await request.json();
        // Since slug in URL might match current slug, we just save the data.
        // If slug changes, we might need to handle deletion of old slug or CMS handles it if ID based (but we are slug based).
        // For simplicity: Update assumes ID or unique field logic in save, but here we just overwrite.

        await saveProject(data);
        return NextResponse.json({ success: true, slug: data.slug });
    } catch (error) {
        console.error("Error saving project:", error);
        return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { slug } = await params;

    try {
        await deleteProject(slug);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
    }
}
