// 01_ui/hooks/useGasCalculator.ts

import { useState } from 'react'
import { GasState } from '../../00_state/gasState'
import { defaultGasState } from '../../00_state/defaults'
import { calcolaTotaleGas } from '../../03_calcolo_gas'
import { OffertaGas } from '../../03_calcolo_gas/types'
import { offerteGasUI } from '../data/offerteUI'
import { generaMesiPeriodo } from '../utils/periodi'

export function useGasCalculator() {
  const [state, setState] = useState<GasState>(defaultGasState)

  const [offertaKey, setOffertaKey] =
    useState<'clienti_windtre' | 'non_clienti'>('clienti_windtre')

  const [meseInizio, setMeseInizio] = useState('2025-03')
  const [durata, setDurata] = useState<1 | 2>(1)
  const [mesiPeriodo, setMesiPeriodo] = useState<string[]>(
    generaMesiPeriodo('2025-03', 1)
  )

  const [risultato, setRisultato] = useState<any>(null)

  function aggiornaConsumo(consumo_smc: number) {
    setState(prev => ({ ...prev, consumo_smc }))
  }

  function selezionaOfferta(key: 'clienti_windtre' | 'non_clienti') {
    setOffertaKey(key)
  }

  function aggiornaPeriodo(mese: string, durata: 1 | 2) {
    setMeseInizio(mese)
    setDurata(durata)
    setMesiPeriodo(generaMesiPeriodo(mese, durata))
  }

  function calcola() {
    const offerta: OffertaGas = offerteGasUI[offertaKey]

    const res = calcolaTotaleGas(
      state,
      offerta,
      mesiPeriodo
    )

    setRisultato(res)
  }

  return {
    state,
    risultato,
    mesiPeriodo,
    offertaKey,
    meseInizio,
    durata,
    aggiornaConsumo,
    selezionaOfferta,
    aggiornaPeriodo,
    calcola
  }
}
