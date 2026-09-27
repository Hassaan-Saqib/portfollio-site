'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-card)',
        borderTop: '1px solid var(--bg-card-border)',
        paddingTop: '3.5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--bg-card-border)',
          }}
        >
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--bg-card-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                }}
              >
                MH
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              AI Engineer &amp; Enterprise Odoo Developer. Architecting custom enterprise Odoo ERP modules,
              enterprise LLM workflows, and performant full-stack web and mobile systems.
            </p>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-sm"
                title="GitHub"
                style={{ borderRadius: '6px' }}
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-sm"
                title="LinkedIn"
                style={{ borderRadius: '6px' }}
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="btn btn-secondary btn-sm"
                title="Email"
                style={{ borderRadius: '6px' }}
              >
                <Mail size={14} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '1.25rem', fontWeight: 600 }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.86rem' }}>
              {[
                { name: 'Overview', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Featured Projects', href: '#projects' },
                { name: 'Skills & Stack', href: '#skills' },
                { name: 'Education & Honors', href: '#education' },
                { name: 'Contact & Inquiries', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'color 0.15s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                    }}
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Line & Credentials */}
          <div>
            <h4 style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '1.25rem', fontWeight: 600 }}>
              Contact &amp; Credentials
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.86rem' }}>
              <div style={{ color: 'var(--text-secondary)' }}>
                Phone:{' '}
                <a href="https://wa.me/923187090077" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500 }}>
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                Email:{' '}
                <a href={`mailto:${PERSONAL_INFO.email}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500 }}>
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                Degree: <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>FAST-NUCES (BS Computer Science)</span>
              </div>
              
              <div
                style={{
                  marginTop: '0.5rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '9999px',
                  background: 'var(--badge-success-bg)',
                  border: '1px solid var(--badge-success-border)',
                  fontSize: '0.76rem',
                  color: 'var(--badge-success-text)',
                  fontWeight: 600,
                  width: 'fit-content',
                }}
              >
                <CheckCircle2 size={13} />
                <span>Available for Projects &amp; Roles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '1.75rem',
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
          }}
        >
          <div suppressHydrationWarning>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. AI Engineer &amp; Odoo Developer.
          </div>

          <button
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            style={{ fontSize: '0.78rem', gap: '0.45rem', borderRadius: '6px' }}
          >
            <span>Back to Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
