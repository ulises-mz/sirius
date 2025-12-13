import { NextResponse } from 'next/server';
import { getTestimonials, saveTestimonial } from '@/lib/cms-data';

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

        await saveTestimonial(testimonial);

        // Return the created testimonial (MySQL auto-generates ID)
        return NextResponse.json({ ...testimonial, success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
    }
}
