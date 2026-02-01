import { Card } from '../components/Card'

type Props = {
  onNext: () => void
}

export function StepConsumi({ onNext }: Props) {
  return (
    <Card>
      <h3>Consumo totale</h3>

      <p>
        Inserisci il consumo totale in Smc.
        <br />
        <small>Lo trovi nel riepilogo consumi.</small>
      </p>

      <input className="w3-input" type="number" placeholder="Es. 240" />

      <div style={{ marginTop: 24 }}>
        <button onClick={onNext}>Avanti</button>
      </div>
    </Card>
  )
}
