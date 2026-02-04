import { Check } from 'lucide-react'
import Image from 'next/image'

export function Benefits() {
  const benefits = [
    'Integração rápida em minutos',
    'API completa e documentada',
    'Dashboard intuitivo em tempo real',
    'Webhooks para automação',
    'Suporte técnico especializado',
    'Sem fidelidade ou taxas ocultas',
  ]

  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] bg-card border border-border rounded-2xl p-8 shadow-2xl overflow-hidden">
              {/* Code snippet mockup */}
              <div className="space-y-4 font-mono text-sm">
                <div className="text-muted-foreground">// Integração Flow Payments</div>
                <div>
                  <span className="text-purple-400">import</span>{' '}
                  <span className="text-foreground">{'{ FlowPayments }'}</span>{' '}
                  <span className="text-purple-400">from</span>{' '}
                  <span className="text-green-400">'@flow/sdk'</span>
                </div>
                <div className="h-4" />
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">payment</span>{' '}
                  <span className="text-foreground">=</span>{' '}
                  <span className="text-purple-400">await</span>{' '}
                  <span className="text-yellow-400">flow</span>
                  <span className="text-foreground">.</span>
                  <span className="text-blue-400">create</span>
                  <span className="text-foreground">({"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-300">amount</span>
                  <span className="text-foreground">:</span>{' '}
                  <span className="text-orange-400">10000</span>
                  <span className="text-foreground">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-300">method</span>
                  <span className="text-foreground">:</span>{' '}
                  <span className="text-green-400">'pix'</span>
                  <span className="text-foreground">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-300">split</span>
                  <span className="text-foreground">:</span>{' '}
                  <span className="text-purple-400">true</span>
                </div>
                <div>
                  <span className="text-foreground">{"})"}</span>
                </div>
              </div>

              {/* Logo watermark */}
              <div className="absolute bottom-4 right-4">
                <Image
                  src="/images/design-mode/31552-removebg-preview.png"
                  alt=""
                  width={48}
                  height={48}
                  className="w-12 h-12 opacity-10"
                />
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 gradient-orange opacity-20 blur-3xl -z-10" />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                Integração <span className="text-gradient-orange">simples</span>, resultado poderoso
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nossa API foi pensada para desenvolvedores. Implemente pagamentos completos em minutos, não em semanas.
              </p>
            </div>

            {/* Benefits list */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full gradient-orange flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-foreground/90 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://app.xflowpayments.com.br/login-company"
                className="inline-flex items-center gap-2 gradient-orange text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-300 hover:glow-orange"
              >
                Ver documentação
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
