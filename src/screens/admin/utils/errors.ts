interface AxiosLikeError {
  response?: {
    status?: number
    data?: { message?: string; error?: string }
  }
}

/** Pull a human-readable message out of an axios error. */
export const getApiErrorMessage = (
  err: unknown,
  fallback = 'Something went wrong'
): string => {
  const e = err as AxiosLikeError
  return e?.response?.data?.message || e?.response?.data?.error || fallback
}

/** HTTP status code from an axios error, if present. */
export const getStatus = (err: unknown): number | undefined =>
  (err as AxiosLikeError)?.response?.status
