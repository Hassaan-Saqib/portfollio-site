'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/portfolioData';
import { 
  FolderGit2, 
  Github, 
  X,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = [
    'All',
    'Odoo & ERP',
    'AI & LLMs',
    'Automation & Workflows',
    'ERP & POS',
    'Mobile & Apps',
    'Full-Stack',
    'Hardware & IoT',
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <FolderGit2 size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Engineered Systems &amp; Architecture
          </h2>
          <p className="section-subtitle">
            Production systems spanning custom Odoo ERP modules, edge RFID hardware,
            autonomous n8n workflows, enterprise LLMs, and Flutter mobile apps.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.45rem 0.95rem',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  border: isSelected ? '1px solid var(--accent-primary)' : '1px solid var(--bg-card-border)',
                  background: isSelected ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  transition: 'all 0.15s ease',
                }}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem',
              }}
            >
              <div>
                {/* Category & Metric Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                      background: 'rgba(59, 130, 246, 0.08)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '9999px',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
                    }}
                  >
                    {project.category}
                  </span>

                  {project.metric && (
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        background: 'var(--bg-tertiary)',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '9999px',
                        border: '1px solid var(--bg-card-border)',
                      }}
                    >
                      {project.metric}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.65rem',
                    lineHeight: 1.35,
                  }}
                >
                  {project.title}
                </h3>

                {/* Short Description */}
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.shortDesc}
                </p>

                {/* Key Bullet Highlights preview */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 1.25rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.45rem',
                  }}
                >
                  {project.keyHighlights.slice(0, 2).map((h, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.55rem',
                        fontSize: '0.84rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <CheckCircle2 size={15} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.35rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--bg-card-border)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.technologies.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                  }}
                >
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1, borderRadius: '6px' }}
                  >
                    <span>View Architecture</span>
                    <ArrowRight size={14} />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm btn-icon"
                      style={{ borderRadius: '6px' }}
                      title="GitHub Source Code"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      {activeProjectModal && (
        <div className="modal-overlay" onClick={() => setActiveProjectModal(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ padding: '2.25rem', borderRadius: '12px' }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1rem',
                marginBottom: '1.5rem',
                borderBottom: '1px solid var(--bg-card-border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--accent-primary)',
                    background: 'rgba(59, 130, 246, 0.08)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                  }}
                >
                  {activeProjectModal.category}
                </span>
                {activeProjectModal.metric && (
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      background: 'var(--bg-tertiary)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      border: '1px solid var(--bg-card-border)',
                    }}
                  >
                    {activeProjectModal.metric}
                  </span>
                )}
              </div>

              <button
                onClick={() => setActiveProjectModal(null)}
                style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--bg-card-border)',
                  color: 'var(--text-primary)',
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={16} />
              </button>
            </div>

            <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 700 }}>
              {activeProjectModal.title}
            </h2>

            <div
              style={{
                fontSize: '0.94rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '1.75rem',
              }}
            >
              {activeProjectModal.description}
            </div>

            <h4 style={{ fontSize: '0.96rem', color: 'var(--text-primary)', marginBottom: '0.85rem', fontWeight: 600 }}>
              Key Solutions &amp; Engineering Highlights
            </h4>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 1.75rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
              }}
            >
              {activeProjectModal.keyHighlights.map((hl, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.88rem',
                    lineHeight: 1.5,
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>

            <h4 style={{ fontSize: '0.96rem', color: 'var(--text-primary)', marginBottom: '0.85rem', fontWeight: 600 }}>
              Technologies &amp; Architecture
            </h4>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.45rem',
                marginBottom: '2rem',
              }}
            >
              {activeProjectModal.technologies.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>

            {/* Modal Footer Links */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '0.85rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--bg-card-border)',
              }}
            >
              {activeProjectModal.githubUrl && (
                <a
                  href={activeProjectModal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ borderRadius: '6px' }}
                >
                  <Github size={15} />
                  <span>Source Code</span>
                </a>
              )}

              <button
                onClick={() => setActiveProjectModal(null)}
                className="btn btn-primary btn-sm"
                style={{ borderRadius: '6px' }}
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
