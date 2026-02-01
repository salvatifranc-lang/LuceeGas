// 00_state/gasState.ts

export type Periodo = {
  mesi: number
}

export type BollettaPrecedente = {
  materia: number
  trasporto: number
  oneri: number
  imposte: number
  totale: number
}

export type NuovaOffertaInput = {
  tipo: 'fisso' | 'variabile'
  prezzo_smc?: number        // solo per fisso
  spread?: number            // solo per variabile
  quota_fissa_mese: number
}

export type GasState = {
  periodo: Periodo
  consumo_smc: number
  bolletta_precedente: BollettaPrecedente
  nuova_offerta: NuovaOffertaInput | null
}
