import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          padding: '0.4rem 1rem',
          borderRadius: '9999px',
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          color: 'var(--accent-primary)',
          fontSize: '0.85rem',
          fontWeight: 600,
          marginBottom: '1rem',
        }}
      >
        404 — Page Not Found
      </div>
      <h1
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 800,
          margin: '0 0 1rem 0',
          letterSpacing: '-0.02em',
        }}
      >
        System Route Not Found
      </h1>
      <p
        style={{
          maxWidth: '480px',
          color: 'var(--text-secondary)',
          fontSize: '1rem',
          lineHeight: 1.6,
          marginBottom: '2rem',
        }}
      >
        The requested endpoint does not exist or has been relocated. Return to Muhammad Hassaan’s portfolio home.
      </p>
      <Link
        href="/"
        className="btn-primary"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          background: 'var(--accent-primary)',
          color: '#ffffff',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        Return to Portfolio
      </Link>
    </div>
  );
}
