const GOOGLE_ADS_CONVERSION_ID = 'AW-17410301876';
const DEFAULT_GOOGLE_ADS_CONVERSION_LABEL = 'CG7KCK289rgcELS_8O1A';
const GOOGLE_ADS_CONVERSION_LABEL = (
  process.env.GOOGLE_ADS_CONVERSION_LABEL || DEFAULT_GOOGLE_ADS_CONVERSION_LABEL
).trim();

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackedClickEvent = {
  preventDefault: () => void;
};

export const WHATSAPP_REDIRECT_REQUEST_EVENT = 'sonique:whatsapp-redirect-request';

export type WhatsAppRedirectRequestDetail = {
  url: string;
};

export const trackWhatsAppConversion = (onTracked?: () => void) => {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag !== 'function') {
    onTracked?.();
    return;
  }

  let hasContinued = false;
  const continueOnce = () => {
    if (hasContinued) return;
    hasContinued = true;
    onTracked?.();
  };

  if (GOOGLE_ADS_CONVERSION_LABEL) {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
      event_callback: continueOnce,
      event_timeout: 1000,
    });
    window.setTimeout(continueOnce, 1000);
  }

  window.gtag('event', 'whatsapp_click', {
    event_category: 'lead',
    event_label: 'whatsapp_enquiry',
  });

  if (!GOOGLE_ADS_CONVERSION_LABEL) continueOnce();
};

export const requestWhatsAppRedirect = (url: string) => {
  if (typeof window === 'undefined') return;

  window.dispatchEvent(
    new CustomEvent<WhatsAppRedirectRequestDetail>(WHATSAPP_REDIRECT_REQUEST_EVENT, {
      detail: { url },
    })
  );
};

export const handleWhatsAppClick = (event: TrackedClickEvent, url: string) => {
  event.preventDefault();
  requestWhatsAppRedirect(url);
};
