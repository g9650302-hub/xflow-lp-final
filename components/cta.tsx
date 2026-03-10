'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { useFBPixel } from '@/hooks/use-fb-pixel'

export function CTA() {
  const { trackPurchase } = useFBPixel()
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="relative gradient-orange rounded-3xl p-12 md:p-16 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            {/* Logo */}
            <div className="flex justify-center">
              <Image
                src="/images/design-mode/31552-removebg-preview.png"
                alt="Flow"
                width={80}
                height={80}
                className="w-20 h-20 brightness-0 invert opacity-90"
              />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight text-balance">
              Pronto para revolucionar seus pagamentos?
            </h2>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-pretty">
              Conecte seu negócio aos melhores gateways de pagamento do Brasil. Comece hoje mesmo, sem burocracia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a 
                href="https://wa.me/5512981871624?text=Desejo%20abrir%20minha%20conta%20XFlow%20Payments"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackPurchase}
              >
                <Button
                  size="lg"
                  className="bg-white text-[#FF7A18] hover:bg-white/90 font-semibold h-14 px-8 text-lg group w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Abrir conta via WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              
              <a href="https://app.xflowpayments.com/login-company">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#FF7A18] font-semibold h-14 px-8 text-lg w-full sm:w-auto"
                >
                  Acessar plataforma
                </Button>
              </a>
            </div>

            <p className="text-sm text-white/80">
              Integração em minutos. Suporte 24/7. Sem fidelidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
