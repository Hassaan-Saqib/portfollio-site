'use client';

import React, { useState } from 'react';
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
  Layers
} from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

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
                  background: isActive ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  transition: 'all 0.15s ease',
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
            borderRadius: '12px',
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
                Category Overview
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
              {SKILL_CATEGORIES[activeCategory].skills.length} Technologies
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
                  <CheckCircle2 size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 500, fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                    {skill.name}
                  </span>
                </div>

                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    padding: '0.2rem 0.55rem',
                    borderRadius: '4px',
                    background: 'var(--bg-primary)',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--bg-card-border)',
                  }}
                >
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
