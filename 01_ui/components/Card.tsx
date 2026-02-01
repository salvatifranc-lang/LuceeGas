type Props = {
  children: React.ReactNode
}

export function Card({ children }: Props) {
  return <div className="w3-card">{children}</div>
}
