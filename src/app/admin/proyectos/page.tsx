
import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/lib/cms-data";
import { getOptimizedImageUrl } from "@/lib/utils";

export const dynamic = 'force-dynamic';

export default async function AdminProjectsPage() {
    const projects = await getProjects();

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Proyectos</h1>
                    <p className="text-gray-400">Gestiona los casos de éxito de tu portafolio.</p>
                </div>
                <Link
                    href="/admin/proyectos/nuevo"
                    className="bg-[#5E3BEE] hover:bg-[#4E33D8] text-white px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2 shadow-lg shadow-[#5E3BEE]/20 hover:shadow-[#5E3BEE]/30"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Nuevo Proyecto
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/admin/proyectos/${project.slug}`}
                        className="group bg-[#0B1221] border border-[#1D2A3C] rounded-2xl overflow-hidden hover:border-[#5E3BEE]/50 transition-all hover:shadow-lg hover:shadow-[#5E3BEE]/10 flex flex-col h-full"
                    >
                        {/* Image Header */}
                        <div className="h-48 relative bg-[#101B2C] overflow-hidden">
                            {project.backgroundImage ? (
                                <Image
                                    src={getOptimizedImageUrl(project.backgroundImage)}
                                    alt={project.title || 'Project'}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#5E3BEE]/20 to-[#86D4FF]/20">
                                    <svg className="w-12 h-12 text-[#5E3BEE]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] to-transparent opacity-60" />

                            <div className="absolute bottom-4 left-4 right-4">
                                <span className="text-xs font-semibold text-[#86D4FF] bg-[#0B1221]/80 px-2 py-1 rounded-md backdrop-blur-sm border border-[#86D4FF]/20">
                                    {project.category || 'General'}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#5E3BEE] transition-colors leading-tight">
                                {project.title}
                            </h3>

                            <div className="flex flex-wrap gap-1 mb-4">
                                {project.technologies?.slice(0, 3).map((tech: string, i: number) => (
                                    <span key={i} className="text-[10px] bg-[#1D2A3C] text-gray-300 px-2 py-0.5 rounded">
                                        {tech}
                                    </span>
                                ))}
                                {(project.technologies?.length || 0) > 3 && (
                                    <span className="text-[10px] text-gray-500 self-center">+{project.technologies.length - 3}</span>
                                )}
                            </div>

                            <p className="text-sm text-gray-500 font-mono mt-auto">
                                /{project.slug}
                            </p>
                        </div>
                    </Link>
                ))}

                {projects.length === 0 && (
                    <div className="col-span-full py-20 text-center text-gray-500 bg-[#0B1221] border border-[#1D2A3C] rounded-2xl border-dashed">
                        No hay proyectos registrados.
                    </div>
                )}
            </div>
        </div>
    );
}
