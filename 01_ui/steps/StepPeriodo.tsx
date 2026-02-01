import { Card } from '../components/Card'

type Props = {
  onNext: () => void
}

export function StepPeriodo({ onNext }: Props) {
  return (
    <Card>
      <h3>Periodo di fatturazione</h3>

      <p>
        Inserisci il numero di mesi coperti dalla bolletta.
        <br />
        <small>Lo trovi in prima pagina.</small>
      </p>

      <input className="w3-input" type="number" placeholder="Es. 2" />

      <div style={{ marginTop: 24 }}>
        <button onClick={onNext}>Avanti</button>
      </div>
    </Card>
  )
}
