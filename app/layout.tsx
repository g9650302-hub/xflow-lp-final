import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  colorScheme: 'dark light',
}

export const metadata: Metadata = {
  title: 'XFlow Payments | Subadquirente Completa para Gateways de Pagamento',
  description: 'Subadquirente especializada em gateways de pagamento. Receba via PIX instantâneo, cartões, split automático e saques. Segurança PCI, alta conversão e taxas a partir de R$ 0,03. Suporte 24/7.',
  keywords: 'subadquirente, gateway de pagamento, pagamentos, PIX, cartões, split de pagamento, subconta, flow payments, xflow, processamento de pagamentos, e-commerce, marketplace',
  generator: 'v0.app',
  authors: [{ name: 'XFlow Payments' }],
  metadataBase: new URL('https://xflowpayments.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'XFlow Payments | Subadquirente Completa',
    description: 'Conectamos seu negócio aos melhores gateways de pagamento. PIX instantâneo, cartões, split automático. Taxas a partir de R$ 0,03. Suporte 24/7.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'XFlow Payments',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XFlow Payments | Subadquirente Completa',
    description: 'Conectamos seu negócio aos melhores gateways de pagamento. PIX instantâneo, cartões, split automático.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1379826757325012');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1379826757325012&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
