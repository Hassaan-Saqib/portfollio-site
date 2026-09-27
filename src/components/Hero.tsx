'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { 
  ArrowRight, 
  Download, 
  Terminal, 
  Cpu, 
  Radio, 
  Server, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
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
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Intro & Elevator Pitch */}
          <div>
            {/* Status Breadcrumb */}
            <div style={{ marginBottom: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center' }}>
              <div className="status-indicator">
                <span className="status-dot"></span>
                <span>AI_ENGINEER // ODOO_DEVELOPER</span>
              </div>
              <div className="glass-pill">
                <span style={{ color: '#00f0ff' }}>$</span>
                <span>FAST-NUCES [BSCS.2024]</span>
              </div>
              <div className="glass-pill" style={{ borderColor: 'rgba(255, 184, 0, 0.3)', color: '#ffb800' }}>
                <span>[AVAILABLE FOR CONTRACT]</span>
              </div>
            </div>

            {/* Name & Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '0.85rem',
                fontFamily: 'var(--font-sans)',
              }}
            >
              <span style={{ color: '#fff' }}>MUHAMMAD</span> <span className="gradient-text">HASSAAN</span>
              <span className="terminal-cursor" />
            </h1>

            <div
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)',
                fontWeight: 600,
                color: '#00f0ff',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-mono)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span style={{ color: '#00ff88' }}>&gt;</span>
              <span>AI Engineer &amp; Enterprise Odoo Developer</span>
            </div>

            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
                maxWidth: '600px',
              }}
            >
              BSCS graduate from <strong style={{ color: '#fff' }}>FAST-NUCES</strong> specializing in enterprise{' '}
              <strong style={{ color: '#00f0ff' }}>AI engineering &amp; custom Odoo ERP architectures</strong>.
              Designing custom Odoo modules (UHF RFID tracking, white-label multi-tenant SaaS),
              customized enterprise LLMs with RAG, autonomous n8n workflows, and Flutter applications.
            </p>

            {/* Technical Hardware/System Specs Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '0.6rem',
                marginBottom: '2rem',
                padding: '0.85rem',
                background: 'rgba(10, 14, 22, 0.9)',
                border: '1px solid rgba(0, 240, 255, 0.15)',
                borderRadius: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
              }}
            >
              <div>
                <div style={{ color: 'var(--text-muted)' }}>CORE_KERNEL</div>
                <div style={{ color: '#00f0ff', fontWeight: 700 }}>ODOO 17 / 18</div>
              </div>
              <div>
                <div style={{ color: 'var(--text-muted)' }}>EDGE_HARDWARE</div>
                <div style={{ color: '#00ff88', fontWeight: 700 }}>UHF RFID / ZPL</div>
              </div>
              <div>
                <div style={{ color: 'var(--text-muted)' }}>AI_PIPELINES</div>
                <div style={{ color: '#ffb800', fontWeight: 700 }}>LLMs • RAG • n8n</div>
              </div>
              <div>
                <div style={{ color: 'var(--text-muted)' }}>MOBILE_CORE</div>
                <div style={{ color: '#a855f7', fontWeight: 700 }}>FLUTTER &amp; ADK</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginBottom: '2.5rem',
              }}
            >
              <a href="#projects" className="btn btn-primary" id="hero-explore-projects-btn">
                <span>[ VIEW DEPLOYMENTS ]</span>
                <ArrowRight size={14} />
              </a>

              <a href="#lab" className="btn btn-emerald" id="hero-hardware-lab-btn">
                <Radio size={14} />
                <span>[ HARDWARE_LAB &gt; ]</span>
              </a>

              <button onClick={onOpenResume} className="btn btn-secondary" id="hero-resume-btn">
                <Download size={14} />
                <span>[ ~/CV.PDF ]</span>
              </button>
            </div>

            {/* Quick Contact & Social Handles */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                PORT_ACCESS:
              </span>

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
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Github size={14} />
                <span>git://MrHassaan</span>
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
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00ff88')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Linkedin size={14} />
                <span>in/muhammad-hassaan1</span>
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
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffb800')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Mail size={14} />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Profile Card with Live System Telemetry */}
          <div style={{ position: 'relative' }}>
            {/* Glowing Backdrop */}
            <div
              style={{
                position: 'absolute',
                inset: '-15px',
                borderRadius: '30px',
                background: 'radial-gradient(circle at 60% 40%, rgba(0, 242, 254, 0.25) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 80%)',
                filter: 'blur(30px)',
                zIndex: 0,
              }}
            />

            <div
              className="glass-card"
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid rgba(0, 240, 255, 0.25)',
                background: 'rgba(8, 12, 18, 0.95)',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 240, 255, 0.1)',
              }}
            >
              {/* Header bar of Card */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '0.85rem',
                  marginBottom: '1.25rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      marginLeft: '0.5rem',
                    }}
                  >
                    mh@terminal:/workspace#
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: '#00ff88',
                    background: 'rgba(0, 255, 136, 0.1)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '3px',
                    border: '1px solid rgba(0, 255, 136, 0.3)',
                    letterSpacing: '0.04em',
                  }}
                >
                  SYSTEM_ACTIVE
                </span>
              </div>

              {/* Terminal System Identity Node (No Portrait) */}
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center',
                  marginBottom: '1.25rem',
                  padding: '1rem',
                  background: 'rgba(0, 240, 255, 0.03)',
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                  borderRadius: '4px',
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '3px',
                    background: 'rgba(0, 255, 136, 0.08)',
                    border: '1px solid rgba(0, 255, 136, 0.35)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00ff88',
                    flexShrink: 0,
                    fontFamily: 'var(--font-mono)',
                    boxShadow: '0 0 12px rgba(0, 255, 136, 0.15)',
                  }}
                >
                  <Terminal size={22} color="#00ff88" />
                  <span style={{ fontSize: '0.58rem', color: '#00f0ff', marginTop: '2px', fontWeight: 700 }}>
                    MH:ROOT
                  </span>
                </div>

                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '0.2rem' }}>
                    <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-mono)' }}>
                      Muhammad Hassaan
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        color: '#00ff88',
                        background: 'rgba(0, 255, 136, 0.1)',
                        padding: '0.12rem 0.4rem',
                        borderRadius: '2px',
                        border: '1px solid rgba(0, 255, 136, 0.3)',
                      }}
                    >
                      UID: 0x1000
                    </span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#00f0ff', marginBottom: '0.45rem', fontFamily: 'var(--font-mono)' }}>
                    AI Engineer &amp; Odoo Developer
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    <span className="tech-tag tech-tag-highlight">[ Odoo_Modules ]</span>
                    <span className="tech-tag tech-tag-highlight">[ RFID_Mesh ]</span>
                    <span className="tech-tag tech-tag-highlight">[ Multi_Tenant ]</span>
                    <span className="tech-tag tech-tag-highlight">[ LLM_Agents ]</span>
                  </div>
                </div>
              </div>

              {/* Live Terminal Telemetry Box */}
              <div
                style={{
                  background: 'rgba(3, 5, 10, 0.95)',
                  borderRadius: '4px',
                  padding: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  border: '1px solid rgba(0, 240, 255, 0.14)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.45rem',
                }}
              >
                <div style={{ color: '#94a3b8' }}>
                  <span style={{ color: '#00f0ff' }}>mh@terminal:~$</span> ./verify_cluster_services.sh
                </div>
                <div style={{ color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={13} color="#00f0ff" />
                  <span>Odoo Multi-Tenant Cluster: ONLINE [White-Label Active]</span>
                </div>
                <div style={{ color: '#00ff88', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={13} color="#00ff88" />
                  <span>UHF RFID Edge Tracking: LIVE [915MHz Socket Stream]</span>
                </div>
                <div style={{ color: '#ffb800', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={13} color="#ffb800" />
                  <span>n8n Business Workflows: AUTOMATED [Zero Latency]</span>
                </div>
                <div style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={13} color="#38bdf8" />
                  <span>Enterprise LLM &amp; RAG: READY [92% Precision]</span>
                </div>
              </div>

              {/* Quick Contact Bar below terminal */}
              <div
                style={{
                  marginTop: '1.25rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                }}
              >
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    textDecoration: 'none',
                    padding: '0.55rem 0.8rem',
                    borderRadius: '3px',
                    background: 'rgba(0, 255, 136, 0.05)',
                    border: '1px solid rgba(0, 255, 136, 0.25)',
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#00ff88',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#00ff88';
                    e.currentTarget.style.background = 'rgba(0, 255, 136, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.25)';
                    e.currentTarget.style.background = 'rgba(0, 255, 136, 0.05)';
                  }}
                >
                  <Phone size={13} color="#00ff88" />
                  <span>[ CALL: +92... ]</span>
                </a>

                <button
                  onClick={onOpenContact}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    padding: '0.55rem 0.8rem',
                    borderRadius: '3px',
                    background: 'rgba(0, 240, 255, 0.08)',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#00f0ff',
                    cursor: 'pointer',
                    fontWeight: 600,
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 240, 255, 0.18)';
                    e.currentTarget.style.borderColor = '#00f0ff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 240, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.3)';
                  }}
                >
                  <Mail size={13} />
                  <span>[ DISPATCH_MSG ]</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
