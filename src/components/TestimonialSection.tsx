import React, { useState } from 'react';
import { sound } from './AudioEngine.ts';

const TESTIMONIALS = [
  {
    index: '01 / 04',
    quote: 'NOVAERA helped us turn a complex computational product into something people actually wanted to use.',
    author: 'ALEXANDER THORNE',
    initials: 'AT',
    role: 'VP OF PRODUCT • SYNTHETIX AI',
    metric: 'DEPLOYMENT: 400% DAU SURGE',
  },
  {
    index: '02 / 04',
    quote: 'Wall Street institutional trading desks are notoriously hard to impress. NOVAERA delivered sub-4ms responsiveness that won over the most demanding quant funds.',
    author: 'EVELYN SHAW',
    initials: 'ES',
    role: 'HEAD OF PRODUCT • ORBIT PROTOCOL',
    metric: 'THROUGHPUT: 250K TRANSACTIONS / SEC',
  },
  {
    index: '03 / 04',
    quote: 'Our €2.8M allocations closed on iPads before cars even touched tarmac. The WebGL shaders ran flawlessly on every client device.',
    author: 'MAXIMILIAN BRANDT',
    initials: 'MB',
    role: 'COMMERCIAL DIRECTOR • VANTA MOTORS BERLIN',
    metric: 'PRE-ORDERS: 85 ALLOCATIONS SECURED',
  },
  {
    index: '04 / 04',
    quote: 'The team works with mathematical precision. No vanity fluff, no junior handoffs. Every micro-interaction serves a strategic commercial purpose.',
    author: 'KENJI TAKAHASHI',
    initials: 'KT',
    role: 'MANAGING DIRECTOR • AURA LABORATORIES TOKYO',
    metric: 'CHECKOUT LIFT: +34.2% CONVERSION',
  },
];

export const TestimonialSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const active = TESTIMONIALS[currentIdx];

  const handleNext = () => {
    sound.click('toggle');
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    sound.click('toggle');
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl bg-surface-container-lowest relative overflow-hidden border-y border-surface-container-low">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto flex flex-col gap-space-lg relative z-10">
        <div className="flex items-center justify-between font-label-stamp text-label-stamp text-outline uppercase tracking-widest">
          <span>// VALIDATION • TESTIMONIAL</span>
          <div className="flex items-center gap-3">
            <span className="text-tertiary">INDEX {active.index}</span>
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="w-6 h-6 border border-outline-variant/40 flex items-center justify-center text-outline hover:text-primary hover:border-primary transition-colors cursor-pointer"
                title="Previous testimonial"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className="w-6 h-6 border border-outline-variant/40 flex items-center justify-center text-outline hover:text-primary hover:border-primary transition-colors cursor-pointer"
                title="Next testimonial"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        <p className="font-display-lg text-display-lg text-on-surface uppercase font-light leading-[1.15] transition-all duration-300">
          “{active.quote}”
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pt-space-md border-t border-outline-variant/15">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 bg-primary flex items-center justify-center font-label-technical text-label-technical text-on-primary font-bold">
              {active.initials}
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                {active.author}
              </span>
              <span className="font-label-technical text-label-technical text-on-surface-variant">
                {active.role}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-space-xs font-label-code text-label-code text-outline">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
            <span>{active.metric}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
