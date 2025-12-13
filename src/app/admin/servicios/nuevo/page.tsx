"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import Link from "next/link";

interface ServiceFormData {
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    price: string;
    icon: string;
    category: string;
    popular: boolean;
    features: { value: string }[];
    technologies: { value: string }[];
    benefits: { value: string }[];
}

export default function NewServicePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const { register, control, handleSubmit, setValue } = useForm<ServiceFormData>({
        defaultValues: {
            popular: false,
            features: [{ value: "" }],
            technologies: [{ value: "" }],
            benefits: [{ value: "" }]
        }
    });

    // Dynamic fields
    const { fields: featureFields, append: appendFeature, remove: removeFeature } = useFieldArray({ control, name: "features" });
    const { fields: techFields, append: appendTech, remove: removeTech } = useFieldArray({ control, name: "technologies" });

    // Auto-generate slug from title

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setValue("title", val);
        // Simple slugify
        const slug = val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
        setValue("slug", slug);
    };

    const onSubmit = async (data: ServiceFormData) => {
        setLoading(true);
        try {
            // Transform form data to match API schema (arrays of strings instead of objects)
            const payload = {
                ...data,
                features: data.features.map(f => f.value).filter(Boolean),
                technologies: data.technologies.map(t => t.value).filter(Boolean),
                benefits: data.benefits.map(b => b.value).filter(Boolean),
                // Default empty arrays for others not in form yet
                process: [],
                faq: []
            };

            const res = await fetch("/api/services", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Error creando servicio");

            router.push("/admin/servicios");
            router.refresh(); // Refresh server components
        } catch (error) {
            alert("Error al guardar el servicio");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/servicios" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </Link>
                <h1 className="text-3xl font-bold text-white">Nuevo Servicio</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Basic Info Card */}
                <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6 space-y-6">
                    <h2 className="text-xl font-bold text-white mb-4 border-b border-[#1D2A3C] pb-2">Información Básica</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Título</label>
                            <input
                                {...register("title", { required: true })}
                                onChange={handleTitleChange}
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                                placeholder="Ej: Desarrollo Web"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Slug (URL)</label>
                            <input
                                {...register("slug", { required: true })}
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-gray-400 focus:border-[#5E3BEE] focus:outline-none"
                                placeholder="desarrollo-web"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Descripción Corta</label>
                        <textarea
                            {...register("description", { required: true })}
                            rows={2}
                            className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                            placeholder="Resumen atractivo para la tarjeta del servicio..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Descripción Larga</label>
                        <textarea
                            {...register("longDescription", { required: true })}
                            rows={4}
                            className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                            placeholder="Descripción detallada para la página individual..."
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Precio</label>
                            <input
                                {...register("price", { required: true })}
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                                placeholder="Ej: Desde $800"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Categoría</label>
                            <select
                                {...register("category")}
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none appearance-none"
                            >
                                <option value="web">Web Development</option>
                                <option value="app">Mobile Apps</option>
                                <option value="ai">AI Solutions</option>
                                <option value="hosting">Hosting</option>
                                <option value="consulting">Consulting</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Icono ID</label>
                            <input
                                {...register("icon")}
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                                placeholder="ej: desarrollo"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            {...register("popular")}
                            id="popular"
                            className="w-5 h-5 rounded bg-[#101B2C] border-[#1D2A3C] text-[#5E3BEE] focus:ring-[#5E3BEE]"
                        />
                        <label htmlFor="popular" className="text-white font-medium">Marcar como Popular</label>
                    </div>
                </div>

                {/* Features & Technologies */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-white">Características</h2>
                            <button type="button" onClick={() => appendFeature({ value: "" })} className="text-[#5E3BEE] hover:text-[#86D4FF] text-sm font-medium">
                                + Agregar
                            </button>
                        </div>
                        <div className="space-y-3">
                            {featureFields.map((field, index) => (
                                <div key={field.id} className="flex gap-2">
                                    <input
                                        {...register(`features.${index}.value` as const)}
                                        className="flex-1 bg-[#101B2C] border border-[#1D2A3C] rounded-lg px-3 py-2 text-white text-sm focus:border-[#5E3BEE] focus:outline-none"
                                        placeholder="Característica..."
                                    />
                                    <button type="button" onClick={() => removeFeature(index)} className="text-red-400 hover:text-red-300">
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technologias */}
                    <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-white">Tecnologías</h2>
                            <button type="button" onClick={() => appendTech({ value: "" })} className="text-[#5E3BEE] hover:text-[#86D4FF] text-sm font-medium">
                                + Agregar
                            </button>
                        </div>
                        <div className="space-y-3">
                            {techFields.map((field, index) => (
                                <div key={field.id} className="flex gap-2">
                                    <input
                                        {...register(`technologies.${index}.value` as const)}
                                        className="flex-1 bg-[#101B2C] border border-[#1D2A3C] rounded-lg px-3 py-2 text-white text-sm focus:border-[#5E3BEE] focus:outline-none"
                                        placeholder="Ej: React, AWS..."
                                    />
                                    <button type="button" onClick={() => removeTech(index)} className="text-red-400 hover:text-red-300">
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-4 pt-4 border-t border-[#1D2A3C]">
                    <Link
                        href="/admin/servicios"
                        className="px-6 py-3 text-gray-400 hover:text-white font-medium transition-colors"
                    >
                        Cancelar
                    </Link>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-3 bg-[#5E3BEE] hover:bg-[#4E33D8] text-white rounded-xl font-bold transition-all disabled:opacity-50"
                    >
                        {loading ? "Guardando..." : "Guardar Servicio"}
                    </button>
                </div>
            </form>
        </div>
    );
}
