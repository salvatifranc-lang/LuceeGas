import { Section } from '../components/Section'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { ConfrontoBolletta } from '../components/ConfrontoBolletta'
import { useGasCalculator } from '../hooks/useGasCalculator'
import { generaPdfGas } from '../pdf/generaPdfGas'
import '../styles/windtre.css'

export function GasCalculator() {
  const {
    state,
    risultato,
    mesiPeriodo,
    meseInizio,
    durata,
    offertaKey,
    aggiornaConsumo,
    selezionaOfferta,
    aggiornaPeriodoCalcolo,
    calcola
  } = useGasCalculator()

  return (
    <Section
      title="Confronto Bolletta Gas"
      subtitle="Simulazione con PSV reale mensile o bimestrale"
    >
      {/* INPUT SIMULAZIONE */}
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
          onChange={e => aggiornaPeriodoCalcolo(e.target.value, durata)}
        />

        <label className="w3-label" style={{ marginTop: 16 }}>
          Durata
        </label>
        <select
          className="w3-input"
          value={durata}
          onChange={e =>
            aggiornaPeriodoCalcolo(
              meseInizio,
              Number(e.target.value) as 1 | 2
            )
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

      {/* RISULTATO + PDF */}
      {risultato && (
        <>
          <Card>
            <h3>Risultato simulazione</h3>

            <p><strong>Periodo:</strong> {mesiPeriodo.join(', ')}</p>
            <p><strong>Offerta:</strong> {offertaKey}</p>
            <p><strong>Spesa materia:</strong> € {risultato.materia.toFixed(2)}</p>
            <p><strong>Quota fissa:</strong> € {risultato.quota_fissa.toFixed(2)}</p>
            <p><strong>Totale stimato:</strong> € {risultato.totale.toFixed(2)}</p>

            <div style={{ marginTop: 24 }}>
              <Button
                onClick={() =>
                  generaPdfGas({
                    mesi: mesiPeriodo,
                    offerta:
                      offertaKey === 'clienti_windtre'
                        ? 'Cliente WindTre'
                        : 'Non cliente',
                    consumo_smc: state.consumo_smc,
                    materia: risultato.materia,
                    quota_fissa: risultato.quota_fissa,
                    totale: risultato.totale
                  })
                }
              >
                Scarica PDF
              </Button>
            </div>
          </Card>

          {/* CONFRONTO PRIMA / DOPO */}
          <ConfrontoBolletta
            totalePrecedente={state.bolletta_precedente.totale}
            totaleNuovo={risultato.totale}
            periodoMesi={state.periodo.mesi}
          />
        </>
      )}
    </Section>
  )
}
