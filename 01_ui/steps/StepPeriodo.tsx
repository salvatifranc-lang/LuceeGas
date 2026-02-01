import { useState } from 'react'
import { Card } from '../components/Card'

type Props = {
  onNext: (mesi: number) => void
}

export function StepPeriodo({ onNext }: Props) {
  const [mesi, setMesi] = useState(1)

  return (
    <Card>
      <h3>Periodo di fatturazione</h3>

      <input
        className="w3-input"
        type="number"
        value={mesi}
        onChange={e => setMesi(Number(e.target.value))}
      />

      <div style={{ marginTop: 24 }}>
        <button onClick={() => onNext(mesi)}>Avanti</button>
      </div>
    </Card>
  )
}
