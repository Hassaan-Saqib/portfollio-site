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
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fafafa',
          borderRadius: '7px',
          border: '1.5px solid #27272a',
          fontWeight: 700,
          fontFamily: 'sans-serif',
          letterSpacing: '-0.5px',
        }}
      >
        MH
      </div>
    ),
    {
      ...size,
    }
  );
}
