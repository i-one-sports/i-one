/** Format a number as Nigerian Naira (or the provided currency). */
export const formatNaira = (amount: number, currency = 'NGN'): string => {
  try {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: currency || 'NGN',
      maximumFractionDigits: 2,
    }).format(amount ?? 0)
  } catch {
    return `₦${(amount ?? 0).toLocaleString()}`
  }
}

/** Short, locale-aware date e.g. "7 Jun 2026". */
export const formatDate = (value: string): string =>
  new Date(value).toLocaleDateString('en-NG', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

/** True when a URL points at a PDF document. */
export const isPdf = (url: string): boolean =>
  url.toLowerCase().split('?')[0].endsWith('.pdf')
