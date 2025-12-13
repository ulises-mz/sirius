"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import Link from "next/link";
import { toast } from "react-hot-toast";

interface ServiceFormData {
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    price: string;
    icon: string;
    image: string; // Added image
    category: string;
    popular: boolean;
    features: { value: string }[];
    technologies: { value: string }[];
    benefits: { value: string }[];
    process: { value: string }[]; // Added process
    faq: { question: string; answer: string }[]; // Added faq
    id?: number;
}

export default function EditServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);

    const { slug } = use(params);

    const { register, control, handleSubmit, reset } = useForm<ServiceFormData>({
        defaultValues: {
            popular: false,
            features: [{ value: "" }],
            technologies: [{ value: "" }],
            benefits: [{ value: "" }],
            process: [{ value: "" }],
            faq: [{ question: "", answer: "" }]
        }
    });

    const { fields: featureFields, append: appendFeature, remove: removeFeature } = useFieldArray({ control, name: "features" });
    const { fields: techFields, append: appendTech, remove: removeTech } = useFieldArray({ control, name: "technologies" });
    const { fields: benefitFields, append: appendBenefit, remove: removeBenefit } = useFieldArray({ control, name: "benefits" });
    const { fields: processFields, append: appendProcess, remove: removeProcess } = useFieldArray({ control, name: "process" });
    const { fields: faqFields, append: appendFaq, remove: removeFaq } = useFieldArray({ control, name: "faq" });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/services/${slug}`);
                if (!res.ok) throw new Error("Servicio no encontrado");

                const data = await res.json();

                // Transform arrays of strings back to object array for form
                const formData = {
                    ...data,
                    image: data.image || "", // Ensure image field exists
                    features: data.features?.map((f: string) => ({ value: f })) || [],
                    technologies: data.technologies?.map((t: string) => ({ value: t })) || [],
                    benefits: data.benefits?.map((b: string) => ({ value: b })) || [],
                    process: data.process?.map((p: string) => ({ value: p })) || [],
                    faq: data.faq || [] // FAQ is already an object array
                };

                reset(formData);
            } catch (error) {
                console.error("Service load error:", error);
                toast.error("Error cargando servicio");
                router.push("/admin/servicios");
            } finally {
                setFetching(false);
            }
        };

        fetchData();
    }, [slug, reset, router]);

    const onSubmit = async (data: ServiceFormData) => {
        setLoading(true);
        try {
            const payload = {
                ...data,
                features: data.features.map(f => f.value).filter(Boolean),
                technologies: data.technologies.map(t => t.value).filter(Boolean),
                benefits: data.benefits.map(b => b.value).filter(Boolean),
                process: data.process.map(p => p.value).filter(Boolean),
                faq: data.faq.filter(f => f.question && f.answer) // Filter empty FAQs
            };

            const res = await fetch(`/api/services/${slug}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Error actualizando servicio");

            router.push("/admin/servicios");
            router.refresh();
        } catch (error) {
            alert("Error al guardar cambios"); // Fallback if toast not setup
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm("¿Estás seguro de eliminar este servicio? Esta acción no se puede deshacer.")) return;

        setLoading(true);
        try {
            const res = await fetch(`/api/services/${slug}`, { method: "DELETE" });
            if (!res.ok) throw new Error("Error eliminando");

            router.push("/admin/servicios");
            router.refresh();
        } catch (error) {
            console.error("Service delete error:", error);
            alert("Error al eliminar");
        }
    };

    if (fetching) return <div className="text-white p-8">Cargando datos del servicio...</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Link href="/admin/servicios" className="text-gray-400 hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </Link>
                    <h1 className="text-3xl font-bold text-white">Editar Servicio</h1>
                </div>

                <button
                    onClick={handleDelete}
                    className="text-red-400 hover:text-red-300 px-4 py-2 border border-red-500/20 hover:bg-red-500/10 rounded-xl transition-all text-sm font-medium"
                >
                    Eliminar Servicio
                </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Same form layout as create page - reusing components would be better but keeping inline for speed now */}
                <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6 space-y-6">
                    <h2 className="text-xl font-bold text-white mb-4 border-b border-[#1D2A3C] pb-2">Información Básica</h2>

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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Icono (Nombre)</label>
                            <input
                                {...register("icon")}
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Imagen Principal (URL)</label>
                            <input
                                {...register("image")}
                                placeholder="https://..."
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Descripción Corta</label>
                        <textarea
                            {...register("description", { required: true })}
                            rows={2}
                            className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Descripción Larga</label>
                        <textarea
                            {...register("longDescription", { required: true })}
                            rows={4}
                            className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Precio</label>
                            <input
                                {...register("price", { required: true })}
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
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
                    <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-white">Características (Features)</h2>
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
                                    />
                                    <button type="button" onClick={() => removeFeature(index)} className="text-red-400 hover:text-red-300">×</button>
                                </div>
                            ))}
                        </div>
                    </div>

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
                                    />
                                    <button type="button" onClick={() => removeTech(index)} className="text-red-400 hover:text-red-300">×</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Benefits & Process */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-white">Beneficios</h2>
                            <button type="button" onClick={() => appendBenefit({ value: "" })} className="text-[#5E3BEE] hover:text-[#86D4FF] text-sm font-medium">
                                + Agregar
                            </button>
                        </div>
                        <div className="space-y-3">
                            {benefitFields.map((field, index) => (
                                <div key={field.id} className="flex gap-2">
                                    <input
                                        {...register(`benefits.${index}.value` as const)}
                                        className="flex-1 bg-[#101B2C] border border-[#1D2A3C] rounded-lg px-3 py-2 text-white text-sm focus:border-[#5E3BEE] focus:outline-none"
                                    />
                                    <button type="button" onClick={() => removeBenefit(index)} className="text-red-400 hover:text-red-300">×</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-white">Proceso</h2>
                            <button type="button" onClick={() => appendProcess({ value: "" })} className="text-[#5E3BEE] hover:text-[#86D4FF] text-sm font-medium">
                                + Agregar
                            </button>
                        </div>
                        <div className="space-y-3">
                            {processFields.map((field, index) => (
                                <div key={field.id} className="flex gap-2">
                                    <input
                                        {...register(`process.${index}.value` as const)}
                                        className="flex-1 bg-[#101B2C] border border-[#1D2A3C] rounded-lg px-3 py-2 text-white text-sm focus:border-[#5E3BEE] focus:outline-none"
                                    />
                                    <button type="button" onClick={() => removeProcess(index)} className="text-red-400 hover:text-red-300">×</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-white">Preguntas Frecuentes (FAQ)</h2>
                        <button type="button" onClick={() => appendFaq({ question: "", answer: "" })} className="text-[#5E3BEE] hover:text-[#86D4FF] text-sm font-medium">
                            + Agregar Pregunta
                        </button>
                    </div>
                    <div className="space-y-4">
                        {faqFields.map((field, index) => (
                            <div key={field.id} className="bg-[#101B2C] border border-[#1D2A3C] rounded-xl p-4 flex flex-col gap-3 relative group">
                                <button type="button" onClick={() => removeFaq(index)} className="absolute top-4 right-4 text-gray-500 hover:text-red-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-1">Pregunta</label>
                                    <input
                                        {...register(`faq.${index}.question` as const)}
                                        className="w-full bg-[#0B1221] border border-[#1D2A3C] rounded-lg px-3 py-2 text-white text-sm focus:border-[#5E3BEE] focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-1">Respuesta</label>
                                    <textarea
                                        {...register(`faq.${index}.answer` as const)}
                                        rows={2}
                                        className="w-full bg-[#0B1221] border border-[#1D2A3C] rounded-lg px-3 py-2 text-white text-sm focus:border-[#5E3BEE] focus:outline-none"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t border-[#1D2A3C]">
                    <Link href="/admin/servicios" className="px-6 py-3 text-gray-400 hover:text-white font-medium transition-colors">
                        Cancelar
                    </Link>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-3 bg-[#5E3BEE] hover:bg-[#4E33D8] text-white rounded-xl font-bold transition-all disabled:opacity-50"
                    >
                        {loading ? "Guardando..." : "Guardar Cambios"}
                    </button>
                </div>
            </form>
        </div>
    );
}
