import React, { useState } from 'react';
import { CAPABILITIES } from '../data/studioData.ts';
import { sound } from './AudioEngine.ts';

interface CapabilitiesProps {
  onStartProjectWithService?: (serviceName: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesProps> = ({ onStartProjectWithService }) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('01');
  const [showEstimator, setShowEstimator] = useState(false);
  const [estimatorScope, setEstimatorScope] = useState<string[]>(['web-app', 'design-tokens']);
  const [timelineWeeks, setTimelineWeeks] = useState(8);

  const toggleScope = (scopeId: string) => {
    sound.click('toggle');
    setEstimatorScope((prev) =>
      prev.includes(scopeId) ? prev.filter((s) => s !== scopeId) : [...prev, scopeId]
    );
  };

  const calculateEstimate = () => {
    const baseRate = 6500; // per sprint week
    const scopeMultiplier = 1 + (estimatorScope.length - 1) * 0.35;
    const est = Math.round((timelineWeeks * baseRate * scopeMultiplier) / 5000) * 5000;
    return est.toLocaleString();
  };

  return (
    <section className="w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl bg-surface-container-lowest" id="services">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-stamp text-label-stamp text-primary uppercase tracking-widest">
            // STUDIO CAPABILITIES
          </span>
          <h2 className="font-display-lg text-display-lg uppercase tracking-tight text-on-surface font-semibold">
            WHAT WE DO
          </h2>
          <p className="font-body-editorial text-body-editorial text-on-surface-variant max-w-2xl">
            From first exploratory computational idea to scalable final enterprise rollout. We do not maintain silos between design and engineering.
          </p>
        </div>

        <button
          onClick={() => {
            sound.click('toggle');
            setShowEstimator(!showEstimator);
          }}
          className="self-start md:self-auto border border-outline-variant/40 hover:border-secondary bg-surface-container-low px-space-md py-space-sm text-xs font-label-technical text-secondary uppercase tracking-widest transition-colors cursor-pointer flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[16px]">
            {showEstimator ? 'expand_less' : 'tune'}
          </span>
          <span>{showEstimator ? 'HIDE SCOPE CALCULATOR' : 'INTERACTIVE SCOPE ESTIMATOR'}</span>
        </button>
      </div>

      {/* Interactive Scope & Sprint Estimator Drawer */}
      {showEstimator && (
        <div className="mb-space-xl bg-surface-container p-space-md md:p-space-lg border border-secondary/30 animate-in fade-in duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30 mb-4">
            <span className="font-label-code text-xs text-secondary uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              STUDIO SPRINT ESTIMATOR // ALGORITHMIC BUDGET CALCULATOR
            </span>
            <span className="font-label-stamp text-outline">CONFIDENTIAL BENCHMARK</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div>
                <span className="font-label-stamp text-outline block mb-2">SELECT CAPABILITIES REQUIRED:</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'web-app', label: 'Web Application / Portal' },
                    { id: 'design-tokens', label: 'Design System & Tokens' },
                    { id: 'webgl-3d', label: 'Interactive WebGL / 3D' },
                    { id: 'mobile-app', label: 'Mobile Native Platform' },
                    { id: 'brand-identity', label: 'Brand Identity & Visual' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => toggleScope(item.id)}
                      className={`text-xs font-label-code px-3 py-1.5 uppercase transition-colors cursor-pointer border ${
                        estimatorScope.includes(item.id)
                          ? 'bg-secondary text-on-secondary border-secondary font-bold'
                          : 'bg-surface-container-high text-on-surface-variant border-outline-variant/30 hover:border-outline'
                      }`}
                    >
                      {estimatorScope.includes(item.id) ? '✓ ' : '+ '}
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between font-label-stamp text-outline mb-1">
                  <span>TARGET ENGAGEMENT DURATION: {timelineWeeks} WEEKS</span>
                  <span>ESTIMATED SPRINTS: {Math.ceil(timelineWeeks / 2)}</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="16"
                  step="2"
                  value={timelineWeeks}
                  onChange={(e) => setTimelineWeeks(parseInt(e.target.value))}
                  className="w-full accent-secondary bg-surface-container-highest cursor-pointer"
                />
              </div>
            </div>

            <div className="lg:col-span-4 bg-surface-container-lowest p-space-md border border-outline-variant/30 flex flex-col justify-between">
              <div>
                <span className="font-label-stamp text-outline uppercase">INDICATIVE BUDGET TIER</span>
                <div className="font-headline-lg text-secondary font-bold my-1">
                  ${calculateEstimate()} <span className="text-xs text-outline font-normal">USD</span>
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant">
                  Fixed-scope dedicated squad: Senior Product Architect + Systems Designer + Lead Code Engineer.
                </p>
              </div>

              <button
                onClick={() => {
                  sound.click('confirm');
                  if (onStartProjectWithService) {
                    onStartProjectWithService('Custom Scope');
                  }
                }}
                className="mt-3 bg-secondary hover:bg-secondary-container text-on-secondary text-xs font-label-technical px-3 py-2 uppercase tracking-wider font-bold transition-colors cursor-pointer text-center"
              >
                [ LOCK IN SPRINT INQUIRY ]
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3 High-Impact Technical Capability Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {CAPABILITIES.map((cap) => {
          const isSelected = selectedDomain === cap.domainIndex;
          const accentColorClass =
            cap.accentColor === 'primary'
              ? 'text-primary'
              : cap.accentColor === 'secondary'
              ? 'text-secondary'
              : 'text-tertiary';
          const dotColorClass =
            cap.accentColor === 'primary'
              ? 'bg-primary'
              : cap.accentColor === 'secondary'
              ? 'bg-secondary'
              : 'bg-tertiary';

          return (
            <div
              key={cap.domainIndex}
              onClick={() => {
                sound.click('subtle');
                setSelectedDomain(cap.domainIndex);
              }}
              className={`bg-surface-container-low p-space-lg flex flex-col justify-between hover:bg-surface-container transition-all duration-200 border cursor-pointer ${
                isSelected ? 'border-outline-variant/60 shadow-lg' : 'border-transparent'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`font-label-code text-label-code ${accentColorClass} uppercase`}>
                    {cap.domainIndex} // DOMAIN
                  </span>
                  <span className="font-label-stamp text-[10px] text-outline">
                    {cap.turnaround}
                  </span>
                </div>

                <h3 className="font-headline-md text-headline-md text-on-surface uppercase font-medium mt-space-xs mb-space-md">
                  {cap.domainName}
                </h3>

                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg leading-relaxed">
                  {cap.shortDesc}
                </p>

                <ul className="flex flex-col gap-space-sm font-label-technical text-label-technical text-on-surface">
                  {cap.capabilities.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-space-xs">
                      <span className={`w-1.5 h-1.5 ${dotColorClass}`}></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-space-xl flex items-center justify-between border-t border-outline-variant/15 mt-space-md">
                <span className="font-label-stamp text-label-stamp text-outline">
                  {cap.metricTag}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.click('confirm');
                    if (onStartProjectWithService) {
                      onStartProjectWithService(cap.domainName);
                    }
                  }}
                  className={`text-xs font-label-code ${accentColorClass} hover:underline uppercase flex items-center gap-1 cursor-pointer`}
                >
                  <span>INQUIRE</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
