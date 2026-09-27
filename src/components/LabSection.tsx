'use client';

import React, { useState } from 'react';
import HardwareSimulator from './HardwareSimulator';
import VisionSimulator from './VisionSimulator';
import { Cpu, Radio, Sparkles, Sliders } from 'lucide-react';

export default function LabSection() {
  const [activeTab, setActiveTab] = useState<'both' | 'hardware' | 'vision'>('both');

  return (
    <section id="lab" className="section" style={{ background: 'rgba(6, 9, 15, 0.75)' }}>
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
            into Odoo ERP with Zebra ZPL spooling, and computer vision garment measurement models.
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
              border: activeTab === 'both' ? '1px solid #00ff88' : '1px solid rgba(255, 255, 255, 0.08)',
              background: activeTab === 'both' ? 'rgba(0, 255, 136, 0.12)' : 'rgba(10, 14, 22, 0.6)',
              color: activeTab === 'both' ? '#00ff88' : 'var(--text-secondary)',
              transition: 'all 0.18s ease',
              boxShadow: activeTab === 'both' ? '0 0 14px rgba(0, 255, 136, 0.2)' : 'none',
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
              border: activeTab === 'hardware' ? '1px solid #00ff88' : '1px solid rgba(255, 255, 255, 0.08)',
              background: activeTab === 'hardware' ? 'rgba(0, 255, 136, 0.12)' : 'rgba(10, 14, 22, 0.6)',
              color: activeTab === 'hardware' ? '#00ff88' : 'var(--text-secondary)',
              transition: 'all 0.18s ease',
              boxShadow: activeTab === 'hardware' ? '0 0 14px rgba(0, 255, 136, 0.2)' : 'none',
            }}
          >
            UHF RFID &amp; Odoo ERP
          </button>

          <button
            onClick={() => setActiveTab('vision')}
            style={{
              padding: '0.55rem 1.15rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: activeTab === 'vision' ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.08)',
              background: activeTab === 'vision' ? 'rgba(0, 240, 255, 0.12)' : 'rgba(10, 14, 22, 0.6)',
              color: activeTab === 'vision' ? '#00f0ff' : 'var(--text-secondary)',
              transition: 'all 0.18s ease',
              boxShadow: activeTab === 'vision' ? '0 0 14px rgba(0, 240, 255, 0.2)' : 'none',
            }}
          >
            Computer Vision AI
          </button>
        </div>

        {/* Dynamic Simulator Display */}
        {(activeTab === 'both' || activeTab === 'hardware') && <HardwareSimulator />}
        {(activeTab === 'both' || activeTab === 'vision') && <VisionSimulator />}
      </div>
    </section>
  );
}
