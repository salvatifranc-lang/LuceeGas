// 02_voci_bolletta/materiaGas.ts

/**
 * Calcola la spesa per la materia gas.
 * Formula:
 * consumo_smc × prezzo_smc
 */
export function calcolaMateriaGas(
  consumo_smc: number,
  prezzo_smc: number
): number {
  return consumo_smc * prezzo_smc
}
