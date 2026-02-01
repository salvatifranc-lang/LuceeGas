type Props = {
  title: string
  subtitle?: string
  children: React.ReactNode
}

export function Section({ title, subtitle, children }: Props) {
  return (
    <section className="w3-section">
      <h1 className="w3-title">{title}</h1>
      {subtitle && <p className="w3-subtitle">{subtitle}</p>}
      {children}
    </section>
  )
}
