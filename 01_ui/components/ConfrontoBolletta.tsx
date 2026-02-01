import { Card } from './Card'

type Props = {
  totalePrecedente: number
  totaleNuovo: number
  periodoMesi: number
}

export function ConfrontoBolletta({
  totalePrecedente,
  totaleNuovo,
  periodoMesi
}: Props) {
  const differenza = totaleNuovo - totalePrecedente
  const risparmio = -differenza
  const percentuale = (differenza / totalePrecedente) * 100

  const proiezioneAnnua =
    (risparmio / periodoMesi) * 12

  return (
    <Card>
      <h3>Confronto bolletta</h3>

      <table style={{ width: '100%', marginTop: 16 }}>
        <thead>
          <tr>
            <th></th>
            <th>Prima</th>
            <th>Dopo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Totale periodo</td>
            <td>€ {totalePrecedente.toFixed(2)}</td>
            <td>€ {totaleNuovo.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Risparmio</td>
            <td colSpan={2} style={{ fontWeight: 700 }}>
              € {risparmio.toFixed(2)} ({percentuale.toFixed(1)}%)
            </td>
          </tr>
          <tr>
            <td>Risparmio annuo stimato</td>
            <td colSpan={2} style={{ color: '#00c389', fontWeight: 700 }}>
              € {proiezioneAnnua.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  )
}
