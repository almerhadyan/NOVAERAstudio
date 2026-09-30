import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { IntroSection } from './components/IntroSection.tsx';
import { SelectedWork } from './components/SelectedWork.tsx';
import { CapabilitiesSection } from './components/CapabilitiesSection.tsx';
import { MethodologySection } from './components/MethodologySection.tsx';
import { TechnologyMatrix } from './components/TechnologyMatrix.tsx';
import { StudioSection } from './components/StudioSection.tsx';
import { TestimonialSection } from './components/TestimonialSection.tsx';
import { InsightsSection } from './components/InsightsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { CaseStudyModal } from './components/CaseStudyModal.tsx';
import { PROJECTS } from './data/studioData.ts';
import { Project } from './types/index.ts';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('work');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [inquiryScope, setInquiryScope] = useState<string | undefined>(undefined);

  // Intersection observer to automatically update active nav tab as user scrolls
  useEffect(() => {
    const sectionIds = ['work', 'services', 'about', 'insights', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setCurrentTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    if (tab === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(tab);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedCaseStudy(project);
  };

  const handleOpenInquiry = (scope?: string) => {
    setInquiryScope(scope);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* Fixed Sticky Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenProjectModal={() => handleOpenInquiry()}
      />

      {/* Main Experience Stream */}
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* 01 HERO SECTION */}
          <HeroSection
            onViewWork={() => handleSelectTab('work')}
            onStartProject={() => handleOpenInquiry()}
          />

          {/* 02 INTRODUCTION / MANIFESTO */}
          <IntroSection />

          {/* 03 SELECTED WORK */}
          <SelectedWork
            projects={PROJECTS}
            onOpenCaseStudy={handleOpenCaseStudy}
          />

          {/* 04 CAPABILITIES / SERVICES */}
          <CapabilitiesSection
            onStartProjectWithService={(serviceName) => handleOpenInquiry(serviceName)}
          />

          {/* 05 APPROACH / HOW WE WORK */}
          <MethodologySection />

          {/* 06 TECHNOLOGY MATRIX */}
          <TechnologyMatrix />

          {/* 07 STUDIO & PHILOSOPHY */}
          <StudioSection />

          {/* 08 TESTIMONIALS */}
          <TestimonialSection />

          {/* 09 INSIGHTS / TRANSMISSIONS */}
          <InsightsSection />

          {/* 10 CONTACT ENGAGEMENT */}
          <ContactSection preselectedScope={inquiryScope} />
        </div>
      </main>

      {/* Site Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenProjectModal={() => handleOpenInquiry()}
      />

      {/* Interactive Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          allProjects={PROJECTS}
          onClose={() => setSelectedCaseStudy(null)}
          onSelectProject={(p) => setSelectedCaseStudy(p)}
          onOpenInquiry={(scope) => handleOpenInquiry(scope)}
        />
      )}
    </div>
  );
}
