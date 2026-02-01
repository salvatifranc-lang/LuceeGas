// 00_state/validators.ts

import { GasState } from './gasState'

export function validateBollettaPrecedente(state: GasState) {
  const { materia, trasporto, oneri, imposte, totale } =
    state.bolletta_precedente

  const somma =
    materia +
    trasporto +
    oneri +
    imposte

  const differenza = Math.abs(somma - totale)

  return {
    isCoerente: differenza < 0.01,
    differenza
  }
}
