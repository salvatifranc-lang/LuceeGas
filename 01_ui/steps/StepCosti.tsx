import { useState } from 'react'
import { Card } from '../components/Card'

type Costi = {
  materia: number
  trasporto: number
  oneri: number
  imposte: number
  totale: number
}

type Props = {
  onNext: (costi: Costi) => void
}

export function StepCosti({ onNext }: Props) {
  const [costi, setCosti] = useState<Costi>({
    materia: 0,
    trasporto: 0,
    oneri: 0,
    imposte: 0,
    totale: 0
  })

  function update(key: keyof Costi, value: number) {
    setCosti(prev => ({ ...prev, [key]: value }))
  }

  return (
    <Card>
      <h3>Costi bolletta</h3>

      {(['materia','trasporto','oneri','imposte','totale'] as const).map(k => (
        <div key={k}>
          <label className="w3-label">{k}</label>
          <input
            className="w3-input"
            type="number"
            value={costi[k]}
            onChange={e => update(k, Number(e.target.value))}
          />
        </div>
      ))}

      <div style={{ marginTop: 24 }}>
        <button onClick={() => onNext(costi)}>
          Completa inserimento
        </button>
      </div>
    </Card>
  )
}
