'use client';

import React, { useState } from 'react';
import HardwareSimulator from './HardwareSimulator';
import VisionSimulator from './VisionSimulator';
import { Cpu, Radio, Sparkles, Sliders, Terminal } from 'lucide-react';

export default function LabSection() {
  const [activeTab, setActiveTab] = useState<'both' | 'hardware' | 'vision'>('both');

  return (
    <section id="lab" className="section" style={{ background: 'rgba(5, 7, 12, 0.85)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Terminal size={13} />
            <span>[ HARDWARE_TELEMETRY // LIVE_EMULATION ]</span>
          </div>
          <h2 className="section-title">
            Interactive <span className="gradient-emerald-text">Edge &amp; AI Emulators</span>
          </h2>
          <p className="section-subtitle" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}>
            Live sandbox replicating active industrial deployments: real-time UHF RFID interrogation
            into Odoo ERP with Zebra ZPL printing, and sub-centimeter YOLO computer vision garment dimension measurement.
          </p>
        </div>

        {/* Tab Controls */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => setActiveTab('both')}
            style={{
              padding: '0.45rem 1rem',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: activeTab === 'both' ? '1px solid #00ff88' : '1px solid rgba(255, 255, 255, 0.08)',
              background: activeTab === 'both' ? 'rgba(0, 255, 136, 0.12)' : 'rgba(10, 14, 22, 0.6)',
              color: activeTab === 'both' ? '#00ff88' : 'var(--text-secondary)',
              transition: 'all 0.15s',
              boxShadow: activeTab === 'both' ? '0 0 12px rgba(0, 255, 136, 0.2)' : 'none',
            }}
          >
            [ 00 // BOTH_SIMULATORS ]
          </button>

          <button
            onClick={() => setActiveTab('hardware')}
            style={{
              padding: '0.45rem 1rem',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: activeTab === 'hardware' ? '1px solid #00ff88' : '1px solid rgba(255, 255, 255, 0.08)',
              background: activeTab === 'hardware' ? 'rgba(0, 255, 136, 0.12)' : 'rgba(10, 14, 22, 0.6)',
              color: activeTab === 'hardware' ? '#00ff88' : 'var(--text-secondary)',
              transition: 'all 0.15s',
              boxShadow: activeTab === 'hardware' ? '0 0 12px rgba(0, 255, 136, 0.2)' : 'none',
            }}
          >
            [ 01 // UHF_RFID_ERP_ENGINE ]
          </button>

          <button
            onClick={() => setActiveTab('vision')}
            style={{
              padding: '0.45rem 1rem',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: activeTab === 'vision' ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.08)',
              background: activeTab === 'vision' ? 'rgba(0, 240, 255, 0.12)' : 'rgba(10, 14, 22, 0.6)',
              color: activeTab === 'vision' ? '#00f0ff' : 'var(--text-secondary)',
              transition: 'all 0.15s',
              boxShadow: activeTab === 'vision' ? '0 0 12px rgba(0, 240, 255, 0.2)' : 'none',
            }}
          >
            [ 02 // YOLO_GARMENT_AI ]
          </button>
        </div>

        {/* Dynamic Simulator Display */}
        {(activeTab === 'both' || activeTab === 'hardware') && <HardwareSimulator />}
        {(activeTab === 'both' || activeTab === 'vision') && <VisionSimulator />}
      </div>
    </section>
  );
}
