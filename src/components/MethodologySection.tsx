import React, { useState } from 'react';
import { METHODOLOGY_STEPS } from '../data/studioData.ts';
import { sound } from './AudioEngine.ts';

export const MethodologySection: React.FC = () => {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  return (
    <section className="w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-space-xl">
        <div className="lg:col-span-5 flex flex-col gap-space-xs">
          <span className="font-label-stamp text-label-stamp text-tertiary uppercase tracking-widest">
            // METHODOLOGY PROTOCOL
          </span>
          <h2 className="font-display-lg text-display-lg uppercase tracking-tight text-on-surface font-semibold">
            HOW WE WORK
          </h2>
        </div>
        <div className="lg:col-span-7 flex items-end">
          <p className="font-body-editorial text-body-editorial text-on-surface-variant font-light">
            Strategy before pixels. Systems before shortcuts. Our six-phase process ensures high velocity without sacrificing computational integrity.
          </p>
        </div>
      </div>

      {/* Process Timeline Progression List */}
      <div className="flex flex-col border border-outline-variant/20">
        {METHODOLOGY_STEPS.map((step, idx) => {
          const isExpanded = activePhase === step.phase;
          const bgClass =
            idx % 2 === 0
              ? 'bg-surface-container-low hover:bg-surface-container'
              : 'bg-surface-container-lowest hover:bg-surface-container';

          const accentColorClass =
            step.accent === 'primary'
              ? 'text-primary'
              : step.accent === 'secondary'
              ? 'text-secondary'
              : 'text-tertiary';

          return (
            <div
              key={step.phase}
              onClick={() => {
                sound.click('subtle');
                setActivePhase(isExpanded ? null : step.phase);
              }}
              className={`group py-space-lg px-space-md transition-colors duration-200 cursor-pointer border-b last:border-b-0 border-outline-variant/15 ${bgClass}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
                <div className={`md:col-span-2 font-label-code text-label-code ${accentColorClass}`}>
                  {step.phase} // {step.code}
                </div>
                <div className="md:col-span-4 font-headline-sm text-headline-sm text-on-surface uppercase font-medium flex items-center justify-between">
                  <span>{step.title}</span>
                  <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-primary transition-colors md:hidden">
                    {isExpanded ? 'expand_less' : 'expand_more'}
                  </span>
                </div>
                <div className="md:col-span-6 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {step.description}
                  {isExpanded && (
                    <div className="mt-2 pt-2 border-t border-outline-variant/20 font-label-code text-xs text-primary animate-in fade-in">
                      DELIVERABLES: {step.deliverables}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
