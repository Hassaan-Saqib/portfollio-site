'use client';

import React, { useState } from 'react';
import { Hand, RefreshCw, CheckCircle2, Zap, Radio, Sliders, Activity, MousePointer } from 'lucide-react';

interface GesturePreset {
  id: string;
  name: string;
  icon: string;
  dispatchedAction: string;
  actionCategory: string;
  confidence: string;
  inferenceTime: string;
  fps: string;
  jointAngle: string;
  handBones: Array<{ x1: number; y1: number; x2: number; y2: number }>;
  landmarks: Array<{ id: number; x: number; y: number; name: string }>;
  fingersExtended: { thumb: boolean; index: boolean; middle: boolean; ring: boolean; pinky: boolean };
}

const GESTURE_PRESETS: GesturePreset[] = [
  {
    id: 'index-point',
    name: 'Index Point (Virtual Cursor)',
    icon: '☝️',
    dispatchedAction: 'CURSOR_MOVE_SMOOTH [X: 960, Y: 540]',
    actionCategory: 'OS Cursor Navigation',
    confidence: '99.4%',
    inferenceTime: '11.8 ms',
    fps: '60.4 FPS',
    jointAngle: 'Index: 178° (Extended) | Others: <45°',
    fingersExtended: { thumb: false, index: true, middle: false, ring: false, pinky: false },
    landmarks: [
      { id: 0, x: 150, y: 280, name: 'Wrist' },
      // Thumb
      { id: 1, x: 120, y: 245, name: 'Thumb CMC' },
      { id: 2, x: 100, y: 215, name: 'Thumb MCP' },
      { id: 3, x: 92, y: 195, name: 'Thumb IP' },
      { id: 4, x: 95, y: 180, name: 'Thumb Tip' },
      // Index (Extended high)
      { id: 5, x: 130, y: 180, name: 'Index MCP' },
      { id: 6, x: 128, y: 130, name: 'Index PIP' },
      { id: 7, x: 126, y: 85, name: 'Index DIP' },
      { id: 8, x: 125, y: 40, name: 'Index Tip' },
      // Middle (Curled)
      { id: 9, x: 150, y: 180, name: 'Middle MCP' },
      { id: 10, x: 152, y: 160, name: 'Middle PIP' },
      { id: 11, x: 150, y: 185, name: 'Middle DIP' },
      { id: 12, x: 148, y: 200, name: 'Middle Tip' },
      // Ring (Curled)
      { id: 13, x: 170, y: 185, name: 'Ring MCP' },
      { id: 14, x: 172, y: 168, name: 'Ring PIP' },
      { id: 15, x: 168, y: 190, name: 'Ring DIP' },
      { id: 16, x: 166, y: 205, name: 'Ring Tip' },
      // Pinky (Curled)
      { id: 17, x: 190, y: 195, name: 'Pinky MCP' },
      { id: 18, x: 192, y: 180, name: 'Pinky PIP' },
      { id: 19, x: 188, y: 198, name: 'Pinky DIP' },
      { id: 20, x: 185, y: 212, name: 'Pinky Tip' },
    ],
    handBones: [
      { x1: 150, y1: 280, x2: 120, y2: 245 },
      { x1: 120, y1: 245, x2: 100, y2: 215 },
      { x1: 100, y1: 215, x2: 92, y2: 195 },
      { x1: 92, y1: 195, x2: 95, y2: 180 },
      // Index
      { x1: 150, y1: 280, x2: 130, y2: 180 },
      { x1: 130, y1: 180, x2: 128, y2: 130 },
      { x1: 128, y1: 130, x2: 126, y2: 85 },
      { x1: 126, y1: 85, x2: 125, y2: 40 },
      // Middle
      { x1: 150, y1: 280, x2: 150, y2: 180 },
      { x1: 150, y1: 180, x2: 152, y2: 160 },
      { x1: 152, y1: 160, x2: 150, y2: 185 },
      { x1: 150, y1: 185, x2: 148, y2: 200 },
      // Ring
      { x1: 150, y1: 280, x2: 170, y2: 185 },
      { x1: 170, y1: 185, x2: 172, y2: 168 },
      { x1: 172, y1: 168, x2: 168, y2: 190 },
      { x1: 168, y1: 190, x2: 166, y2: 205 },
      // Pinky
      { x1: 150, y1: 280, x2: 190, y2: 195 },
      { x1: 190, y1: 195, x2: 192, y2: 180 },
      { x1: 192, y1: 180, x2: 188, y2: 198 },
      { x1: 188, y1: 198, x2: 185, y2: 212 },
    ],
  },
  {
    id: 'victory-sign',
    name: 'Victory Sign (Double Click / Select)',
    icon: '✌️',
    dispatchedAction: 'DOUBLE_CLICK_EVENT [Left Button]',
    actionCategory: 'OS Selection Command',
    confidence: '98.9%',
    inferenceTime: '12.4 ms',
    fps: '59.8 FPS',
    jointAngle: 'Index: 176° | Middle: 174° | Span: 28°',
    fingersExtended: { thumb: false, index: true, middle: true, ring: false, pinky: false },
    landmarks: [
      { id: 0, x: 150, y: 280, name: 'Wrist' },
      // Thumb
      { id: 1, x: 120, y: 245, name: 'Thumb CMC' },
      { id: 2, x: 105, y: 220, name: 'Thumb MCP' },
      { id: 3, x: 115, y: 200, name: 'Thumb IP' },
      { id: 4, x: 125, y: 190, name: 'Thumb Tip' },
      // Index (Extended left-angled)
      { id: 5, x: 130, y: 180, name: 'Index MCP' },
      { id: 6, x: 120, y: 130, name: 'Index PIP' },
      { id: 7, x: 110, y: 85, name: 'Index DIP' },
      { id: 8, x: 100, y: 40, name: 'Index Tip' },
      // Middle (Extended right-angled)
      { id: 9, x: 155, y: 180, name: 'Middle MCP' },
      { id: 10, x: 160, y: 130, name: 'Middle PIP' },
      { id: 11, x: 165, y: 85, name: 'Middle DIP' },
      { id: 12, x: 170, y: 40, name: 'Middle Tip' },
      // Ring (Curled)
      { id: 13, x: 175, y: 190, name: 'Ring MCP' },
      { id: 14, x: 174, y: 170, name: 'Ring PIP' },
      { id: 15, x: 168, y: 195, name: 'Ring DIP' },
      { id: 16, x: 164, y: 210, name: 'Ring Tip' },
      // Pinky (Curled)
      { id: 17, x: 192, y: 198, name: 'Pinky MCP' },
      { id: 18, x: 190, y: 182, name: 'Pinky PIP' },
      { id: 19, x: 185, y: 202, name: 'Pinky DIP' },
      { id: 20, x: 180, y: 215, name: 'Pinky Tip' },
    ],
    handBones: [
      { x1: 150, y1: 280, x2: 120, y2: 245 },
      { x1: 120, y1: 245, x2: 105, y2: 220 },
      { x1: 105, y1: 220, x2: 115, y2: 200 },
      { x1: 115, y1: 200, x2: 125, y2: 190 },
      // Index
      { x1: 150, y1: 280, x2: 130, y2: 180 },
      { x1: 130, y1: 180, x2: 120, y2: 130 },
      { x1: 120, y1: 130, x2: 110, y2: 85 },
      { x1: 110, y1: 85, x2: 100, y2: 40 },
      // Middle
      { x1: 150, y1: 280, x2: 155, y2: 180 },
      { x1: 155, y1: 180, x2: 160, y2: 130 },
      { x1: 160, y1: 130, x2: 165, y2: 85 },
      { x1: 165, y1: 85, x2: 170, y2: 40 },
      // Ring
      { x1: 150, y1: 280, x2: 175, y2: 190 },
      { x1: 175, y1: 190, x2: 174, y2: 170 },
      { x1: 174, y1: 170, x2: 168, y2: 195 },
      { x1: 168, y1: 195, x2: 164, y2: 210 },
      // Pinky
      { x1: 150, y1: 280, x2: 192, y2: 198 },
      { x1: 192, y1: 198, x2: 190, y2: 182 },
      { x1: 190, y1: 182, x2: 185, y2: 202 },
      { x1: 185, y1: 202, x2: 180, y2: 215 },
    ],
  },
  {
    id: 'open-palm',
    name: 'Open Palm (Play / Pause & Scroll)',
    icon: '✋',
    dispatchedAction: 'MEDIA_PLAY_PAUSE / TOUCHLESS_SCROLL',
    actionCategory: 'Touchless Presentation Mode',
    confidence: '99.7%',
    inferenceTime: '10.9 ms',
    fps: '61.2 FPS',
    jointAngle: 'All 5 Fingers Extended (>165°)',
    fingersExtended: { thumb: true, index: true, middle: true, ring: true, pinky: true },
    landmarks: [
      { id: 0, x: 150, y: 280, name: 'Wrist' },
      // Thumb
      { id: 1, x: 120, y: 245, name: 'Thumb CMC' },
      { id: 2, x: 95, y: 215, name: 'Thumb MCP' },
      { id: 3, x: 75, y: 185, name: 'Thumb IP' },
      { id: 4, x: 60, y: 160, name: 'Thumb Tip' },
      // Index
      { id: 5, x: 125, y: 180, name: 'Index MCP' },
      { id: 6, x: 115, y: 130, name: 'Index PIP' },
      { id: 7, x: 108, y: 85, name: 'Index DIP' },
      { id: 8, x: 102, y: 40, name: 'Index Tip' },
      // Middle
      { id: 9, x: 150, y: 175, name: 'Middle MCP' },
      { id: 10, x: 150, y: 125, name: 'Middle PIP' },
      { id: 11, x: 150, y: 78, name: 'Middle DIP' },
      { id: 12, x: 150, y: 32, name: 'Middle Tip' },
      // Ring
      { id: 13, x: 175, y: 180, name: 'Ring MCP' },
      { id: 14, x: 182, y: 132, name: 'Ring PIP' },
      { id: 15, x: 188, y: 88, name: 'Ring DIP' },
      { id: 16, x: 194, y: 45, name: 'Ring Tip' },
      // Pinky
      { id: 17, x: 198, y: 195, name: 'Pinky MCP' },
      { id: 18, x: 210, y: 150, name: 'Pinky PIP' },
      { id: 19, x: 220, y: 110, name: 'Pinky DIP' },
      { id: 20, x: 228, y: 72, name: 'Pinky Tip' },
    ],
    handBones: [
      { x1: 150, y1: 280, x2: 120, y2: 245 },
      { x1: 120, y1: 245, x2: 95, y2: 215 },
      { x1: 95, y1: 215, x2: 75, y2: 185 },
      { x1: 75, y1: 185, x2: 60, y2: 160 },
      // Index
      { x1: 150, y1: 280, x2: 125, y2: 180 },
      { x1: 125, y1: 180, x2: 115, y2: 130 },
      { x1: 115, y1: 130, x2: 108, y2: 85 },
      { x1: 108, y1: 85, x2: 102, y2: 40 },
      // Middle
      { x1: 150, y1: 280, x2: 150, y2: 175 },
      { x1: 150, y1: 175, x2: 150, y2: 125 },
      { x1: 150, y1: 125, x2: 150, y2: 78 },
      { x1: 150, y1: 78, x2: 150, y2: 32 },
      // Ring
      { x1: 150, y1: 280, x2: 175, y2: 180 },
      { x1: 175, y1: 180, x2: 182, y2: 132 },
      { x1: 182, y1: 132, x2: 188, y2: 88 },
      { x1: 188, y1: 88, x2: 194, y2: 45 },
      // Pinky
      { x1: 150, y1: 280, x2: 198, y2: 195 },
      { x1: 198, y1: 195, x2: 210, y2: 150 },
      { x1: 210, y1: 150, x2: 220, y2: 110 },
      { x1: 220, y1: 110, x2: 228, y2: 72 },
    ],
  },
  {
    id: 'thumbs-up',
    name: 'Thumbs Up (Confirm / Volume Up)',
    icon: '👍',
    dispatchedAction: 'VOLUME_LEVEL_UP (+5%) & CONFIRM',
    actionCategory: 'Audio & Intent Dispatch',
    confidence: '99.1%',
    inferenceTime: '11.5 ms',
    fps: '60.5 FPS',
    jointAngle: 'Thumb: Vertical 90° | Fingers Folded',
    fingersExtended: { thumb: true, index: false, middle: false, ring: false, pinky: false },
    landmarks: [
      { id: 0, x: 150, y: 280, name: 'Wrist' },
      // Thumb (Extended upward)
      { id: 1, x: 120, y: 245, name: 'Thumb CMC' },
      { id: 2, x: 95, y: 210, name: 'Thumb MCP' },
      { id: 3, x: 80, y: 150, name: 'Thumb IP' },
      { id: 4, x: 70, y: 95, name: 'Thumb Tip' },
      // Index (Folded)
      { id: 5, x: 135, y: 200, name: 'Index MCP' },
      { id: 6, x: 140, y: 175, name: 'Index PIP' },
      { id: 7, x: 135, y: 195, name: 'Index DIP' },
      { id: 8, x: 130, y: 210, name: 'Index Tip' },
      // Middle (Folded)
      { id: 9, x: 155, y: 200, name: 'Middle MCP' },
      { id: 10, x: 158, y: 178, name: 'Middle PIP' },
      { id: 11, x: 154, y: 198, name: 'Middle DIP' },
      { id: 12, x: 150, y: 215, name: 'Middle Tip' },
      // Ring (Folded)
      { id: 13, x: 175, y: 205, name: 'Ring MCP' },
      { id: 14, x: 176, y: 182, name: 'Ring PIP' },
      { id: 15, x: 172, y: 202, name: 'Ring DIP' },
      { id: 16, x: 168, y: 218, name: 'Ring Tip' },
      // Pinky (Folded)
      { id: 17, x: 195, y: 212, name: 'Pinky MCP' },
      { id: 18, x: 194, y: 192, name: 'Pinky PIP' },
      { id: 19, x: 190, y: 208, name: 'Pinky DIP' },
      { id: 20, x: 186, y: 222, name: 'Pinky Tip' },
    ],
    handBones: [
      { x1: 150, y1: 280, x2: 120, y2: 245 },
      { x1: 120, y1: 245, x2: 95, y2: 210 },
      { x1: 95, y1: 210, x2: 80, y2: 150 },
      { x1: 80, y1: 150, x2: 70, y2: 95 },
      // Index
      { x1: 150, y1: 280, x2: 135, y2: 200 },
      { x1: 135, y1: 200, x2: 140, y2: 175 },
      { x1: 140, y1: 175, x2: 135, y2: 195 },
      { x1: 135, y1: 195, x2: 130, y2: 210 },
      // Middle
      { x1: 150, y1: 280, x2: 155, y2: 200 },
      { x1: 155, y1: 200, x2: 158, y2: 178 },
      { x1: 158, y1: 178, x2: 154, y2: 198 },
      { x1: 154, y1: 198, x2: 150, y2: 215 },
      // Ring
      { x1: 150, y1: 280, x2: 175, y2: 205 },
      { x1: 175, y1: 205, x2: 176, y2: 182 },
      { x1: 176, y1: 182, x2: 172, y2: 202 },
      { x1: 172, y1: 202, x2: 168, y2: 218 },
      // Pinky
      { x1: 150, y1: 280, x2: 195, y2: 212 },
      { x1: 195, y1: 212, x2: 194, y2: 192 },
      { x1: 194, y1: 192, x2: 190, y2: 208 },
      { x1: 190, y1: 208, x2: 186, y2: 222 },
    ],
  },
];

export default function GestureSimulator() {
  const [activeGestureIdx, setActiveGestureIdx] = useState(0);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [showLandmarkLabels, setShowLandmarkLabels] = useState(true);
  const [isInferring, setIsInferring] = useState(false);

  const active = GESTURE_PRESETS[activeGestureIdx];

  const handleTriggerInference = () => {
    setIsInferring(true);
    setTimeout(() => {
      setIsInferring(false);
    }, 500);
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
              MediaPipe Hands AI &amp; OpenCV
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>•</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
              21 3D Landmarks • Sub-15ms Latency • Touchless HCI
            </span>
          </div>
          <h3 style={{ fontSize: '1.35rem', marginTop: '0.35rem', color: 'var(--text-primary)', fontWeight: 700 }}>
            Touchless AI Hand Gesture Recognition &amp; Control Simulator
          </h3>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button
            onClick={handleTriggerInference}
            disabled={isInferring}
            className="btn btn-primary btn-sm"
            id="run-gesture-inference-btn"
            style={{ borderRadius: '6px' }}
          >
            <RefreshCw size={14} className={isInferring ? 'animate-spin' : ''} />
            <span>Re-evaluate Landmarks</span>
          </button>
        </div>
      </div>

      {/* Preset Gestures & Toggles */}
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
            GESTURE POSE:
          </span>
          {GESTURE_PRESETS.map((g, idx) => (
            <button
              key={g.id}
              onClick={() => setActiveGestureIdx(idx)}
              style={{
                padding: '0.45rem 0.85rem',
                borderRadius: '6px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                border: activeGestureIdx === idx ? '1px solid var(--accent-primary)' : '1px solid var(--bg-card-border)',
                background: activeGestureIdx === idx ? 'rgba(59, 130, 246, 0.15)' : 'var(--bg-tertiary)',
                color: activeGestureIdx === idx ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: activeGestureIdx === idx ? 600 : 500,
                transition: 'all 0.15s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <span>{g.icon}</span>
              <span>{g.name.split(' (')[0]}</span>
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={showSkeleton}
              onChange={(e) => setShowSkeleton(e.target.checked)}
              style={{ accentColor: 'var(--accent-primary)' }}
            />
            <span>Skeletal Bones</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={showLandmarkLabels}
              onChange={(e) => setShowLandmarkLabels(e.target.checked)}
              style={{ accentColor: 'var(--accent-emerald)' }}
            />
            <span>21 Joint Landmarks</span>
          </label>
        </div>
      </div>

      {/* Main Grid: Visual SVG Canvas + Live Telemetry */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          alignItems: 'center',
        }}
      >
        {/* Computer Vision Hand Pose Canvas */}
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
              inset: '15px 25px',
              border: '1px dashed var(--accent-primary)',
              borderRadius: '8px',
              pointerEvents: 'none',
              background: 'rgba(59, 130, 246, 0.04)',
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
              MEDIAPIPE_HANDS_3D [Conf: {active.confidence}]
            </div>

            {/* Handedness Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                background: 'var(--bg-card)',
                border: '1px solid var(--bg-card-border)',
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '0.65rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-emerald)',
                fontWeight: 600,
              }}
            >
              RIGHT_HAND • 21 JOINTS
            </div>
          </div>

          {/* Hand Landmark SVG */}
          <svg
            viewBox="0 0 300 320"
            style={{
              width: '100%',
              maxWidth: '280px',
              height: 'auto',
              filter: 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.25))',
            }}
          >
            {/* Skeletal Bone Lines */}
            {showSkeleton && (
              <g>
                {active.handBones.map((bone, i) => (
                  <line
                    key={i}
                    x1={bone.x1}
                    y1={bone.y1}
                    x2={bone.x2}
                    y2={bone.y2}
                    stroke="var(--accent-primary)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                ))}
              </g>
            )}

            {/* Joint Landmark Nodes */}
            {showLandmarkLabels && (
              <g>
                {active.landmarks.map((pt) => {
                  const isFingertip = [4, 8, 12, 16, 20].includes(pt.id);
                  const isWrist = pt.id === 0;

                  return (
                    <g key={pt.id}>
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isFingertip ? 5 : isWrist ? 6 : 3.5}
                        fill={isFingertip ? 'var(--accent-emerald)' : isWrist ? '#a855f7' : 'var(--accent-primary)'}
                        stroke="#ffffff"
                        strokeWidth="1.2"
                      />
                      {isFingertip && (
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={9}
                          fill="none"
                          stroke="var(--accent-emerald)"
                          strokeWidth="1"
                          strokeDasharray="2 2"
                        />
                      )}
                    </g>
                  );
                })}
              </g>
            )}

            {/* Active Gesture Label in Center */}
            <rect x="80" y="295" width="140" height="20" rx="4" fill="var(--bg-card)" stroke="var(--bg-card-border)" strokeWidth="1" />
            <text x="150" y="309" fill="var(--accent-emerald)" fontSize="9.5" fontFamily="var(--font-mono)" fontWeight="700" textAnchor="middle">
              ACTIVE: {active.dispatchedAction.split(' ')[0]}
            </text>
          </svg>
        </div>

        {/* Telemetry & Action Execution Specs */}
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
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                HCI Action Telemetry
              </span>
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
                <CheckCircle2 size={13} /> GESTURE CONFIRMED
              </span>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--bg-card-border)', color: 'var(--text-muted)' }}>
                  <th style={{ textAlign: 'left', paddingBottom: '0.5rem' }}>Parameter</th>
                  <th style={{ textAlign: 'left', paddingBottom: '0.5rem' }}>Value</th>
                  <th style={{ textAlign: 'right', paddingBottom: '0.5rem' }}>Status</th>
                </tr>
              </thead>
              <tbody style={{ fontFamily: 'var(--font-mono)' }}>
                <tr style={{ borderBottom: '1px solid var(--bg-card-border)' }}>
                  <td style={{ padding: '0.6rem 0', color: 'var(--text-primary)' }}>Gesture Pose</td>
                  <td style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{active.name}</td>
                  <td style={{ textAlign: 'right', color: 'var(--accent-emerald)' }}>Active</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--bg-card-border)' }}>
                  <td style={{ padding: '0.6rem 0', color: 'var(--text-primary)' }}>OS Command</td>
                  <td style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>{active.dispatchedAction}</td>
                  <td style={{ textAlign: 'right', color: 'var(--accent-emerald)' }}>Dispatched</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--bg-card-border)' }}>
                  <td style={{ padding: '0.6rem 0', color: 'var(--text-primary)' }}>Finger State</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{active.jointAngle}</td>
                  <td style={{ textAlign: 'right', color: 'var(--accent-emerald)' }}>21/21 Pts</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.6rem 0', color: 'var(--text-primary)' }}>Target Domain</td>
                  <td style={{ color: 'var(--accent-amber)', fontWeight: 600 }}>{active.actionCategory}</td>
                  <td style={{ textAlign: 'right', color: 'var(--accent-emerald)' }}>Ready</td>
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
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>STREAM THROUGHPUT</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                {active.fps}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
