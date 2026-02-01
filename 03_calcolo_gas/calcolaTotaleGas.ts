// 03_calcolo_gas/calcolaTotaleGas.ts

import { GasState } from '../00_state/gasState'
import {
  calcolaMateriaGas,
  calcolaQuotaFissa,
  calcolaImposteProporzionali
} from '../02_voci_bolletta'
import { calcolaPrezzoSmc } from './calcolaPrezzoSmc'

type RisultatoCalcoloGas = {
  prezzo_smc: number
  materia: number
  quota_fissa: number
  imposte: number
  totale: number
}

/**
 * Calcolo completo della nuova bolletta GAS (MVP)
 */
export function calcolaTotaleGas(
  state: GasState,
  psv_medio_periodo?: number
): RisultatoCalcoloGas {
  if (!state.nuova_offerta) {
    throw new Error('Nuova offerta mancante')
  }

  const prezzo_smc = calcolaPrezzoSmc(
    state.nuova_offerta as any,
    psv_medio_periodo
  )

  const materia = calcolaMateriaGas(
    state.consumo_smc,
    prezzo_smc
  )

  const quota_fissa = calcolaQuotaFissa(
    state.nuova_offerta.quota_fissa_mese,
    state.periodo.mesi
  )

  const imposte = calcolaImposteProporzionali(
    state.bolletta_precedente.imposte,
    state.consumo_smc,
    state.consumo_smc
  )

  const totale =
    materia +
    quota_fissa +
    state.bolletta_precedente.trasporto +
    state.bolletta_precedente.oneri +
    imposte

  return {
    prezzo_smc,
    materia,
    quota_fissa,
    imposte,
    totale
  }
}
