import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto max-w-4xl px-4 py-24">
        <h1 className="text-4xl font-bold mb-8 text-gradient-orange">Termos de Uso</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar a plataforma XFlow Payments, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">2. Descrição dos Serviços</h2>
            <p>
              A XFlow Payments atua como subadquirente, facilitando o processamento de pagamentos eletrônicos para estabelecimentos comerciais e empresas, conectando-os a adquirentes e bandeiras de cartão.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">3. Cadastro e Segurança</h2>
            <p>
              Para utilizar nossos serviços, é necessário realizar um cadastro completo e verídico. O usuário é o único responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades que ocorram em sua conta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">4. Obrigações do Usuário</h2>
            <p>O usuário compromete-se a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utilizar os serviços apenas para fins lícitos;</li>
              <li>Não realizar transações fraudulentas ou proibidas por lei;</li>
              <li>Fornecer informações precisas e atualizadas sempre que solicitado.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">5. Limitação de Responsabilidade</h2>
            <p>
              A XFlow Payments não se responsabiliza por danos indiretos, incidentais ou consequentes resultantes do uso ou da incapacidade de usar nossos serviços, dentro dos limites permitidos pela legislação brasileira.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
