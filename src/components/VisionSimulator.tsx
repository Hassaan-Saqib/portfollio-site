'use client';

import React, { useState } from 'react';
import { Cpu, Eye, CheckCircle2, Sliders, RefreshCw, Crosshair, Sparkles } from 'lucide-react';

const GARMENT_PRESETS = [
  {
    name: 'Denim Jeans (Size 32)',
    type: 'Bottomwear',
    color: '#1e3a8a',
    waist: { measured: '32.2 in / 81.8 cm', target: '32.0 in', diff: '+0.2 in', pass: true },
    outseam: { measured: '41.5 in / 105.4 cm', target: '41.5 in', diff: '0.0 in', pass: true },
    inseam: { measured: '31.8 in / 80.7 cm', target: '32.0 in', diff: '-0.2 in', pass: true },
    confidence: '98.6%',
    inferenceTime: '18.4 ms',
    calibrationRatio: '1 px = 0.824 mm',
  },
  {
    name: 'Cotton Chino Pant (Size 34)',
    type: 'Bottomwear',
    color: '#854d0e',
    waist: { measured: '34.1 in / 86.6 cm', target: '34.0 in', diff: '+0.1 in', pass: true },
    outseam: { measured: '42.2 in / 107.2 cm', target: '42.0 in', diff: '+0.2 in', pass: true },
    inseam: { measured: '32.5 in / 82.5 cm', target: '32.5 in', diff: '0.0 in', pass: true },
    confidence: '99.1%',
    inferenceTime: '16.8 ms',
    calibrationRatio: '1 px = 0.824 mm',
  },
];

export default function VisionSimulator() {
  const [activeGarmentIdx, setActiveGarmentIdx] = useState(0);
  const [showKeypoints, setShowKeypoints] = useState(true);
  const [showCalipers, setShowCalipers] = useState(true);
  const [isInferring, setIsInferring] = useState(false);

  const active = GARMENT_PRESETS[activeGarmentIdx];

  const handleTriggerInference = () => {
    setIsInferring(true);
    setTimeout(() => {
      setIsInferring(false);
    }, 600);
  };

  return (
    <div
      className="glass-card"
      style={{
        padding: '1.75rem',
        border: '1px solid var(--bg-card-border)',
        borderRadius: '12px',
        background: 'var(--bg-card)',
        boxShadow: 'var(--shadow-card)',
        position: 'relative',
        marginTop: '2rem',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          paddingBottom: '1.25rem',
          borderBottom: '1px solid var(--bg-card-border)',
          marginBottom: '1.5rem',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span
              style={{
                background: 'rgba(59, 130, 246, 0.12)',
                color: 'var(--accent-primary)',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                fontSize: '0.74rem',
                fontWeight: 600,
              }}
            >
              Computer Vision &amp; Keypoint AI
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>•</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
              Sub-Centimeter Accuracy • 1px = 0.824mm
            </span>
          </div>
          <h3 style={{ fontSize: '1.35rem', marginTop: '0.35rem', color: 'var(--text-primary)', fontWeight: 700 }}>
            Automated Physical Measurement &amp; Quality Control Tool
          </h3>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button
            onClick={handleTriggerInference}
            disabled={isInferring}
            className="btn btn-primary btn-sm"
            id="run-vision-inference-btn"
            style={{ borderRadius: '6px' }}
          >
            <RefreshCw size={14} className={isInferring ? 'animate-spin' : ''} />
            <span>Run Vision Inference</span>
          </button>
        </div>
      </div>

      {/* Preset Buttons & Toggles */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
            SAMPLE:
          </span>
          {GARMENT_PRESETS.map((g, idx) => (
            <button
              key={g.name}
              onClick={() => setActiveGarmentIdx(idx)}
              style={{
                padding: '0.4rem 0.9rem',
                borderRadius: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                border: activeGarmentIdx === idx ? '1px solid var(--accent-primary)' : '1px solid var(--bg-card-border)',
                background: activeGarmentIdx === idx ? 'rgba(59, 130, 246, 0.15)' : 'var(--bg-tertiary)',
                color: activeGarmentIdx === idx ? 'var(--accent-primary)' : 'var(--text-secondary)',
                transition: 'all 0.15s',
              }}
            >
              {g.name}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={showKeypoints}
              onChange={(e) => setShowKeypoints(e.target.checked)}
              style={{ accentColor: 'var(--accent-primary)' }}
            />
            <span>Keypoints</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={showCalipers}
              onChange={(e) => setShowCalipers(e.target.checked)}
              style={{ accentColor: 'var(--accent-emerald)' }}
            />
            <span>Measurement Calipers</span>
          </label>
        </div>
      </div>

      {/* Main Grid: Visual SVG Canvas + Metrics Table */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          alignItems: 'center',
        }}
      >
        {/* Computer Vision Inspection Canvas */}
        <div
          style={{
            background: 'var(--bg-tertiary)',
            borderRadius: '10px',
            border: '1px solid var(--bg-card-border)',
            padding: '1.5rem',
            position: 'relative',
            minHeight: '340px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {/* AI Bounding Box Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: '20px 30px',
              border: '1px dashed var(--accent-primary)',
              borderRadius: '8px',
              pointerEvents: 'none',
              background: 'rgba(59, 130, 246, 0.05)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                left: '12px',
                background: 'var(--accent-primary)',
                color: '#ffffff',
                fontSize: '0.65rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '4px',
              }}
            >
              YOLO_V8_PANTS [conf: {active.confidence}]
            </div>

            {/* Calibration Marker */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                background: 'var(--bg-primary)',
                border: '1px solid var(--bg-card-border)',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.55rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)',
              }}
              title="Physical Calibration Reference Square (100mm)"
            >
              REF
            </div>
          </div>

          {/* Garment Silhouette SVG */}
          <svg
            viewBox="0 0 300 320"
            style={{
              width: '100%',
              maxWidth: '260px',
              height: 'auto',
              filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.25))',
            }}
          >
            {/* Pants Outline */}
            <path
              d="M 85 45 L 215 45 L 225 150 L 210 290 L 160 290 L 150 145 L 140 290 L 90 290 L 75 150 Z"
              fill="rgba(37, 99, 235, 0.35)"
              stroke="var(--accent-primary)"
              strokeWidth="2.5"
            />

            {/* WAIST CALIPER */}
            {showCalipers && (
              <g>
                <line x1="85" y1="35" x2="215" y2="35" stroke="#10b981" strokeWidth="2" strokeDasharray="3 2" />
                <line x1="85" y1="28" x2="85" y2="42" stroke="#10b981" strokeWidth="2" />
                <line x1="215" y1="28" x2="215" y2="42" stroke="#10b981" strokeWidth="2" />
                <rect x="110" y="24" width="80" height="18" rx="4" fill="#042f2e" stroke="#10b981" strokeWidth="1" />
                <text x="150" y="37" fill="#34d399" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">
                  WAIST: {active.waist.measured.split('/')[0]}
                </text>
              </g>
            )}

            {/* OUTSEAM CALIPER (Left side) */}
            {showCalipers && (
              <g>
                <line x1="60" y1="45" x2="60" y2="290" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
                <line x1="53" y1="45" x2="67" y2="45" stroke="#f59e0b" strokeWidth="1.5" />
                <line x1="53" y1="290" x2="67" y2="290" stroke="#f59e0b" strokeWidth="1.5" />
                <rect x="10" y="160" width="70" height="16" rx="4" fill="#451a03" stroke="#f59e0b" strokeWidth="1" />
                <text x="45" y="172" fill="#fbbf24" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle">
                  OUT: {active.outseam.measured.split('/')[0]}
                </text>
              </g>
            )}

            {/* INSEAM CALIPER (Right Leg Inseam) */}
            {showCalipers && (
              <g>
                <line x1="150" y1="145" x2="160" y2="290" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="3 2" />
                <rect x="155" y="200" width="65" height="16" rx="4" fill="#3b0764" stroke="#c084fc" strokeWidth="1" />
                <text x="187" y="212" fill="#d8b4fe" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle">
                  IN: {active.inseam.measured.split('/')[0]}
                </text>
              </g>
            )}

            {/* Keypoints */}
            {showKeypoints && (
              <g>
                <circle cx="85" cy="45" r="4" fill="#38bdf8" />
                <circle cx="215" cy="45" r="4" fill="#38bdf8" />
                <circle cx="150" cy="145" r="4" fill="#38bdf8" />
                <circle cx="90" cy="290" r="4" fill="#38bdf8" />
                <circle cx="140" cy="290" r="4" fill="#38bdf8" />
                <circle cx="160" cy="290" r="4" fill="#38bdf8" />
                <circle cx="210" cy="290" r="4" fill="#38bdf8" />
              </g>
            )}
          </svg>
        </div>

        {/* Telemetry & Quality Control Specs */}
        <div>
          <div
            style={{
              background: 'var(--bg-tertiary)',
              borderRadius: '10px',
              border: '1px solid var(--bg-card-border)',
              padding: '1.25rem',
              marginBottom: '1rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Dimensional Audit Report</span>
              <span
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: 'var(--accent-emerald)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                <CheckCircle2 size={13} /> SPEC TOLERANCE: PASS
              </span>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--bg-card-border)', color: 'var(--text-muted)' }}>
                  <th style={{ textAlign: 'left', paddingBottom: '0.5rem' }}>Dimension</th>
                  <th style={{ textAlign: 'left', paddingBottom: '0.5rem' }}>Target</th>
                  <th style={{ textAlign: 'left', paddingBottom: '0.5rem' }}>AI Measured</th>
                  <th style={{ textAlign: 'right', paddingBottom: '0.5rem' }}>Tolerance</th>
                </tr>
              </thead>
              <tbody style={{ fontFamily: 'var(--font-mono)' }}>
                <tr style={{ borderBottom: '1px solid var(--bg-card-border)' }}>
                  <td style={{ padding: '0.6rem 0', color: 'var(--text-primary)' }}>Waist Width</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{active.waist.target}</td>
                  <td style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>{active.waist.measured}</td>
                  <td style={{ textAlign: 'right', color: 'var(--accent-emerald)' }}>{active.waist.diff} (OK)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--bg-card-border)' }}>
                  <td style={{ padding: '0.6rem 0', color: 'var(--text-primary)' }}>Outseam Length</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{active.outseam.target}</td>
                  <td style={{ color: 'var(--accent-amber)', fontWeight: 600 }}>{active.outseam.measured}</td>
                  <td style={{ textAlign: 'right', color: 'var(--accent-emerald)' }}>{active.outseam.diff} (OK)</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.6rem 0', color: 'var(--text-primary)' }}>Inseam Length</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{active.inseam.target}</td>
                  <td style={{ color: '#a855f7', fontWeight: 600 }}>{active.inseam.measured}</td>
                  <td style={{ textAlign: 'right', color: 'var(--accent-emerald)' }}>{active.inseam.diff} (OK)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Model Metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem',
            }}
          >
            <div
              style={{
                background: 'var(--bg-tertiary)',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid var(--bg-card-border)',
              }}
            >
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>INFERENCE LATENCY</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>
                {active.inferenceTime}
              </div>
            </div>

            <div
              style={{
                background: 'var(--bg-tertiary)',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid var(--bg-card-border)',
              }}
            >
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CALIBRATION RATIO</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                {active.calibrationRatio}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
