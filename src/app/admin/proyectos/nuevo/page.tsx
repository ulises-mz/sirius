"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import Link from "next/link";
import { toast } from "react-hot-toast";

interface ProjectFormData {
    title: string;
    slug: string;
    description: string;
    content: string; // Markdown
    backgroundImage: string;
    category: string;
    technologies: { value: string }[];
    keywords: string;
}

export default function NewProjectPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const { register, control, handleSubmit, setValue, watch, formState: { errors } } = useForm<ProjectFormData>({
        defaultValues: {
            technologies: [{ value: "" }]
        }
    });

    const { fields: techFields, append: appendTech, remove: removeTech } = useFieldArray({
        control,
        name: "technologies"
    });

    // Auto-slug
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setValue("title", val);
        const slug = val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
        setValue("slug", slug);
    };

    const onSubmit = async (data: ProjectFormData) => {
        setLoading(true);
        try {
            const payload = {
                ...data,
                technologies: data.technologies.map(t => t.value).filter(Boolean),
                // Ensure ID is generated in backend or just use slug as ID in JSON
            };

            const res = await fetch("/api/projects", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Error creando proyecto");

            toast.success("Proyecto creado exitosamente");
            router.push("/admin/proyectos");
            router.refresh();
        } catch (error) {
            toast.error("Error al guardar el proyecto");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/proyectos" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </Link>
                <h1 className="text-3xl font-bold text-white">Nuevo Proyecto</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Basic Info */}
                <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6 space-y-6">
                    <h2 className="text-xl font-bold text-white mb-4 border-b border-[#1D2A3C] pb-2">Información Principal</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Título</label>
                            <input
                                {...register("title", { required: true })}
                                onChange={handleTitleChange}
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                                placeholder="Nombre del proyecto"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Slug (URL)</label>
                            <input
                                {...register("slug", { required: true })}
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-gray-400 focus:border-[#5E3BEE] focus:outline-none"
                                placeholder="nombre-proyecto"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Descripción Corta</label>
                        <textarea
                            {...register("description", { required: true })}
                            rows={2}
                            className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                            placeholder="Resumen para la tarjeta..."
                        />
                    </div>

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
                        <label className="block text-sm font-medium text-gray-400 mb-2">Imagen URL (Background)</label>
                        <input
                            {...register("backgroundImage")}
                            className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                            placeholder="/portfolio/mi-imagen.webp"
                        />
                        <p className="text-xs text-gray-500 mt-1">Ruta relativa a la carpeta public, ej: /images/projects/photo.jpg</p>
                    </div>
                </div>

                {/* Content & Tech */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Content Markdown */}
                    <div className="md:col-span-2 bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Contenido Detallado (Markdown)</label>
                        <textarea
                            {...register("content")}
                            rows={15}
                            className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white font-mono text-sm focus:border-[#5E3BEE] focus:outline-none"
                            placeholder="## Reto...&#10;&#10;**Solución:**..."
                        />
                    </div>

                    {/* Sidebar inputs */}
                    <div className="space-y-8">
                        {/* Technologies */}
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
                                            placeholder="Tech..."
                                        />
                                        <button type="button" onClick={() => removeTech(index)} className="text-red-400">×</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Keywords */}
                        <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6">
                            <label className="block text-sm font-medium text-gray-400 mb-2">Keywords (SEO)</label>
                            <textarea
                                {...register("keywords")}
                                rows={3}
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white text-sm focus:border-[#5E3BEE] focus:outline-none"
                                placeholder="react, seo, web..."
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-4">
                    <Link href="/admin/proyectos" className="px-6 py-3 text-gray-400 hover:text-white">Cancelar</Link>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-3 bg-[#5E3BEE] hover:bg-[#4E33D8] text-white rounded-xl font-bold disabled:opacity-50"
                    >
                        {loading ? "Guardando..." : "Crear Proyecto"}
                    </button>
                </div>
            </form>
        </div>
    );
}
