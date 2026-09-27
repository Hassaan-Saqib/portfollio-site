'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  Terminal, 
  ExternalLink,
  MapPin,
  Cpu
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Odoo ERP & Custom Modules',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const [deliveryStatus, setDeliveryStatus] = useState<'idle' | 'direct' | 'fallback'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'fea2baf5-7a8d-4854-ad27-85649c58b0be';

    try {
      // Tier 1: Direct browser-to-gateway submission (bypasses local Node.js proxy/SSL quirks)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          subject: `[Portfolio Inquiry // ${formState.subject}] from ${formState.name}`,
          message: `DIRECTIVE: ${formState.subject}\nSENDER: ${formState.name} (${formState.email})\n\nPAYLOAD:\n${formState.message}`,
          from_name: `${formState.name} (Portfolio Direct)`,
        }),
      });

      const data = await response.json();

      setIsSubmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 70,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#00ff88', '#ffb800'],
      });

      if (data.success) {
        setDeliveryStatus('direct');
      } else {
        // Upstream returned non-success -> graceful mailto fallback
        setDeliveryStatus('fallback');
        const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
          `[Packet: ${formState.subject}] from ${formState.name}`
        )}&body=${encodeURIComponent(
          `SENDER: ${formState.name}\nREPLY_TO: ${formState.email}\nDIRECTIVE: ${formState.subject}\n\nPAYLOAD:\n${formState.message}`
        )}`;
        window.location.href = mailtoLink;
      }
    } catch (clientErr) {
      console.warn('Direct client dispatch failed, attempting internal route fallback...', clientErr);

      // Tier 2: Try internal /api/contact route
      try {
        const fallbackRes = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            subject: formState.subject,
            message: formState.message,
          }),
        });

        const fallbackData = await fallbackRes.json();
        setIsSubmitting(false);
        setSubmitted(true);

        if (fallbackData.success) {
          setDeliveryStatus('direct');
          return;
        }
      } catch (innerErr) {
        console.warn('Internal route also unavailable:', innerErr);
      }

      // Tier 3: Zero-loss mailto fallback
      setIsSubmitting(false);
      setSubmitted(true);
      setDeliveryStatus('fallback');
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[Packet: ${formState.subject}] from ${formState.name}`
      )}&body=${encodeURIComponent(
        `SENDER: ${formState.name}\nREPLY_TO: ${formState.email}\nDIRECTIVE: ${formState.subject}\n\nPAYLOAD:\n${formState.message}`
      )}`;
      window.location.href = mailtoLink;
    }
  };

  const topics = [
    'Odoo ERP & Custom Modules',
    'Enterprise LLMs & AI',
    'n8n Workflow Automation',
    'UHF RFID Hardware',
    'Khata & POS Systems',
    'Flutter Mobile Apps',
    'Full-Time Engineering Role',
  ];

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Terminal Header */}
        <div className="section-header">
          <div className="section-label">
            <Terminal size={13} color="#00ff88" />
            <span style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
              [TRANSMISSION_LINK // PORT: 0x443]
            </span>
          </div>
          <h2 className="section-title">
            Direct Terminal // <span className="gradient-text">Initiate Connection</span>
          </h2>
          <p className="section-subtitle">
            Need production Odoo architectures, multi-tenant white-label ERPs, edge RFID hardware drivers,
            enterprise LLM agents, or mobile Flutter systems? Dispatch your transmission below.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Hardware/Network Nodes */}
          <div>
            <div
              className="glass-card"
              style={{
                borderRadius: '4px',
                border: '1px solid rgba(0, 240, 255, 0.22)',
                background: 'rgba(5, 8, 16, 0.88)',
                overflow: 'hidden',
                marginBottom: '1.5rem',
              }}
            >
              {/* Terminal Window Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 1rem',
                  background: 'rgba(0, 240, 255, 0.04)',
                  borderBottom: '1px solid rgba(0, 240, 255, 0.15)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffb800' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ff88' }} />
                  <span style={{ color: 'var(--text-muted)', marginLeft: '0.35rem' }}>
                    node://mh-systems-node
                  </span>
                </div>
                <span style={{ color: '#00ff88' }}>[READY]</span>
              </div>

              <div style={{ padding: '1.75rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Cpu size={14} color="#00f0ff" />
                  <span>COMMUNICATION NODES &amp; TELEMETRY CHANNELS</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Email Node */}
                  <div
                    style={{
                      background: 'rgba(4, 7, 14, 0.9)',
                      borderRadius: '3px',
                      padding: '1rem 1.15rem',
                      border: '1px solid rgba(0, 240, 255, 0.14)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 0 }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '3px',
                          background: 'rgba(0, 240, 255, 0.08)',
                          border: '1px solid rgba(0, 240, 255, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#00f0ff',
                          flexShrink: 0,
                        }}
                      >
                        <Mail size={17} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                          // PRIMARY_MAIL
                        </div>
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          style={{
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '0.88rem',
                            textDecoration: 'none',
                            fontFamily: 'var(--font-mono)',
                            display: 'block',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                      className="btn btn-secondary"
                      title="Copy Email"
                      style={{ padding: '0.35rem 0.65rem', fontSize: '0.72rem', borderRadius: '3px', flexShrink: 0 }}
                    >
                      {copiedEmail ? <Check size={14} color="#00ff88" /> : <Copy size={14} />}
                      <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
                    </button>
                  </div>

                  {/* Phone / WhatsApp Node */}
                  <div
                    style={{
                      background: 'rgba(4, 7, 14, 0.9)',
                      borderRadius: '3px',
                      padding: '1rem 1.15rem',
                      border: '1px solid rgba(0, 255, 136, 0.16)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '3px',
                          background: 'rgba(0, 255, 136, 0.08)',
                          border: '1px solid rgba(0, 255, 136, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#00ff88',
                          flexShrink: 0,
                        }}
                      >
                        <Phone size={17} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                          // DIRECT_LINE &amp; WHATSAPP
                        </div>
                        <a
                          href="https://wa.me/923187090077"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '0.88rem',
                            textDecoration: 'none',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {PERSONAL_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.35rem' }}>
                      <button
                        onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                        className="btn btn-secondary"
                        title="Copy Phone"
                        style={{ padding: '0.35rem 0.6rem', fontSize: '0.72rem', borderRadius: '3px' }}
                      >
                        {copiedPhone ? <Check size={14} color="#00ff88" /> : <Copy size={14} />}
                      </button>
                      <a
                        href="https://wa.me/923187090077"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-emerald"
                        title="WhatsApp Chat"
                        style={{ padding: '0.35rem 0.65rem', fontSize: '0.72rem', borderRadius: '3px' }}
                      >
                        <ExternalLink size={14} />
                        <span>CHAT</span>
                      </a>
                    </div>
                  </div>

                  {/* Geolocation Node */}
                  <div
                    style={{
                      background: 'rgba(4, 7, 14, 0.9)',
                      borderRadius: '3px',
                      padding: '1rem 1.15rem',
                      border: '1px solid rgba(255, 184, 0, 0.16)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '3px',
                        background: 'rgba(255, 184, 0, 0.08)',
                        border: '1px solid rgba(255, 184, 0, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffb800',
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={17} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        // PHYSICAL_LOCATION &amp; RELOCATION
                      </div>
                      <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                        Pakistan [PK] • Remote Ready &amp; Worldwide Relocation Available
                      </div>
                    </div>
                  </div>
                </div>

                {/* Git & Professional Links */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.75rem',
                    marginTop: '1.5rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid rgba(0, 240, 255, 0.12)',
                  }}
                >
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ fontSize: '0.78rem', borderRadius: '3px' }}
                  >
                    <Github size={15} />
                    <span>GITHUB://PROFILE</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ fontSize: '0.78rem', borderRadius: '3px' }}
                  >
                    <Linkedin size={15} />
                    <span>LINKEDIN://MH</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Transmission Form */}
          <div
            className="glass-card"
            style={{
              borderRadius: '4px',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              background: 'rgba(5, 8, 16, 0.92)',
              overflow: 'hidden',
            }}
          >
            {/* Terminal Window Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.65rem 1rem',
                background: 'rgba(0, 240, 255, 0.05)',
                borderBottom: '1px solid rgba(0, 240, 255, 0.15)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span style={{ color: '#00f0ff' }}>usr@terminal:~$</span>
                <span style={{ color: 'var(--text-secondary)' }}>./dispatch_inquiry.sh</span>
              </div>
              <span style={{ color: 'var(--text-muted)' }}>STREAM: ENCRYPTED</span>
            </div>

            <div style={{ padding: '2rem' }}>
              {submitted ? (
                <div
                  style={{
                    background: 'rgba(0, 255, 136, 0.06)',
                    border: '1px solid rgba(0, 255, 136, 0.3)',
                    borderRadius: '4px',
                    padding: '2rem',
                    textAlign: 'center',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '4px',
                      background: 'rgba(0, 255, 136, 0.15)',
                      border: '1px solid #00ff88',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem auto',
                      color: '#00ff88',
                    }}
                  >
                    <Check size={28} />
                  </div>
                  <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.5rem' }}>
                    {deliveryStatus === 'direct' ? '[INBOX_TRANSMISSION_DELIVERED]' : '[TRANSMISSION_ACKNOWLEDGED]'}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    {deliveryStatus === 'direct' ? (
                      <>
                        Payload dispatched directly to <span style={{ color: '#00ff88' }}>{PERSONAL_INFO.email}</span> inbox via background gateway.
                        Expect an engineering response within 24 hours.
                      </>
                    ) : (
                      <>
                        Formatted transmission payload dispatched. You can also reach me directly at{' '}
                        <span style={{ color: '#00f0ff' }}>{PERSONAL_INFO.email}</span> or via WhatsApp.
                      </>
                    )}
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setDeliveryStatus('idle');
                      }}
                      className="btn btn-secondary btn-sm"
                      style={{ borderRadius: '3px' }}
                    >
                      [ DISPATCH_NEW_PACKET ]
                    </button>
                    <a
                      href="https://wa.me/923187090077"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-emerald btn-sm"
                      style={{ borderRadius: '3px' }}
                    >
                      [ OPEN_WHATSAPP ]
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Topic selector */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                        marginBottom: '0.5rem',
                        letterSpacing: '0.05em',
                      }}
                    >
                      DIRECTIVE_CATEGORY [SELECT ONE]:
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {topics.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setFormState({ ...formState, subject: t })}
                          style={{
                            padding: '0.35rem 0.65rem',
                            borderRadius: '3px',
                            fontSize: '0.72rem',
                            fontFamily: 'var(--font-mono)',
                            cursor: 'pointer',
                            border: formState.subject === t ? '1px solid #00f0ff' : '1px solid rgba(0, 240, 255, 0.15)',
                            background: formState.subject === t ? 'rgba(0, 240, 255, 0.12)' : 'rgba(0, 240, 255, 0.02)',
                            color: formState.subject === t ? '#00f0ff' : 'var(--text-secondary)',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          {formState.subject === t ? `> ${t}` : t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: 'block',
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                        marginBottom: '0.35rem',
                        letterSpacing: '0.04em',
                      }}
                    >
                      SENDER_IDENTIFIER:
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe / CTO @ Enterprise"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '3px',
                        background: 'rgba(3, 5, 10, 0.9)',
                        border: '1px solid rgba(0, 240, 255, 0.18)',
                        color: '#fff',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#00f0ff')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(0, 240, 255, 0.18)')}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: 'block',
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                        marginBottom: '0.35rem',
                        letterSpacing: '0.04em',
                      }}
                    >
                      RETURN_TRANSMISSION_ADDR [EMAIL]:
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '3px',
                        background: 'rgba(3, 5, 10, 0.9)',
                        border: '1px solid rgba(0, 240, 255, 0.18)',
                        color: '#fff',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#00f0ff')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(0, 240, 255, 0.18)')}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-msg"
                      style={{
                        display: 'block',
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                        marginBottom: '0.35rem',
                        letterSpacing: '0.04em',
                      }}
                    >
                      PAYLOAD_SPECIFICATIONS [MESSAGE]:
                    </label>
                    <textarea
                      id="contact-msg"
                      required
                      rows={4}
                      placeholder="Outline system specifications, deployment timeline, architecture requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '3px',
                        background: 'rgba(3, 5, 10, 0.9)',
                        border: '1px solid rgba(0, 240, 255, 0.18)',
                        color: '#fff',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#00f0ff')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(0, 240, 255, 0.18)')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    id="submit-contact-form"
                    style={{ width: '100%', marginTop: '0.5rem', borderRadius: '3px' }}
                  >
                    <Send size={15} />
                    <span>{isSubmitting ? 'TRANSMITTING_PACKET...' : '[ DISPATCH_TRANSMISSION ]'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

