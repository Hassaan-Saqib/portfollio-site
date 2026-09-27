import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://hassaansaqib.com'),
  title: 'Muhammad Hassaan | AI Engineer & Odoo Developer',
  description:
    'Portfolio of Muhammad Hassaan, BSCS FAST-NUCES graduate. Specialized in Odoo ERP custom modules, multi-tenant architecture, UHF RFID & Zebra printer hardware integration, enterprise customized LLMs, n8n automation, Khata/POS systems, and Flutter apps.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  keywords: [
    'Muhammad Hassaan',
    'AI Engineer',
    'Odoo Developer',
    'Odoo ERP Specialist',
    'Odoo Custom Modules',
    'Multi-Tenant Odoo',
    'White-Label Odoo',
    'FAST-NUCES',
    'UHF RFID Odoo',
    'Zebra Printer ZPL Integration',
    'Khata System',
    'Point of Sale POS',
    'Enterprise LLM',
    'Prompt Engineering',
    'n8n Automation',
    'Flutter Mobile Apps',
    'Computer Vision Garment Measurement',
    'Next.js Full Stack Developer',
    'Python Developer Pakistan',
    'PostgreSQL ERP Optimization',
  ],
  authors: [{ name: 'Muhammad Hassaan', url: 'https://github.com/MrHassaan' }],
  creator: 'Muhammad Hassaan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hassaansaqib.com',
    title: 'Muhammad Hassaan | Odoo ERP Specialist & Full-Stack AI Engineer',
    description:
      'Explore projects in enterprise Odoo ERP development, UHF RFID tracking, multi-tenant SaaS, customized LLMs, n8n workflows, POS/Khata systems, and Flutter apps by Muhammad Hassaan.',
    siteName: 'Muhammad Hassaan Portfolio',
    images: [
      {
        url: '/images/muhammad-hassaan.jpg',
        width: 800,
        height: 800,
        alt: 'Muhammad Hassaan - Odoo ERP Specialist & Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Hassaan | Odoo ERP Specialist & Full-Stack AI Engineer',
    description:
      'BSCS FAST-NUCES graduate specializing in Odoo ERP ecosystems, IoT edge hardware, customized LLMs, and enterprise automation.',
    images: ['/images/muhammad-hassaan.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muhammad Hassaan',
    jobTitle: 'Odoo ERP Specialist & Full-Stack AI Engineer',
    email: 'hassaansaqib00@gmail.com',
    telephone: '+92 3187090077',
    url: 'https://github.com/MrHassaan',
    sameAs: [
      'https://www.linkedin.com/in/muhammad-hassaan1',
      'https://github.com/MrHassaan',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'National University of Computer and Emerging Sciences (FAST-NUCES)',
    },
    knowsAbout: [
      'Odoo ERP Custom Modules',
      'Multi-Tenant SaaS Architecture',
      'Odoo White-Labeling',
      'UHF RFID Real-Time Tracking',
      'Zebra ZPL Barcode Printers',
      'Large Language Models (LLMs)',
      'Prompt Engineering & RAG',
      'n8n Workflow Automation',
      'Point of Sale (POS) Systems',
      'Khata Digital Ledger Systems',
      'Flutter Mobile Development',
      'Python',
      'PostgreSQL',
      'Next.js & React 19',
    ],
  };

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          id="theme-init-script"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Structured Data for SEO / Knowledge Graph */}
        <script
          id="person-schema-jsonld"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Ambient Glowing Background Elements */}
        <div className="ambient-bg" aria-hidden="true">
          <div className="ambient-orb ambient-orb-1" />
          <div className="ambient-orb ambient-orb-2" />
          <div className="ambient-orb ambient-orb-3" />
          <div className="ambient-grid" />
        </div>

        {/* Content */}
        {children}

        {/* Vercel Speed Insights & Web Analytics */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
