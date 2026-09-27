'use client';

import React from 'react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS } from '@/data/portfolioData';
import { X, Printer, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '860px',
          background: 'var(--bg-card)',
          padding: '2rem',
          border: '1px solid var(--bg-card-border)',
        }}
      >
        {/* Modal Controls Bar (Hidden during print) */}
        <div
          className="no-print"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '1.25rem',
            marginBottom: '1.5rem',
            borderBottom: '1px solid var(--bg-card-border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--bg-card-border)',
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
                letterSpacing: '0.04em',
              }}
            >
              CURRICULUM VITAE • 1-PAGE EXECUTIVE
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={handlePrint} className="btn btn-primary btn-sm" id="resume-print-btn">
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="btn btn-secondary btn-icon"
              title="Close Modal"
              style={{ width: '34px', height: '34px', borderRadius: '6px' }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div id="printable-resume">
          {/* Header */}
          <div className="resume-header">
            <h1 className="resume-title">{PERSONAL_INFO.name}</h1>
            <div className="resume-subtitle">
              AI Engineer &amp; Enterprise Odoo Developer
            </div>

            <div className="resume-contact-bar">
              <span className="contact-item">
                <Phone size={12} className="contact-icon" />
                <span>{PERSONAL_INFO.phone}</span>
              </span>
              <span className="contact-item">
                <Mail size={12} className="contact-icon" />
                <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
              </span>
              <span className="contact-item">
                <MapPin size={12} className="contact-icon" />
                <span>Lahore, Pakistan (Open to Remote &amp; Relocation)</span>
              </span>
              <span className="contact-item">
                <Linkedin size={12} className="contact-icon" />
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer">
                  linkedin.com/in/{PERSONAL_INFO.linkedinHandle}
                </a>
              </span>
              <span className="contact-item">
                <Github size={12} className="contact-icon" />
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer">
                  github.com/{PERSONAL_INFO.githubHandle}
                </a>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="resume-section">
            <h2 className="resume-section-title">Professional Summary</h2>
            <p className="resume-summary-text">
              Results-oriented Software Engineer and Odoo ERP Specialist with a BS in Computer Science from FAST-NUCES.
              Experienced in custom Odoo ERP module development, multi-tenant cloud architectures, edge hardware and IoT integrations
              (UHF RFID automated tracking, Zebra industrial thermal printers), enterprise LLMs with RAG, autonomous n8n workflows,
              and full-stack Flutter and web applications.
            </p>
          </div>

          {/* Technical Skills & Competencies */}
          <div className="resume-section">
            <h2 className="resume-section-title">Technical Competencies</h2>
            <div className="resume-skills-grid">
              <div className="resume-skill-row">
                <strong>Odoo ERP &amp; Modules:</strong> Custom Module Development, OWL (Odoo Web Library), Multi-Tenant SaaS, White-Labeling, Security &amp; Record Rules, QWeb Reporting, PostgreSQL Tuning.
              </div>
              <div className="resume-skill-row">
                <strong>Hardware &amp; IoT Integrations:</strong> UHF RFID Readers &amp; Antennas, Gen2 EPC Encoding, Zebra ZPL Thermal Label Printers, ESC/POS Network Receipt Printers.
              </div>
              <div className="resume-skill-row">
                <strong>Enterprise AI &amp; Workflows:</strong> Large Language Models (LLMs), RAG Architectures, System Prompt Engineering, Autonomous n8n Pipelines, LangChain, Computer Vision (YOLO).
              </div>
              <div className="resume-skill-row">
                <strong>Web &amp; Mobile Development:</strong> React 19, Next.js, TypeScript, Flutter &amp; Dart (iOS/Android), Node.js, REST APIs, TailwindCSS.
              </div>
              <div className="resume-skill-row">
                <strong>Databases &amp; Cloud:</strong> PostgreSQL, MySQL, Redis, SQLite, Docker, Linux Server Administration, Automated Cloud Backups.
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="resume-section">
            <h2 className="resume-section-title">Professional Experience</h2>
            <div className="resume-experience-list">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="resume-item">
                  <div className="resume-item-header">
                    <div>
                      <span className="resume-role-title">{exp.role}</span>
                      <span className="resume-company"> — {exp.company}</span>
                    </div>
                    <span className="resume-item-date">{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div className="resume-item-meta">{exp.location} • {exp.type}</div>
                  )}
                  <ul className="resume-highlights">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h2 className="resume-section-title">Education</h2>
            <div className="resume-item">
              <div className="resume-item-header">
                <div>
                  <span className="resume-role-title">{EDUCATION.degree}</span>
                  <span className="resume-company"> — {EDUCATION.institution}</span>
                </div>
                <span className="resume-item-date">{EDUCATION.period}</span>
              </div>
              <div className="resume-item-meta">{EDUCATION.campus}</div>
              {EDUCATION.achievements && (
                <ul className="resume-highlights">
                  {EDUCATION.achievements.map((ach, aIdx) => (
                    <li key={aIdx}>{ach}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Honors & Certifications */}
          <div className="resume-section">
            <h2 className="resume-section-title">Verified Certifications &amp; Honors</h2>
            <ul className="resume-highlights">
              {CERTIFICATIONS.map((c, i) => (
                <li key={i}>
                  <strong>{c.title}</strong> — {c.issuer} ({c.date}): {c.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
