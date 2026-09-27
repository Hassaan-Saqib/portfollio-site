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
        border: '1px solid rgba(0, 240, 255, 0.3)',
        borderRadius: '6px',
        background: 'rgba(8, 12, 18, 0.95)',
        boxShadow: '0 15px 40px rgba(0,0,0,0.8), 0 0 25px rgba(0, 240, 255, 0.08)',
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
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: '1.5rem',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span
              style={{
                background: 'rgba(0, 240, 255, 0.1)',
                color: '#00f0ff',
                padding: '0.25rem 0.65rem',
                borderRadius: '3px',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              [CV_ENGINE // YOLO_KEYPOINTS]
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>•</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
              SUB-CENTIMETER ACCURACY • RATIO: 1px = 0.824mm
            </span>
          </div>
          <h3 style={{ fontSize: '1.35rem', marginTop: '0.35rem', color: '#fff' }}>
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
            style={{ borderRadius: '4px' }}
          >
            <RefreshCw size={14} className={isInferring ? 'animate-spin' : ''} />
            <span>[ TRIGGER_INFERENCE ]</span>
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
                borderRadius: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                border: activeGarmentIdx === idx ? '1px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.1)',
                background: activeGarmentIdx === idx ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                color: activeGarmentIdx === idx ? '#38bdf8' : 'var(--text-secondary)',
                transition: 'all 0.2s',
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
              style={{ accentColor: '#00f2fe' }}
            />
            <span>Keypoints</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={showCalipers}
              onChange={(e) => setShowCalipers(e.target.checked)}
              style={{ accentColor: '#10b981' }}
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
            background: '#040714',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
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
              border: '1px dashed #00f2fe',
              borderRadius: '8px',
              pointerEvents: 'none',
              background: 'rgba(0, 242, 254, 0.03)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                left: '12px',
                background: '#00f2fe',
                color: '#070913',
                fontSize: '0.65rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
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
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid #fff',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.55rem',
                fontFamily: 'var(--font-mono)',
                color: '#fff',
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
              filter: 'drop-shadow(0 0 10px rgba(0, 242, 254, 0.2))',
            }}
          >
            {/* Pants Outline */}
            <path
              d="M 85 45 L 215 45 L 225 150 L 210 290 L 160 290 L 150 145 L 140 290 L 90 290 L 75 150 Z"
              fill="rgba(30, 58, 138, 0.45)"
              stroke="#38bdf8"
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
                <circle cx="85" cy="45" r="4" fill="#00f2fe" />
                <circle cx="215" cy="45" r="4" fill="#00f2fe" />
                <circle cx="150" cy="145" r="4" fill="#00f2fe" />
                <circle cx="90" cy="290" r="4" fill="#00f2fe" />
                <circle cx="140" cy="290" r="4" fill="#00f2fe" />
                <circle cx="160" cy="290" r="4" fill="#00f2fe" />
                <circle cx="210" cy="290" r="4" fill="#00f2fe" />
              </g>
            )}
          </svg>
        </div>

        {/* Telemetry & Quality Control Specs */}
        <div>
          <div
            style={{
              background: 'rgba(5, 8, 20, 0.7)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '1.25rem',
              marginBottom: '1rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>Dimensional Audit Report</span>
              <span
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: '#34d399',
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
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', color: 'var(--text-muted)' }}>
                  <th style={{ textAlign: 'left', paddingBottom: '0.5rem' }}>Dimension</th>
                  <th style={{ textAlign: 'left', paddingBottom: '0.5rem' }}>Target</th>
                  <th style={{ textAlign: 'left', paddingBottom: '0.5rem' }}>AI Measured</th>
                  <th style={{ textAlign: 'right', paddingBottom: '0.5rem' }}>Tolerance</th>
                </tr>
              </thead>
              <tbody style={{ fontFamily: 'var(--font-mono)' }}>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                  <td style={{ padding: '0.6rem 0', color: '#fff' }}>Waist Width</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{active.waist.target}</td>
                  <td style={{ color: '#34d399', fontWeight: 600 }}>{active.waist.measured}</td>
                  <td style={{ textAlign: 'right', color: '#34d399' }}>{active.waist.diff} (OK)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                  <td style={{ padding: '0.6rem 0', color: '#fff' }}>Outseam Length</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{active.outseam.target}</td>
                  <td style={{ color: '#fbbf24', fontWeight: 600 }}>{active.outseam.measured}</td>
                  <td style={{ textAlign: 'right', color: '#34d399' }}>{active.outseam.diff} (OK)</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.6rem 0', color: '#fff' }}>Inseam Length</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{active.inseam.target}</td>
                  <td style={{ color: '#d8b4fe', fontWeight: 600 }}>{active.inseam.measured}</td>
                  <td style={{ textAlign: 'right', color: '#34d399' }}>{active.inseam.diff} (OK)</td>
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
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>INFERENCE LATENCY</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                {active.inferenceTime}
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CALIBRATION RATIO</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#10b981', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                {active.calibrationRatio}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
