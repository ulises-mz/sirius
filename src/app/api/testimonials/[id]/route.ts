import { NextResponse } from 'next/server';
import { getTestimonialById, saveTestimonial, deleteTestimonial } from '@/lib/cms-data';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const testimonial = await getTestimonialById(Number(id));

    if (!testimonial) {
        return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
    }

    return NextResponse.json(testimonial);
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();

        await saveTestimonial({ ...body, id: Number(id) });
        const updated = await getTestimonialById(Number(id));

        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update testimonial' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        await deleteTestimonial(Number(id));

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete testimonial' }, { status: 500 });
    }
}
