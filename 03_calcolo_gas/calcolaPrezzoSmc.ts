// 03_calcolo_gas/calcolaPrezzoSmc.ts

type Offerta =
  | {
      tipo: 'fisso'
      prezzo_smc: number
    }
  | {
      tipo: 'variabile'
      spread: number
    }

/**
 * Calcola il prezzo €/Smc in base all’offerta
 */
export function calcolaPrezzoSmc(
  offerta: Offerta,
  psv_medio_periodo?: number
): number {
  if (offerta.tipo === 'fisso') {
    return offerta.prezzo_smc
  }

  if (psv_medio_periodo === undefined) {
    throw new Error('PSV medio richiesto per offerta variabile')
  }

  return psv_medio_periodo + offerta.spread
}
