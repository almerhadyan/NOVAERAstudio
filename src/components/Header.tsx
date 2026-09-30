import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../data/studioData.ts';
import { sound } from './AudioEngine.ts';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenProjectModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab, onOpenProjectModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(sound.getMuted());
  const [activeNode, setActiveNode] = useState('JKT');

  const navLinks = [
    { id: 'work', label: 'WORK' },
    { id: 'services', label: 'SERVICES' },
    { id: 'about', label: 'ABOUT' },
    { id: 'insights', label: 'INSIGHTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    sound.click('subtle');
    onSelectTab(id);
    setMobileMenuOpen(false);

    // Also smoothly scroll to anchor if on overview
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) sound.click('confirm');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c0e13]/85 backdrop-blur-md border-b border-[#191c20]">
      <div className="h-20 w-full px-margin-mobile md:px-margin-tablet lg:px-margin flex items-center justify-between gap-gutter">
        {/* Left: Brand + Status */}
        <div className="flex items-center gap-space-md">
          <button
            onClick={(e) => handleNavClick('overview', e)}
            className="flex items-center gap-space-sm text-left focus:outline-none group cursor-pointer"
          >
            <img
              alt="NOVAERA Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              src={LOGO_URL}
            />
            <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface font-semibold">
              NOVAERA
            </span>
          </button>

          <div className="h-4 w-[1px] bg-outline-variant/30 hidden sm:block"></div>

          <div className="hidden sm:flex items-center gap-space-xs font-label-stamp text-label-stamp uppercase tracking-widest text-on-surface-variant">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
            <span>SYSTEM ONLINE</span>
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-lg font-label-technical text-label-technical tracking-widest uppercase">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={(e) => handleNavClick(link.id, e)}
                className={`transition-colors duration-200 cursor-pointer relative py-2 ${
                  isActive
                    ? 'text-primary font-medium tracking-wide'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary animate-in fade-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-space-md">
          {/* Sound Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            title={isMuted ? 'Interface Audio: Muted (Click to enable)' : 'Interface Audio: Active (Click to mute)'}
            className="p-1.5 text-outline hover:text-secondary transition-colors cursor-pointer text-xs flex items-center gap-1 font-label-stamp hidden md:flex border border-outline-variant/20 hover:border-secondary/40 px-2 py-1 bg-surface-container-low/40"
          >
            <span className="material-symbols-outlined text-[16px]">
              {isMuted ? 'volume_off' : 'volume_up'}
            </span>
            <span>{isMuted ? 'MUTE' : 'AUDIO'}</span>
          </button>

          {/* Start Project CTA */}
          <button
            onClick={(e) => {
              if (onOpenProjectModal) {
                onOpenProjectModal();
              } else {
                handleNavClick('contact', e);
              }
            }}
            className="border border-outline-variant/40 hover:border-primary bg-surface-container-low/50 hover:bg-primary text-on-surface hover:text-on-primary font-label-technical text-label-technical px-space-md py-space-xs transition-all duration-200 uppercase tracking-widest cursor-pointer text-xs sm:text-sm"
          >
            [ START A PROJECT ]
          </button>

          {/* Global Node Indicator / Profile */}
          <div
            title={`Active Node: ${activeNode} (Jakarta / Zurich / SF)`}
            onClick={() => {
              sound.click('toggle');
              setActiveNode((prev) => (prev === 'JKT' ? 'ZUR' : prev === 'ZUR' ? 'SFO' : 'JKT'));
            }}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors relative group"
          >
            <span className="font-label-stamp text-[10px] font-bold text-on-primary tracking-tighter">
              {activeNode}
            </span>
            <div className="absolute top-10 right-0 hidden group-hover:flex flex-col bg-surface-container-highest p-2 border border-outline-variant/40 text-[10px] font-label-code whitespace-nowrap shadow-xl z-50 text-on-surface">
              <span>ACTIVE CLUSTER: {activeNode}</span>
              <span className="text-tertiary">CLICK TO SWITCH REGION</span>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => {
              sound.click('subtle');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 text-on-surface hover:text-primary transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0e13]/95 border-b border-surface-container-low px-margin-mobile py-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20 font-label-stamp text-label-stamp text-outline">
            <span>INDEX // NAVIGATION</span>
            <span className="text-tertiary">ACTIVE: {activeNode} NODE</span>
          </div>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={(e) => handleNavClick(link.id, e)}
              className={`text-left font-label-technical text-sm py-2 px-1 transition-colors uppercase tracking-widest ${
                currentTab === link.id
                  ? 'text-primary font-bold bg-surface-container-high/40 pl-3 border-l-2 border-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 flex items-center justify-between border-t border-outline-variant/20 font-label-code text-xs text-outline">
            <span>RELEASE 2026.04</span>
            <button
              onClick={toggleSound}
              className="text-secondary flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">
                {isMuted ? 'volume_off' : 'volume_up'}
              </span>
              <span>{isMuted ? 'SOUND OFF' : 'SOUND ON'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
