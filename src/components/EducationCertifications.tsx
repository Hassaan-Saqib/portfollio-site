'use client';

import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '@/data/portfolioData';
import { GraduationCap, Award, Calendar, Check, Trophy, Terminal, ShieldCheck } from 'lucide-react';

export default function EducationCertifications() {
  return (
    <section id="education" className="section" style={{ background: 'rgba(3, 5, 10, 0.65)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Terminal size={13} color="#00ff88" />
            <span style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
              [ CREDENTIAL_LOG // ACADEMIC_KERNEL ]
            </span>
          </div>
          <h2 className="section-title">
            Engineering Degree &amp; <span className="gradient-text">Verified Honors</span>
          </h2>
          <p className="section-subtitle">
            Formal foundations in systems software, algorithms, and distributed computing from FAST-NUCES,
            backed by industry verifications.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Education Card */}
          <div
            className="glass-card"
            style={{
              borderRadius: '4px',
              border: '1px solid rgba(0, 240, 255, 0.22)',
              background: 'rgba(5, 8, 16, 0.88)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Terminal Chrome Bar */}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span style={{ color: '#00f0ff' }}>sys://academic/</span>
                <span style={{ color: '#fff' }}>fast_nuces_bscs</span>
              </div>
              <span style={{ color: '#00ff88' }}>[CONFERRED]</span>
            </div>

            <div style={{ padding: '1.75rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  color: '#00f0ff',
                  marginBottom: '0.75rem',
                  padding: '0.2rem 0.55rem',
                  background: 'rgba(0, 240, 255, 0.08)',
                  borderRadius: '3px',
                  border: '1px solid rgba(0, 240, 255, 0.2)',
                }}
              >
                <Calendar size={12} />
                <span>EPOCH: {EDUCATION.period}</span>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 800, marginBottom: '0.35rem', fontFamily: 'var(--font-mono)' }}>
                {EDUCATION.degree}
              </h3>

              <div style={{ fontSize: '0.95rem', color: '#00ff88', fontWeight: 600, marginBottom: '0.25rem', fontFamily: 'var(--font-mono)' }}>
                {EDUCATION.institution}
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
                // {EDUCATION.campus}
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                }}
              >
                {EDUCATION.achievements?.map((ach, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.55rem',
                      fontSize: '0.86rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <span style={{ color: '#00ff88', fontWeight: 'bold' }}>[+]</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                padding: '1rem 1.75rem',
                borderTop: '1px solid rgba(0, 240, 255, 0.12)',
                background: 'rgba(0, 240, 255, 0.02)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '2px',
                  background: 'rgba(0, 240, 255, 0.08)',
                  color: '#00f0ff',
                  border: '1px solid rgba(0, 240, 255, 0.25)',
                }}
              >
                FIELD: COMPUTER_SCIENCE
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '2px',
                  background: 'rgba(0, 255, 136, 0.08)',
                  color: '#00ff88',
                  border: '1px solid rgba(0, 255, 136, 0.25)',
                }}
              >
                STATUS: GRADUATED
              </span>
            </div>
          </div>

          {/* Certifications & Honors */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={cert.title}
                className="glass-card"
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '4px',
                  background: 'rgba(5, 8, 16, 0.88)',
                  border: idx === 0 
                    ? '1px solid rgba(255, 184, 0, 0.35)' 
                    : '1px solid rgba(0, 240, 255, 0.18)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '3px',
                      background: idx === 0 
                        ? 'rgba(255, 184, 0, 0.12)' 
                        : 'rgba(0, 240, 255, 0.08)',
                      border: idx === 0 
                        ? '1px solid rgba(255, 184, 0, 0.4)' 
                        : '1px solid rgba(0, 240, 255, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: idx === 0 ? '#ffb800' : '#00f0ff',
                      flexShrink: 0,
                    }}
                  >
                    {idx === 0 ? <Trophy size={18} /> : <ShieldCheck size={18} />}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.2rem' }}>
                      <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-mono)' }}>
                        {cert.title}
                      </h4>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        [{cert.date}]
                      </span>
                    </div>

                    <div style={{ fontSize: '0.78rem', color: '#00f0ff', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                      ISSUER: {cert.issuer}
                    </div>

                    {cert.description && (
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.65rem' }}>
                        {cert.description}
                      </p>
                    )}

                    {cert.badge && (
                      <span
                        style={{
                          display: 'inline-block',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          fontWeight: 600,
                          padding: '0.2rem 0.5rem',
                          borderRadius: '2px',
                          background: idx === 0 ? 'rgba(255, 184, 0, 0.12)' : 'rgba(0, 255, 136, 0.1)',
                          color: idx === 0 ? '#ffb800' : '#00ff88',
                          border: idx === 0 ? '1px solid rgba(255, 184, 0, 0.3)' : '1px solid rgba(0, 255, 136, 0.3)',
                        }}
                      >
                        [{cert.badge}]
                      </span>
                    )}
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

