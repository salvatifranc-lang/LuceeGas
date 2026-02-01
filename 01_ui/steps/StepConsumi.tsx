import { useState } from 'react'
import { Card } from '../components/Card'

type Props = {
  onNext: (consumo: number) => void
}

export function StepConsumi({ onNext }: Props) {
  const [consumo, setConsumo] = useState(0)

  return (
    <Card>
      <h3>Consumo totale (Smc)</h3>

      <input
        className="w3-input"
        type="number"
        value={consumo}
        onChange={e => setConsumo(Number(e.target.value))}
      />

      <div style={{ marginTop: 24 }}>
        <button onClick={() => onNext(consumo)}>Avanti</button>
      </div>
    </Card>
  )
}
