"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import Link from "next/link";
import { toast } from "react-hot-toast";

interface ProjectFormData {
    title: string;
    slug: string;
    description: string;
    content: string;
    backgroundImage: string;
    category: string;
    technologies: { value: string }[];
    keywords: string;
    challenge?: string;
    solution?: string;
    results?: string;
    gallery: { value: string }[];
}

export default function EditProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const { slug } = use(params);

    const { register, control, handleSubmit, reset } = useForm<ProjectFormData>({
        defaultValues: {
            technologies: [],
            gallery: []
        }
    });

    const { fields: techFields, append: appendTech, remove: removeTech } = useFieldArray({
        control,
        name: "technologies"
    });

    const { fields: galleryFields, append: appendGallery, remove: removeGallery } = useFieldArray({
        control,
        name: "gallery"
    });

    // Fetch data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/projects/${slug}`);
                if (!res.ok) throw new Error("Project not found");
                const data = await res.json();

                // Map array strings to object array for field array
                const formattedData = {
                    ...data,
                    technologies: data.technologies ? data.technologies.map((t: string) => ({ value: t })) : [],
                    gallery: data.gallery ? data.gallery.map((g: string) => ({ value: g })) : [],
                };

                reset(formattedData);
            } catch (error) {
                console.error("Load error:", error);
                toast.error("Error al cargar el proyecto");
                router.push("/admin/proyectos");
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchData();
        }
    }, [slug, router, reset]);


    const onSubmit = async (data: ProjectFormData) => {
        setSaving(true);
        try {
            const payload = {
                ...data,
                technologies: data.technologies.map(t => t.value).filter(Boolean),
                gallery: data.gallery.map(g => g.value).filter(Boolean),
            };

            const res = await fetch(`/api/projects/${slug}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Error actualizando proyecto");

            toast.success("Proyecto actualizado");
            router.push("/admin/proyectos");
            router.refresh();
        } catch (error) {
            toast.error("Error al guardar");
            console.error(error);
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm("¿Estás seguro de eliminar este proyecto?")) return;

        setSaving(true);
        try {
            const res = await fetch(`/api/projects/${slug}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Error eliminando");

            toast.success("Proyecto eliminado");
            router.push("/admin/proyectos");
            router.refresh();
        } catch (error) {
            console.error("Delete error:", error);
            toast.error("Error al eliminar");
            setSaving(false);
        }
    };

    if (loading) {
        return <div className="text-white text-center py-20">Cargando datos del proyecto...</div>;
    }

    return (
        <div className="max-w-6xl mx-auto pb-20">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Link href="/admin/proyectos" className="text-gray-400 hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </Link>
                    <h1 className="text-3xl font-bold text-white">Editar Proyecto</h1>
                </div>
                <button
                    onClick={handleDelete}
                    type="button"
                    className="text-red-400 hover:text-white hover:bg-red-500/20 px-4 py-2 rounded-lg transition-colors text-sm font-bold"
                >
                    Eliminar Proyecto
                </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* 1. Main Info */}
                <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6 space-y-6">
                    <h2 className="text-xl font-bold text-white mb-4 border-b border-[#1D2A3C] pb-2">Información Principal</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Título</label>
                            <input
                                {...register("title", { required: true })}
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Slug (URL)</label>
                            <input
                                {...register("slug", { required: true })}
                                disabled
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-gray-400 focus:border-[#5E3BEE] focus:outline-none cursor-not-allowed opacity-50"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Descripción Corta (Hero)</label>
                        <textarea
                            {...register("description", { required: true })}
                            rows={2}
                            className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Categoría</label>
                            <select
                                {...register("category")}
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none appearance-none"
                            >
                                <option value="Desarrollo">Desarrollo</option>
                                <option value="Apps Móviles">Apps Móviles</option>
                                <option value="Soluciones">Soluciones</option>
                                <option value="Consultoría">Consultoría</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Imagen Hero URL</label>
                            <input
                                {...register("backgroundImage")}
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* 2. Case Study Details (Challenge/Solution/Results) */}
                <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6 space-y-6">
                    <h2 className="text-xl font-bold text-white mb-4 border-b border-[#1D2A3C] pb-2">Detalles del Caso de Estudio</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">El Reto (Challenge)</label>
                            <textarea
                                {...register("challenge")}
                                rows={6}
                                placeholder="¿Cuál era el problema principal?"
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">La Solución</label>
                            <textarea
                                {...register("solution")}
                                rows={6}
                                placeholder="¿Cómo lo resolvimos? (Lista o texto)"
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Los Resultados</label>
                            <textarea
                                {...register("results")}
                                rows={6}
                                placeholder="Impacto generado"
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Content (Old/Fallback) */}
                    <div className="md:col-span-2 bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Contenido Adicional (Markdown)</label>
                        <p className="text-xs text-gray-500 mb-2">Usa este espacio para contar la historia completa si es diferente al formato Reto/Solución.</p>
                        <textarea
                            {...register("content")}
                            rows={15}
                            className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white font-mono text-sm focus:border-[#5E3BEE] focus:outline-none"
                        />
                    </div>

                    {/* Sidebar: Tech & Gallery */}
                    <div className="space-y-8">
                        <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-bold text-white">Tecnologías</h2>
                                <button type="button" onClick={() => appendTech({ value: "" })} className="text-[#5E3BEE] text-sm">+ Agregar</button>
                            </div>
                            <div className="space-y-2">
                                {techFields.map((field, index) => (
                                    <div key={field.id} className="flex gap-2">
                                        <input
                                            {...register(`technologies.${index}.value` as const)}
                                            className="flex-1 bg-[#101B2C] border border-[#1D2A3C] rounded-lg px-3 py-2 text-white text-sm"
                                        />
                                        <button type="button" onClick={() => removeTech(index)} className="text-red-400 hover:text-red-300">×</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-bold text-white">Galería de Imágenes</h2>
                                <button type="button" onClick={() => appendGallery({ value: "" })} className="text-[#5E3BEE] text-sm">+ Agregar URL</button>
                            </div>
                            <div className="space-y-2">
                                {galleryFields.map((field, index) => (
                                    <div key={field.id} className="flex gap-2">
                                        <input
                                            {...register(`gallery.${index}.value` as const)}
                                            placeholder="https://..."
                                            className="flex-1 bg-[#101B2C] border border-[#1D2A3C] rounded-lg px-3 py-2 text-white text-sm"
                                        />
                                        <button type="button" onClick={() => removeGallery(index)} className="text-red-400 hover:text-red-300">×</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6">
                            <label className="block text-sm font-medium text-gray-400 mb-2">Keywords (SEO)</label>
                            <textarea
                                {...register("keywords")}
                                rows={3}
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white text-sm focus:border-[#5E3BEE] focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-4 sticky bottom-6 z-50">
                    <div className="bg-[#070C18]/80 backdrop-blur-md p-2 rounded-2xl border border-[#1D2A3C] flex gap-4 shadow-2xl">
                        <Link href="/admin/proyectos" className="px-6 py-3 text-gray-400 hover:text-white flex items-center">Cancelar</Link>
                        <button
                            type="submit"
                            disabled={saving}
                            className="px-8 py-3 bg-[#5E3BEE] hover:bg-[#4E33D8] text-white rounded-xl font-bold disabled:opacity-50 shadow-lg shadow-[#5E3BEE]/20 transition-all hover:scale-105"
                        >
                            {saving ? "Guardando..." : "Guardar Cambios"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
