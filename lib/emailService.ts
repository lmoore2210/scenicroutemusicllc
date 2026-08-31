export const TARGET_EMAIL = 'scenicroutemusicllc@gmail.com';

export interface EmailPayload {
  subject: string;
  name?: string;
  email: string;
  phone?: string;
  formType: string;
  [key: string]: unknown;
}

export async function submitLeadToEmail(payload: EmailPayload): Promise<{ success: boolean }> {
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: payload.subject,
        _template: 'table',
        _captcha: 'false',
        ...payload,
        submittedAt: new Date().toLocaleString()
      })
    });

    if (!response.ok) {
      console.warn('FormSubmit status:', response.status);
    }
    return { success: true };
  } catch (error) {
    console.error('Failed to submit form to email:', error);
    return { success: true };
  }
}
