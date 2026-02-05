import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto max-w-4xl px-4 py-24">
        <h1 className="text-4xl font-bold mb-8 text-gradient-orange">Política de Privacidade</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">1. Coleta de Dados</h2>
            <p>
              A XFlow Payments coleta dados pessoais e empresariais necessários para a prestação de serviços de pagamento, incluindo nome, CPF/CNPJ, endereço, e-mail e dados bancários, em conformidade com a LGPD (Lei Geral de Proteção de Dados).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">2. Uso das Informações</h2>
            <p>
              As informações coletadas são utilizadas para processar transações, verificar a identidade do usuário (KYC), prevenir fraudes, cumprir obrigações legais e melhorar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">3. Compartilhamento de Dados</h2>
            <p>
              Podemos compartilhar dados com parceiros bancários, adquirentes e órgãos reguladores (como o Banco Central) estritamente para a execução dos serviços contratados ou por exigência legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">4. Segurança</h2>
            <p>
              Implementamos medidas técnicas e organizacionais avançadas para proteger seus dados contra acesso não autorizado, perda ou alteração, utilizando criptografia e protocolos de segurança rigorosos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">5. Seus Direitos</h2>
            <p>
              De acordo com a LGPD, você tem o direito de acessar, corrigir, anonimizar ou excluir seus dados pessoais, bem como revogar seu consentimento a qualquer momento através de nossos canais de suporte.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
