// 03_calcolo_gas/calcolaMateriaConPSV.ts

type PSVMap = Record<string, number>

/**
 * Calcola la spesa materia gas mese per mese
 * ripartendo il consumo in modo uniforme
 */
export function calcolaMateriaConPSV(
  consumo_totale_smc: number,
  mesi: string[],          // es: ['2025-03', '2025-04']
  psv: PSVMap,
  spread: number
): number {
  if (mesi.length === 0) {
    throw new Error('Periodo senza mesi')
  }

  const consumoPerMese = consumo_totale_smc / mesi.length

  return mesi.reduce((totale, mese) => {
    const prezzoPSV = psv[mese]

    if (prezzoPSV === undefined) {
      throw new Error(`PSV mancante per il mese ${mese}`)
    }

    return totale + consumoPerMese * (prezzoPSV + spread)
  }, 0)
}
