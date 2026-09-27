'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp, Terminal, Shield, Cpu } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#04060c',
        borderTop: '1px solid rgba(0, 240, 255, 0.15)',
        paddingTop: '3.5rem',
        paddingBottom: '2rem',
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
            borderBottom: '1px solid rgba(0, 240, 255, 0.12)',
          }}
        >
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.9rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '3px',
                  background: 'rgba(0, 240, 255, 0.12)',
                  border: '1px solid #00f0ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00f0ff',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                }}
              >
                MH
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-mono)' }}>
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: 1.6, marginBottom: '1.25rem', fontFamily: 'var(--font-mono)' }}>
              AI Engineer &amp; Odoo Developer. Architecting custom enterprise Odoo ERP modules,
              UHF RFID hardware pipelines, enterprise LLM agents, and full-stack Flutter &amp; web apps.
            </p>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                title="GitHub"
                style={{ padding: '0.4rem 0.65rem', fontSize: '0.74rem', borderRadius: '3px' }}
              >
                <Github size={15} />
                <span>GITHUB</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                title="LinkedIn"
                style={{ padding: '0.4rem 0.65rem', fontSize: '0.74rem', borderRadius: '3px' }}
              >
                <Linkedin size={15} />
                <span>LINKEDIN</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="btn btn-secondary"
                title="Email"
                style={{ padding: '0.4rem 0.65rem', fontSize: '0.74rem', borderRadius: '3px' }}
              >
                <Mail size={15} />
                <span>EMAIL</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: '#00f0ff', marginBottom: '1rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>
              // INDEX_ROUTING
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
              {[
                { name: '01_OVERVIEW', href: '#about' },
                { name: '02_CORE_SKILLS', href: '#skills' },
                { name: '03_KERNEL_EXPERIENCE', href: '#experience' },
                { name: '04_REPOSITORIES', href: '#projects' },
                { name: '05_HARDWARE_AI_LAB', href: '#lab' },
                { name: '06_ACADEMICS', href: '#education' },
                { name: '07_DISPATCH_CONSOLE', href: '#contact' },
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
                      gap: '0.35rem',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    <span style={{ color: '#00ff88' }}>&gt;</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Line & Telemetry */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: '#00f0ff', marginBottom: '1rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>
              // DIRECT_TELEMETRY
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
              <div style={{ color: 'var(--text-secondary)' }}>
                CALLSIGN: <span style={{ color: '#fff' }}>{PERSONAL_INFO.phone}</span>
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                DISPATCH: <span style={{ color: '#00f0ff' }}>{PERSONAL_INFO.email}</span>
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                ROLE: <span style={{ color: '#00ff88' }}>AI Engineer &amp; Odoo Developer</span>
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                ALMA_MATER: <span style={{ color: '#fff' }}>FAST-NUCES (BSCS)</span>
              </div>
              
              <div
                style={{
                  marginTop: '0.5rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '3px',
                  background: 'rgba(0, 255, 136, 0.08)',
                  border: '1px solid rgba(0, 255, 136, 0.25)',
                  fontSize: '0.72rem',
                  color: '#00ff88',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <Shield size={12} color="#00ff88" />
                <span>ALL_SYSTEMS_OPERATIONAL // 99.98%</span>
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
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. AI Engineer &amp; Odoo Developer. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            style={{ fontSize: '0.74rem', gap: '0.4rem', borderRadius: '3px' }}
          >
            <span>[ RETURN_TO_TOP ]</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}

