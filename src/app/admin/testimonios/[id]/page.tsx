"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { toast } from "react-hot-toast";

interface TestimonialFormData {
    name: string;
    title: string;
    company: string;
    quote: string;
    rating: number;
    result: string;
    image: string;
    id?: number;
}

export default function EditTestimonialPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [isNew, setIsNew] = useState(false);

    const { id } = use(params);

    const { register, handleSubmit, reset, setValue, watch } = useForm<TestimonialFormData>({
        defaultValues: {
            rating: 5
        }
    });

    const ratingValue = watch("rating");

    useEffect(() => {
        if (id === "nuevo") {
            setIsNew(true);
            setFetching(false);
            return;
        }

        const fetchData = async () => {
            try {
                const res = await fetch(`/api/testimonials/${id}`);
                if (!res.ok) throw new Error("Testimonio no encontrado");
                const data = await res.json();
                reset(data);
            } catch (error) {
                toast.error("Error cargando testimonio");
                router.push("/admin/testimonios");
            } finally {
                setFetching(false);
            }
        };

        fetchData();
    }, [id, reset, router]);

    const onSubmit = async (data: TestimonialFormData) => {
        setLoading(true);
        try {
            const url = isNew ? "/api/testimonials" : `/api/testimonials/${id}`;
            const method = isNew ? "POST" : "PUT";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Error guardando testimonio");

            router.push("/admin/testimonios");
            router.refresh(); // Refresh server components
        } catch (error) {
            alert("Error al guardar");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm("¿Eliminar este testimonio?")) return;
        setLoading(true);
        try {
            await fetch(`/api/testimonials/${id}`, { method: "DELETE" });
            router.push("/admin/testimonios");
            router.refresh();
        } catch (error) {
            alert("Error al eliminar");
        }
    };

    if (fetching) return <div className="text-white p-8">Cargando...</div>;

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Link href="/admin/testimonios" className="text-gray-400 hover:text-white transition-colors">
                        ← Volver
                    </Link>
                    <h1 className="text-3xl font-bold text-white">
                        {isNew ? "Nuevo Testimonio" : "Editar Testimonio"}
                    </h1>
                </div>
                {!isNew && (
                    <button onClick={handleDelete} className="text-red-400 hover:text-red-300 text-sm">
                        Eliminar
                    </button>
                )}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6 space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                        <input
                            {...register("name", { required: true })}
                            className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#5E3BEE]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Empresa</label>
                        <input
                            {...register("company", { required: true })}
                            className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#5E3BEE]"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Cargo / Título</label>
                        <input
                            {...register("title", { required: true })}
                            className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#5E3BEE]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Resultado/Badge (Opcional)</label>
                        <input
                            {...register("result")}
                            placeholder='Ej: "+40% Ventas"'
                            className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#5E3BEE]"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Puntuación (1-5)</label>
                    <div className="flex gap-2 items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setValue("rating", star)}
                                className={`text-2xl transition-colors ${ratingValue >= star ? "text-yellow-400" : "text-gray-600"}`}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Testimonio (Quote)</label>
                    <textarea
                        {...register("quote", { required: true })}
                        rows={4}
                        className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#5E3BEE]"
                    />
                </div>

                <div className="pt-4 border-t border-[#1D2A3C] flex justify-end gap-3">
                    <Link href="/admin/testimonios" className="px-6 py-2 text-gray-400 hover:text-white">
                        Cancelar
                    </Link>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-[#5E3BEE] hover:bg-[#4E33D8] text-white px-8 py-2 rounded-xl font-bold transition-all disabled:opacity-50"
                    >
                        {loading ? "Guardando..." : "Guardar"}
                    </button>
                </div>
            </form>
        </div>
    );
}
