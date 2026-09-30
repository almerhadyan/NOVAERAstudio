import React, { useState } from 'react';
import { TECH_STACK_GROUPS } from '../data/studioData.ts';
import { sound } from './AudioEngine.ts';

export const TechnologyMatrix: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <section className="w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl bg-surface-container-lowest">
      <div className="flex flex-col gap-space-xs mb-space-xl">
        <span className="font-label-stamp text-label-stamp text-primary uppercase tracking-widest">
          // STACK TELEMETRY
        </span>
        <h2 className="font-display-lg text-display-lg uppercase tracking-tight text-on-surface font-semibold">
          TECHNOLOGY
        </h2>
        <p className="font-body-editorial text-body-editorial text-on-surface-variant max-w-xl">
          We treat technology as a creative medium. No generic plugins, no bloated templates.
        </p>
      </div>

      {/* Categorized Editorial Stack List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-gutter">
        {TECH_STACK_GROUPS.map((group) => (
          <div
            key={group.index}
            className="bg-surface-container p-space-md flex flex-col gap-space-md border border-outline-variant/20 hover:border-outline-variant/50 transition-colors"
          >
            <span className="font-label-stamp text-label-stamp text-outline uppercase tracking-wider">
              {group.index} // {group.title}
            </span>
            <ul className="flex flex-col gap-space-xs font-label-technical text-label-technical text-on-surface">
              {group.items.map((item, idx) => (
                <li
                  key={idx}
                  onMouseEnter={() => {
                    sound.click('subtle');
                    setActiveTooltip(`${group.index}-${item.name}`);
                  }}
                  onMouseLeave={() => setActiveTooltip(null)}
                  className="flex items-center justify-between py-1 border-b border-outline-variant/10 hover:text-primary transition-colors cursor-help relative"
                >
                  <span className="truncate pr-1">{item.name}</span>
                  <span className={`${item.color} text-xs font-bold`}>{item.icon}</span>

                  {/* Contextual Spec Tooltip */}
                  {activeTooltip === `${group.index}-${item.name}` && (
                    <div className="absolute -top-7 right-0 bg-surface-container-highest px-2 py-0.5 text-[10px] font-label-code text-on-surface border border-outline-variant whitespace-nowrap z-20 shadow-md">
                      {item.note}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
