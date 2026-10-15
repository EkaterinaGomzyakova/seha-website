import type { Locale } from '../data/translations';

const connectingWords: Record<Locale, string> = {
  ru: 'из-за|из-под|в|во|на|из|за|с|со|к|ко|о|об|обо|от|до|по|под|над|у|при|для|без|про|через|перед|между|и|а|но|не|ни|или',
  en: 'a|an|the|of|for|in|on|at|to|by|as|up|off|out|and|or|but|nor|with|from|into|onto|over|under|without|through|between'
};

/** Keep prepositions, articles and conjunctions with the following word at build time. */
export function bindShortWords(value: string, locale: Locale): string {
  return value.replace(
    new RegExp(`(?<![\\p{L}\\p{N}-])(${connectingWords[locale]})[ \\t\\u00a0]+(?=\\S)`, 'giu'),
    '$1\u00a0'
  );
}
