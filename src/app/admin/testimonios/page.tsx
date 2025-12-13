import { getTestimonials } from "@/lib/cms-data";
import Link from "next/link";

export default async function AdminTestimonialsPage() {
    const testimonials = await getTestimonials();

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Testimonios</h1>
                    <p className="text-gray-400">Gestiona las reseñas de clientes</p>
                </div>
                <Link
                    href="/admin/testimonios/nuevo"
                    className="flexItems-center gap-2 bg-[#5E3BEE] hover:bg-[#4E33D8] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-[#5E3BEE]/20 hover:shadow-[#5E3BEE]/30 hover:-translate-y-0.5"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Nuevo Testimonio
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial) => (
                    <Link
                        key={testimonial.id}
                        href={`/admin/testimonios/${testimonial.id}`}
                        className="group bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6 hover:border-[#5E3BEE]/50 transition-all hover:shadow-lg hover:shadow-[#5E3BEE]/10"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-[#5E3BEE] transition-colors">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm text-gray-400">{testimonial.title} @ {testimonial.company}</p>
                            </div>
                            <div className="flex items-center gap-1 bg-[#101B2C] px-3 py-1 rounded-full border border-[#1D2A3C]">
                                <span className="text-yellow-400 font-bold">★</span>
                                <span className="text-white text-sm font-medium">{testimonial.rating}</span>
                            </div>
                        </div>

                        <p className="text-gray-400 text-sm line-clamp-3 mb-4 italic">
                            "{testimonial.quote}"
                        </p>

                        {testimonial.result && (
                            <span className="inline-block bg-[#1D2A3C] text-cyan-400 text-xs px-3 py-1 rounded-full font-medium">
                                {testimonial.result}
                            </span>
                        )}
                    </Link>
                ))}

                {testimonials.length === 0 && (
                    <div className="col-span-full py-20 text-center text-gray-400 bg-[#0B1221] border border-[#1D2A3C] rounded-2xl border-dashed">
                        No hay testimonios aún. ¡Crea el primero!
                    </div>
                )}
            </div>
        </div>
    );
}
