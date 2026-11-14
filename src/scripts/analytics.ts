// Only the public website sends analytics; previews and automated tests stay separate.
export const metricaId = 114242284;
type Goal = 'footer_inquiry_sent' | 'product_inquiry_sent';
type Metrica = ((id: number, method: string, options?: unknown) => void) & {
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

if (production && !document.querySelector('[data-seha-metrica]')) {
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

export function trackInquiry(goal: Goal) {
  if (!production) return;
  try {
    window.ym?.(metricaId, 'reachGoal', goal);
  } catch {
    // A blocked counter must never interrupt a successful inquiry.
  }
}
