"use client";

import React, { useState } from "react";
import { useAuth } from "../providers/auth-provider";

export default function LoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Artificial delay to simulate an authentication check for premium feel
    setTimeout(() => {
      const success = login(username, password);
      setIsLoading(false);
      if (!success) {
        setError("Usuário ou senha incorretos. Dica: use admin/admin");
      }
    }, 800);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-radial from-slate-900 to-slate-950 px-4 relative overflow-hidden">
      {/* Decorative gradient glowing spheres */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md animate-fadeIn z-10">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-8 shadow-2xl">
          {/* Logo / Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20 mb-4 animate-bounce-slow">
              <svg className="w-8 h-8 text-green-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white">
              Impostos<span className="text-green-400">NF</span>
            </h1>
            <p className="text-slate-400 text-sm mt-2 text-center">
              Faça login para gerenciar e calcular tributos fiscais
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3.5 rounded-xl text-sm font-medium animate-shake">
                {error}
              </div>
            )}

            <div>
              <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2" htmlFor="username">
                Usuário
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input
                  id="username"
                  type="text"
                  required
                  placeholder="Seu usuário"
                  className="w-full bg-slate-950/60 border border-slate-800 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 rounded-xl py-3 pl-11 pr-4 text-white placeholder-slate-500 transition-all outline-none"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2" htmlFor="password">
                Senha
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="Sua senha"
                  className="w-full bg-slate-950/60 border border-slate-800 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 rounded-xl py-3 pl-11 pr-4 text-white placeholder-slate-500 transition-all outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-500 hover:bg-green-400 disabled:bg-green-500/50 text-slate-950 font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                  <span>Entrando...</span>
                </>
              ) : (
                <span>Acessar Dashboard</span>
              )}
            </button>
          </form>

          {/* Hint */}
          <div className="mt-6 border-t border-slate-800/80 pt-4 flex items-center justify-center gap-1.5 text-xs text-slate-500">
            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Dica de acesso rápido: <strong>admin</strong> / <strong>admin</strong></span>
          </div>
        </div>
      </div>
    </main>
  );
}
