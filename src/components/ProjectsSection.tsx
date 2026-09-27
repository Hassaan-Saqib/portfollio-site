'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  Cpu, 
  Sparkles, 
  ChevronRight, 
  X,
  Radio,
  Server,
  Code2,
  Database,
  Terminal,
  FileCode
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
    'Data & ML',
    'AI & Vision',
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
            <Terminal size={13} />
            <span>[ SYSTEM_DEPLOYMENTS // REPOSITORY_REGISTRY ]</span>
          </div>
          <h2 className="section-title">
            Engineered <span className="gradient-text">Systems &amp; Architecture</span>
          </h2>
          <p className="section-subtitle" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}>
            Production systems spanning custom Odoo ERP modules, edge RFID gateways,
            autonomous n8n workflow pipelines, enterprise LLMs, and Flutter mobile apps.
          </p>
        </div>

        {/* Filter Pills (CLI Filter Bar) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {categories.map((cat, idx) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '4px',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isSelected ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isSelected ? 'rgba(0, 240, 255, 0.12)' : 'rgba(10, 14, 22, 0.6)',
                  color: isSelected ? '#00f0ff' : 'var(--text-secondary)',
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? '0 0 12px rgba(0, 240, 255, 0.2)' : 'none',
                  letterSpacing: '0.03em',
                }}
              >
                <span>{isSelected ? '&gt; ' : ''}{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
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
                padding: '1.5rem',
                borderRadius: '6px',
                border: project.featured ? '1px solid rgba(0, 240, 255, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(8, 12, 18, 0.95)',
              }}
            >
              <div>
                {/* Top Terminal Chrome Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '0.75rem',
                    marginBottom: '1rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ff5f56' }} />
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#27c93f' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', marginLeft: '0.4rem' }}>
                      src://{project.id}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: '#00ff88',
                      background: 'rgba(0, 255, 136, 0.08)',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '3px',
                      border: '1px solid rgba(0, 255, 136, 0.25)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    PROD_READY
                  </span>
                </div>

                {/* Category & Metric Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.85rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--accent-cyan)',
                      background: 'rgba(0, 240, 255, 0.08)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '3px',
                      border: '1px solid rgba(0, 240, 255, 0.25)',
                    }}
                  >
                    [{project.category.toUpperCase()}]
                  </span>

                  {project.metric && (
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: '#ffb800',
                        background: 'rgba(255, 184, 0, 0.08)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '3px',
                        border: '1px solid rgba(255, 184, 0, 0.25)',
                      }}
                    >
                      [ {project.metric} ]
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '0.65rem',
                    lineHeight: 1.35,
                  }}
                >
                  {project.title}
                </h3>

                {/* Short Description */}
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                  }}
                >
                  {project.shortDesc}
                </p>

                {/* Key Bullet Highlights preview */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 1rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                  }}
                >
                  {project.keyHighlights.slice(0, 2).map((h, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.45rem',
                        fontSize: '0.8rem',
                        color: '#94a3b8',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      <span style={{ color: '#00ff88', flexShrink: 0 }}>&gt;</span>
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
                    paddingTop: '0.85rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    marginBottom: '1rem',
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
                    gap: '0.65rem',
                  }}
                >
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1, fontSize: '0.78rem', borderRadius: '4px' }}
                  >
                    <span>[ ARCHITECTURE_SPEC &gt; ]</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm btn-icon"
                      style={{ borderRadius: '4px' }}
                      title="GitHub Source Code"
                    >
                      <Github size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Deep Dive Modal (System Blueprint Spec) */}
      {activeProjectModal && (
        <div className="modal-overlay" onClick={() => setActiveProjectModal(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ padding: '2rem', border: '1px solid rgba(0, 240, 255, 0.4)', borderRadius: '6px' }}
          >
            {/* Modal Terminal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '0.85rem',
                marginBottom: '1.25rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#00f0ff',
                    background: 'rgba(0, 240, 255, 0.1)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                  }}
                >
                  SPEC://{activeProjectModal.id}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#00ff88' }}>
                  [VERIFIED_ARCHITECTURE]
                </span>
              </div>

              <button
                onClick={() => setActiveProjectModal(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: 'none',
                  color: '#fff',
                  width: '32px',
                  height: '32px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Category & Metric */}
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--accent-cyan)',
                  background: 'rgba(0, 240, 255, 0.08)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(0, 240, 255, 0.25)',
                }}
              >
                [{activeProjectModal.category.toUpperCase()}]
              </span>
              {activeProjectModal.metric && (
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#ffb800',
                    background: 'rgba(255, 184, 0, 0.08)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 184, 0, 0.3)',
                  }}
                >
                  [ {activeProjectModal.metric} ]
                </span>
              )}
            </div>

            <h2 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              {activeProjectModal.title}
            </h2>

            <div
              style={{
                fontSize: '0.92rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              {activeProjectModal.description}
            </div>

            <h4 style={{ fontSize: '1rem', color: '#00f0ff', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              &gt; SYSTEM_SOLVED_CHALLENGES &amp; HIGHLIGHTS:
            </h4>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 1.5rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {activeProjectModal.keyHighlights.map((hl, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.88rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <span style={{ color: '#00ff88', flexShrink: 0 }}>&gt;&gt;</span>
                  <span>{hl}</span>
                </li>
              ))}
            </ul>

            <h4 style={{ fontSize: '1rem', color: '#00f0ff', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              &gt; INTEGRATED_STACK_NODES:
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
                <span
                  key={t}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    background: 'rgba(0, 240, 255, 0.08)',
                    color: '#00f0ff',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(0, 240, 255, 0.25)',
                  }}
                >
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
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {activeProjectModal.githubUrl && (
                <a
                  href={activeProjectModal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ borderRadius: '4px' }}
                >
                  <Github size={15} />
                  <span>[ VIEW_SOURCE_CODE ]</span>
                </a>
              )}

              <button
                onClick={() => setActiveProjectModal(null)}
                className="btn btn-primary btn-sm"
                style={{ borderRadius: '4px' }}
              >
                <span>[ CLOSE_SPEC ]</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
