'use client';

import React from 'react';
import { STATS } from '@/data/portfolioData';
import { Award, Briefcase, Cpu, CheckCircle, Terminal } from 'lucide-react';

export default function StatsBanner() {
  const icons = [Briefcase, Cpu, Award, CheckCircle];
  const hexIds = ['0x01', '0x02', '0x03', '0x04'];

  return (
    <section style={{ padding: '2rem 0', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
          }}
        >
          {STATS.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            const isHighlight = idx === 2; // rank
            return (
              <div
                key={stat.label}
                className="glass-card"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  border: isHighlight
                    ? '1px solid rgba(255, 184, 0, 0.4)'
                    : '1px solid rgba(0, 240, 255, 0.15)',
                  background: 'rgba(8, 12, 18, 0.85)',
                  borderRadius: '6px',
                  boxShadow: isHighlight ? '0 0 15px rgba(255, 184, 0, 0.15)' : 'none',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '4px',
                    background: isHighlight 
                      ? 'rgba(255, 184, 0, 0.12)' 
                      : 'rgba(0, 240, 255, 0.1)',
                    border: isHighlight
                      ? '1px solid rgba(255, 184, 0, 0.4)'
                      : '1px solid rgba(0, 240, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isHighlight ? '#ffb800' : '#00f0ff',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} />
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: isHighlight ? '#ffb800' : 'var(--text-muted)',
                      letterSpacing: '0.08em',
                      marginBottom: '0.2rem',
                    }}
                  >
                    [{hexIds[idx]} // METRIC]
                  </div>
                  <div
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: isHighlight ? '#ffb800' : '#fff',
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      marginTop: '0.2rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
