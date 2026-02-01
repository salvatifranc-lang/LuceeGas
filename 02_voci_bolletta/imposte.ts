// 02_voci_bolletta/imposte.ts

/**
 * Calcola le imposte proporzionate ai consumi.
 * Approccio MVP:
 * imposte_vecchie × (consumo_nuovo / consumo_vecchio)
 */
export function calcolaImposteProporzionali(
  imposte_vecchie: number,
  consumo_vecchio: number,
  consumo_nuovo: number
): number {
  if (consumo_vecchio === 0) return 0

  return imposte_vecchie * (consumo_nuovo / consumo_vecchio)
}
