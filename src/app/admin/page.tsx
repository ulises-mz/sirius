"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function AdminDashboard() {
    const { data: session } = useSession();

    const stats = [
        { label: "Servicios", value: "-", color: "from-[#5E3BEE] to-[#86D4FF]" },
        { label: "Proyectos", value: "-", color: "from-[#00F260] to-[#0575E6]" },
        { label: "Último cambio", value: "Hoy", color: "from-[#FF0080] to-[#7928CA]" },
    ];

    const quickActions = [
        { title: "Nuevo Servicio", href: "/admin/servicios/nuevo", icon: "plus" },
        { title: "Nuevo Proyecto", href: "/admin/proyectos/nuevo", icon: "plus" },
        { title: "Ver Configuración", href: "/admin/configuracion", icon: "settings" },
    ];

    const getIcon = (name: string) => {
        switch (name) {
            case "plus":
                return <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />;
            case "settings":
                return <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />;
            default:
                return null;
        }
    };

    return (
        <div>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">
                    Bienvenido, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86D4FF] to-[#5E3BEE]">{session?.user?.name || "Admin"}</span>
                </h1>
                <p className="text-gray-400">Panel de administración del CMS de Sirius</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6 relative overflow-hidden group hover:border-[#5E3BEE]/30 transition-all"
                    >
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                        <p className="text-gray-400 text-sm mb-2 relative z-10">{stat.label}</p>
                        <p className="text-3xl font-bold text-white relative z-10">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-white mb-4">Acciones Rápidas</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {quickActions.map((action) => (
                        <Link
                            key={action.href}
                            href={action.href}
                            className="flex items-center gap-3 bg-[#0B1221] border border-[#1D2A3C] rounded-xl p-4 hover:border-[#5E3BEE] hover:bg-[#101B2C] transition-all group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-[#5E3BEE]/10 flex items-center justify-center text-[#5E3BEE] group-hover:bg-[#5E3BEE] group-hover:text-white transition-all">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    {getIcon(action.icon)}
                                </svg>
                            </div>
                            <span className="text-white font-medium">{action.title}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Info Card */}
            <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">ℹ️ Información del CMS</h3>
                <div className="space-y-2 text-sm text-gray-400">
                    <p>• Los cambios en servicios y proyectos se actualizan automáticamente en el sitio</p>
                    <p>• El sitio usa ISR (Incremental Static Regeneration) para mantener el SEO</p>
                    <p>• Los datos se guardan en archivos JSON en <code className="text-[#86D4FF]">src/data/cms/</code></p>
                    <p>• Las imágenes deben subirse a <code className="text-[#86D4FF]">/public/images/</code></p>
                </div>
            </div>
        </div>
    );
}
