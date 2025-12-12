"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "@/styles/globals.css";

export default function AdminLoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const result = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (result?.error) {
                setError("Credenciales inválidas");
                setLoading(false);
            } else {
                router.push("/admin");
                router.refresh();
            }
        } catch (error) {
            setError("Error al iniciar sesión");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#070C18] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo / Título */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86D4FF] to-[#5E3BEE]">Sirius</span>
                    </h1>
                    <p className="text-gray-400">CMS Dashboard</p>
                </div>

                {/* Card de Login */}
                <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-3xl p-8 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 bg-[#070C18] border border-[#1D2A3C] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#5E3BEE] transition-colors"
                                placeholder="admin@siriusx.net"
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 bg-[#070C18] border border-[#1D2A3C] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#5E3BEE] transition-colors"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                                <p className="text-red-400 text-sm">{error}</p>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#5E3BEE] text-white py-3 px-4 rounded-xl font-bold hover:bg-[#4E33D8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
                        </button>
                    </form>
                </div>

                {/* Footer Note */}
                <p className="text-center text-gray-500 text-sm mt-6">
                    Panel de administración del CMS de Sirius
                </p>
            </div>
        </div>
    );
}
