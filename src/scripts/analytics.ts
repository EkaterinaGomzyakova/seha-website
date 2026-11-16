import { analyticsChoice } from './analytics-consent';
// Only the public website sends analytics after an affirmative recorded choice.
export const metricaId = 114242284;
type Goal = 'footer_inquiry_sent' | 'product_inquiry_sent' | 'product_inquiry_opened';
type Metrica = ((id: number, method: string, options?: unknown, parameters?: unknown) => void) & {
  a?: unknown[][];
  l?: number;
};
declare global {
  interface Window {
    ym?: Metrica;
  }
}

const production = location.hostname === 'seha-group.ru';
const campaignParameters = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'utm_id',
  'yclid'
];
const cleanUrl = (value: string, preserveCampaign = false) => {
  try {
    const url = new URL(value);
    const query = new URLSearchParams();
    if (preserveCampaign) {
      for (const parameter of campaignParameters) {
        const value = url.searchParams.get(parameter);
        if (value) query.set(parameter, value);
      }
    }
    const search = query.toString();
    return url.origin + url.pathname + (search ? `?${search}` : '');
  } catch {
    return '';
  }
};

let started = false;
function startAnalytics() {
  if (!production || started || analyticsChoice()?.status !== 'accepted') return;
  started = true;
  const ym: Metrica =
    window.ym ||
    Object.assign(
      (...args: unknown[]) => {
        (ym.a ||= []).push(args);
      },
      { l: Date.now() }
    );
  window.ym = ym;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://mc.yandex.ru/metrika/tag.js?id=${metricaId}`;
  script.dataset.sehaMetrica = '';
  document.head.append(script);
  ym(metricaId, 'init', {
    ssr: true,
    webvisor: true,
    clickmap: true,
    accurateTrackBounce: true,
    // The fallback email link opts out separately because its URL contains inquiry details.
    trackLinks: true,
    url: cleanUrl(location.href, true),
    referrer: cleanUrl(document.referrer)
  });
}

function clearAnalyticsStorage() {
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim();
    if (!/^_ym/.test(name)) continue;
    for (const domain of ['', location.hostname, '.' + location.hostname]) {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? '; Domain=' + domain : ''}`;
    }
  }
  for (const storage of [() => localStorage, () => sessionStorage]) {
    try {
      const target = storage();
      Object.keys(target)
        .filter((key) => /^_ym/.test(key))
        .forEach((key) => target.removeItem(key));
    } catch {
      /* Storage can be unavailable. */
    }
  }
}
window.addEventListener('seha:analytics-choice', () => {
  if (analyticsChoice()?.status === 'accepted') startAnalytics();
  else if (started) {
    // A clean document stops third-party listeners and pending script loads on withdrawal.
    started = false;
    document.querySelector('[data-seha-metrica]')?.remove();
    clearAnalyticsStorage();
    location.reload();
  } else clearAnalyticsStorage();
});
if (analyticsChoice()?.status === 'accepted') startAnalytics();
else clearAnalyticsStorage();

export function trackInquiry(goal: Goal, productId?: string) {
  if (!production || !started || analyticsChoice()?.status !== 'accepted') return;
  try {
    if (productId && /^[a-z][a-z0-9-]{1,79}$/.test(productId)) {
      window.ym?.(metricaId, 'reachGoal', goal, { product_id: productId });
    } else {
      window.ym?.(metricaId, 'reachGoal', goal);
    }
  } catch {
    // A blocked counter must never interrupt a successful inquiry.
  }
}
