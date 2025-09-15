import React from 'react';

export const WhatsAppButton: React.FC = () => (
  <a
    href="https://wa.me/7XXXXXXXXXX"
    className="whatsapp"
    aria-label="Написать в WhatsApp"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="pulse"></span>
    {/* SVG иконка WhatsApp */}
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#fff" />
      <path d="M22.5 19.5c-.3-.2-1.8-.9-2.1-1-..."/>
    </svg>
  </a>
);