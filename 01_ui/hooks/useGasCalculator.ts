// 01_ui/hooks/useGasCalculator.ts

import { useState } from 'react'
import { GasState } from '../../00_state/gasState'
import { defaultGasState } from '../../00_state/defaults'
import { calcolaTotaleGas } from '../../03_calcolo_gas'
import { OffertaGas } from '../../03_calcolo_gas/types'

// offerta di default (poi la renderemo selezionabile)
const offertaDefault: OffertaGas = {
  tipo: 'variabile',
  spread: 0.0965,
  quota_fissa_mese: 7.5
}

export function useGasCalculator() {
  const [state, setState] = useState<GasState>(defaultGasState)
  const [risultato, setRisultato] = useState<any>(null)

  function aggiornaConsumo(consumo_smc: number) {
    setState(prev => ({
      ...prev,
      consumo_smc
    }))
  }

  function aggiornaPeriodo(mesi: number) {
    setState(prev => ({
      ...prev,
      periodo: { mesi }
    }))
  }

  function aggiornaBollettaPrecedente(totale: number) {
    setState(prev => ({
      ...prev,
      bolletta_precedente: {
        ...prev.bolletta_precedente,
        totale
      }
    }))
  }

  function calcola(psvMedio: number) {
    const res = calcolaTotaleGas(
      state,
      offertaDefault,
      psvMedio
    )
    setRisultato(res)
  }

  return {
    state,
    risultato,
    aggiornaConsumo,
    aggiornaPeriodo,
    aggiornaBollettaPrecedente,
    calcola
  }
}
