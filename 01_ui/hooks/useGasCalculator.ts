// 01_ui/hooks/useGasCalculator.ts

import { useState } from 'react'
import { GasState } from '../../00_state/gasState'
import { defaultGasState } from '../../00_state/defaults'
import { calcolaTotaleGas } from '../../03_calcolo_gas'
import { OffertaGas } from '../../03_calcolo_gas/types'
import { offerteGasUI } from '../data/offerteUI'

export function useGasCalculator() {
  const [state, setState] = useState<GasState>(defaultGasState)
  const [offertaKey, setOffertaKey] =
    useState<'clienti_windtre' | 'non_clienti'>('clienti_windtre')
  const [risultato, setRisultato] = useState<any>(null)

  function aggiornaConsumo(consumo_smc: number) {
    setState(prev => ({ ...prev, consumo_smc }))
  }

  function aggiornaPeriodo(mesi: number) {
    setState(prev => ({ ...prev, periodo: { mesi } }))
  }

  function selezionaOfferta(key: 'clienti_windtre' | 'non_clienti') {
    setOffertaKey(key)
  }

  function calcola(psvMedio: number) {
    const offerta: OffertaGas = offerteGasUI[offertaKey]

    const res = calcolaTotaleGas(
      state,
      offerta,
      psvMedio
    )

    setRisultato(res)
  }

  return {
    state,
    risultato,
    offertaKey,
    aggiornaConsumo,
    aggiornaPeriodo,
    selezionaOfferta,
    calcola
  }
}
