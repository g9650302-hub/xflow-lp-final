import { Code, Layers, Puzzle, Webhook } from 'lucide-react'

export function Integrations() {
  return (
    <section id="integracoes" className="py-12 md:py-16 lg:py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30 pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FF7A18]/10 border border-[#FF7A18]/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-[#FF7A18] mb-4 md:mb-6">
            <Puzzle className="w-3 h-3 md:w-4 md:h-4" />
            Integrações
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight text-balance">
            Conecte facilmente às{' '}
            <span className="text-gradient-orange">principais plataformas</span>
          </h2>
          
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
            Integração nativa com as maiores plataformas de e-commerce e marketplaces do mercado brasileiro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              icon: Code,
              title: 'API RESTful Completa',
              description: 'Documentação clara e endpoints intuitivos para integração rápida'
            },
            {
              icon: Webhook,
              title: 'Webhooks em Tempo Real',
              description: 'Notificações instantâneas sobre status de pagamentos'
            },
            {
              icon: Layers,
              title: 'SDKs Prontos',
              description: 'Bibliotecas para PHP, Python, Node.js, Ruby e mais'
            },
          ].map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-6 hover:border-[#FF7A18]/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl gradient-orange flex items-center justify-center mb-3 md:mb-4 group-hover:glow-orange transition-shadow">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-[#FF7A18] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
