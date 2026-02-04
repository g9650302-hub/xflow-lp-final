import { Zap, Shield, TrendingUp, Wallet, Split, Clock } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'PIX Instantâneo',
      description: 'Receba pagamentos via PIX com aprovação instantânea e disponibilidade imediata.',
    },
    {
      icon: Wallet,
      title: 'Múltiplas Formas',
      description: 'Aceite cartões de crédito, débito, PIX e outras formas de pagamento em uma única plataforma.',
    },
    {
      icon: Split,
      title: 'Split Automático',
      description: 'Divida pagamentos automaticamente entre múltiplas contas com regras personalizadas.',
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Proteção avançada com criptografia de ponta a ponta e conformidade PCI DSS.',
    },
    {
      icon: TrendingUp,
      title: 'Alta Conversão',
      description: 'Otimizamos cada etapa do checkout para maximizar suas vendas e reduzir abandono.',
    },
    {
      icon: Clock,
      title: 'Saques Rápidos',
      description: 'Acesso rápido ao seu dinheiro com opções de saque flexíveis e previsíveis.',
    },
  ]

  return (
    <section id="recursos" className="py-12 md:py-16 lg:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight text-balance">
            Tudo que você precisa para{' '}
            <span className="text-gradient-orange">receber pagamentos</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
            Solução completa de pagamentos com as funcionalidades que seu negócio precisa para crescer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`
                  group relative bg-card border border-border rounded-xl md:rounded-2xl p-6 md:p-8 
                  hover:border-[#FF7A18]/50 transition-all duration-300 hover:shadow-xl
                  ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
                  ${index === 3 ? 'lg:col-span-2' : ''}
                `}
              >
                <div className="space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl gradient-orange flex items-center justify-center group-hover:glow-orange transition-shadow duration-300">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#FF7A18] transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 gradient-orange-subtle rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
