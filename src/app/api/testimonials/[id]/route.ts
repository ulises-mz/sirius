import { NextResponse } from 'next/server';
import { getTestimonials, saveTestimonials, getTestimonialById } from '@/lib/cms-data';

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
        const testimonials = await getTestimonials();

        const index = testimonials.findIndex((t: any) => t.id === Number(id));
        if (index === -1) {
            return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
        }

        testimonials[index] = { ...body, id: Number(id) };
        await saveTestimonials(testimonials);

        return NextResponse.json(testimonials[index]);
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
        const testimonials = await getTestimonials();

        const filtered = testimonials.filter((t: any) => t.id !== Number(id));
        await saveTestimonials(filtered);

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete testimonial' }, { status: 500 });
    }
}
