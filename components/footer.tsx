'use client'

import Image from 'next/image'
import { MessageCircle, Mail, Phone } from 'lucide-react'
import { useFBPixel } from '@/hooks/use-fb-pixel'

export function Footer() {
  const { trackPurchase } = useFBPixel()
  const links = {
    Produto: ['Funcionalidades', 'Preços', 'Segurança', 'API', 'Documentação'],
    Empresa: ['Sobre', 'Blog', 'Carreiras', 'Imprensa', 'Parceiros'],
    Suporte: ['Central de ajuda', 'Status', 'WhatsApp', 'Termos de uso', 'Privacidade'],
  }

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/design-mode/31552-removebg-preview.png"
                alt="Flow Payments"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">
                <span className="text-foreground/60">Flow</span>{' '}
                <span className="text-gradient-orange">Payments</span>
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              Subadquirente especializada em gateways de pagamento. Conectamos seu negócio aos melhores processadores do Brasil.
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-sm font-semibold text-foreground mb-2">Fale conosco:</div>
              
              <a 
                href="https://wa.me/5512981871624?text=Desejo%20abrir%20minha%20conta%20XFlow%20Payments"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-[#25D366] transition-colors group"
                onClick={trackPurchase}
              >
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                <span>(12) 98187-1624</span>
              </a>

              <a 
                href="mailto:contato@xflowpayments.co"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-[#FF7A18] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FF7A18]/10 flex items-center justify-center group-hover:bg-[#FF7A18]/20 transition-colors">
                  <Mail className="w-4 h-4 text-[#FF7A18]" />
                </div>
                <span>contato@xflowpayments.co</span>
              </a>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(links).map(([title, items]) => (
            null
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 XFlow Payments. Todos os direitos reservados. CNPJ: 64.810.465/0001-90
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
            <a href="/termos" className="hover:text-[#FF7A18] transition-colors">
              Termos
            </a>
            <a href="/privacidade" className="hover:text-[#FF7A18] transition-colors">
              Privacidade
            </a>
            <a href="/cookies" className="hover:text-[#FF7A18] transition-colors">
              Cookies
            </a>
            <a href="/kyc" className="hover:text-[#FF7A18] transition-colors">
              KYC
            </a>
            <a href="/pld" className="hover:text-[#FF7A18] transition-colors">
              PLD
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
