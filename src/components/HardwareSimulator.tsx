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
        border: '1px solid var(--bg-card-border)',
        borderRadius: '12px',
        background: 'var(--bg-card)',
        boxShadow: 'var(--shadow-card)',
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
          borderBottom: '1px solid var(--bg-card-border)',
          marginBottom: '1.5rem',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span
              style={{
                background: 'rgba(16, 185, 129, 0.12)',
                color: 'var(--accent-emerald)',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                fontSize: '0.74rem',
                fontWeight: 600,
              }}
            >
              UHF RFID Hardware Simulator
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>•</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
              Frequency: 915MHz • Zebra ZPL Spooler: Ready
            </span>
          </div>
          <h3 style={{ fontSize: '1.35rem', marginTop: '0.35rem', color: 'var(--text-primary)', fontWeight: 700 }}>
            Industrial IoT &amp; Odoo ERP Edge Integration
          </h3>
        </div>

        {/* Action button */}
        <button
          onClick={handleRunSimulation}
          disabled={scanning}
          className="btn btn-emerald"
          id="simulate-rfid-btn"
          style={{ opacity: scanning ? 0.7 : 1, borderRadius: '6px' }}
        >
          {scanning ? (
            <>
              <RefreshCw size={15} className="animate-spin" />
              <span>
                {scanStep === 'reading_rfid' && 'Interrogating RFID Tags...'}
                {scanStep === 'syncing_odoo' && 'Updating Odoo Stock Moves...'}
                {scanStep === 'printing_zpl' && 'Spooling Zebra ZPL Print...'}
              </span>
            </>
          ) : (
            <>
              <Radio size={15} />
              <span>Simulate Live RFID Scan</span>
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
              borderRadius: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              cursor: 'pointer',
              border: selectedBatchIdx === idx ? '1px solid var(--accent-emerald)' : '1px solid var(--bg-card-border)',
              background: selectedBatchIdx === idx ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-tertiary)',
              color: selectedBatchIdx === idx ? 'var(--accent-emerald)' : 'var(--text-secondary)',
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
            background: 'var(--bg-tertiary)',
            border: scanStep === 'reading_rfid' ? '1px solid var(--accent-emerald)' : '1px solid var(--bg-card-border)',
            borderRadius: '10px',
            padding: '1.25rem',
            position: 'relative',
            transition: 'border-color 0.3s',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Radio size={18} color="var(--accent-emerald)" />
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>1. UHF RFID Antenna</span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: scanStep === 'reading_rfid' ? 'var(--accent-emerald)' : 'var(--text-muted)',
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
              background: 'var(--bg-primary)',
              borderRadius: '8px',
              padding: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              border: '1px solid var(--bg-card-border)',
            }}
          >
            {currentBatch.tags.map((t, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', color: scanStep !== 'idle' ? 'var(--accent-emerald)' : 'var(--text-muted)' }}>
                <span>{t.epc.substring(0, 16)}...</span>
                <span>{t.rssi}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Odoo ERP Core */}
        <div
          style={{
            background: 'var(--bg-tertiary)',
            border: scanStep === 'syncing_odoo' ? '1px solid var(--accent-primary)' : '1px solid var(--bg-card-border)',
            borderRadius: '10px',
            padding: '1.25rem',
            position: 'relative',
            transition: 'border-color 0.3s',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Database size={18} color="var(--accent-primary)" />
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>2. Odoo ERP 17/18 Engine</span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-primary)' }}>
              Python / OWL
            </span>
          </div>

          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            Verifies stock move against work order #{currentBatch.odooPicking} in PostgreSQL.
          </div>

          <div
            style={{
              background: 'var(--bg-primary)',
              borderRadius: '8px',
              padding: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              border: '1px solid var(--bg-card-border)',
            }}
          >
            <div style={{ color: 'var(--text-muted)' }}>
              Picking: <span style={{ color: 'var(--text-primary)' }}>{currentBatch.odooPicking}</span>
            </div>
            <div style={{ color: 'var(--text-muted)' }}>
              Item: <span style={{ color: 'var(--accent-primary)' }}>{currentBatch.item}</span>
            </div>
            <div style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              Status:
              {scanStep === 'completed' || scanStep === 'printing_zpl' ? (
                <span style={{ color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <CheckCircle2 size={12} /> Stock Move Confirmed
                </span>
              ) : (
                <span style={{ color: 'var(--accent-amber)' }}>Waiting Verification</span>
              )}
            </div>
          </div>
        </div>

        {/* Step 3: Zebra ZPL Printer Output */}
        <div
          style={{
            background: 'var(--bg-tertiary)',
            border: scanStep === 'printing_zpl' || scanStep === 'completed' ? '1px solid var(--accent-primary)' : '1px solid var(--bg-card-border)',
            borderRadius: '10px',
            padding: '1.25rem',
            position: 'relative',
            transition: 'border-color 0.3s',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Printer size={18} color="var(--accent-primary)" />
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>3. Zebra Industrial Printer</span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-primary)' }}>
              ZPL II Thermal
            </span>
          </div>

          {/* Rendered Physical Thermal Label Preview */}
          <div
            style={{
              background: '#ffffff',
              color: '#0f172a',
              borderRadius: '8px',
              padding: '0.85rem',
              fontFamily: 'monospace',
              fontSize: '0.7rem',
              lineHeight: 1.3,
              border: '2px dashed #94a3b8',
              boxShadow: scanStep === 'completed' ? '0 0 15px rgba(59, 130, 246, 0.4)' : 'none',
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
          borderRadius: '10px',
          background: 'var(--bg-tertiary)',
          border: '1px solid var(--bg-card-border)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
        }}
      >
        <ShieldCheck size={20} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
        <span>
          <strong style={{ color: 'var(--text-primary)' }}>Field Tested in Large-Scale Industrial Manufacturing:</strong> Deployed for active apparel and textile enterprises to eliminate manual data entry, streamline warehouse dispatch by 70%, and ensure real-time inventory synchronization across multi-tenant cloud instances.
        </span>
      </div>
    </div>
  );
}
