import {
  analyticsChoiceLifetime,
  analyticsPreferenceKey,
  privacyVersion
} from '../data/privacy-settings';
import { readPreference, savePreference } from './storage';

type Choice = { status: 'accepted' | 'rejected'; version: string; at: number; receipt: string };
let current: Choice | null | undefined;
export function analyticsChoice(): Choice | null {
  if (current && Date.now() - current.at >= analyticsChoiceLifetime) current = null;
  if (current === undefined) {
    try {
      const stored = JSON.parse(readPreference(analyticsPreferenceKey) || 'null');
      current =
        stored &&
        ['accepted', 'rejected'].includes(stored.status) &&
        stored.version === privacyVersion &&
        Number.isFinite(stored.at) &&
        stored.at <= Date.now() &&
        Date.now() - stored.at < analyticsChoiceLifetime &&
        typeof stored.receipt === 'string' &&
        /^[0-9a-f-]{36}$/.test(stored.receipt)
          ? stored
          : null;
    } catch {
      current = null;
    }
  }
  return current || null;
}
function apply(choice: Choice) {
  current = choice;
  savePreference(analyticsPreferenceKey, JSON.stringify(choice));
  window.dispatchEvent(new Event('seha:analytics-choice'));
}
export async function chooseAnalytics(status: Choice['status']): Promise<void> {
  const receipt = crypto.randomUUID();
  const evidence =
    location.hostname === 'seha-group.ru'
      ? fetch('/api/consent.php', {
          method: 'POST',
          credentials: 'omit',
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status, version: privacyVersion, receipt }),
          signal: AbortSignal.timeout(8000)
        }).then(async (response) => {
          if (!response.ok || (await response.json()).success !== true)
            throw new Error('Consent receipt unavailable');
        })
      : Promise.resolve();
  // The keepalive receipt is issued before withdrawal reloads the document.
  // Refusal is effective even if the receipt endpoint is unavailable.
  if (status === 'rejected') apply({ status, version: privacyVersion, at: Date.now(), receipt });
  await evidence;
  if (status === 'accepted') apply({ status, version: privacyVersion, at: Date.now(), receipt });
}
window.addEventListener('storage', (event) => {
  if (event.key === analyticsPreferenceKey || event.key === null) {
    current = undefined;
    window.dispatchEvent(new Event('seha:analytics-choice'));
  }
});
