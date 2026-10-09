'use client';

import React, { useState } from 'react';
import HardwareSimulator from './HardwareSimulator';
import GestureSimulator from './GestureSimulator';
import { Cpu, Radio, Sparkles, Sliders, Hand } from 'lucide-react';

export default function LabSection() {
  const [activeTab, setActiveTab] = useState<'both' | 'hardware' | 'gesture'>('both');

  return (
    <section id="lab" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--bg-card-border)', borderBottom: '1px solid var(--bg-card-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Radio size={14} />
            <span>Interactive Engineering Lab</span>
          </div>
          <h2 className="section-title">
            Live <span className="gradient-emerald-text">Industrial &amp; AI Emulators</span>
          </h2>
          <p className="section-subtitle">
            Interactive demonstrations replicating production deployments: UHF RFID interrogation
            into Odoo ERP with Zebra ZPL spooling, and real-time computer vision AI gesture recognition models.
          </p>
        </div>

        {/* Tab Controls */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => setActiveTab('both')}
            style={{
              padding: '0.55rem 1.15rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: activeTab === 'both' ? '1px solid var(--accent-emerald)' : '1px solid var(--bg-card-border)',
              background: activeTab === 'both' ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-card)',
              color: activeTab === 'both' ? 'var(--accent-emerald)' : 'var(--text-secondary)',
              transition: 'all 0.18s ease',
              boxShadow: activeTab === 'both' ? '0 0 14px rgba(16, 185, 129, 0.2)' : 'none',
            }}
          >
            All Emulators
          </button>

          <button
            onClick={() => setActiveTab('hardware')}
            style={{
              padding: '0.55rem 1.15rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: activeTab === 'hardware' ? '1px solid var(--accent-emerald)' : '1px solid var(--bg-card-border)',
              background: activeTab === 'hardware' ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-card)',
              color: activeTab === 'hardware' ? 'var(--accent-emerald)' : 'var(--text-secondary)',
              transition: 'all 0.18s ease',
              boxShadow: activeTab === 'hardware' ? '0 0 14px rgba(16, 185, 129, 0.2)' : 'none',
            }}
          >
            UHF RFID &amp; Odoo ERP
          </button>

          <button
            onClick={() => setActiveTab('gesture')}
            style={{
              padding: '0.55rem 1.15rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: activeTab === 'gesture' ? '1px solid var(--accent-primary)' : '1px solid var(--bg-card-border)',
              background: activeTab === 'gesture' ? 'rgba(59, 130, 246, 0.15)' : 'var(--bg-card)',
              color: activeTab === 'gesture' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              transition: 'all 0.18s ease',
              boxShadow: activeTab === 'gesture' ? '0 0 14px rgba(59, 130, 246, 0.2)' : 'none',
            }}
          >
            AI Gesture Recognition
          </button>
        </div>

        {/* Dynamic Simulator Display */}
        {(activeTab === 'both' || activeTab === 'hardware') && <HardwareSimulator />}
        {(activeTab === 'both' || activeTab === 'gesture') && <GestureSimulator />}
      </div>
    </section>
  );
}
