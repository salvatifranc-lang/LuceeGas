// 02_voci_bolletta/quotaFissa.ts

/**
 * Calcola la quota fissa totale del periodo.
 * Formula:
 * quota_fissa_mese × mesi
 */
export function calcolaQuotaFissa(
  quota_fissa_mese: number,
  mesi: number
): number {
  return quota_fissa_mese * mesi
}
