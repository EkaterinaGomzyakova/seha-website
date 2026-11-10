const shortWords =
  /(?<![\p{L}\p{N}-])(из-за|из-под|в|во|на|из|за|с|со|к|ко|о|об|обо|от|до|по|под|над|у|при|для|без|про|через|перед|между|и|а|но|не|ни|или)[ \t\u00a0]+(?=\S)/giu;

/** @param {string} value */
export function bindRussianShortWords(value) {
  return value.replace(shortWords, '$1\u00a0');
}
