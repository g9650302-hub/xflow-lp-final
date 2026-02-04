import { Building2, Network, Shield, Sparkles } from 'lucide-react'
import { memo } from 'react'

const ConnectionVisual = memo(function ConnectionVisual() {
  return (
    <div className="relative bg-card border border-border rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl">
      <div className="space-y-6">
        {/* Central icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl gradient-orange flex items-center justify-center glow-orange">
              <Network className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
            <div className="absolute top-1/2 left-full w-12 md:w-16 h-0.5 bg-gradient-to-r from-[#FF7A18] to-transparent hidden sm:block" />
            <div className="absolute top-1/2 right-full w-12 md:w-16 h-0.5 bg-gradient-to-l from-[#FF7A18] to-transparent hidden sm:block" />
            <div className="absolute left-1/2 top-full h-12 md:h-16 w-0.5 bg-gradient-to-b from-[#FF7A18] to-transparent" />
            <div className="absolute left-1/2 bottom-full h-12 md:h-16 w-0.5 bg-gradient-to-t from-[#FF7A18] to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-4 pt-6 md:pt-8">
          {['Gateway', 'Bancos', 'APIs', 'PIX', 'Cartões', 'Splits'].map((item, i) => (
            <div
              key={item}
              className="bg-secondary/50 border border-border rounded-lg p-2 md:p-3 text-center text-[10px] md:text-xs font-semibold hover:border-[#FF7A18]/50 transition-colors"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

export function SubAcquirer() {
  return (
    <section id="solucoes" className="py-12 md:py-16 lg:py-20 px-4 bg-secondary/30 border-y border-border/50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <ConnectionVisual />
          </div>

          {/* Right - Content */}
          <div className="space-y-4 md:space-y-6 lg:pl-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-[#FF7A18]/10 border border-[#FF7A18]/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-[#FF7A18]">
              <Building2 className="w-3 h-3 md:w-4 md:h-4" />
              Subadquirente Especializada
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-balance">
              Conectamos seu gateway nas{' '}
              <span className="text-gradient-orange">melhores adquirentes</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Como <span className="text-foreground font-semibold">subadquirente completa</span>, fazemos a ponte entre seu gateway e as principais processadoras de pagamento do Brasil. Gerenciamos toda complexidade técnica, regulatória e financeira para você focar no que importa: vender mais.
            </p>

            <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
              {[
                {
                  icon: Shield,
                  title: 'Conformidade Total',
                  description: 'Certificações PCI DSS e compliance com Banco Central'
                },
                {
                  icon: Sparkles,
                  title: 'Integração Simplificada',
                  description: 'API única conecta com múltiplos adquirentes automaticamente'
                },
                {
                  icon: Network,
                  title: 'Roteamento Inteligente',
                  description: 'Direciona transações para otimizar aprovação e reduzir custos'
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-3 md:gap-4 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#FF7A18]/10 border border-[#FF7A18]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF7A18]/20 transition-colors">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#FF7A18]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base md:text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
