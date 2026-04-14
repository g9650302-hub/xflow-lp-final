'use client'

import { Clock, Headphones, MessageCircle, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useFBPixel } from '@/hooks/use-fb-pixel'

export function Support() {
  const { trackPurchase } = useFBPixel()
  return (
    <section className="py-24 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#FF7A18]/10 border border-[#FF7A18]/20 rounded-full px-4 py-2 text-sm font-semibold text-[#FF7A18]">
              <Headphones className="w-4 h-4" />
              Suporte Premium
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-balance">
              Suporte técnico{' '}
              <span className="text-gradient-orange">24 horas por dia</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa equipe especializada está sempre disponível para garantir que seu negócio continue operando sem interrupções. Do onboarding à operação diária, estamos ao seu lado.
            </p>

            {/* Support features */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                {
                  icon: Clock,
                  title: 'Disponível 24/7',
                  description: '7 dias por semana, incluindo feriados'
                },
                {
                  icon: MessageCircle,
                  title: 'Resposta Rápida',
                  description: 'Tempo médio de 2 minutos'
                },
                {
                  icon: Shield,
                  title: 'Monitoramento Proativo',
                  description: 'Identificamos problemas antes de você'
                },
                {
                  icon: Headphones,
                  title: 'Equipe Especializada',
                  description: 'Suporte técnico capacitado'
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-3 p-4 bg-card border border-border rounded-xl hover:border-[#FF7A18]/50 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-[#FF7A18]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF7A18]/20 transition-colors">
                      <Icon className="w-5 h-5 text-[#FF7A18]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 border-2 border-[#25D366]/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#25D366] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Image
                    src="/images/design-mode/image.png"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2">Fale conosco no WhatsApp</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Tire suas dúvidas, solicite uma demonstração ou abra sua conta diretamente pelo WhatsApp.
                  </p>
                  <a 
                    href="https://wa.me/5511959099434?text=Desejo%20abrir%20minha%20conta%20XFlow%20Payments"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackPurchase}
                  >
                    <Button 
                      className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold group"
                      size="lg"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Abrir conversa agora
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual with support team */}
          <div className="relative lg:order-last">
            <div className="relative bg-card border border-border rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <h3 className="font-bold text-lg">Central de Suporte</h3>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    <span className="text-muted-foreground">Online agora</span>
                  </div>
                </div>

                {/* Support channels */}
                <div className="space-y-3">
                  {[
                    { channel: 'WhatsApp', status: 'Disponível', time: '< 2 min', color: '#25D366' },
                    { channel: 'E-mail', status: 'Disponível', time: '< 15 min', color: '#FF7A18' },
                    { channel: 'Chat ao vivo', status: 'Disponível', time: '< 1 min', color: '#FF7A18' },
                    { channel: 'Telefone', status: 'Disponível', time: '< 5 min', color: '#FF7A18' },
                  ].map((item) => (
                    <div key={item.channel} className="flex items-center justify-between p-4 bg-secondary/30 rounded-xl border border-border hover:border-[#FF7A18]/50 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <div>
                          <div className="font-semibold text-sm">{item.channel}</div>
                          <div className="text-xs text-muted-foreground">{item.status}</div>
                        </div>
                      </div>
                      <div className="text-xs font-semibold text-[#FF7A18] bg-[#FF7A18]/10 px-3 py-1 rounded-full">
                        {item.time}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 bg-secondary/30 rounded-xl">
                    <div className="text-2xl font-bold text-gradient-orange">98%</div>
                    <div className="text-xs text-muted-foreground mt-1">Satisfação</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/30 rounded-xl">
                    <div className="text-2xl font-bold text-gradient-orange">24/7</div>
                    <div className="text-xs text-muted-foreground mt-1">Disponível</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/30 rounded-xl">
                    <div className="text-2xl font-bold text-gradient-orange">2min</div>
                    <div className="text-xs text-muted-foreground mt-1">Resposta</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating support badge */}
            <div className="absolute -top-4 -right-4 bg-[#25D366] text-white px-6 py-3 rounded-2xl shadow-xl animate-float border-2 border-[#128C7E] z-10">
              <div className="flex items-center gap-2 font-bold">
                <MessageCircle className="w-5 h-5" />
                Estamos Online!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
