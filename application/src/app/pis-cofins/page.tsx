'use client';

import React, { useState } from 'react';
import { usePisCofins } from '../../hooks/use-pis-cofins';

const formatBRL = (value: string | number) => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return 'R$ 0,00';
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num);
};

export default function PisCofinsPage() {
  const [productValue, setProductValue] = useState('');
  const [pisRate, setPisRate] = useState('1.65');
  const [confinsRate, setConfinsRate] = useState('7.60');
  const [formError, setFormError] = useState('');

  const { loading, result, error, calculatePisCofins } = usePisCofins();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    const val = parseFloat(productValue);
    if (!productValue || isNaN(val) || val <= 0) {
      setFormError('Informe um valor de produto válido e maior que zero.');
      return;
    }
    try {
      await calculatePisCofins({
        productValue: val,
        pisRate: parseFloat(pisRate) / 100,
        confinsRate: parseFloat(confinsRate) / 100,
      });
    } catch {
      // error handled by hook
    }
  };

  return (
    <main className="container mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-8 max-w-5xl">
      <title>PIS/COFINS - Simulador Tributário</title>
      <meta name="description" content="Calcule PIS e COFINS de forma rápida e precisa com suporte aos regimes cumulativo e não cumulativo." />

      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-green-950 to-green-900 text-white rounded-3xl p-8 md:p-10 shadow-2xl border border-green-800/40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-lime-500/10 rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 bg-lime-500/15 text-lime-400 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider border border-lime-500/25">
              <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              Tributo Federal
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mt-4 bg-gradient-to-r from-white via-green-100 to-lime-300 bg-clip-text text-transparent">
              PIS / COFINS
            </h1>
            <p className="text-green-200/75 mt-3 text-sm md:text-base leading-relaxed">
              Calcule as contribuições PIS e COFINS sobre o valor do produto.
              Suporte às alíquotas personalizadas nos regimes cumulativo e não cumulativo.
            </p>
          </div>
          <div className="bg-lime-900/30 border border-lime-700/30 rounded-2xl p-4 shrink-0">
            <div className="text-[10px] text-lime-400 font-bold uppercase tracking-wider mb-2">Alíquotas Padrão</div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center gap-6">
                <span className="text-lime-200/80 text-xs font-semibold">PIS:</span>
                <span className="text-white font-black text-sm font-mono">1,65%</span>
              </div>
              <div className="flex justify-between items-center gap-6">
                <span className="text-lime-200/80 text-xs font-semibold">COFINS:</span>
                <span className="text-white font-black text-sm font-mono">7,60%</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* FORM */}
        <div className="lg:col-span-5 bg-white border border-green-100 rounded-3xl shadow-md overflow-hidden">
          <div className="border-b border-green-100/50 bg-green-50/30 px-6 py-5 flex items-center justify-between">
            <h2 className="font-extrabold text-green-950 flex items-center gap-2">
              <svg className="w-5 h-5 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Parâmetros de Cálculo
            </h2>
            <span className="text-[10px] bg-lime-100 text-lime-800 font-black px-3 py-1 rounded-lg font-mono">PIS/COFINS</span>
          </div>

          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-6" id="pis-cofins-form">

            {/* Valor do produto */}
            <div className="flex flex-col gap-2">
              <label htmlFor="productValue" className="text-xs font-bold text-green-900 flex items-center justify-between">
                <span>VALOR DO PRODUTO (BASE)</span>
                <span className="text-red-500 text-[10px] font-bold uppercase tracking-wider">* Requerido</span>
              </label>
              <div className="relative rounded-xl shadow-xs">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-green-600 font-extrabold text-sm">R$</span>
                </div>
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  id="productValue"
                  value={productValue}
                  onChange={(e) => setProductValue(e.target.value)}
                  placeholder="0,00"
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl text-green-950 font-bold focus:ring-4 focus:ring-lime-500/10 focus:border-lime-500 transition-all outline-none ${
                    formError ? 'border-red-400 bg-red-50/20' : 'border-green-200'
                  }`}
                />
              </div>
              {formError && <p className="text-xs text-red-500 font-bold">{formError}</p>}
            </div>

            {/* Taxas */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="pisRate" className="text-xs font-bold text-green-900">
                  TAXA PIS (%)
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="100"
                  id="pisRate"
                  value={pisRate}
                  onChange={(e) => setPisRate(e.target.value)}
                  className="w-full px-4 py-3 border border-green-200 rounded-xl text-green-950 font-bold focus:ring-4 focus:ring-lime-500/10 focus:border-lime-500 transition-all outline-none"
                />
                <span className="text-[10px] text-slate-400 font-semibold">Padrão: 1,65%</span>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="confinsRate" className="text-xs font-bold text-green-900">
                  TAXA COFINS (%)
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="100"
                  id="confinsRate"
                  value={confinsRate}
                  onChange={(e) => setConfinsRate(e.target.value)}
                  className="w-full px-4 py-3 border border-green-200 rounded-xl text-green-950 font-bold focus:ring-4 focus:ring-lime-500/10 focus:border-lime-500 transition-all outline-none"
                />
                <span className="text-[10px] text-slate-400 font-semibold">Padrão: 7,60%</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              id="calcular-btn"
              className="w-full bg-gradient-to-r from-green-700 to-lime-600 hover:from-green-600 hover:to-lime-500 text-white font-black py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-green-700/25 hover:shadow-xl hover:shadow-green-600/30 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Calculando...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Calcular PIS / COFINS
                </>
              )}
            </button>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl p-3">
                {error}
              </div>
            )}
          </form>
        </div>

        {/* RESULTS PANEL */}
        <div className="lg:col-span-7">

          {/* Empty state */}
          {!loading && !result && !error && (
            <div className="bg-white border-2 border-green-100 border-dashed rounded-3xl p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
              <div className="bg-lime-50 p-6 rounded-full text-lime-600 mb-6 ring-8 ring-lime-50/40 relative">
                <div className="absolute inset-0 rounded-full bg-lime-500/10 animate-ping" />
                <svg className="w-12 h-12 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-green-950">Contribuições PIS/COFINS</h3>
              <p className="text-slate-500 text-sm max-w-xs mt-3 leading-relaxed">
                Informe o valor do produto e as alíquotas para calcular as contribuições federais.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <span className="text-xs bg-lime-50 text-lime-800 px-3.5 py-1.5 rounded-full font-bold border border-lime-100">Regime Cumulativo</span>
                <span className="text-xs bg-green-50 text-green-800 px-3.5 py-1.5 rounded-full font-bold border border-green-100">Regime Não Cumulativo</span>
              </div>
            </div>
          )}

          {/* Result */}
          {!loading && result && !error && (
            <div className="bg-white border border-green-100 rounded-3xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-br from-green-950 to-green-900 text-white p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-60 h-60 bg-lime-500/10 rounded-full blur-3xl pointer-events-none -mr-10 -mt-10" />
                <div className="relative z-10">
                  <h3 className="text-green-400 font-bold text-xs uppercase tracking-wider">Total de Contribuições</h3>
                  <div className="text-4xl md:text-5xl font-black mt-2 text-white tracking-tight">
                    {formatBRL(result.totalTax)}
                  </div>
                  <p className="text-green-200/60 text-xs mt-2">PIS + COFINS sobre o valor do produto</p>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-5">
                {/* Base value */}
                <div className="bg-green-50/50 border border-green-100 rounded-2xl p-4 flex justify-between items-center">
                  <span className="text-xs text-green-800 font-bold uppercase tracking-wider">Valor do Produto (Base)</span>
                  <span className="text-lg font-black text-green-950 font-mono">{formatBRL(result.productValue)}</span>
                </div>

                {/* PIS & COFINS grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* PIS */}
                  <div className="border border-green-100 rounded-2xl p-5 flex flex-col gap-3 bg-white shadow-xs">
                    <div className="flex justify-between items-center border-b border-green-50 pb-2.5">
                      <span className="text-xs font-bold text-green-900">Contribuição PIS</span>
                      <span className="bg-lime-50 text-lime-800 text-[10px] font-mono px-2.5 py-0.5 rounded font-black border border-lime-100">
                        {result.pisRate}
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs text-slate-500 font-semibold">Valor Apurado:</span>
                      <span className="text-xl font-black text-lime-700 font-mono">{formatBRL(result.pisAmount)}</span>
                    </div>
                  </div>

                  {/* COFINS */}
                  <div className="border border-green-100 rounded-2xl p-5 flex flex-col gap-3 bg-white shadow-xs">
                    <div className="flex justify-between items-center border-b border-green-50 pb-2.5">
                      <span className="text-xs font-bold text-green-900">Contribuição COFINS</span>
                      <span className="bg-lime-50 text-lime-800 text-[10px] font-mono px-2.5 py-0.5 rounded font-black border border-lime-100">
                        {result.confinsRate}
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs text-slate-500 font-semibold">Valor Apurado:</span>
                      <span className="text-xl font-black text-lime-700 font-mono">{formatBRL(result.confinsAmount)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}