'use client';

import React from 'react';
import { usePisCofins } from '../../hooks/use-pis-cofins';
import Navbar from '../../components/common/navbar';
import Card from '../../components/ui/card';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333';

export default function PisCofinsPage() {
  const {
    productValue,
    pisRate,
    confinsRate,
    result,
    loading,
    error,
    setProductValue,
    setPisRate,
    setConfinsRate,
    calculate,
    reset,
  } = usePisCofins(API_URL);
  return (
    <div>
      <Navbar />
      <main className="calculator-container">
        <div className="calculator-wrapper">
          <h1>PIS/CONFINS</h1>
          <p className="subtitle">Calcule PIS e CONFINS de forma rápida e precisa</p>

          <Card className="input-card">
            <div className="form-group">
              <label htmlFor="productValue">Valor do Produto (R$)</label>
              <Input
                id="productValue"
                type="number"
                placeholder="0.00"
                value={productValue}
                onChange={(e) => setProductValue(e.target.value)}
                step="0.01"
                min="0"
                disabled={loading}
              />
            </div>

            <div className="rates-grid">
              <div className="form-group">
                <label htmlFor="pisRate">Taxa PIS (%)</label>
                <Input
                  id="pisRate"
                  type="number"
                  placeholder="1.65"
                  value={pisRate}
                  onChange={(e) => setPisRate(e.target.value)}
                  step="0.01"
                  min="0"
                  max="100"
                  disabled={loading}
                />
                <span className="hint">Padrão: 1.65%</span>
              </div>

              <div className="form-group">
                <label htmlFor="confinsRate">Taxa CONFINS (%)</label>
                <Input
                  id="confinsRate"
                  type="number"
                  placeholder="7.60"
                  value={confinsRate}
                  onChange={(e) => setConfinsRate(e.target.value)}
                  step="0.01"
                  min="0"
                  max="100"
                  disabled={loading}
                />
                <span className="hint">Padrão: 7.60%</span>
              </div>
            </div>

            <div className="button-group">
              <Button
                onClick={calculate}
                disabled={loading || !productValue}
                variant="primary"
              >
                {loading ? 'Calculando...' : 'Calcular'}
              </Button>
              <Button onClick={reset} disabled={loading} variant="secondary">
                Limpar
              </Button>
            </div>

            {error && <div className="error-message">{error}</div>}
          </Card>

          {result && (
            <Card className="result-card">
              <h2>Resultado</h2>

              <div className="result-item">
                <span className="label">Valor do Produto:</span>
                <span className="value">R$ {result.productValue}</span>
              </div>

              <div className="divider"></div>

              <div className="result-section">
                <h3>PIS</h3>
                <div className="result-item">
                  <span className="label">Taxa:</span>
                  <span className="value">{result.pisRate}</span>
                </div>
                <div className="result-item">
                  <span className="label">Valor:</span>
                  <span className="value highlight">R$ {result.pisAmount}</span>
                </div>
              </div>

              <div className="divider"></div>

              <div className="result-section">
                <h3>CONFINS</h3>
                <div className="result-item">
                  <span className="label">Taxa:</span>
                  <span className="value">{result.confinsRate}</span>
                </div>
                <div className="result-item">
                  <span className="label">Valor:</span>
                  <span className="value highlight">R$ {result.confinsAmount}</span>
                </div>
              </div>

              <div className="divider"></div>

              <div className="result-item total">
                <span className="label">Total de Impostos:</span>
                <span className="value">R$ {result.totalTax}</span>
              </div>

              <div className="result-item final-price">
                <span className="label">Preço Final:</span>
                <span className="value">R$ {result.total}</span>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}