export function isSafari(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  const isSafariLike = /Safari\//.test(ua) && !/Chrome\//.test(ua) && !/Chromium\//.test(ua) && !/Android/.test(ua);
  return isSafariLike;
}
