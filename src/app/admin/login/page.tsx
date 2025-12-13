"use client";

import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const AdminLoginForm = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(searchParams?.get("error") || "");
    const [loading, setLoading] = useState(false);
    const [debugLog, setDebugLog] = useState<string[]>([]);

    const addLog = (msg: string) => setDebugLog(prev => [...prev, `${new Date().toISOString().split('T')[1]} - ${msg}`]);

    const handleSubmit = async (e: React.FormEvent) => {
        if (e) e.preventDefault();

        setError("");
        setLoading(true);
        addLog("Iniciando FETCH manual...");

        try {
            // 1. Get CSRF Token
            addLog("Obteniendo CSRF Token...");
            const csrfRes = await fetch("/api/auth/csrf");
            const csrfData = await csrfRes.json();
            const csrfToken = csrfData.csrfToken;
            addLog(`CSRF Token: ${csrfToken?.substring(0, 10)}...`);

            if (!csrfToken) throw new Error("No se pudo obtener CSRF Token");

            // 2. Post Credentials
            addLog("Enviando credenciales...");
            const formData = new URLSearchParams();
            formData.append("email", email);
            formData.append("password", password);
            formData.append("csrfToken", csrfToken);
            formData.append("json", "true");

            const res = await fetch("/api/auth/callback/credentials", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData
            });

            addLog(`Status: ${res.status}`);
            const text = await res.text();
            addLog(`Response: ${text.substring(0, 100)}...`);
            console.log("Response Full:", text);

            if (res.ok) {
                const data = JSON.parse(text);
                if (data.url && data.url.includes("error")) {
                    setError("Auth falló (Redirect a error detectado)");
                    addLog("Falló: " + data.url);
                } else {
                    addLog("Login OK! Redirigiendo...");
                    window.location.href = "/admin";
                }
            } else {
                setError(`Error HTTP: ${res.status}`);
            }
            setLoading(false);

        } catch (err: any) {
            console.error("Fetch exception:", err);
            setError(`Excepción: ${err.message}`);
            addLog(`Excepción: ${err.message}`);
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md">

            <div className="bg-[#0B1221] border border-[#1D2A3C] rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-white mb-2">Panel de Control</h1>
                    <p className="text-gray-400 text-sm">Ingresa tus credenciales para continuar</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm">
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {error}
                    </div>
                )}

                {/* NO FORM TAG to prevent auto-submit */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:border-[#5E3BEE] focus:ring-1 focus:ring-[#5E3BEE] focus:outline-none transition-all"
                                placeholder="nombre@empresa.com"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Contraseña</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-[#101B2C] border border-[#1D2A3C] rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:border-[#5E3BEE] focus:ring-1 focus:ring-[#5E3BEE] focus:outline-none transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => handleSubmit(null as any)}
                        disabled={loading}
                        className="w-full bg-[#5E3BEE] hover:bg-[#4E33D8] text-white font-bold py-3 px-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Verificando...</span>
                            </>
                        ) : (
                            "Iniciar Sesión"
                        )}
                    </button>

                    <div className="mt-4 pt-4 border-t border-gray-800 text-center">
                        <p className="text-xs text-gray-500">¿Problemas? Prueba <span className="text-yellow-500 font-mono">debug@test.com</span> / <span className="text-yellow-500 font-mono">debug</span></p>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <Link href="/" className="text-gray-500 hover:text-white text-sm transition-colors">
                    ← Volver al sitio principal
                </Link>
            </div>
        </div>
    );
};

export default function AdminLoginPage() {
    return (
        <div className="min-h-screen bg-[#070C18] flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#5E3BEE] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.15]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#86D4FF] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.1]" />
            </div>

            <Suspense fallback={<div className="text-white">Cargando...</div>}>
                <AdminLoginForm />
            </Suspense>
        </div>
    );
}
