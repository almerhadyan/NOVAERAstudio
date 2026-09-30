import React, { useState } from 'react';
import { sound } from './AudioEngine.ts';

interface ContactSectionProps {
  preselectedScope?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedScope }) => {
  const [selectedScopes, setSelectedScopes] = useState<string[]>([
    preselectedScope || 'DIGITAL PRODUCT',
  ]);
  const [selectedBudget, setSelectedBudget] = useState<string>('$50K - $100K');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brief, setBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [transmissionCode, setTransmissionCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scopeOptions = [
    'DIGITAL PRODUCT',
    'DESIGN SYSTEM',
    'WEBGL / 3D',
    'BRAND IDENTITY',
  ];

  const budgetOptions = ['$25K - $50K', '$50K - $100K', '$100K+'];

  const toggleScope = (scope: string) => {
    sound.click('toggle');
    setSelectedScopes((prev) =>
      prev.includes(scope) ? prev.filter((s) => s !== scope) : [...prev, scope]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    sound.click('confirm');
    setIsSubmitting(true);

    setTimeout(() => {
      const code = `TX-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Date.now().toString().slice(-4)}`;
      setTransmissionCode(code);
      setSubmitted(true);
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setBrief('');
    setSubmitted(false);
    setTransmissionCode('');
  };

  return (
    <section
      className="w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl bg-surface-container-lowest relative border-t border-surface-container-low"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Left Editorial Column */}
        <div className="lg:col-span-5 flex flex-col gap-space-md">
          <span className="font-label-stamp text-label-stamp text-tertiary uppercase tracking-widest">
            // INITIALIZE ENGAGEMENT
          </span>
          <h2 className="font-display-lg text-display-lg uppercase tracking-tight text-on-surface font-semibold leading-[1.05]">
            HAVE A PROJECT IN MIND?
          </h2>
          <p className="font-body-editorial text-body-editorial text-on-surface-variant">
            Tell us what you are building. We will figure out the rest. We take on a limited number of clients per quarter to ensure hyper-focused execution.
          </p>

          {/* Direct Channel Details */}
          <div className="flex flex-col gap-space-xs pt-space-lg font-label-technical text-label-technical">
            <div className="text-outline uppercase">DIRECT INQUIRIES</div>
            <a
              className="text-primary hover:text-secondary transition-colors text-headline-sm uppercase"
              href="mailto:hello@novaera.studio"
            >
              HELLO@NOVAERA.STUDIO
            </a>
            <span className="text-on-surface-variant font-label-code text-label-code pt-space-xs">
              RESPONSE TIME: TYPICALLY UNDER 24 HOURS
            </span>
          </div>

          {/* Studio Office Nodes */}
          <div className="pt-space-md flex flex-col gap-2 font-label-code text-xs text-outline border-t border-outline-variant/15 mt-space-md">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">JAKARTA [HQ]</span>
              <span>LAT -6.2088° S, LONG 106.8456° E</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">ZURICH SATELLITE</span>
              <span>LAT 47.3769° N, LONG 8.5417° E</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">SAN FRANCISCO NODE</span>
              <span>LAT 37.7749° N, LONG 122.4194° W</span>
            </div>
          </div>
        </div>

        {/* Right Interactive Project Inquiry Form */}
        <div className="lg:col-span-7 bg-surface-container-low p-space-lg border border-outline-variant/20">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-space-lg">
              {/* Step 1: Project Type Pills */}
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-stamp text-label-stamp text-outline uppercase tracking-wider">
                  01 // SELECT PROJECT SCOPE
                </span>
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  {scopeOptions.map((scope) => {
                    const isChecked = selectedScopes.includes(scope);
                    return (
                      <button
                        type="button"
                        key={scope}
                        onClick={() => toggleScope(scope)}
                        className={`inline-block px-space-md py-space-xs font-label-code text-label-code uppercase transition-colors cursor-pointer border ${
                          isChecked
                            ? 'bg-primary text-on-primary border-primary font-semibold'
                            : 'bg-surface-container text-on-surface-variant border-outline-variant/30 hover:border-outline'
                        }`}
                      >
                        {isChecked ? '[✓] ' : '[+] '}
                        {scope}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Budget Selectors */}
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-stamp text-label-stamp text-outline uppercase tracking-wider">
                  02 // ESTIMATED BUDGET (USD)
                </span>
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  {budgetOptions.map((budget) => {
                    const isSelected = selectedBudget === budget;
                    return (
                      <button
                        type="button"
                        key={budget}
                        onClick={() => {
                          sound.click('toggle');
                          setSelectedBudget(budget);
                        }}
                        className={`inline-block px-space-md py-space-xs font-label-code text-label-code uppercase transition-colors cursor-pointer border ${
                          isSelected
                            ? 'bg-secondary text-on-secondary border-secondary font-semibold'
                            : 'bg-surface-container text-on-surface-variant border-outline-variant/30 hover:border-outline'
                        }`}
                      >
                        {budget}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Text Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-stamp text-label-stamp text-outline uppercase">
                    NAME / ENTITY *
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-surface-container-high text-on-surface font-body-md text-body-md px-space-md py-space-sm placeholder:text-outline focus:outline-none focus:bg-surface-bright border border-outline-variant/30 focus:border-primary transition-colors"
                    placeholder="e.g. Satoshi Nakamoto"
                    required
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-stamp text-label-stamp text-outline uppercase">
                    COMMUNICATION VECTOR (EMAIL) *
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-surface-container-high text-on-surface font-body-md text-body-md px-space-md py-space-sm placeholder:text-outline focus:outline-none focus:bg-surface-bright border border-outline-variant/30 focus:border-primary transition-colors"
                    placeholder="e.g. satoshi@domain.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-space-xs">
                <label className="font-label-stamp text-label-stamp text-outline uppercase">
                  BRIEF MISSION SPECIFICATION
                </label>
                <textarea
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  className="bg-surface-container-high text-on-surface font-body-md text-body-md p-space-md placeholder:text-outline focus:outline-none focus:bg-surface-bright border border-outline-variant/30 focus:border-primary transition-colors"
                  placeholder="Describe the mission, technical scope, objectives, and targeted release date..."
                  rows={4}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                <button
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm bg-primary hover:bg-secondary text-on-primary font-label-technical text-label-technical px-space-xl py-space-md uppercase tracking-wider font-semibold transition-all duration-200 shadow-[0_0_24px_rgba(90,169,255,0.15)] cursor-pointer disabled:opacity-50"
                  type="submit"
                >
                  <span>
                    {isSubmitting ? 'TRANSMITTING...' : '[ TRANSMIT TRANSMISSION ]'}
                  </span>
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </button>
                <span className="font-label-code text-label-code text-outline text-right">
                  ENCRYPTION: 256-BIT TLS // GLOBAL ROUTING
                </span>
              </div>
            </form>
          ) : (
            /* Transmission Success Screen */
            <div className="p-space-lg bg-surface-container flex flex-col gap-space-md border border-tertiary/40 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 text-tertiary">
                <span className="material-symbols-outlined text-[28px]">check_circle</span>
                <span className="font-headline-sm uppercase font-semibold">
                  TRANSMISSION DISPATCHED
                </span>
              </div>

              <p className="font-body-md text-on-surface-variant">
                Your project specification has been cryptographically routed to our partner review queue in Jakarta &amp; Zurich. A senior creative technologist will reply within 24 hours.
              </p>

              <div className="bg-surface-container-lowest p-space-md border border-outline-variant/30 font-label-code text-xs flex flex-col gap-1 text-on-surface">
                <div className="flex justify-between text-outline border-b border-outline-variant/20 pb-1">
                  <span>DISPATCH CODE:</span>
                  <span className="text-primary font-bold">{transmissionCode}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-outline">CLIENT ENTITY:</span>
                  <span>{name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">COMMUNICATION VECTOR:</span>
                  <span>{email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">SELECTED SCOPES:</span>
                  <span>{selectedScopes.join(', ') || 'CUSTOM ARCHITECTURE'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">BUDGET ALLOCATION:</span>
                  <span className="text-secondary">{selectedBudget}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleReset}
                  className="text-xs font-label-technical text-outline hover:text-primary transition-colors cursor-pointer uppercase"
                >
                  [ + TRANSMIT ANOTHER BRIEF ]
                </button>
                <span className="font-label-stamp text-tertiary">STATUS: QUEUED // ACTIVE</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
