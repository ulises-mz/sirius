"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

interface ConfigData {
    siteName: string;
    contactEmail: string;
    phone: string;
    address: string;
    schedule: string;
    whatsappNumber: string;
}

export default function ConfigPage() {
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit, reset } = useForm<ConfigData>();

    // Password form state
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        fetch("/api/config")
            .then(res => res.json())
            .then(data => {
                reset(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                toast.error("Error cargando configuración");
                setLoading(false);
            });
    }, [reset]);

    const onSubmit = async (data: ConfigData) => {
        if (newPassword && newPassword !== confirmPassword) {
            toast.error("Las contraseñas no coinciden");
            return;
        }

        try {
            const payload: { config: ConfigData; password?: { new: string } } = { config: data };
            if (newPassword) {
                payload.password = { new: newPassword };
            }

            const res = await fetch("/api/config", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error("Failed to save");

            toast.success("Configuración guardada");
            setNewPassword("");
            setConfirmPassword("");
        } catch (error) {
            console.error("Save error:", error);
            toast.error("Error al guardar");
        }
    };

    if (loading) return <div className="text-white p-8">Cargando...</div>;

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Configuración</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* General Info */}
                <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6 space-y-6">
                    <h2 className="text-xl font-bold text-white mb-4 border-b border-[#1D2A3C] pb-2">Información del Sitio</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Nombre del Sitio</label>
                            <input {...register("siteName")} className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email de Contacto</label>
                            <input {...register("contactEmail")} className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Teléfono</label>
                            <input {...register("phone")} className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Dirección</label>
                            <input {...register("address")} className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-400 mb-2">Horario de Atención</label>
                            <input {...register("schedule")} placeholder="Ej: Lunes a viernes 8am a 5pm y sábados de 8 a 12md." className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Número de WhatsApp</label>
                            <input {...register("whatsappNumber")} placeholder="Ej: +50672217873" className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none" />
                        </div>
                    </div>
                </div>

                {/* Security */}
                <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6 space-y-6">
                    <h2 className="text-xl font-bold text-white mb-4 border-b border-[#1D2A3C] pb-2">Seguridad</h2>
                    <p className="text-sm text-gray-500 mb-4">Deja los campos vacíos si no quieres cambiar la contraseña.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Nueva Contraseña</label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                                placeholder="••••••••"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Confirmar Contraseña</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl px-4 py-3 text-white focus:border-[#5E3BEE] focus:outline-none"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-8 py-3 bg-[#5E3BEE] hover:bg-[#4E33D8] text-white rounded-xl font-bold shadow-lg shadow-[#5E3BEE]/20 transition-all"
                    >
                        Guardar Configuración
                    </button>
                </div>
            </form>
        </div>
    );
}
