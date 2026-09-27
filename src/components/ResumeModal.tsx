'use client';

import React from 'react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS, SKILL_CATEGORIES } from '@/data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

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
          maxWidth: '850px',
          background: '#0a0f1d',
          padding: '2.5rem',
          border: '1px solid rgba(0, 242, 254, 0.3)',
        }}
      >
        {/* Modal Controls Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '1.25rem',
            marginBottom: '1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: '#00f2fe',
                background: 'rgba(0, 242, 254, 0.1)',
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
              }}
            >
              CURRICULUM VITAE
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={handlePrint} className="btn btn-secondary btn-sm" id="resume-print-btn">
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: '#fff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div id="printable-resume" style={{ color: '#e2e8f0', lineHeight: 1.6 }}>
          {/* Header */}
          <div style={{ borderBottom: '2px solid rgba(0, 242, 254, 0.4)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '2.2rem', color: '#fff', fontWeight: 800, marginBottom: '0.25rem' }}>
              {PERSONAL_INFO.name}
            </h1>
            <div style={{ fontSize: '1.1rem', color: '#38bdf8', fontWeight: 600, marginBottom: '0.75rem' }}>
              {PERSONAL_INFO.role}
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Phone size={13} color="#10b981" /> {PERSONAL_INFO.phone}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Mail size={13} color="#00f2fe" /> {PERSONAL_INFO.email}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Linkedin size={13} color="#38bdf8" /> linkedin.com/in/{PERSONAL_INFO.linkedinHandle}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Github size={13} color="#fff" /> github.com/{PERSONAL_INFO.githubHandle}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#00f2fe', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              Professional Summary
            </h3>
            <p style={{ fontSize: '0.925rem', color: '#cbd5e1', lineHeight: 1.65 }}>
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Core Competencies */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#00f2fe', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
              Core Competencies
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
              <div>
                <strong style={{ color: '#fff' }}>• Odoo ERP &amp; Custom Modules:</strong> Custom Module Development, Multi-Tenant Architecture, Odoo White-Labeling &amp; De-branding, OWL (Odoo Web Library), UHF RFID Real-Time Tracking, Zebra ZPL Printing, QWeb Reports, Security/Record Rules, Automated Cloud Backups, PostgreSQL Tuning.
              </div>
              <div>
                <strong style={{ color: '#fff' }}>• AI, LLMs &amp; Prompt Engineering:</strong> Large Language Models (LLMs), System Prompt Engineering, Enterprise RAG, LangChain, Hallucination Mitigation, Agent Development Kit (ADK), YOLO &amp; Computer Vision.
              </div>
              <div>
                <strong style={{ color: '#fff' }}>• Automation &amp; Workflows:</strong> n8n Workflow Automation, Webhooks, Multi-Platform API Orchestration, Self-Healing Error Handling, Event-Driven Pipelines.
              </div>
              <div>
                <strong style={{ color: '#fff' }}>• ERP, Khata &amp; POS Systems:</strong> Khata Digital Ledger Systems, Point of Sale (POS), Double-Entry Accounting Logic, Receipt &amp; Barcode Printing (ESC/POS), Multi-Branch Synchronization.
              </div>
              <div>
                <strong style={{ color: '#fff' }}>• Mobile &amp; App Development:</strong> Flutter, Dart, Cross-Platform iOS &amp; Android, Android Development Kit (ADK), State Management (Bloc / Provider), SQLite Offline Storage.
              </div>
              <div>
                <strong style={{ color: '#fff' }}>• Data Science, ML &amp; ETL Jobs:</strong> Machine Learning, Statistical EDA, Distributed ETL Data Pipelines, Data Cleaning &amp; Preprocessing, Scikit-learn, Pandas, NumPy.
              </div>
              <div>
                <strong style={{ color: '#fff' }}>• Full-Stack &amp; Modern Websites:</strong> Next.js, React 19, TypeScript, JavaScript, Node.js, Express, PostgreSQL, MySQL, Redis, RESTful API Architecture.
              </div>
            </div>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#00f2fe', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              Work Experience
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: '#fff' }}>
                      {exp.role} <span style={{ color: '#38bdf8' }}>| {exp.company}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {exp.period}
                    </div>
                  </div>
                  <ul style={{ paddingLeft: '1.2rem', marginTop: '0.4rem', fontSize: '0.875rem', color: '#cbd5e1' }}>
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} style={{ marginBottom: '0.35rem' }}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#00f2fe', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              Education
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
              <div style={{ fontWeight: 700, color: '#fff' }}>
                {EDUCATION.institution}, {EDUCATION.campus}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                {EDUCATION.period}
              </div>
            </div>
            <div style={{ color: '#38bdf8', fontSize: '0.9rem', marginTop: '0.2rem' }}>
              {EDUCATION.degree}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 style={{ fontSize: '1.15rem', color: '#00f2fe', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              Achievements &amp; Certificates
            </h3>
            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.875rem', color: '#cbd5e1' }}>
              {CERTIFICATIONS.map((c, i) => (
                <li key={i} style={{ marginBottom: '0.35rem' }}>
                  <strong style={{ color: '#fff' }}>{c.title}</strong>: {c.description} ({c.date})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
