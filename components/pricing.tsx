import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      description: 'Para começar',
      price: '0,03',
      period: 'por transação',
      features: [
        'PIX instantâneo',
        'Cartões de crédito e débito',
        'Dashboard completo',
        'API REST',
        'Suporte por e-mail',
      ],
    },
    {
      name: 'Growth',
      description: 'Para empresas em crescimento',
      price: '0,025',
      period: 'por transação',
      featured: true,
      features: [
        'Tudo do Starter',
        'Split de pagamentos',
        'Subcontas ilimitadas',
        'Webhooks avançados',
        'Suporte prioritário',
        'Gerente de conta dedicado',
      ],
    },
    {
      name: 'Enterprise',
      description: 'Para grandes volumes',
      price: 'Custom',
      period: 'sob medida',
      features: [
        'Tudo do Growth',
        'SLA garantido',
        'Infraestrutura dedicada',
        'Compliance personalizado',
        'Integração white-label',
        'Consultoria técnica',
      ],
    },
  ]

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Preços <span className="text-gradient-orange">transparentes</span>, sem surpresas
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Escolha o plano ideal para o seu negócio. Sem taxas ocultas, sem fidelidade.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative bg-card border rounded-2xl p-8 flex flex-col
                ${plan.featured 
                  ? 'border-[#FF7A18] shadow-2xl scale-105 md:scale-110' 
                  : 'border-border hover:border-[#FF7A18]/50'
                }
                transition-all duration-300
              `}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-orange text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Mais popular
                </div>
              )}

              <div className="space-y-6 flex-1">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="flex items-end gap-2">
                  <div className="text-5xl font-bold text-gradient-orange">
                    {plan.price === 'Custom' ? plan.price : `R$ ${plan.price}`}
                  </div>
                  {plan.price !== 'Custom' && (
                    <div className="text-sm text-muted-foreground pb-2">{plan.period}</div>
                  )}
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`
                        mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0
                        ${plan.featured ? 'gradient-orange' : 'bg-secondary'}
                      `}>
                        <Check className={`w-3 h-3 ${plan.featured ? 'text-white' : 'text-foreground'}`} />
                      </div>
                      <span className="text-sm text-foreground/90 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a href="https://app.xflowpayments.com.br/login-company" className="block">
                  <Button
                    className={`
                      w-full h-12 font-semibold transition-all duration-300
                      ${plan.featured 
                        ? 'gradient-orange text-white hover:opacity-90 hover:glow-orange' 
                        : 'bg-secondary text-foreground hover:bg-secondary/80'
                      }
                    `}
                  >
                    {plan.price === 'Custom' ? 'Falar com vendas' : 'Começar agora'}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
