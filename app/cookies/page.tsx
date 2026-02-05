import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto max-w-4xl px-4 py-24">
        <h1 className="text-4xl font-bold mb-8 text-gradient-orange">Política de Cookies</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita nosso site. Eles ajudam a tornar sua experiência mais eficiente e personalizada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">2. Como utilizamos os Cookies</h2>
            <p>Utilizamos cookies para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Manter sua sessão ativa;</li>
              <li>Lembrar suas preferências de navegação;</li>
              <li>Analisar o tráfego do site e o comportamento do usuário;</li>
              <li>Melhorar a segurança da plataforma.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">3. Tipos de Cookies</h2>
            <p>
              <strong>Essenciais:</strong> Necessários para o funcionamento básico do site.<br />
              <strong>Analíticos:</strong> Ajudam-nos a entender como os visitantes interagem com o site.<br />
              <strong>Marketing:</strong> Utilizados para rastrear a eficácia de nossas campanhas publicitárias (como o Meta Pixel).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">4. Gerenciamento de Cookies</h2>
            <p>
              Você pode gerenciar ou desativar os cookies através das configurações do seu navegador. No entanto, desativar certos cookies pode afetar a funcionalidade de algumas partes do nosso site.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
