export function Stats() {
  const stats = [
    { value: '203+', label: 'Empresas ativas' },
    { value: '98%', label: 'Taxa de aprovação' },
    { value: '<2s', label: 'Tempo de resposta' },
    { value: '24/7', label: 'Suporte disponível' },
  ]

  return (
    <section className="py-10 md:py-16 px-4 border-y border-border/50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-1 md:space-y-2">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-orange">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm lg:text-base text-muted-foreground leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
