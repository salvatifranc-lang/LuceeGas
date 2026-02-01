// 01_ui/utils/periodi.ts

/**
 * Restituisce una lista di mesi (YYYY-MM)
 * a partire da mese iniziale e durata
 */
export function generaMesiPeriodo(
  meseInizio: string, // es: '2025-03'
  durata: 1 | 2       // 1 = mese, 2 = bimestre
): string[] {
  const [anno, mese] = meseInizio.split('-').map(Number)

  const mesi: string[] = []

  for (let i = 0; i < durata; i++) {
    const d = new Date(anno, mese - 1 + i)
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, '0')
    mesi.push(`${y}-${m}`)
  }

  return mesi
}
