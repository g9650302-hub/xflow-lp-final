import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function KYCPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto max-w-4xl px-4 py-24">
        <h1 className="text-4xl font-bold mb-8 text-gradient-orange">Política de KYC (Know Your Customer)</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">1. Introdução</h2>
            <p>
              A XFlow Payments, em conformidade com as normas vigentes do Banco Central do Brasil e do COAF, estabelece sua política de Know Your Customer (Conheça seu Cliente) para garantir a segurança e integridade de suas operações financeiras.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">2. Objetivos</h2>
            <p>
              O principal objetivo desta política é prevenir a utilização da plataforma para atividades ilícitas, identificando adequadamente todos os clientes e parceiros, bem como a origem de seus recursos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">3. Procedimentos de Identificação</h2>
            <p>Para a abertura de conta e utilização dos serviços, solicitamos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Documentação societária completa (para pessoas jurídicas);</li>
              <li>Documentos de identificação dos sócios e administradores;</li>
              <li>Comprovante de endereço e faturamento;</li>
              <li>Informações sobre a natureza do negócio e volume transacional esperado.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">4. Monitoramento Contínuo</h2>
            <p>
              A XFlow realiza o monitoramento constante das transações para identificar padrões atípicos e garantir que as atividades do cliente permaneçam condizentes com seu perfil declarado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">5. Atualização Cadastral</h2>
            <p>
              Os dados cadastrais devem ser atualizados periodicamente ou sempre que houver mudanças significativas na estrutura ou operação do cliente.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
