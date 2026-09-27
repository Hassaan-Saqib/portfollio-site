'use client';

import React from 'react';
import { EXPERIENCES } from '@/data/portfolioData';
import { Briefcase, Calendar, ChevronRight, Sparkles, Terminal, GitCommit } from 'lucide-react';

export default function ExperienceSection() {
  const commitHashes = ['7f92a1c', '4b81c3d', '1e65f0a'];

  return (
    <section id="experience" className="section" style={{ background: 'rgba(5, 7, 12, 0.7)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-label">
            <Terminal size={13} />
            <span>[ CAREER_LOGS // PRODUCTION_TIMELINE ]</span>
          </div>
          <h2 className="section-title">
            Engineering <span className="gradient-text">Deployment History</span>
          </h2>
          <p className="section-subtitle" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}>
            Production engineering record across enterprise Odoo ERP ecosystems, AI algorithms, and distributed systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Glowing Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '18px',
              width: '1px',
              background: 'linear-gradient(180deg, #00f0ff 0%, #00ff88 50%, rgba(255, 255, 255, 0.05) 100%)',
              opacity: 0.6,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.role + exp.company}
                style={{
                  position: 'relative',
                  paddingLeft: '3.5rem',
                }}
              >
                {/* Timeline node */}
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '22px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '3px',
                    background: '#05070c',
                    border: idx === 0 ? '2px solid #00f0ff' : '2px solid #526075',
                    boxShadow: idx === 0 ? '0 0 12px #00f0ff' : 'none',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ width: '4px', height: '4px', background: idx === 0 ? '#00f0ff' : '#526075' }} />
                </div>

                {/* Card */}
                <div
                  className="glass-card"
                  style={{
                    padding: '1.75rem',
                    border: idx === 0 ? '1px solid rgba(0, 240, 255, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '6px',
                    background: 'rgba(8, 12, 18, 0.95)',
                  }}
                >
                  {/* Top Terminal Commit Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingBottom: '0.65rem',
                      marginBottom: '1rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-muted)' }}>
                      <GitCommit size={14} color="#00ff88" />
                      <span>commit {commitHashes[idx % commitHashes.length]}</span>
                      <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>//</span>
                      <span style={{ color: idx === 0 ? '#00ff88' : 'var(--text-secondary)' }}>
                        {idx === 0 ? '[CURRENT_ENGAGEMENT]' : '[ARCHIVED]'}
                      </span>
                    </div>

                    <span
                      style={{
                        color: exp.type === 'Full-Time' ? '#00ff88' : '#00f0ff',
                        background: exp.type === 'Full-Time' ? 'rgba(0, 255, 136, 0.08)' : 'rgba(0, 240, 255, 0.08)',
                        padding: '0.15rem 0.45rem',
                        borderRadius: '3px',
                        border: exp.type === 'Full-Time' ? '1px solid rgba(0, 255, 136, 0.25)' : '1px solid rgba(0, 240, 255, 0.25)',
                      }}
                    >
                      {exp.type.toUpperCase()}
                    </span>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>
                        {exp.role}
                      </h3>
                      <div style={{ fontSize: '0.95rem', color: '#00f0ff', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                        @ {exp.company}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: '#94a3b8',
                          background: 'rgba(255, 255, 255, 0.03)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '3px',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        <Calendar size={12} color="#00f0ff" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '1rem 0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.65rem',
                    }}
                  >
                    {exp.highlights.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.65rem',
                          fontSize: '0.88rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                        }}
                      >
                        <span style={{ color: '#00ff88', fontFamily: 'var(--font-mono)', flexShrink: 0, marginTop: '2px' }}>
                          [+]
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack pills */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.35rem',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    {exp.skills.map((s) => (
                      <span key={s} className="tech-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
