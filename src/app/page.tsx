'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBanner from '@/components/StatsBanner';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import LabSection from '@/components/LabSection';
import SkillsSection from '@/components/SkillsSection';
import EducationCertifications from '@/components/EducationCertifications';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ResumeModal from '@/components/ResumeModal';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Fixed Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* Clean Metrics / Achievements */}
        <StatsBanner />

        {/* Work Experience Timeline */}
        <ExperienceSection />

        {/* Featured Projects & Architecture */}
        <ProjectsSection />

        {/* Live Interactive Engineering Lab (Hardware & AI Emulators) */}
        <LabSection />

        {/* Skills & Technologies */}
        <SkillsSection />

        {/* Education & Industry Honors */}
        <EducationCertifications />

        {/* Direct Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable & Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
