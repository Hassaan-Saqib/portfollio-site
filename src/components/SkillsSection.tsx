'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { 
  Server, 
  Cpu, 
  Code2, 
  Radio, 
  Database, 
  Sparkles, 
  CheckCircle,
  Bot,
  Workflow,
  ChartBar,
  Smartphone,
  Receipt,
  Terminal
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
            <Terminal size={13} />
            <span>[ SYSTEM_CAPABILITIES // MODULES ]</span>
          </div>
          <h2 className="section-title">
            Core <span className="gradient-text">Competencies &amp; Tech Mesh</span>
          </h2>
          <p className="section-subtitle" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}>
            Production-grade systems deployed across Odoo ERP ecosystems, real-time IoT hardware,
            custom enterprise LLMs, and autonomous n8n workflows.
          </p>
        </div>

        {/* Category Tabs (Terminal Module Bar) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Server;
            const isActive = activeCategory === idx;
            const moduleNum = String(idx + 1).padStart(2, '0');
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.55rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  fontSize: '0.78rem',
                  border: isActive ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isActive ? 'rgba(0, 240, 255, 0.12)' : 'rgba(10, 14, 22, 0.6)',
                  color: isActive ? '#00f0ff' : 'var(--text-secondary)',
                  boxShadow: isActive ? '0 0 15px rgba(0, 240, 255, 0.2)' : 'none',
                  transition: 'all 0.15s ease',
                  letterSpacing: '0.03em',
                }}
              >
                <span style={{ color: isActive ? '#00ff88' : 'var(--text-muted)' }}>{moduleNum}.</span>
                <Icon size={14} color={isActive ? '#00f0ff' : '#94a3b8'} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display (Terminal Console Card) */}
        <div
          className="glass-card"
          style={{
            padding: '2rem',
            borderRadius: '8px',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            background: 'rgba(8, 12, 20, 0.95)',
          }}
        >
          {/* Console Header Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.75rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#00ff88', marginBottom: '0.2rem' }}>
                // STACK_REGISTRY_LOADED: MODULE_{String(activeCategory + 1).padStart(2, '0')}
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#fff' }}>
                {SKILL_CATEGORIES[activeCategory].name}
              </h3>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: '#00f0ff',
                background: 'rgba(0, 240, 255, 0.08)',
                padding: '0.3rem 0.75rem',
                borderRadius: '4px',
                border: '1px solid rgba(0, 240, 255, 0.25)',
              }}
            >
              [STATUS: {SKILL_CATEGORIES[activeCategory].skills.length} PRODUCTION NODES]
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
            {SKILL_CATEGORIES[activeCategory].skills.map((skill) => {
              const isExpert = skill.level === 'Specialist' || skill.level === 'Expert';
              return (
                <div
                  key={skill.name}
                  style={{
                    background: 'rgba(5, 8, 14, 0.85)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '4px',
                    padding: '0.9rem 1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.4)';
                    e.currentTarget.style.background = 'rgba(10, 16, 28, 0.9)';
                    e.currentTarget.style.transform = 'translateX(2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.background = 'rgba(5, 8, 14, 0.85)';
                    e.currentTarget.style.transform = 'translateX(0px)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ color: '#00ff88', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>&gt;</span>
                    <span style={{ fontWeight: 600, fontSize: '0.88rem', color: '#f0f6fc', fontFamily: 'var(--font-mono)' }}>
                      {skill.name}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '3px',
                      background: isExpert ? 'rgba(0, 255, 136, 0.12)' : 'rgba(0, 240, 255, 0.12)',
                      color: isExpert ? '#00ff88' : '#00f0ff',
                      border: isExpert ? '1px solid rgba(0, 255, 136, 0.3)' : '1px solid rgba(0, 240, 255, 0.3)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    [{skill.level.toUpperCase()}]
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
