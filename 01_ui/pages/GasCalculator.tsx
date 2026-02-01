import { Section } from '../components/Section'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { useGasCalculator } from '../hooks/useGasCalculator'
import '../styles/windtre.css'

export function GasCalculator() {
  const {
    risultato,
    mesiPeriodo,
    meseInizio,
    durata,
    offertaKey,
    aggiornaConsumo,
    selezionaOfferta,
    aggiornaPeriodo,
    calcola
  } = useGasCalculator()

  return (
    <Section
      title="Confronto Bolletta Gas"
      subtitle="Simulazione con PSV reale mensile o bimestrale"
    >
      <Card>
        <label className="w3-label">Tipo cliente</label>
        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          <Button onClick={() => selezionaOfferta('clienti_windtre')}>
            Cliente WindTre
          </Button>
          <Button onClick={() => selezionaOfferta('non_clienti')}>
            Non cliente
          </Button>
        </div>

        <label className="w3-label">Mese iniziale</label>
        <input
          type="month"
          className="w3-input"
          value={meseInizio}
          onChange={e => aggiornaPeriodo(e.target.value, durata)}
        />

        <label className="w3-label" style={{ marginTop: 16 }}>
          Durata
        </label>
        <select
          className="w3-input"
          value={durata}
          onChange={e =>
            aggiornaPeriodo(meseInizio, Number(e.target.value) as 1 | 2)
          }
        >
          <option value={1}>Mensile</option>
          <option value={2}>Bimestrale</option>
        </select>

        <label className="w3-label" style={{ marginTop: 16 }}>
          Consumo totale (Smc)
        </label>
        <input
          className="w3-input"
          type="number"
          onChange={e => aggiornaConsumo(Number(e.target.value))}
        />

        <p style={{ marginTop: 16 }}>
          <strong>Mesi considerati:</strong> {mesiPeriodo.join(', ')}
        </p>

        <div style={{ marginTop: 24 }}>
          <Button onClick={calcola}>
            Calcola
          </Button>
        </div>
      </Card>

      {risultato && (
        <Card>
          <h3>Risultato simulazione</h3>
          <p><strong>Periodo:</strong> {mesiPeriodo.join(', ')}</p>
          <p><strong>Offerta:</strong> {offertaKey}</p>
          <p><strong>Spesa materia:</strong> € {risultato.materia.toFixed(2)}</p>
          <p><strong>Quota fissa:</strong> € {risultato.quota_fissa.toFixed(2)}</p>
          <p><strong>Totale stimato:</strong> € {risultato.totale.toFixed(2)}</p>
        </Card>
      )}
    </Section>
  )
}
