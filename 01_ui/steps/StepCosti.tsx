import { Card } from '../components/Card'

type Props = {
  onNext: () => void
}

export function StepCosti({ onNext }: Props) {
  return (
    <Card>
      <h3>Costi in bolletta</h3>

      <label className="w3-label">Spesa materia gas</label>
      <input className="w3-input" type="number" />

      <label className="w3-label">Trasporto e gestione</label>
      <input className="w3-input" type="number" />

      <label className="w3-label">Oneri di sistema</label>
      <input className="w3-input" type="number" />

      <label className="w3-label">Imposte</label>
      <input className="w3-input" type="number" />

      <label className="w3-label">Totale bolletta</label>
      <input className="w3-input" type="number" />

      <p style={{ marginTop: 12, color: '#ff6a00' }}>
        ⚠️ Se il totale non coincide con la somma delle voci,
        controlla i valori inseriti.
      </p>

      <div style={{ marginTop: 24 }}>
        <button onClick={onNext}>Completa inserimento</button>
      </div>
    </Card>
  )
}
