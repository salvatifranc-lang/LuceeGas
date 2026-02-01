import { Section } from '../components/Section'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import '../styles/windtre.css'

export function GasCalculator() {
  return (
    <Section
      title="Confronto Bolletta Gas"
      subtitle="Simula il risparmio con WindTre Luce e Gas"
    >
      <Card>
        <label className="w3-label">Consumo totale (Smc)</label>
        <input className="w3-input" placeholder="Es. 240" />

        <div style={{ marginTop: 24 }}>
          <Button>Calcola risparmio</Button>
        </div>
      </Card>
    </Section>
  )
}
