'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import {
  ArrowRight,
  Download,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Phone,
  Server,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export default function Hero({ onOpenResume, onOpenContact }: HeroProps) {
  return (
    <section
      id="about"
      style={{
        paddingTop: '8rem',
        paddingBottom: '4.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Intro */}
          <div>
            {/* Status Pills */}
            <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.65rem', alignItems: 'center' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  color: '#10b981',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                }}
              >
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981' }} />
                <span>Available for Projects &amp; Full-Time</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--bg-card-border)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                }}
              >
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>FAST-NUCES</span>
                <span>• BS Computer Science</span>
              </div>
            </div>

            {/* Name & Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '0.75rem',
                color: 'var(--text-primary)',
              }}
            >
              {PERSONAL_INFO.name}
            </h1>

            <div
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                fontWeight: 600,
                color: 'var(--accent-primary)',
                marginBottom: '1.25rem',
              }}
            >
              AI Engineer &amp; Enterprise Odoo Developer
            </div>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '580px',
              }}
            >
              AI Engineer specializing in enterprise <strong style={{ color: 'var(--text-primary)' }}>Odoo ERP custom modules</strong>,
              multi-tenant cloud architecture, edge hardware integrations (<strong style={{ color: 'var(--text-primary)' }}> rfid configuration and automation with IOT devices</strong>),
              applied AI/LLMs, and autonomous n8n workflows.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginBottom: '2rem',
              }}
            >
              <a href="#projects" className="btn btn-primary" id="hero-explore-projects-btn" style={{ borderRadius: '6px' }}>
                <span>View Projects</span>
                <ArrowRight size={15} />
              </a>

              <button onClick={onOpenResume} className="btn btn-secondary" id="hero-resume-btn" style={{ borderRadius: '6px' }}>
                <Download size={15} />
                <span>Resume / CV</span>
              </button>

              <button onClick={onOpenContact} className="btn btn-secondary" id="hero-contact-btn" style={{ borderRadius: '6px' }}>
                <Mail size={15} />
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Social Links */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--bg-card-border)',
              }}
            >
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                id="hero-github-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                id="hero-linkedin-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                id="hero-email-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Mail size={15} />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Competencies Card */}
          <div>
            <div
              className="glass-card"
              style={{
                borderRadius: '12px',
                border: '1px solid var(--bg-card-border)',
                background: 'var(--bg-card)',
                boxShadow: 'var(--shadow-card)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  borderBottom: '1px solid var(--bg-card-border)',
                  background: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Layers size={16} color="var(--accent-primary)" />
                  <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                    Engineering Focus &amp; Stack
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: '#10b981',
                    fontWeight: 600,
                    background: 'rgba(16, 185, 129, 0.08)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                  }}
                >
                  Production Ready
                </span>
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Item 1 */}
                <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'var(--bg-tertiary)', border: '1px solid var(--bg-card-border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                      Enterprise Odoo 17 / 18
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Specialist</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    Custom business modules, multi-tenant SaaS architecture, white-labeling, and PostgreSQL optimization.
                  </p>
                </div>

                {/* Item 2 */}
                <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'var(--bg-tertiary)', border: '1px solid var(--bg-card-border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                      Industrial Hardware &amp; RFID
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Production Driver</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    Real-time UHF RFID 915MHz interrogation and Zebra ZPL barcode printer spooling into ERP.
                  </p>
                </div>

                {/* Item 3 */}
                <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'var(--bg-tertiary)', border: '1px solid var(--bg-card-border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                      Applied AI &amp; Enterprise LLMs
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>RAG &amp; Agents</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    Custom RAG knowledge pipelines, system prompts, guardrails, and autonomous n8n workflows.
                  </p>
                </div>

                {/* Item 4 */}
                <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'var(--bg-tertiary)', border: '1px solid var(--bg-card-border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                      Cross-Platform &amp; POS Systems
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Full-Stack</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    Flutter mobile apps, financial Khata ledgers, and retail Point of Sale systems.
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div
                style={{
                  padding: '1rem 1.5rem',
                  background: 'var(--bg-tertiary)',
                  borderTop: '1px solid var(--bg-card-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.82rem',
                }}
              >
                <span style={{ color: 'var(--text-secondary)' }}>Based in Lahore, Pakistan</span>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Remote &amp; Relocation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
