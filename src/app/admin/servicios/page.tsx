import Link from "next/link";
import { getServices } from "@/lib/cms-data";
import { revalidatePath } from "next/cache";

// Force dynamic rendering since we are reading from file system
export const dynamic = 'force-dynamic';

export default async function ServiciosPage() {
    const services = await getServices();

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Servicios</h1>
                    <p className="text-gray-400">Gestiona los servicios ofrecidos en la web</p>
                </div>
                <Link
                    href="/admin/servicios/nuevo"
                    className="bg-[#5E3BEE] hover:bg-[#4E33D8] text-white px-4 py-2 rounded-xl font-medium transition-colors flex items-center gap-2 shadow-lg shadow-[#5E3BEE]/20 hover:shadow-[#5E3BEE]/30"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Nuevo Servicio
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <Link
                        key={service.id}
                        href={`/admin/servicios/${service.slug}`}
                        className="group bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6 hover:border-[#5E3BEE]/50 transition-all hover:shadow-lg hover:shadow-[#5E3BEE]/10 flex flex-col h-full"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 rounded-xl bg-[#1E293B] flex items-center justify-center text-gray-400 group-hover:bg-[#5E3BEE]/10 group-hover:text-[#5E3BEE] transition-colors">
                                {service.icon ? (
                                    <span className="text-lg font-bold uppercase">{service.icon.substring(0, 2)}</span>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                )}
                            </div>
                            {service.popular && (
                                <span className="px-2 py-1 bg-[#5E3BEE]/10 text-[#5E3BEE] rounded-full text-xs font-medium border border-[#5E3BEE]/20">
                                    Popular
                                </span>
                            )}
                        </div>

                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#5E3BEE] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                                {service.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-[#1D2A3C] mt-auto">
                            <span className="text-sm font-mono text-gray-500">/{service.slug}</span>
                            <span className="text-white font-medium">{service.price}</span>
                        </div>
                    </Link>
                ))}

                {services.length === 0 && (
                    <div className="col-span-full py-20 text-center text-gray-500 bg-[#0B1221] border border-[#1D2A3C] rounded-2xl border-dashed">
                        No hay servicios registrados.
                    </div>
                )}
            </div>
        </div>
    );
}
