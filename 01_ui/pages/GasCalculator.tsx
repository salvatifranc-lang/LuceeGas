import { Section } from '../components/Section'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { useGasCalculator } from '../hooks/useGasCalculator'
import '../styles/windtre.css'

export function GasCalculator() {
  const {
    state,
    risultato,
    aggiornaConsumo,
    aggiornaPeriodo,
    calcola
  } = useGasCalculator()

  return (
    <Section
      title="Confronto Bolletta Gas"
      subtitle="Simula il risparmio con WindTre Luce e Gas"
    >
      <Card>
        <label className="w3-label">Consumo totale (Smc)</label>
        <input
          className="w3-input"
          type="number"
          onChange={e => aggiornaConsumo(Number(e.target.value))}
        />

        <label className="w3-label" style={{ marginTop: 16 }}>
          Periodo (mesi)
        </label>
        <input
          className="w3-input"
          type="number"
          value={state.periodo.mesi}
          onChange={e => aggiornaPeriodo(Number(e.target.value))}
        />

        <div style={{ marginTop: 24 }}>
          <Button onClick={() => calcola(0.4031)}>
            Calcola risparmio
          </Button>
        </div>
      </Card>

      {risultato && (
        <Card>
          <h3>Risultato simulazione</h3>
          <p>Prezzo €/Smc: {risultato.prezzo_smc.toFixed(4)}</p>
          <p>Spesa materia: € {risultato.materia.toFixed(2)}</p>
          <p>Quota fissa: € {risultato.quota_fissa.toFixed(2)}</p>
          <p><strong>Totale stimato: € {risultato.totale.toFixed(2)}</strong></p>
        </Card>
      )}
    </Section>
  )
}
