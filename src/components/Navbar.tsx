'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Menu, X, Download, Terminal, Mail, Linkedin, Github } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export default function Navbar({ onOpenResume, onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills & Stack', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hardware & AI Lab', href: '#lab' },
  ];

  return (
    <header
      id="site-header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(4, 6, 12, 0.95)' : 'rgba(4, 6, 12, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(0, 240, 255, 0.18)' : '1px solid rgba(255, 255, 255, 0.06)',
        padding: scrolled ? '0.7rem 0' : '1rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo - Clean Personal Branding */}
        <a
          href="#about"
          id="nav-brand-logo"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: '#fff',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              width: '34px',
              height: '34px',
              borderRadius: '4px',
              background: 'rgba(0, 240, 255, 0.08)',
              border: '1px solid rgba(0, 240, 255, 0.35)',
              color: '#00f0ff',
              fontWeight: 800,
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 10px rgba(0, 240, 255, 0.15)',
            }}
          >
            &gt;_
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span style={{ fontWeight: 800, fontSize: '0.98rem', letterSpacing: '-0.01em', color: '#fff', fontFamily: 'var(--font-mono)' }}>
                {PERSONAL_INFO.name}
              </span>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 8px #00ff88' }} />
            </div>
            <div style={{ fontSize: '0.7rem', color: '#00f0ff', fontFamily: 'var(--font-mono)', letterSpacing: '0.02em' }}>
              AI Engineer &amp; Odoo Developer
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          id="desktop-nav"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem',
          }}
          className="desktop-only"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: 'var(--text-secondary)',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono)',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00f0ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="btn btn-secondary btn-sm desktop-only"
            title="View & Download Curriculum Vitae"
            style={{ borderRadius: '4px', fontSize: '0.78rem' }}
          >
            <Download size={14} />
            <span>CV.PDF</span>
          </button>

          <button
            id="nav-contact-btn"
            onClick={onOpenContact}
            className="btn btn-primary btn-sm"
            style={{ borderRadius: '4px', fontSize: '0.78rem' }}
          >
            <Terminal size={14} />
            <span>CONNECT</span>
          </button>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-icon mobile-only"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              cursor: 'pointer',
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(10, 15, 29, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontSize: '1.05rem',
                fontWeight: 600,
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {link.name}
            </a>
          ))}

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn btn-secondary"
              style={{ flex: 1 }}
            >
              <Download size={16} /> Resume
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-icon"
              style={{ display: 'flex' }}
            >
              <Github size={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-icon"
              style={{ display: 'flex' }}
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-only {
            display: flex !important;
          }
          .mobile-only {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
