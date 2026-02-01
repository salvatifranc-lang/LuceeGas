// 00_state/defaults.ts

import { GasState } from './gasState'

export const defaultGasState: GasState = {
  periodo: {
    mesi: 1
  },
  consumo_smc: 0,
  bolletta_precedente: {
    materia: 0,
    trasporto: 0,
    oneri: 0,
    imposte: 0,
    totale: 0
  },
  nuova_offerta: null
}
