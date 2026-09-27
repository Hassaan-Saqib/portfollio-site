'use client';

import React from 'react';
import { EXPERIENCES } from '@/data/portfolioData';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-label">
            <Briefcase size={14} />
            <span>Career History</span>
          </div>
          <h2 className="section-title">
            Professional Experience
          </h2>
          <p className="section-subtitle">
            Engineering record across enterprise Odoo ERP ecosystems, applied Artificial Intelligence, and distributed architectures.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Guide Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '18px',
              width: '2px',
              background: 'var(--bg-card-border)',
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
                    left: '11px',
                    top: '28px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: 'var(--bg-card)',
                    border: idx === 0 ? '2px solid var(--accent-primary)' : '2px solid var(--text-muted)',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: idx === 0 ? 'var(--accent-primary)' : 'var(--text-muted)',
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className="glass-card"
                  style={{
                    padding: '1.75rem',
                  }}
                >
                  {/* Top Status Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingBottom: '0.85rem',
                      marginBottom: '1rem',
                      borderBottom: '1px solid var(--bg-card-border)',
                      fontSize: '0.8rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          background: idx === 0 ? '#10b981' : 'var(--text-muted)',
                        }}
                      />
                      <span style={{ color: idx === 0 ? '#10b981' : 'var(--text-muted)', fontWeight: 600 }}>
                        {idx === 0 ? 'Current Role' : 'Previous Experience'}
                      </span>
                    </div>

                    <span
                      style={{
                        color: 'var(--text-secondary)',
                        background: 'var(--bg-tertiary)',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '9999px',
                        border: '1px solid var(--bg-card-border)',
                        fontWeight: 600,
                        fontSize: '0.74rem',
                      }}
                    >
                      {exp.type}
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
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                        {exp.role}
                      </h3>
                      <div style={{ fontSize: '0.95rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                        @ {exp.company}
                      </div>
                    </div>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        color: 'var(--text-muted)',
                        background: 'var(--bg-tertiary)',
                        padding: '0.3rem 0.65rem',
                        borderRadius: '6px',
                        border: '1px solid var(--bg-card-border)',
                      }}
                    >
                      <Calendar size={13} />
                      {exp.period}
                    </span>
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
                        <CheckCircle2 size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack pills */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid var(--bg-card-border)',
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
