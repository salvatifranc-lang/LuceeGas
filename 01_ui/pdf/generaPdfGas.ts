// 01_ui/pdf/generaPdfGas.ts

import jsPDF from 'jspdf'

type PdfInput = {
  cliente?: string
  mesi: string[]
  offerta: string
  consumo_smc: number
  materia: number
  quota_fissa: number
  totale: number
}

export function generaPdfGas(data: PdfInput) {
  const doc = new jsPDF()

  // HEADER
  doc.setFontSize(18)
  doc.setTextColor(0, 195, 137)
  doc.text('WindTre Luce e Gas', 20, 20)

  doc.setFontSize(12)
  doc.setTextColor(0)
  doc.text('Confronto Bolletta GAS', 20, 30)

  // INFO
  let y = 45
  doc.setFontSize(10)

  if (data.cliente) {
    doc.text(`Cliente: ${data.cliente}`, 20, y)
    y += 6
  }

  doc.text(`Periodo: ${data.mesi.join(', ')}`, 20, y)
  y += 6

  doc.text(`Offerta: ${data.offerta}`, 20, y)
  y += 6

  doc.text(`Consumo: ${data.consumo_smc} Smc`, 20, y)
  y += 10

  // BOX RISULTATI
  doc.setDrawColor(0, 195, 137)
  doc.rect(20, y, 170, 50)

  y += 10
  doc.setFontSize(12)
  doc.text('Riepilogo costi', 25, y)

  doc.setFontSize(10)
  y += 10
  doc.text(`Spesa materia gas: € ${data.materia.toFixed(2)}`, 25, y)

  y += 8
  doc.text(`Quota fissa: € ${data.quota_fissa.toFixed(2)}`, 25, y)

  y += 10
  doc.setFontSize(12)
  doc.text(`Totale stimato: € ${data.totale.toFixed(2)}`, 25, y)

  // FOOTER
  doc.setFontSize(8)
  doc.setTextColor(100)
  doc.text(
    'Simulazione basata sui consumi storici e sui prezzi PSV ufficiali.',
    20,
    280
  )

  doc.save('confronto-bolletta-gas-windtre.pdf')
}
