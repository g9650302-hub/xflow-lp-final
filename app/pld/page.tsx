import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function PLDPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto max-w-4xl px-4 py-24">
        <h1 className="text-4xl font-bold mb-8 text-gradient-orange">Política de PLD/FT (Prevenção à Lavagem de Dinheiro)</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">1. Compromisso</h2>
            <p>
              A XFlow Payments mantém um compromisso rigoroso com a Prevenção à Lavagem de Dinheiro e ao Financiamento do Terrorismo (PLD/FT), seguindo as diretrizes da Lei nº 9.613/1998 e regulamentações do BACEN.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">2. Governança</h2>
            <p>
              Possuímos uma estrutura dedicada de compliance responsável por implementar, monitorar e revisar as estratégias de prevenção a crimes financeiros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">3. Análise de Risco</h2>
            <p>
              Adotamos uma abordagem baseada em risco para classificar clientes e operações, aplicando diligência reforçada para situações de maior exposição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">4. Comunicação ao COAF</h2>
            <p>
              Operações que apresentem indícios de crimes previstos na lei, ou que ultrapassem os limites regulatórios sem justificativa econômica clara, serão reportadas ao COAF conforme exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">5. Treinamento</h2>
            <p>
              Todos os nossos colaboradores passam por treinamentos periódicos para identificação de sinais de alerta (red flags) e procedimentos de reporte interno.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
