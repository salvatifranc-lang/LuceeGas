// 01_ui/data/offerteUI.ts

import { OffertaGas } from '../../03_calcolo_gas/types'

export const offerteGasUI: Record<string, OffertaGas> = {
  clienti_windtre: {
    tipo: 'variabile',
    spread: 0.0965,
    quota_fissa_mese: 7.5
  },
  non_clienti: {
    tipo: 'variabile',
    spread: 0.0965,
    quota_fissa_mese: 13
  }
}
