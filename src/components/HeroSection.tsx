import React, { useState, useEffect } from 'react';
import { ComputationalMatrix } from './ComputationalMatrix.tsx';
import { sound } from './AudioEngine.ts';

interface HeroSectionProps {
  onViewWork: () => void;
  onStartProject: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onViewWork, onStartProject }) => {
  const [telemetryTime, setTelemetryTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // UTC+7 Offset for Jakarta HQ
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const jktTime = new Date(utc + 3600000 * 7);
      const hours = String(jktTime.getHours()).padStart(2, '0');
      const minutes = String(jktTime.getMinutes()).padStart(2, '0');
      const seconds = String(jktTime.getSeconds()).padStart(2, '0');
      setTelemetryTime(`UTC+7 ${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col justify-between px-margin-mobile md:px-margin-tablet lg:px-margin py-space-lg lg:py-space-xl overflow-hidden bg-surface">
      {/* Atmospheric Ambient Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full bg-secondary-container/10 blur-[150px] pointer-events-none"></div>

      {/* Top Telemetry Row */}
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-space-xs font-label-code text-label-code text-outline tracking-widest uppercase">
        <div className="flex items-center gap-space-xs">
          <span className="inline-block w-2 h-2 bg-tertiary"></span>
          <span className="text-on-surface">SYS.LOC: JAKARTA [HQ] // LAT -6.2088° S, LONG 106.8456° E</span>
        </div>
        <div className="flex items-center gap-space-md text-on-surface-variant">
          <span>RELEASE: 2026.04-STABLE</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline font-mono text-tertiary">{telemetryTime || 'UTC+7 14:02:18'}</span>
        </div>
      </div>

      {/* Core Content Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter my-auto py-space-lg items-center">
        {/* Left Column: Editorial Statement & Actions */}
        <div className="lg:col-span-7 flex flex-col gap-space-md z-10">
          <div className="inline-flex items-center gap-space-xs font-label-stamp text-label-stamp text-primary tracking-widest uppercase bg-surface-container px-space-xs py-1 self-start border border-outline-variant/30">
            <span>// CREATIVE TECHNOLOGY &amp; DIGITAL EXPERIENCE</span>
          </div>

          <h1 className="font-display-xl text-display-xl uppercase tracking-tight text-on-surface font-light leading-[1.02] max-w-3xl">
            We design and build <span className="font-bold text-primary">digital experiences</span> for ambitious brands.
          </h1>

          <p className="font-body-editorial text-body-editorial text-on-surface-variant max-w-xl">
            At the intersection of design, computational architecture, and interactive storytelling. Less decoration. More surgical intention.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
            <button
              onClick={() => {
                sound.click('confirm');
                onViewWork();
              }}
              className="group inline-flex items-center gap-space-sm bg-primary hover:bg-secondary text-on-primary font-label-technical text-label-technical px-space-lg py-space-md uppercase tracking-wider font-semibold transition-all duration-200 shadow-[0_0_24px_rgba(90,169,255,0.15)] cursor-pointer"
            >
              <span>VIEW OUR WORK</span>
              <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>

            <button
              onClick={() => {
                sound.click('subtle');
                onStartProject();
              }}
              className="inline-flex items-center gap-space-sm bg-surface-container-high hover:bg-surface-container-highest text-on-surface hover:text-primary font-label-technical text-label-technical px-space-lg py-space-md uppercase tracking-wider transition-colors duration-200 cursor-pointer border border-outline-variant/30"
            >
              <span>[ START A PROJECT ]</span>
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </button>
          </div>
        </div>

        {/* Right Column: Computational Wireframe Matrix Visualization */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          <ComputationalMatrix />
        </div>
      </div>

      {/* Bottom Stat Strip */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-gutter pt-space-md bg-surface-container-lowest p-space-md border border-outline-variant/20">
        <div className="flex flex-col">
          <span className="font-label-stamp text-label-stamp text-outline uppercase tracking-wider">PROJECT METRICS</span>
          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">48+ AWARDS</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-stamp text-label-stamp text-outline uppercase tracking-wider">GLOBAL CLIENT BASE</span>
          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">14 COUNTRIES</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-stamp text-label-stamp text-outline uppercase tracking-wider">PERFORMANCE PROTOCOL</span>
          <span className="font-headline-sm text-headline-sm text-tertiary font-semibold">99.8% CORE VITALS</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-stamp text-label-stamp text-outline uppercase tracking-wider">EXPERIENCE DOMAIN</span>
          <span className="font-headline-sm text-headline-sm text-primary font-semibold">AI • SPATIAL • COMMERCE</span>
        </div>
      </div>
    </section>
  );
};
