'use client';

import React, { useState, useMemo } from 'react';
import { PROJECTS, Project } from '@/data/portfolioData';
import { 
  FolderGit2, 
  Github, 
  X,
  ArrowRight,
  CheckCircle2,
  Search,
  Zap,
  Layers,
  Cpu,
  ArrowRightCircle
} from 'lucide-react';

const ARCHITECTURE_FLOWS: Record<string, string[]> = {
  'odoo-rfid-tracking-module': [
    'UHF RFID Gateways (915MHz)',
    'TCP / Serial Socket Listener',
    'Odoo MRP & Stock Transfer (OWL)',
    'Zebra ZPL II Thermal Spooler',
  ],
  'odoo-white-label-multi-tenant': [
    'Client Request & SSL Termination',
    'Nginx Reverse Proxy & Multi-Tenant Router',
    'Isolated PostgreSQL Databases',
    'Encrypted AES GDrive Backup Daemon',
  ],
  'enterprise-custom-llm': [
    'Enterprise SOPs & ERP Data',
    'Hybrid Vector Embeddings Index',
    'Prompt Engineering & Guardrails',
    'Domain RAG Agent & Summarization',
  ],
  'n8n-workflow-automation': [
    'Webhooks & Event Triggers',
    'Self-Healing n8n Workflow Engine',
    'Heterogeneous APIs (Odoo, Billing, CRM)',
    'Automated Retries & Alert Dispatches',
  ],
  'smart-khata-ledger-system': [
    'Merchant POS & Mobile Entry',
    'Double-Entry Credit/Debit Engine',
    'PostgreSQL & Redis Cache Sync',
    'Automated WhatsApp/SMS Ledger Alerts',
  ],
  'enterprise-pos-system': [
    'Sub-50ms Barcode / Touch Scanner',
    'Dynamic Tax & Multi-Tender Cart',
    'Multi-Warehouse Inventory Sync',
    'ESC/POS Thermal Receipt & Cash Drawer',
  ],
  'flutter-mobile-app-suite': [
    'Flutter 60 FPS Responsive UI',
    'Bloc / Provider State Management',
    'Offline SQLite Local Storage',
    'Cloud REST APIs & Background Sync',
  ],
  'ai-gesture-control-system': [
    'Webcam Video Stream (60 FPS)',
    'MediaPipe 21-Landmark 3D Extractor',
    'Multi-Pose Classifier & Anti-Jitter Filter',
    'PyAutoGUI / OS Action Dispatcher',
  ],
  'rfid-zebra-odoo-integration': [
    'Odoo Dispatch Picking Event',
    'Dynamic ZPL Code Generation',
    'Network Print Spooler Queue',
    'Industrial Zebra Thermal Printing',
  ],
};

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = [
    'All',
    'Odoo & ERP',
    'AI & LLMs',
    'Automation & Workflows',
    'ERP & POS',
    'Mobile & Apps',
    'Hardware & IoT',
    'Full-Stack',
    'Data & ML',
  ];

  // Calculate counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: PROJECTS.length };
    PROJECTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q);
      const matchTech = p.technologies.some((t) => t.toLowerCase().includes(q));
      const matchHighlights = p.keyHighlights.some((h) => h.toLowerCase().includes(q));

      return matchTitle || matchDesc || matchTech || matchHighlights;
    });
  }, [selectedCategory, searchQuery]);

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

        {/* Search & Filter Controls */}
        <div style={{ maxWidth: '820px', margin: '0 auto 2.5rem auto' }}>
          {/* Live Search Bar */}
          <div
            style={{
              position: 'relative',
              marginBottom: '1.25rem',
            }}
          >
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by keyword, technology (e.g. Odoo, RFID, RAG, Python, Flutter)..."
              style={{
                width: '100%',
                padding: '0.85rem 2.75rem 0.85rem 2.85rem',
                borderRadius: '10px',
                border: '1px solid var(--bg-card-border)',
                background: 'var(--bg-card)',
                color: 'var(--text-primary)',
                fontSize: '0.9rem',
                outline: 'none',
                boxShadow: 'var(--shadow-card)',
                transition: 'border-color 0.15s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--bg-card-border)')}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '0.85rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '4px',
                }}
                title="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.45rem',
            }}
          >
            {categories.map((cat) => {
              const count = categoryCounts[cat] || 0;
              if (cat !== 'All' && count === 0) return null;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: isSelected ? 600 : 500,
                    cursor: 'pointer',
                    border: isSelected ? '1px solid var(--accent-primary)' : '1px solid var(--bg-card-border)',
                    background: isSelected ? 'var(--accent-primary)' : 'var(--bg-card)',
                    color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                    transition: 'all 0.15s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span>{cat}</span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      opacity: isSelected ? 0.9 : 0.6,
                      background: isSelected ? 'rgba(255, 255, 255, 0.2)' : 'var(--bg-tertiary)',
                      padding: '0.1rem 0.4rem',
                      borderRadius: '9999px',
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter / Empty State */}
        {filteredProjects.length === 0 ? (
          <div
            className="glass-card"
            style={{
              textAlign: 'center',
              padding: '3rem 1.5rem',
              borderRadius: '12px',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            <FolderGit2 size={36} color="var(--text-muted)" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              No matching projects found
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              No project matches &quot;{searchQuery}&quot; in the current category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="btn btn-secondary btn-sm"
              style={{ borderRadius: '6px' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Projects Grid */
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
                  borderRadius: '12px',
                  border: '1px solid var(--bg-card-border)',
                  background: 'var(--bg-card)',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
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
                          color: 'var(--accent-emerald)',
                          background: 'rgba(16, 185, 129, 0.08)',
                          padding: '0.2rem 0.65rem',
                          borderRadius: '9999px',
                          border: '1px solid rgba(16, 185, 129, 0.25)',
                        }}
                      >
                        {project.metric}
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3
                    style={{
                      fontSize: '1.18rem',
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
                        <CheckCircle2 size={15} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
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
        )}
      </div>

      {/* Project Deep Dive Modal */}
      {activeProjectModal && (
        <div className="modal-overlay" onClick={() => setActiveProjectModal(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              padding: '2rem',
              borderRadius: '14px',
              maxWidth: '820px',
              background: 'var(--bg-card)',
              border: '1px solid var(--bg-card-border)',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1rem',
                marginBottom: '1.25rem',
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
                      color: 'var(--accent-emerald)',
                      background: 'rgba(16, 185, 129, 0.08)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
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
                title="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.85rem', fontWeight: 700 }}>
              {activeProjectModal.title}
            </h2>

            <p
              style={{
                fontSize: '0.94rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              {activeProjectModal.description}
            </p>

            {/* Architecture Flow Pipeline Diagram */}
            {ARCHITECTURE_FLOWS[activeProjectModal.id] && (
              <div
                style={{
                  background: 'var(--bg-tertiary)',
                  borderRadius: '10px',
                  border: '1px solid var(--bg-card-border)',
                  padding: '1.25rem',
                  marginBottom: '1.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <Layers size={16} color="var(--accent-primary)" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Production Architecture Pipeline
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  {ARCHITECTURE_FLOWS[activeProjectModal.id].map((step, idx, arr) => (
                    <React.Fragment key={step}>
                      <div
                        style={{
                          background: 'var(--bg-card)',
                          border: '1px solid var(--bg-card-border)',
                          padding: '0.45rem 0.85rem',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                        }}
                      >
                        <span style={{ color: 'var(--accent-primary)', fontSize: '0.72rem' }}>#{idx + 1}</span>
                        <span>{step}</span>
                      </div>
                      {idx < arr.length - 1 && (
                        <ArrowRight size={14} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Key Solutions & Engineering Highlights */}
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
                  <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
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
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.85rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--bg-card-border)',
              }}
            >
              {activeProjectModal.id.includes('rfid') || activeProjectModal.id.includes('gesture') ? (
                <a
                  href="#lab"
                  onClick={() => setActiveProjectModal(null)}
                  className="btn btn-secondary btn-sm"
                  style={{ borderRadius: '6px', color: 'var(--accent-emerald)' }}
                >
                  <Zap size={14} />
                  <span>Test in Live Simulator</span>
                </a>
              ) : (
                <div />
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
        </div>
      )}
    </section>
  );
}
