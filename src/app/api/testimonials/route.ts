import { NextResponse } from 'next/server';
import { getTestimonials, saveTestimonials } from '@/lib/cms-data';

export async function GET() {
    try {
        const testimonials = await getTestimonials();
        return NextResponse.json(testimonials);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const testimonial = await request.json();
        const testimonials = await getTestimonials();

        const newTestimonial = {
            ...testimonial,
            id: Date.now(), // Simple ID generation
        };

        testimonials.push(newTestimonial);
        await saveTestimonials(testimonials);

        return NextResponse.json(newTestimonial);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
    }
}
