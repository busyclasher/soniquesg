import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle, X } from 'lucide-react';
import {
  trackWhatsAppConversion,
  WHATSAPP_REDIRECT_REQUEST_EVENT,
  WhatsAppRedirectRequestDetail,
} from '../tracking';

const WhatsAppRedirectModal: React.FC = () => {
  const [targetUrl, setTargetUrl] = useState<string | null>(null);
  const [isContinuing, setIsContinuing] = useState(false);
  const continueButtonRef = useRef<HTMLButtonElement | null>(null);

  const isOpen = Boolean(targetUrl);

  useEffect(() => {
    const handleRequest = (event: Event) => {
      const { detail } = event as CustomEvent<WhatsAppRedirectRequestDetail>;
      if (!detail?.url) return;

      setTargetUrl(detail.url);
      setIsContinuing(false);
    };

    window.addEventListener(WHATSAPP_REDIRECT_REQUEST_EVENT, handleRequest);
    return () => window.removeEventListener(WHATSAPP_REDIRECT_REQUEST_EVENT, handleRequest);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    continueButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setTargetUrl(null);
        setIsContinuing(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!targetUrl) return null;

  const closeModal = () => {
    if (isContinuing) return;
    setTargetUrl(null);
  };

  const continueToWhatsApp = () => {
    if (isContinuing) return;

    setIsContinuing(true);
    const pendingWindow = window.open('about:blank', '_blank');

    trackWhatsAppConversion(() => {
      if (pendingWindow) {
        pendingWindow.opener = null;
        pendingWindow.location.href = targetUrl;
      } else {
        window.location.href = targetUrl;
      }

      setTargetUrl(null);
      setIsContinuing(false);
    });
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close WhatsApp prompt"
        onClick={closeModal}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="whatsapp-redirect-title"
        className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-2xl"
      >
        <button
          type="button"
          className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-sonique-dark"
          aria-label="Close"
          onClick={closeModal}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#25D366] text-white">
          <MessageCircle className="h-7 w-7" />
        </div>

        <h2 id="whatsapp-redirect-title" className="mb-3 text-2xl font-header uppercase text-sonique-dark">
          Continue to WhatsApp?
        </h2>

        <p className="mb-6 text-sm leading-6 text-gray-600">
          We will open WhatsApp in a new tab so you can send your trial lesson enquiry.
        </p>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            className="px-5 py-3 text-sm font-bold uppercase tracking-widest text-gray-500 transition-colors hover:text-sonique-dark"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            ref={continueButtonRef}
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#1ebe5d] disabled:cursor-wait disabled:opacity-70"
            onClick={continueToWhatsApp}
            disabled={isContinuing}
          >
            {isContinuing ? 'Opening...' : 'Continue'}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppRedirectModal;
