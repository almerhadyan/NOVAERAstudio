import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section className="w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl bg-surface-container-lowest relative border-y border-surface-container-low">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Monospace Section Tag Left Rail */}
        <div className="lg:col-span-3 flex flex-col gap-space-xs">
          <span className="font-label-stamp text-label-stamp text-tertiary uppercase tracking-widest">
            // MANIFESTO 01
          </span>
          <span className="font-label-technical text-label-technical text-outline uppercase">
            CORE ARCHITECTURE
          </span>
          <div className="mt-space-md w-12 h-1 bg-primary"></div>
        </div>

        {/* Main Editorial Statement */}
        <div className="lg:col-span-9 flex flex-col gap-space-lg">
          <h2 className="font-display-lg text-display-lg text-on-surface uppercase font-normal tracking-tight leading-[1.08] max-w-4xl">
            We turn ideas into <span className="font-bold text-primary">digital experiences</span> people remember.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter pt-space-md">
            <p className="font-body-editorial text-body-editorial text-on-surface-variant font-light leading-relaxed">
              NOVAERA is an independent creative technology studio operating at the intersection of design, code, and digital human experiences. We partner with forward-thinking teams globally to architect products that define categories.
            </p>

            <div className="flex flex-col justify-between font-label-code text-label-code text-outline leading-relaxed bg-surface-container-low p-space-md border border-outline-variant/20">
              <div>
                [STRATEGY] Mathematical layouts • Spatial typography<br />
                [CODE] Zero bloat • Sub-second edge execution<br />
                [IMPACT] Memorable digital presence that elevates valuation
              </div>
              <div className="pt-space-md flex items-center justify-between text-tertiary border-t border-outline-variant/15 mt-space-sm">
                <span>ACTIVE_REPRESENTATION</span>
                <span>100% INDEPENDENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
