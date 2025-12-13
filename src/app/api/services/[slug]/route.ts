import { NextResponse } from "next/server";
import { deleteService, getServiceBySlug, saveService } from "@/lib/cms-data";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

interface RouteContext {
    params: { slug: string };
}

export async function GET(request: Request, { params }: RouteContext) {
    try {
        // Next.js 15 requires awaiting params
        const { slug } = await Promise.resolve(params); // Handle potentially async params in future versions
        const service = await getServiceBySlug(slug);

        if (!service) {
            return NextResponse.json({ error: "Service not found" }, { status: 404 });
        }

        return NextResponse.json(service);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch service" }, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: RouteContext) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { slug } = await Promise.resolve(params);
        const data = await request.json();

        // Ensure slug matches or we are updating the slug
        // If slug in body != slug in params, we might need to handle slug change (delete old, create new?)
        // For now, let's assume slug is immutable or handled by delete/create if changed
        // OR we update the utility to handle slug changes. 
        // The current saveService uses slug to find index.

        if (data.slug !== slug) {
            // If changing slug, we need to check if new slug exists
            const existing = await getServiceBySlug(data.slug);
            if (existing && existing.slug !== slug) {
                return NextResponse.json({ error: "Slug already exists" }, { status: 400 });
            }
            // If we change slug, we need to remove old one if we want to mimic a rename, 
            // but saveService updates based on slug match in array?
            // Wait, saveService finds index by slug. If we change slug in data, it won't find the old one.
            // It will add a new one.
            // So we should delete auth old slug first if it's different.

            await deleteService(slug);
        }

        await saveService(data);

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update service" }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: RouteContext) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { slug } = await Promise.resolve(params);
        await deleteService(slug);

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete service" }, { status: 500 });
    }
}
