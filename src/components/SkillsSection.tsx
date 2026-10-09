'use client';

import React, { useState, useMemo } from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { 
  Server, 
  Cpu, 
  Code2, 
  Radio, 
  Database, 
  CheckCircle2, 
  Bot, 
  Workflow, 
  ChartBar, 
  Smartphone, 
  Receipt, 
  Layers,
  Search,
  Grid3X3,
  ListFilter,
  X
} from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'focused' | 'matrix'>('focused');
  const [skillSearch, setSkillSearch] = useState<string>('');

  const iconMap: Record<string, React.ElementType> = {
    Server,
    Bot,
    Workflow,
    Receipt,
    ChartBar,
    Smartphone,
    Code2,
    Radio,
    Database,
    Cpu,
  };

  // Total skills count
  const totalSkills = useMemo(() => {
    return SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  // Filter skills if search active
  const filteredCategories = useMemo(() => {
    if (!skillSearch.trim()) return SKILL_CATEGORIES;

    const q = skillSearch.toLowerCase();
    return SKILL_CATEGORIES.map((cat) => ({
      ...cat,
      skills: cat.skills.filter((s) => s.name.toLowerCase().includes(q) || s.level.toLowerCase().includes(q)),
    })).filter((cat) => cat.skills.length > 0);
  }, [skillSearch]);

  const getBadgeStyle = (level: string) => {
    if (level === 'Expert') {
      return {
        background: 'rgba(16, 185, 129, 0.1)',
        color: 'var(--accent-emerald)',
        border: '1px solid rgba(16, 185, 129, 0.25)',
      };
    }
    if (level === 'Specialist') {
      return {
        background: 'rgba(59, 130, 246, 0.1)',
        color: 'var(--accent-primary)',
        border: '1px solid rgba(59, 130, 246, 0.25)',
      };
    }
    return {
      background: 'var(--bg-primary)',
      color: 'var(--text-muted)',
      border: '1px solid var(--bg-card-border)',
    };
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <div className="section-label">
            <Layers size={14} />
            <span>Technical Expertise</span>
          </div>
          <h2 className="section-title">
            Skills &amp; Technologies
          </h2>
          <p className="section-subtitle">
            Specialized engineering across enterprise Odoo ERP architectures, IoT edge hardware,
            applied AI &amp; LLM pipelines, and cross-platform applications.
          </p>
        </div>

        {/* Search & View Mode Switcher */}
        <div
          style={{
            maxWidth: '750px',
            margin: '0 auto 2rem auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.85rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Quick Search */}
          <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '0.9rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              placeholder="Search skill (e.g. Odoo, Python, RAG, RFID, Flutter)..."
              style={{
                width: '100%',
                padding: '0.65rem 2.25rem 0.65rem 2.5rem',
                borderRadius: '8px',
                border: '1px solid var(--bg-card-border)',
                background: 'var(--bg-card)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--bg-card-border)')}
            />
            {skillSearch && (
              <button
                onClick={() => setSkillSearch('')}
                style={{
                  position: 'absolute',
                  right: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '2px',
                }}
                title="Clear"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* View Toggle */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: 'var(--bg-tertiary)',
              padding: '0.25rem',
              borderRadius: '8px',
              border: '1px solid var(--bg-card-border)',
            }}
          >
            <button
              onClick={() => setViewMode('focused')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: viewMode === 'focused' ? 600 : 500,
                cursor: 'pointer',
                border: 'none',
                background: viewMode === 'focused' ? 'var(--accent-primary)' : 'transparent',
                color: viewMode === 'focused' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.15s ease',
              }}
            >
              <ListFilter size={14} />
              <span>Category Tabs</span>
            </button>

            <button
              onClick={() => setViewMode('matrix')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: viewMode === 'matrix' ? 600 : 500,
                cursor: 'pointer',
                border: 'none',
                background: viewMode === 'matrix' ? 'var(--accent-primary)' : 'transparent',
                color: viewMode === 'matrix' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.15s ease',
              }}
            >
              <Grid3X3 size={14} />
              <span>Full Matrix ({totalSkills})</span>
            </button>
          </div>
        </div>

        {/* If search query has results */}
        {skillSearch.trim() ? (
          <div>
            <div style={{ marginBottom: '1.25rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Matching skills for &quot;<strong style={{ color: 'var(--text-primary)' }}>{skillSearch}</strong>&quot;:
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem',
              }}
            >
              {filteredCategories.map((cat) => {
                const Icon = iconMap[cat.icon] || Server;
                return (
                  <div
                    key={cat.name}
                    className="glass-card"
                    style={{
                      padding: '1.25rem',
                      borderRadius: '10px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--bg-card-border)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                      <Icon size={16} color="var(--accent-primary)" />
                      <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>{cat.name}</h4>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {cat.skills.map((s) => (
                        <div
                          key={s.name}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.5rem 0.75rem',
                            borderRadius: '6px',
                            background: 'var(--bg-tertiary)',
                            border: '1px solid var(--bg-card-border)',
                            fontSize: '0.82rem',
                          }}
                        >
                          <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{s.name}</span>
                          <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '4px', ...getBadgeStyle(s.level) }}>
                            {s.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : viewMode === 'focused' ? (
          /* Focused Category View (with category pills) */
          <div>
            {/* Category Tabs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '2rem',
              }}
            >
              {SKILL_CATEGORIES.map((cat, idx) => {
                const Icon = iconMap[cat.icon] || Server;
                const isActive = activeCategory === idx;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 500,
                      fontSize: '0.84rem',
                      border: isActive ? '1px solid var(--accent-primary)' : '1px solid var(--bg-card-border)',
                      background: isActive ? 'var(--accent-primary)' : 'var(--bg-card)',
                      color: isActive ? '#ffffff' : 'var(--text-secondary)',
                      transition: 'all 0.15s ease',
                      boxShadow: isActive ? '0 4px 12px rgba(59, 130, 246, 0.25)' : 'none',
                    }}
                  >
                    <Icon size={15} />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Category Display */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: '14px',
                border: '1px solid var(--bg-card-border)',
                background: 'var(--bg-card)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {/* Header Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.75rem',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid var(--bg-card-border)',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                    Domain Specialty
                  </div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                    {SKILL_CATEGORIES[activeCategory].name}
                  </h3>
                </div>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    background: 'var(--bg-tertiary)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '9999px',
                    border: '1px solid var(--bg-card-border)',
                  }}
                >
                  {SKILL_CATEGORIES[activeCategory].skills.length} Production Technologies
                </span>
              </div>

              {/* Grid of skills */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '0.85rem',
                }}
              >
                {SKILL_CATEGORIES[activeCategory].skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--bg-card-border)',
                      borderRadius: '8px',
                      padding: '0.85rem 1.15rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                      <span style={{ fontWeight: 500, fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                        {skill.name}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        ...getBadgeStyle(skill.level),
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Full Matrix View (All 8 categories visible at once) */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {SKILL_CATEGORIES.map((cat) => {
              const Icon = iconMap[cat.icon] || Server;
              return (
                <div
                  key={cat.name}
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid var(--bg-card-border)',
                    background: 'var(--bg-card)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--bg-card-border)' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '6px',
                          background: 'var(--bg-tertiary)',
                          border: '1px solid var(--bg-card-border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-primary)',
                        }}
                      >
                        <Icon size={16} />
                      </div>
                      <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {cat.name}
                      </h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.45rem 0.65rem',
                            borderRadius: '6px',
                            background: 'var(--bg-tertiary)',
                            border: '1px solid var(--bg-card-border)',
                            fontSize: '0.8rem',
                          }}
                        >
                          <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                            {skill.name}
                          </span>
                          <span
                            style={{
                              fontSize: '0.68rem',
                              fontWeight: 600,
                              padding: '0.15rem 0.45rem',
                              borderRadius: '4px',
                              ...getBadgeStyle(skill.level),
                            }}
                          >
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
