import React from 'react';
import { sound } from './AudioEngine.ts';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenProjectModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenProjectModal }) => {
  const handleNav = (tab: string, e: React.MouseEvent) => {
    e.preventDefault();
    sound.click('subtle');
    onSelectTab(tab);
    const el = document.getElementById(tab);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-low">
      <div className="w-full px-margin-mobile md:px-margin-tablet lg:px-margin pt-space-xl pb-space-lg">
        {/* Top Call to Action Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-space-xl items-start">
          <div className="lg:col-span-8 flex flex-col gap-space-md">
            <span className="font-label-technical text-label-technical text-tertiary uppercase tracking-widest">
              // STUDIO INQUIRY
            </span>
            <h2 className="font-display-lg text-display-lg font-semibold tracking-tight text-on-surface uppercase leading-tight">
              LET'S BUILD SOMETHING MEANINGFUL.
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end items-center pt-space-md lg:pt-space-xl">
            <button
              onClick={() => {
                sound.click('confirm');
                if (onOpenProjectModal) {
                  onOpenProjectModal();
                } else {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group inline-flex items-center gap-space-xs bg-primary hover:bg-secondary text-on-primary font-label-technical text-label-technical px-space-lg py-space-md uppercase tracking-widest font-semibold transition-all duration-200 shadow-[0_0_24px_rgba(90,169,255,0.15)] cursor-pointer"
            >
              <span>START A PROJECT</span>
              <span className="material-symbols-outlined transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[18px]">
                north_east
              </span>
            </button>
          </div>
        </div>

        {/* Navigation & Transmissions Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-gutter py-space-lg border-y border-outline-variant/15">
          <div className="lg:col-span-6 flex flex-col gap-space-xs">
            <span className="font-label-stamp text-label-stamp uppercase tracking-widest text-outline">
              INDEX / NAVIGATION
            </span>
            <div className="flex flex-wrap gap-x-space-lg gap-y-space-xs pt-space-xs font-label-technical text-label-technical uppercase tracking-wider">
              {['work', 'services', 'about', 'insights', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={(e) => handleNav(tab, e)}
                  className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-space-xs lg:items-end">
            <span className="font-label-stamp text-label-stamp uppercase tracking-widest text-outline">
              TRANSMISSION / SOCIALS
            </span>
            <div className="flex flex-wrap gap-x-space-lg gap-y-space-xs pt-space-xs font-label-technical text-label-technical uppercase tracking-wider">
              {['INSTAGRAM', 'LINKEDIN', 'BEHANCE', 'GITHUB', 'DRIBBBLE'].map((social) => (
                <a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    sound.click('subtle');
                  }}
                  className="text-on-surface-variant hover:text-secondary transition-colors cursor-pointer"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Telemetry Timestamp & Coordinates */}
        <div className="pt-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm font-label-code text-label-code text-on-surface-variant tracking-wider uppercase">
          <div className="flex items-center gap-space-xs">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary"></span>
            <span>ALL SYSTEMS OPERATIONAL</span>
            <span>—</span>
            <span>© 2026 NOVAERA STUDIO</span>
          </div>
          <div>
            <span>JAKARTA / INDONESIA — LAT -6.2088° S, LONG 106.8456° E</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
