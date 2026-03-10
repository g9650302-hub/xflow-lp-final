'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Shield, Zap, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { memo } from 'react'
import { useFBPixel } from '@/hooks/use-fb-pixel'

const StatsCard = memo(function StatsCard() {
  return (
    <div className="gradient-orange-subtle border border-[#FF7A18]/30 rounded-2xl p-4 md:p-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative">
        <div className="flex items-start justify-between mb-4 md:mb-6">
          <div>
            <div className="text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-2">Volume processado hoje</div>
            <div className="text-2xl md:text-4xl font-bold text-gradient-orange">R$ 2.8M</div>
          </div>
          <div className="text-[#FF7A18] text-[10px] md:text-xs font-bold bg-[#FF7A18]/10 px-2 md:px-3 py-1 md:py-1.5 rounded-full flex items-center gap-1">
            <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3" />
            +150%
          </div>
        </div>
        
        <div className="h-20 md:h-28 flex items-end gap-1 md:gap-1.5">
          {[40, 55, 70, 58, 75, 85, 92, 95].map((height, i) => (
            <div
              key={i}
              className="flex-1 gradient-orange rounded-t-lg transition-all duration-300 md:hover:opacity-70 md:cursor-pointer relative group"
              style={{ height: `${height}%` }}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background border border-border rounded px-2 py-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                R$ {(height * 100).toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between text-[10px] md:text-xs text-muted-foreground mt-2 md:mt-3 px-1">
          <span>00:00</span>
          <span className="hidden md:inline">12:00</span>
          <span>Agora</span>
        </div>
      </div>
    </div>
  )
})

export function Hero() {
  const { trackPurchase } = useFBPixel()
  return (
    <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-28 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 md:space-y-8 lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FF7A18]/10 border border-[#FF7A18]/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-[#FF7A18]">
              <Zap className="w-3 h-3 md:w-4 md:h-4" />
              Subadquirente Completa
            </div>

            {/* Headline */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] md:leading-[1.05] tracking-tight text-balance">
                A evolução dos{' '}
                <span className="text-gradient-orange relative inline-block">
                  pagamentos digitais
                  <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full hidden sm:block" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C50 2 150 2 198 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FF7A18"/>
                        <stop offset="100%" stopColor="#FF5A00"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
              
              <p className="text-base md:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
                Subadquirente especializada em gateways de pagamento. Receba via PIX, cartões, split e saques com{' '}
                <span className="text-foreground font-semibold">segurança, automação e previsibilidade</span> total.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full gradient-orange flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs md:text-sm font-semibold">100% Seguro</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">Certificação PCI</div>
                </div>
              </div>
              
              <div className="w-px h-10 md:h-12 bg-border hidden sm:block" />
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full gradient-orange flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs md:text-sm font-semibold">Alta Conversão</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">+150% em vendas</div>
                </div>
              </div>

              <div className="w-px h-10 md:h-12 bg-border hidden sm:block" />

              <div>
                <div className="text-xs md:text-sm font-semibold text-foreground">Taxas a partir de</div>
                <div className="text-xl md:text-2xl font-bold text-gradient-orange">R$ 0,03</div>
              </div>
            </div>

            <div className="grid gap-2 md:gap-3 py-3 md:py-4">
              {[
                'PIX instantâneo e aprovação em segundos',
                'Split de pagamentos automático',
                'Todas as bandeiras de cartão',
                'Subconta e saques integrados',
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2 group">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#FF7A18] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground/90 text-xs md:text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
              <a 
                href="https://wa.me/5512981871624?text=Desejo%20abrir%20minha%20conta%20XFlow%20Payments"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
                onClick={trackPurchase}
              >
                <Button
                  size="lg"
                  className="gradient-orange hover:opacity-90 text-white font-semibold h-12 md:h-14 px-6 md:px-8 text-sm md:text-base transition-all duration-300 hover:glow-orange group w-full"
                >
                  Abrir minha conta
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              
              <a href="https://app.xflowpayments.com/login-company" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-border hover:border-[#FF7A18] hover:bg-[#FF7A18]/5 font-semibold h-12 md:h-14 px-6 md:px-8 text-sm md:text-base group w-full"
                >
                  Acessar plataforma
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            <p className="text-xs md:text-sm text-muted-foreground">
              Sem burocracias. Integração rápida. Suporte 24/7.
            </p>
          </div>

          <div className="relative lg:order-last mt-8 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 gradient-orange opacity-10 md:opacity-20 blur-2xl md:blur-3xl rounded-full" />
              
              {/* Main dashboard card */}
              <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl">
                <div className="space-y-3 md:space-y-5">
                  {/* Header with logo */}
                  <div className="flex items-center justify-between pb-3 md:pb-4 border-b border-border/50">
                    <div className="flex items-center gap-2 md:gap-3">
                      <Image
                        src="/images/31552-removebg-preview.png"
                        alt="Flow"
                        width={32}
                        height={32}
                        className="w-6 h-6 md:w-8 md:h-8"
                        priority
                      />
                      <span className="font-bold text-base md:text-lg">Dashboard</span>
                    </div>
                    <div className="text-[10px] md:text-xs text-muted-foreground">Tempo real</div>
                  </div>

                  <StatsCard />

                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {[
                      { name: 'PIX', value: 'R$ 1.2M', icon: '⚡' },
                      { name: 'Cartão', value: 'R$ 980K', icon: '💳' },
                      { name: 'Split', value: 'R$ 445K', icon: '🔄' },
                      { name: 'Saque', value: 'R$ 222K', icon: '💰' },
                    ].map((method) => (
                      <div
                        key={method.name}
                        className="bg-secondary/30 border border-border/50 rounded-lg md:rounded-xl p-3 md:p-4 hover:border-[#FF7A18]/50 hover:bg-[#FF7A18]/5 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                          <span className="text-base md:text-lg">{method.icon}</span>
                          <div className="text-[10px] md:text-xs font-semibold text-muted-foreground group-hover:text-[#FF7A18] transition-colors">
                            {method.name}
                          </div>
                        </div>
                        <div className="text-sm md:text-lg font-bold">{method.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-[#FF7A18] text-white px-3 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold shadow-xl animate-float z-10 border-2 border-[#FF5A00]">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <Shield className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">100% Seguro</span>
                  <span className="sm:hidden">Seguro</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card border-2 border-[#FF7A18] px-3 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold shadow-xl animate-float-delayed z-10 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <Zap className="w-3 h-3 md:w-4 md:h-4 text-[#FF7A18]" />
                  <span className="hidden sm:inline">PIX Instantâneo</span>
                  <span className="sm:hidden">PIX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
