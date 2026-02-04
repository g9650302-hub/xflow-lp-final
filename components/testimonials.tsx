import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Marina Silva',
      role: 'CEO, TechCommerce',
      content: 'Migramos para o Flow Payments e vimos nossa taxa de conversão aumentar em 35%. A integração foi surpreendentemente rápida.',
      rating: 5,
    },
    {
      name: 'Roberto Alves',
      role: 'CTO, PayFast Solutions',
      content: 'A API é excelente e a documentação é clara. Em menos de uma tarde conseguimos integrar todos os métodos de pagamento.',
      rating: 5,
    },
    {
      name: 'Juliana Costa',
      role: 'Founder, Digital Store',
      content: 'O split automático revolucionou nossa operação com marketplace. Agora tudo acontece de forma transparente e em tempo real.',
      rating: 5,
    },
  ]

  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Empresas que <span className="text-gradient-orange">confiam</span> na gente
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Veja o que nossos clientes têm a dizer sobre a experiência com Flow Payments.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 space-y-6 hover:border-[#FF7A18]/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FF7A18] text-[#FF7A18]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed text-pretty">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
