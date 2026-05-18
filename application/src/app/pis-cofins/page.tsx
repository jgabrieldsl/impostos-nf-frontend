export default function PisCofinsPage() {
  return (
    <main className="container mx-auto p-6 flex flex-col gap-6">
      <header className="border-b pb-4 mb-4">
        <h1 className="text-3xl font-bold text-slate-800">Cálculo de PIS & COFINS</h1>
        <p className="text-slate-500 mt-1">
          Cálculo individual baseado nos regimes Cumulativo ou Não-Cumulativo.
        </p>
      </header>
      
      <section className="bg-slate-50 border border-dashed border-slate-300 rounded-lg p-10 text-center">
        <p className="text-slate-600 font-medium">
          [Placeholder] Formulário de Cálculo de PIS/COFINS.
        </p>
        <p className="text-slate-400 text-sm mt-2">
          Esta tela utilizará o Hook `usePisCofins` e o Schema `pisCofinsSchema` para orquestrar as requisições e a validação do formulário.
        </p>
      </section>
    </main>
  );
}
