'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Menu, X, Download, Mail, Github, Linkedin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export default function Navbar({ onOpenResume, onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
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
        transition: 'all 0.2s ease',
        background: scrolled ? 'var(--bg-primary)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--bg-card-border)' : '1px solid transparent',
        padding: scrolled ? '0.75rem 0' : '1.15rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#about"
          id="nav-brand-logo"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: 'var(--text-primary)',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--bg-card-border)',
              color: 'var(--text-primary)',
              fontWeight: 700,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            MH
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span style={{ fontWeight: 700, fontSize: '0.98rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                {PERSONAL_INFO.name}
              </span>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 500 }}>
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
                fontSize: '0.88rem',
                fontWeight: 500,
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
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
          <ThemeToggle />

          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="btn btn-secondary btn-sm desktop-only"
            title="View & Download Curriculum Vitae"
            style={{ borderRadius: '6px' }}
          >
            <Download size={14} />
            <span>Resume</span>
          </button>

          <button
            id="nav-contact-btn"
            onClick={onOpenContact}
            className="btn btn-primary btn-sm"
            style={{ borderRadius: '6px' }}
          >
            <Mail size={14} />
            <span>Contact Me</span>
          </button>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-icon mobile-only"
            style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--bg-card-border)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              borderRadius: '6px',
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
            background: 'var(--bg-card)',
            borderBottom: '1px solid var(--bg-card-border)',
            backdropFilter: 'blur(16px)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '0.4rem 0',
                borderBottom: '1px solid var(--bg-card-border)',
              }}
            >
              {link.name}
            </a>
          ))}

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn btn-secondary btn-sm"
              style={{ flex: 1 }}
            >
              <Download size={15} /> Resume
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-icon"
              style={{ display: 'flex' }}
            >
              <Github size={16} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-icon"
              style={{ display: 'flex' }}
            >
              <Linkedin size={16} />
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
