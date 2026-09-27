import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 14,
          background: '#04060c',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00f0ff',
          borderRadius: '6px',
          border: '1.5px solid #00f0ff',
          fontWeight: 900,
          fontFamily: 'monospace',
          letterSpacing: '-0.5px',
        }}
      >
        <span style={{ color: '#00ff88', marginRight: '1px' }}>&gt;</span>MH
      </div>
    ),
    {
      ...size,
    }
  );
}
