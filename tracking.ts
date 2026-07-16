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

export const trackWhatsAppConversion = () => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  if (GOOGLE_ADS_CONVERSION_LABEL) {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
    });
  }

  window.gtag('event', 'whatsapp_click', {
    event_category: 'lead',
    event_label: 'whatsapp_enquiry',
  });
};
