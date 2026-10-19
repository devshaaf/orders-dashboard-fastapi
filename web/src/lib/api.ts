const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export class ApiError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

/**
 * Thin fetch wrapper around the API. Error responses are expected in the shape
 * `{ "error": { "code", "message" } }`; anything else is reported as an unknown error
 * rather than crashing the caller.
 */
export async function apiFetch<T>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init.headers,
    },
  });

  if (!response.ok) {
    const fallback = `Request to ${path} failed with ${response.status}`;
    let code = "unknown_error";
    let message = fallback;

    try {
      const body = await response.json();
      code = body?.error?.code ?? code;
      message = body?.error?.message ?? fallback;
    } catch {
      // Non-JSON error body — keep the fallback message.
    }

    throw new ApiError(response.status, code, message);
  }

  return (await response.json()) as T;
}
