export interface SubmissionResponse {
  ok: boolean;
  mode: 'development-adapter';
  message: string;
  submittedAt: string;
}

export async function submitDevelopmentForm(
  formName: string,
  payload: Record<string, unknown>,
): Promise<SubmissionResponse> {
  await new Promise((resolve) => setTimeout(resolve, 420));
  if (import.meta.env.DEV) {
    console.info(`[Tidemark Dev Form Adapter] ${formName}`, payload);
  }
  return {
    ok: true,
    mode: 'development-adapter',
    message:
      'Recorded in local development adapter (no external endpoint configured).',
    submittedAt: new Date().toISOString(),
  };
}
