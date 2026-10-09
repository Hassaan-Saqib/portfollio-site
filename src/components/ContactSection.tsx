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
  MapPin,
  CheckCircle2,
  MessageSquare
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
          subject: `Portfolio Inquiry (${formState.subject}) from ${formState.name}`,
          message: `Category: ${formState.subject}\nSender: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`,
          from_name: `${formState.name} (Portfolio Inquiry)`,
        }),
      });

      const data = await response.json();

      setIsSubmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#2563eb', '#3b82f6', '#94a3b8', '#10b981'],
      });

      if (data.success) {
        setDeliveryStatus('direct');
      } else {
        setDeliveryStatus('fallback');
        const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
          `Portfolio Inquiry: ${formState.subject} from ${formState.name}`
        )}&body=${encodeURIComponent(
          `Sender: ${formState.name}\nEmail: ${formState.email}\nTopic: ${formState.subject}\n\nMessage:\n${formState.message}`
        )}`;
        window.location.href = mailtoLink;
      }
    } catch (clientErr) {
      console.warn('Direct submission error, trying internal route...', clientErr);

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
        console.warn('Internal route fallback failed:', innerErr);
      }

      setIsSubmitting(false);
      setSubmitted(true);
      setDeliveryStatus('fallback');
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `Portfolio Inquiry: ${formState.subject} from ${formState.name}`
      )}&body=${encodeURIComponent(
        `Sender: ${formState.name}\nEmail: ${formState.email}\nTopic: ${formState.subject}\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoLink;
    }
  };

  const topics = [
    'Odoo ERP & Modules',
    'Enterprise AI & LLMs',
    'Workflow Automation',
    'Hardware & IoT Integration',
    'POS & Khata Systems',
    'Full-Time Engineering Role',
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let&apos;s Build <span className="gradient-text">Something Great</span>
          </h2>
          <p className="section-subtitle">
            Have an enterprise Odoo ERP initiative, workflow automation, or applied AI project?
            Send a direct message below or connect directly.
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
          {/* Left Column: Direct Contact Details */}
          <div>
            <div
              className="glass-card"
              style={{
                borderRadius: '12px',
                border: '1px solid var(--bg-card-border)',
                background: 'var(--bg-card)',
                overflow: 'hidden',
                marginBottom: '1.5rem',
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.1rem 1.5rem',
                  borderBottom: '1px solid var(--bg-card-border)',
                  fontSize: '0.85rem',
                }}
              >
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Direct Contact Channels</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                  <span style={{ color: '#10b981', fontWeight: 600, fontSize: '0.8rem' }}>Available</span>
                </div>
              </div>

              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* WhatsApp Instant Connect Feature Card */}
                  <a
                    href="https://wa.me/923187090077?text=Hi%20Muhammad%20Hassaan!%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: 'rgba(16, 185, 129, 0.08)',
                      borderRadius: '8px',
                      padding: '1rem 1.25rem',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          background: 'rgba(16, 185, 129, 0.15)',
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-emerald)',
                          flexShrink: 0,
                        }}
                      >
                        <MessageSquare size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--accent-emerald)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          Fastest Response • Instant
                        </div>
                        <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.92rem' }}>
                          Chat on WhatsApp
                        </div>
                      </div>
                    </div>
                    <span
                      className="btn btn-emerald btn-sm"
                      style={{ padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.78rem' }}
                    >
                      Open Chat
                    </span>
                  </a>

                  {/* Email Card */}
                  <div
                    style={{
                      background: 'var(--bg-secondary)',
                      borderRadius: '8px',
                      padding: '1rem 1.25rem',
                      border: '1px solid var(--bg-card-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 0 }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          background: 'var(--bg-card)',
                          border: '1px solid var(--bg-card-border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--text-primary)',
                          flexShrink: 0,
                        }}
                      >
                        <Mail size={18} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          Email Address
                        </div>
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          style={{
                            color: 'var(--text-primary)',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            textDecoration: 'none',
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
                      className="btn btn-secondary btn-sm"
                      title="Copy Email"
                      style={{ borderRadius: '6px', flexShrink: 0, padding: '0.35rem 0.75rem' }}
                    >
                      {copiedEmail ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                      <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  {/* Phone / WhatsApp Card */}
                  <div
                    style={{
                      background: 'var(--bg-secondary)',
                      borderRadius: '8px',
                      padding: '1rem 1.25rem',
                      border: '1px solid var(--bg-card-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          background: 'var(--bg-card)',
                          border: '1px solid var(--bg-card-border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--text-primary)',
                          flexShrink: 0,
                        }}
                      >
                        <Phone size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          Phone &amp; WhatsApp
                        </div>
                        <a
                          href="https://wa.me/923187090077"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: 'var(--text-primary)',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            textDecoration: 'none',
                          }}
                        >
                          {PERSONAL_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.45rem' }}>
                      <button
                        onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                        className="btn btn-secondary btn-sm"
                        title="Copy Phone"
                        style={{ padding: '0.35rem 0.65rem', borderRadius: '6px' }}
                      >
                        {copiedPhone ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                      </button>
                      <a
                        href="https://wa.me/923187090077"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary btn-sm"
                        title="WhatsApp Chat"
                        style={{ padding: '0.35rem 0.75rem', borderRadius: '6px' }}
                      >
                        <MessageSquare size={14} />
                        <span>Chat</span>
                      </a>
                    </div>
                  </div>

                  {/* Geolocation Card */}
                  <div
                    style={{
                      background: 'var(--bg-secondary)',
                      borderRadius: '8px',
                      padding: '1rem 1.25rem',
                      border: '1px solid var(--bg-card-border)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--bg-card-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-primary)',
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Location &amp; Availability
                      </div>
                      <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.88rem' }}>
                        Pakistan • Open to Global Remote &amp; On-site Opportunities
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
                    borderTop: '1px solid var(--bg-card-border)',
                  }}
                >
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ borderRadius: '6px', justifyContent: 'center' }}
                  >
                    <Github size={15} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ borderRadius: '6px', justifyContent: 'center' }}
                  >
                    <Linkedin size={15} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div
            className="glass-card"
            style={{
              borderRadius: '12px',
              border: '1px solid var(--bg-card-border)',
              background: 'var(--bg-card)',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '1.1rem 1.5rem',
                borderBottom: '1px solid var(--bg-card-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.85rem' }}>Send a Message</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Typically responds within 24h</span>
            </div>

            <div style={{ padding: '1.75rem' }}>
              {submitted ? (
                <div
                  style={{
                    background: 'var(--badge-success-bg)',
                    border: '1px solid var(--badge-success-border)',
                    borderRadius: '8px',
                    padding: '2.5rem 1.5rem',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--badge-success-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem auto',
                      color: 'var(--badge-success-text)',
                    }}
                  >
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 700 }}>
                    Message Received
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.5rem', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
                    {deliveryStatus === 'direct' ? (
                      <>
                        Your message was successfully sent to <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{PERSONAL_INFO.email}</span>.
                        I will review your inquiry and get back to you promptly.
                      </>
                    ) : (
                      <>
                        Your message has been prepared for dispatch. You can also reach me directly at{' '}
                        <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{PERSONAL_INFO.email}</span>.
                      </>
                    )}
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setDeliveryStatus('idle');
                      }}
                      className="btn btn-secondary btn-sm"
                      style={{ borderRadius: '6px' }}
                    >
                      Send Another Message
                    </button>
                    <a
                      href="https://wa.me/923187090077"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ borderRadius: '6px' }}
                    >
                      <MessageSquare size={14} />
                      <span>Chat on WhatsApp</span>
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
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Inquiry Subject
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {topics.map((t) => {
                        const isSelected = formState.subject === t;
                        return (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setFormState({ ...formState, subject: t })}
                            style={{
                              padding: '0.4rem 0.75rem',
                              borderRadius: '6px',
                              fontSize: '0.78rem',
                              fontWeight: 500,
                              cursor: 'pointer',
                              border: isSelected ? '1px solid var(--text-primary)' : '1px solid var(--bg-card-border)',
                              background: isSelected ? 'var(--text-primary)' : 'var(--bg-secondary)',
                              color: isSelected ? 'var(--bg-primary)' : 'var(--text-secondary)',
                              transition: 'all 0.15s ease',
                            }}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: 'block',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Jane Doe / Engineering Lead"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '6px',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--bg-card-border)',
                        color: 'var(--text-primary)',
                        fontSize: '0.88rem',
                        outline: 'none',
                        transition: 'border-color 0.15s ease',
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: 'block',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      Your Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '6px',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--bg-card-border)',
                        color: 'var(--text-primary)',
                        fontSize: '0.88rem',
                        outline: 'none',
                        transition: 'border-color 0.15s ease',
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-msg"
                      style={{
                        display: 'block',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-msg"
                      required
                      rows={4}
                      placeholder="Brief overview of your project, scope, or questions..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '6px',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--bg-card-border)',
                        color: 'var(--text-primary)',
                        fontSize: '0.88rem',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.15s ease',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    id="submit-contact-form"
                    style={{ width: '100%', marginTop: '0.5rem', borderRadius: '6px', padding: '0.85rem' }}
                  >
                    <Send size={15} />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
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
