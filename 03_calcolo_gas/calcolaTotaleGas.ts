// 03_calcolo_gas/calcolaTotaleGas.ts

import { GasState } from '../00_state/gasState'
import {
  calcolaQuotaFissa,
  calcolaImposteProporzionali
} from '../02_voci_bolletta'
import { OffertaGas } from './types'
import { calcolaMateriaConPSV } from './calcolaMateriaConPSV'
import psvData from '../data/psv.json'

export type RisultatoCalcoloGas = {
  materia: number
  quota_fissa: number
  imposte: number
  totale: number
}

/**
 * Calcolo completo nuova bolletta GAS
 * con PSV mensile / bimestrale reale
 */
export function calcolaTotaleGas(
  state: GasState,
  offerta: OffertaGas,
  mesiPeriodo: string[]
): RisultatoCalcoloGas {
  if (offerta.tipo !== 'variabile') {
    throw new Error('Al momento è supportata solo offerta variabile')
  }

  const materia = calcolaMateriaConPSV(
    state.consumo_smc,
    mesiPeriodo,
    psvData,
    offerta.spread
  )

  const quota_fissa = calcolaQuotaFissa(
    offerta.quota_fissa_mese,
    mesiPeriodo.length
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
    materia,
    quota_fissa,
    imposte,
    totale
  }
}
