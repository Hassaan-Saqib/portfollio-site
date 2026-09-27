'use client';

import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '@/data/portfolioData';
import { GraduationCap, Award, Calendar, CheckCircle2, Trophy, ShieldCheck } from 'lucide-react';

export default function EducationCertifications() {
  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <GraduationCap size={14} />
            <span>Academic Background &amp; Honors</span>
          </div>
          <h2 className="section-title">
            Engineering Degree &amp; <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Formal foundations in systems software, data structures, and distributed computing from FAST-NUCES,
            backed by industry certifications.
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
              borderRadius: '12px',
              border: '1px solid var(--bg-card-border)',
              background: 'var(--bg-card)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Header Bar */}
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
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>University Education</span>
              <span
                style={{
                  color: 'var(--badge-success-text)',
                  background: 'var(--badge-success-bg)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--badge-success-border)',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                }}
              >
                Conferred
              </span>
            </div>

            <div style={{ padding: '2rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                  padding: '0.25rem 0.65rem',
                  background: 'var(--bg-secondary)',
                  borderRadius: '6px',
                  border: '1px solid var(--bg-card-border)',
                }}
              >
                <Calendar size={13} />
                <span>{EDUCATION.period}</span>
              </div>

              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.4rem' }}>
                {EDUCATION.degree}
              </h3>

              <div style={{ fontSize: '1rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
                {EDUCATION.institution}
              </div>

              <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                {EDUCATION.campus}
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                {EDUCATION.achievements?.map((ach, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                    }}
                  >
                    <CheckCircle2 size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                padding: '1.1rem 2rem',
                borderTop: '1px solid var(--bg-card-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  padding: '0.25rem 0.65rem',
                  borderRadius: '9999px',
                  background: 'var(--badge-info-bg)',
                  color: 'var(--badge-info-text)',
                  border: '1px solid var(--badge-info-border)',
                }}
              >
                Computer Science
              </span>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  padding: '0.25rem 0.65rem',
                  borderRadius: '9999px',
                  background: 'var(--badge-success-bg)',
                  color: 'var(--badge-success-text)',
                  border: '1px solid var(--badge-success-border)',
                }}
              >
                Graduated BS
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
                  padding: '1.5rem',
                  borderRadius: '12px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--bg-card-border)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '8px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--bg-card-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)',
                      flexShrink: 0,
                    }}
                  >
                    {idx === 0 ? <Trophy size={18} /> : <ShieldCheck size={18} />}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.25rem' }}>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {cert.title}
                      </h4>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          color: 'var(--text-muted)',
                          fontWeight: 500,
                        }}
                      >
                        {cert.date}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 500 }}>
                      Issuer: <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{cert.issuer}</span>
                    </div>

                    {cert.description && (
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                        {cert.description}
                      </p>
                    )}

                    {cert.badge && (
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          padding: '0.25rem 0.65rem',
                          borderRadius: '9999px',
                          background: 'var(--bg-secondary)',
                          color: 'var(--text-primary)',
                          border: '1px solid var(--bg-card-border)',
                        }}
                      >
                        {cert.badge}
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
