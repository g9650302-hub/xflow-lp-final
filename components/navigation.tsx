'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useFBPixel } from '@/hooks/use-fb-pixel'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { trackPurchase } = useFBPixel()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Brand */}
          <a href="/" className="flex items-center gap-2 md:gap-3 lg:gap-4 group">
            <div className="relative">
              <Image
                src="/images/31552-removebg-preview.png"
                alt="XFlow Payments Logo"
                width={60}
                height={60}
                className="w-9 h-9 md:w-11 md:h-11 lg:w-[60px] lg:h-[60px] transition-transform group-hover:scale-110"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-xl lg:text-2xl font-bold leading-tight">
                <span className="text-gradient-orange">X</span>Flow Payments
              </span>
              <span className="text-[9px] md:text-[10px] lg:text-xs text-muted-foreground tracking-wide uppercase">
                Hub de Pagamentos
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#solucoes"
              className="text-sm font-medium text-foreground/80 hover:text-[#FF7A18] transition-colors"
            >
              Soluções
            </a>
            <a
              href="#integracoes"
              className="text-sm font-medium text-foreground/80 hover:text-[#FF7A18] transition-colors"
            >
              Integrações
            </a>
            <a
              href="#recursos"
              className="text-sm font-medium text-foreground/80 hover:text-[#FF7A18] transition-colors"
            >
              Recursos
            </a>
            <a
              href="#suporte"
              className="text-sm font-medium text-foreground/80 hover:text-[#FF7A18] transition-colors"
            >
              Suporte
            </a>
            
            <div className="w-px h-6 bg-border" />

            <a href="https://app.xflow-hub.com/login">
              <Button
                variant="ghost"
                size="sm"
                className="text-sm font-medium hover:text-[#FF7A18] hover:bg-[#FF7A18]/5"
              >
                Login
              </Button>
            </a>

            <a
              href="https://wa.me/5511959099434?text=Desejo%20abrir%20minha%20conta%20XFlow%20Payments"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackPurchase}
            >
              <Button
                size="sm"
                className="gradient-orange hover:opacity-90 text-white font-semibold group"
              >
                Abrir conta
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg hover:bg-secondary/50 transition-colors active:scale-95"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border/50 animate-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col gap-1">
              <a
                href="#solucoes"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-[#FF7A18] transition-colors py-3 px-2 rounded-lg hover:bg-secondary/30 active:scale-[0.98]"
              >
                Soluções
              </a>
              <a
                href="#integracoes"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-[#FF7A18] transition-colors py-3 px-2 rounded-lg hover:bg-secondary/30 active:scale-[0.98]"
              >
                Integrações
              </a>
              <a
                href="#recursos"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-[#FF7A18] transition-colors py-3 px-2 rounded-lg hover:bg-secondary/30 active:scale-[0.98]"
              >
                Recursos
              </a>
              <a
                href="#suporte"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-[#FF7A18] transition-colors py-3 px-2 rounded-lg hover:bg-secondary/30 active:scale-[0.98]"
              >
                Suporte
              </a>

              <div className="h-px bg-border my-3" />

              <a href="https://app.xflow-hub.com/login" className="w-full">
                <Button
                  variant="outline"
                  className="w-full justify-center border-2 hover:border-[#FF7A18] hover:bg-[#FF7A18]/5 h-12 active:scale-[0.98]"
                >
                  Login
                </Button>
              </a>

              <a
                href="https://wa.me/5511959099434?text=Desejo%20abrir%20minha%20conta%20XFlow%20Payments"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2"
                onClick={trackPurchase}
              >
                <Button className="w-full gradient-orange text-white font-semibold group h-12 active:scale-[0.98]">
                  Abrir conta
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
