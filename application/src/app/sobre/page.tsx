export default function SobrePage() {
  return (
    <main className="container mx-auto p-6 flex flex-col gap-6">
      <header className="border-b pb-4 mb-4">
        <h1 className="text-3xl font-bold text-slate-800">Sobre o Projeto & Equipe</h1>
        <p className="text-slate-500 mt-1">
          Informações institucionais e atribuições da equipe de desenvolvimento do Impostos NF.
        </p>
      </header>
      
      <section className="bg-slate-50 border border-dashed border-slate-300 rounded-lg p-10 text-center">
        <p className="text-slate-600 font-medium">
          [Placeholder] Informações da Equipe.
        </p>
        <p className="text-slate-400 text-sm mt-2">
          Esta tela apresentará os perfis e atribuições de João Gabriel, Pedro Daou e Gabriel Bonatto no projeto.
        </p>
      </section>
    </main>
  );
}
