'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useFBPixel } from '@/hooks/use-fb-pixel'

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const { trackPurchase } = useFBPixel()

  return (
    <a
      href="https://wa.me/5512981871624?text=Desejo%20abrir%20minha%20conta%20XFlow%20Payments"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group"
      onClick={trackPurchase}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        <div
          className={`hidden lg:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-card border border-border rounded-xl px-4 py-3 shadow-xl whitespace-nowrap transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          <div className="font-semibold text-sm mb-1">Olá! Está com dúvidas?</div>
          <div className="text-xs text-muted-foreground">Fale conosco no WhatsApp</div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-8 border-transparent border-l-border" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(100%-2px)] w-0 h-0 border-[7px] border-transparent border-l-card" />
        </div>

        {/* Button */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75 hidden md:block" />
          
          <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer">
            <Image
              src="/images/image.png"
              alt="WhatsApp"
              width={32}
              height={32}
              className="w-7 h-7 md:w-8 md:h-8"
              loading="lazy"
            />
          </div>

          {/* Online indicator */}
          <div className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-4 h-4 md:w-5 md:h-5 bg-green-400 border-2 md:border-4 border-background rounded-full" />
        </div>
      </div>
    </a>
  )
}
