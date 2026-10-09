'use client';

import React, { useState } from 'react';
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
  Radio,
  Bot,
  Receipt,
  MessageSquare,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

const DOMAINS = [
  {
    id: 'odoo',
    title: 'Odoo 17/18 & SaaS',
    icon: Server,
    color: 'var(--accent-primary)',
    headline: 'Custom Modules & Multi-Tenant SaaS',
    description: 'Turnkey Odoo architectures with custom OWL widgets, white-label de-branding, DigitalOcean high-availability deployments, and encrypted automated cloud backups.',
    metric: '20+ Systems Shipped',
    tech: ['Odoo 17/18', 'Python', 'OWL', 'PostgreSQL', 'Multi-Tenant', 'Docker'],
  },
  {
    id: 'rfid',
    title: 'Edge RFID & IoT',
    icon: Radio,
    color: 'var(--accent-emerald)',
    headline: 'UHF RFID & Zebra ZPL Automation',
    description: 'Hardware driver interfacing bridging 915MHz long-range RFID gateways and Zebra thermal printers directly into Odoo stock transfer workflows with zero manual entry.',
    metric: '70% Faster Dispatch',
    tech: ['UHF RFID 915MHz', 'Zebra ZPL II', 'TCP Sockets', 'Odoo MRP', 'Hardware Daemons'],
  },
  {
    id: 'ai',
    title: 'Enterprise AI & RAG',
    icon: Bot,
    color: '#a855f7',
    headline: 'Domain-Adapted LLMs & Autonomous Workflows',
    description: 'Private RAG pipelines indexing enterprise documentation and ERP data with strict prompt engineering guardrails, LangChain agents, and self-healing n8n automation.',
    metric: '80% Less Hallucination',
    tech: ['Enterprise LLMs', 'RAG / Vector DB', 'Prompt Engineering', 'n8n', 'Python / FastAPI'],
  },
  {
    id: 'pos',
    title: 'POS & Khata Ledgers',
    icon: Receipt,
    color: 'var(--accent-amber)',
    headline: 'Sub-Second Checkout & Double-Entry Accounting',
    description: 'High-speed retail POS systems with thermal receipt spooling, multi-store inventory sync, and digital Khata ledgers with automated WhatsApp payment reminders.',
    metric: '<50ms Response Time',
    tech: ['React / Next.js', 'ESC/POS', 'Double-Entry Logic', 'PostgreSQL', 'Redis'],
  },
];

export default function Hero({ onOpenResume, onOpenContact }: HeroProps) {
  const [activeDomainIdx, setActiveDomainIdx] = useState(0);
  const activeDomain = DOMAINS[activeDomainIdx];
  const DomainIcon = activeDomain.icon;

  const whatsappMessage = encodeURIComponent(
    'Hi Muhammad Hassaan! I reviewed your portfolio and would like to discuss an engineering opportunity / project.'
  );

  return (
    <section
      id="about"
      style={{
        paddingTop: '7.5rem',
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
            <div style={{ marginBottom: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.65rem', alignItems: 'center' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  color: 'var(--accent-emerald)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                }}
              >
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--accent-emerald)' }} />
                <span>Available for Full-time Roles &amp; High-Impact Consulting</span>
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
                fontSize: 'clamp(2.4rem, 5vw, 3.65rem)',
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
              Software engineer from <strong style={{ color: 'var(--text-primary)' }}>FAST-NUCES</strong> specializing in enterprise{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Odoo ERP custom modules</strong>, multi-tenant cloud architecture, edge IoT integrations (
              <strong style={{ color: 'var(--text-primary)' }}>UHF RFID &amp; Zebra ZPL printers</strong>), applied{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Enterprise LLMs &amp; RAG</strong>, and autonomous business workflows.
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

              <a
                href={`https://wa.me/923187090077?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-emerald"
                id="hero-whatsapp-btn"
                style={{ borderRadius: '6px' }}
                title="Message directly on WhatsApp"
              >
                <MessageSquare size={15} />
                <span>Chat on WhatsApp</span>
              </a>

              <button onClick={onOpenResume} className="btn btn-secondary" id="hero-resume-btn" style={{ borderRadius: '6px' }}>
                <Download size={15} />
                <span>Resume / CV</span>
              </button>
            </div>

            {/* Social & Contact Strip */}
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

          {/* Right Column: Profile Showcase & Interactive Architecture Radar */}
          <div>
            <div
              className="glass-card"
              style={{
                borderRadius: '14px',
                border: '1px solid var(--bg-card-border)',
                background: 'var(--bg-card)',
                boxShadow: 'var(--shadow-card-hover)',
                overflow: 'hidden',
              }}
            >
              {/* Profile Bar with Photo */}
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  borderBottom: '1px solid var(--bg-card-border)',
                  background: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                {/* Avatar with Glow Ring */}
                <div
                  style={{
                    position: 'relative',
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2.5px solid var(--accent-primary)',
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.35)',
                    flexShrink: 0,
                    background: 'var(--bg-secondary)',
                  }}
                >
                  <img
                    src="/images/muhammad-hassaan.jpg"
                    alt={PERSONAL_INFO.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      transform: 'scale(1.05)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '2px',
                      right: '4px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: 'var(--accent-emerald)',
                      border: '2px solid var(--bg-tertiary)',
                      boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)',
                    }}
                    title="Online & Ready for Projects"
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.4rem' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                      Muhammad Hassaan
                    </h3>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: 'var(--accent-emerald)',
                        background: 'rgba(16, 185, 129, 0.1)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                      }}
                    >
                      Production Verified
                    </span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--accent-primary)', fontWeight: 600, marginTop: '2px' }}>
                    FAST-NUCES
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    Specialized in High-Throughput Odoo &amp; Industrial IoT
                  </div>
                </div>
              </div>

              {/* Domain Selector Tabs */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  borderBottom: '1px solid var(--bg-card-border)',
                  background: 'var(--bg-secondary)',
                }}
              >
                {DOMAINS.map((domain, idx) => {
                  const Icon = domain.icon;
                  const isSelected = activeDomainIdx === idx;
                  return (
                    <button
                      key={domain.id}
                      onClick={() => setActiveDomainIdx(idx)}
                      style={{
                        padding: '0.75rem 0.4rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.35rem',
                        cursor: 'pointer',
                        border: 'none',
                        borderBottom: isSelected ? '2px solid var(--accent-primary)' : '2px solid transparent',
                        background: isSelected ? 'var(--bg-card)' : 'transparent',
                        color: isSelected ? 'var(--text-primary)' : 'var(--text-muted)',
                        transition: 'all 0.15s ease',
                      }}
                      title={domain.headline}
                    >
                      <Icon size={16} color={isSelected ? domain.color : 'currentColor'} />
                      <span style={{ fontSize: '0.68rem', fontWeight: isSelected ? 600 : 500, textAlign: 'center' }}>
                        {domain.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Domain Showcase Card */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <DomainIcon size={18} color={activeDomain.color} />
                    <span style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                      {activeDomain.headline}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: activeDomain.color,
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--bg-card-border)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                    }}
                  >
                    {activeDomain.metric}
                  </span>
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {activeDomain.description}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {activeDomain.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 500,
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--bg-card-border)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Quick Interactive Actions */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--bg-card-border)',
                    fontSize: '0.8rem',
                  }}
                >
                  <a
                    href="#lab"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--accent-primary)',
                      textDecoration: 'none',
                      fontWeight: 600,
                    }}
                  >
                    <Zap size={14} />
                    <span>Test in Interactive Lab</span>
                  </a>

                  <a
                    href="#projects"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--text-muted)',
                      textDecoration: 'none',
                      fontWeight: 500,
                    }}
                  >
                    <span>Inspect Projects</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>

              {/* Card Footer */}
              <div
                style={{
                  padding: '0.85rem 1.5rem',
                  background: 'var(--bg-tertiary)',
                  borderTop: '1px solid var(--bg-card-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.78rem',
                }}
              >
                <span style={{ color: 'var(--text-muted)' }}>Location: Lahore, Pakistan</span>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Remote &amp; Relocation Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
