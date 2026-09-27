'use client';

import React, { useState } from 'react';
import { Radio, Printer, Database, CheckCircle2, RefreshCw, Cpu, Layers, Barcode, ArrowRight, ShieldCheck } from 'lucide-react';

const BATCHES = [
  {
    id: 'BATCH-DENIM-8841',
    item: 'Men\'s Slim Stretch Denim Jeans (Dark Indigo)',
    sku: 'DNM-IND-3232',
    qty: 120,
    tags: [
      { epc: 'E280116060000204781A901B', status: 'VERIFIED', rssi: '-52 dBm' },
      { epc: 'E280116060000204781A901C', status: 'VERIFIED', rssi: '-48 dBm' },
      { epc: 'E280116060000204781A901D', status: 'VERIFIED', rssi: '-55 dBm' },
      { epc: 'E280116060000204781A901E', status: 'VERIFIED', rssi: '-51 dBm' },
    ],
    odooPicking: 'WH/OUT/2024/0942',
    destination: 'Retail Distribution Hub Europe',
  },
  {
    id: 'BATCH-CHINO-7102',
    item: 'Casual Chino Pants (Khaki Sand)',
    sku: 'CHN-KHK-3432',
    qty: 85,
    tags: [
      { epc: 'E280689400000204781B842F', status: 'VERIFIED', rssi: '-49 dBm' },
      { epc: 'E280689400000204781B8430', status: 'VERIFIED', rssi: '-53 dBm' },
      { epc: 'E280689400000204781B8431', status: 'VERIFIED', rssi: '-47 dBm' },
    ],
    odooPicking: 'WH/OUT/2024/0943',
    destination: 'Apparel Logistics North America',
  },
];

export default function HardwareSimulator() {
  const [selectedBatchIdx, setSelectedBatchIdx] = useState(0);
  const [scanning, setScanning] = useState(false);
  const [scanStep, setScanStep] = useState<'idle' | 'reading_rfid' | 'syncing_odoo' | 'printing_zpl' | 'completed'>('idle');
  const [lastPrintedAt, setLastPrintedAt] = useState<string | null>(null);

  const currentBatch = BATCHES[selectedBatchIdx];

  const handleRunSimulation = () => {
    if (scanning) return;
    setScanning(true);
    setScanStep('reading_rfid');

    setTimeout(() => {
      setScanStep('syncing_odoo');
      setTimeout(() => {
        setScanStep('printing_zpl');
        setTimeout(() => {
          setScanStep('completed');
          setScanning(false);
          setLastPrintedAt(new Date().toLocaleTimeString());
        }, 1200);
      }, 1200);
    }, 1200);
  };

  return (
    <div
      className="glass-card"
      style={{
        padding: '1.75rem',
        border: '1px solid rgba(0, 255, 136, 0.3)',
        borderRadius: '6px',
        background: 'rgba(8, 12, 18, 0.95)',
        boxShadow: '0 15px 40px rgba(0,0,0,0.8), 0 0 25px rgba(0, 255, 136, 0.08)',
        position: 'relative',
      }}
    >
      {/* Top Banner */}
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
                background: 'rgba(0, 255, 136, 0.1)',
                color: '#00ff88',
                padding: '0.25rem 0.65rem',
                borderRadius: '3px',
                border: '1px solid rgba(0, 255, 136, 0.3)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              [HARDWARE_EMULATOR // UHF_RFID]
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>•</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
              FREQ: 915MHz • ZPL_SPOOLER: READY
            </span>
          </div>
          <h3 style={{ fontSize: '1.35rem', marginTop: '0.35rem', color: '#fff' }}>
            Industrial IoT &amp; Odoo ERP Edge Integration
          </h3>
        </div>

        {/* Action button */}
        <button
          onClick={handleRunSimulation}
          disabled={scanning}
          className="btn btn-emerald"
          id="simulate-rfid-btn"
          style={{ opacity: scanning ? 0.7 : 1, borderRadius: '4px' }}
        >
          {scanning ? (
            <>
              <RefreshCw size={15} className="animate-spin" />
              <span>
                {scanStep === 'reading_rfid' && '[ INTERROGATING_TAGS... ]'}
                {scanStep === 'syncing_odoo' && '[ UPDATING_ODOO_MOVES... ]'}
                {scanStep === 'printing_zpl' && '[ SPOOLING_ZPL_PRINT... ]'}
              </span>
            </>
          ) : (
            <>
              <Radio size={15} />
              <span>[ TRIGGER_SCAN_STREAM ]</span>
            </>
          )}
        </button>
      </div>

      {/* Batch Selector */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
          TARGET_BATCH:
        </span>
        {BATCHES.map((b, idx) => (
          <button
            key={b.id}
            onClick={() => {
              setSelectedBatchIdx(idx);
              setScanStep('idle');
            }}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              cursor: 'pointer',
              border: selectedBatchIdx === idx ? '1px solid #00ff88' : '1px solid rgba(255, 255, 255, 0.1)',
              background: selectedBatchIdx === idx ? 'rgba(0, 255, 136, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              color: selectedBatchIdx === idx ? '#00ff88' : 'var(--text-secondary)',
              transition: 'all 0.15s',
            }}
          >
            {b.id} ({b.sku})
          </button>
        ))}
      </div>

      {/* 3 Step Interactive Pipeline Diagram */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {/* Step 1: RFID UHF Gateway */}
        <div
          style={{
            background: 'rgba(5, 8, 20, 0.75)',
            border: scanStep === 'reading_rfid' ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '1.25rem',
            position: 'relative',
            transition: 'border-color 0.3s',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Radio size={18} color="#10b981" />
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>1. UHF RFID Antenna</span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: scanStep === 'reading_rfid' ? '#10b981' : '#64748b',
              }}
            >
              902-928 MHz
            </span>
          </div>

          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            Detects EPC Gen2 Class 1 tags on apparel bundles without direct line-of-sight.
          </div>

          <div
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '8px',
              padding: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
            }}
          >
            {currentBatch.tags.map((t, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', color: scanStep !== 'idle' ? '#34d399' : '#94a3b8' }}>
                <span>{t.epc.substring(0, 16)}...</span>
                <span>{t.rssi}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Odoo ERP Core */}
        <div
          style={{
            background: 'rgba(5, 8, 20, 0.75)',
            border: scanStep === 'syncing_odoo' ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '1.25rem',
            position: 'relative',
            transition: 'border-color 0.3s',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Database size={18} color="#38bdf8" />
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>2. Odoo ERP 17/18 Engine</span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#38bdf8' }}>
              Python / OWL
            </span>
          </div>

          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            Verifies stock move against work order #{currentBatch.odooPicking} in PostgreSQL.
          </div>

          <div
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '8px',
              padding: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
            }}
          >
            <div style={{ color: '#94a3b8' }}>
              Picking: <span style={{ color: '#fff' }}>{currentBatch.odooPicking}</span>
            </div>
            <div style={{ color: '#94a3b8' }}>
              Item: <span style={{ color: '#38bdf8' }}>{currentBatch.item}</span>
            </div>
            <div style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              Status:
              {scanStep === 'completed' || scanStep === 'printing_zpl' ? (
                <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <CheckCircle2 size={12} /> Stock Move Confirmed
                </span>
              ) : (
                <span style={{ color: '#fbbf24' }}>Waiting Verification</span>
              )}
            </div>
          </div>
        </div>

        {/* Step 3: Zebra ZPL Printer Output */}
        <div
          style={{
            background: 'rgba(5, 8, 20, 0.75)',
            border: scanStep === 'printing_zpl' || scanStep === 'completed' ? '1px solid #a855f7' : '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '1.25rem',
            position: 'relative',
            transition: 'border-color 0.3s',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Printer size={18} color="#c084fc" />
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>3. Zebra Industrial Printer</span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#c084fc' }}>
              ZPL II Thermal
            </span>
          </div>

          {/* Rendered Physical Thermal Label Preview */}
          <div
            style={{
              background: '#f8fafc',
              color: '#0f172a',
              borderRadius: '8px',
              padding: '0.85rem',
              fontFamily: 'monospace',
              fontSize: '0.7rem',
              lineHeight: 1.3,
              border: '2px dashed #94a3b8',
              boxShadow: scanStep === 'completed' ? '0 0 15px rgba(168, 85, 247, 0.4)' : 'none',
              transition: 'all 0.3s',
            }}
          >
            <div style={{ fontWeight: 800, fontSize: '0.8rem', borderBottom: '1px solid #000', paddingBottom: '0.2rem', marginBottom: '0.3rem' }}>
              MANUFACTURING DISPATCH • ODOO
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
              <span>SKU: {currentBatch.sku}</span>
              <span>QTY: {currentBatch.qty} PCS</span>
            </div>
            <div style={{ fontSize: '0.65rem', margin: '0.2rem 0', color: '#334155' }}>
              {currentBatch.item}
            </div>
            
            {/* Visual Simulated Barcode */}
            <div
              style={{
                height: '24px',
                background: 'repeating-linear-gradient(90deg, #000 0px, #000 2px, #fff 2px, #fff 4px, #000 4px, #000 7px, #fff 7px, #fff 9px)',
                margin: '0.4rem 0 0.2rem 0',
              }}
            />
            <div style={{ textAlign: 'center', fontSize: '0.65rem', letterSpacing: '0.1em' }}>
              *{currentBatch.id}*
            </div>
          </div>
        </div>
      </div>

      {/* Field Experience Note */}
      <div
        style={{
          marginTop: '1.5rem',
          padding: '1rem 1.25rem',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
        }}
      >
        <ShieldCheck size={20} color="#10b981" style={{ flexShrink: 0 }} />
        <span>
          <strong style={{ color: '#fff' }}>Field Tested in Large-Scale Industrial Manufacturing:</strong> Deployed for active apparel and textile enterprises to eliminate manual data entry, streamline warehouse dispatch by 70%, and ensure real-time inventory synchronization across multi-tenant cloud instances.
        </span>
      </div>
    </div>
  );
}
