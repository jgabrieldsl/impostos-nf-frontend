export default function HelpPage() {
  return (
    <main className="container mx-auto p-6 flex flex-col gap-6">
      <header className="border-b pb-4 mb-4">
        <h1 className="text-3xl font-bold text-slate-800">Ajuda & Documentação</h1>
        <p className="text-slate-500 mt-1">
          Guia prático sobre o funcionamento dos cálculos e alíquotas de cada imposto suportado.
        </p>
      </header>
      
      <section className="bg-slate-50 border border-dashed border-slate-300 rounded-lg p-10 text-center">
        <p className="text-slate-600 font-medium">
          [Placeholder] Conteúdo de Ajuda ao Usuário.
        </p>
        <p className="text-slate-400 text-sm mt-2">
          Esta tela apresentará guias informativos sobre as alíquotas estaduais do ICMS, o funcionamento da alíquota de IPI e os enquadramentos de PIS/COFINS.
        </p>
      </section>
    </main>
  );
}
