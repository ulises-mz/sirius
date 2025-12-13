import { NextResponse } from "next/server";
import { getServices, saveService } from "@/lib/cms-data";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
    try {
        const services = await getServices();
        return NextResponse.json(services);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const data = await request.json();

        // Basic validation
        if (!data.title || !data.slug) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Auto-generate ID if missing (simple max + 1 logic for JSON)
        const services = await getServices();
        if (!data.id) {
            const maxId = services.reduce((max, s) => Math.max(max, s.id || 0), 0);
            data.id = maxId + 1;
        }

        await saveService(data);

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error creating service:", error);
        return NextResponse.json({ error: "Failed to create service" }, { status: 500 });
    }
}
