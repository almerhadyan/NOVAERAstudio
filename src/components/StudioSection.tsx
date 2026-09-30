import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/studioData.ts';
import { TeamMember } from '../types/index.ts';
import { sound } from './AudioEngine.ts';

export const StudioSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl bg-surface" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-space-xl">
        <div className="lg:col-span-5 flex flex-col gap-space-xs">
          <span className="font-label-stamp text-label-stamp text-tertiary uppercase tracking-widest">
            // STUDIO CULTURE
          </span>
          <h2 className="font-display-lg text-display-lg uppercase tracking-tight text-on-surface font-semibold">
            THE STUDIO
          </h2>
        </div>
        <div className="lg:col-span-7 flex flex-col gap-space-sm justify-end">
          <blockquote className="font-headline-md text-headline-md text-on-surface uppercase font-light border-l-2 border-primary pl-4">
            “Design should solve problems. Technology should create possibilities. Details should have surgical purpose.”
          </blockquote>
          <p className="font-body-md text-body-md text-on-surface-variant">
            We operate as a high-density, senior-level laboratory. No junior handoffs, no bloated account managers. You collaborate directly with the architects shaping your product.
          </p>
        </div>
      </div>

      {/* Editorial Team Roster (4 Members) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.id}
            onClick={() => {
              sound.click('subtle');
              setSelectedMember(member);
            }}
            className="group bg-surface-container-low p-space-md flex flex-col justify-between cursor-pointer border border-transparent hover:border-outline-variant/40 transition-all duration-300"
          >
            <div className="relative aspect-[3/4] bg-surface-container-lowest overflow-hidden mb-space-md">
              <img
                className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                src={member.image}
                alt={member.imageAlt}
                referrerPolicy="no-referrer"
              />
              <div
                className={`absolute bottom-2 left-2 bg-surface-container-lowest/90 px-2 py-0.5 font-label-stamp text-label-stamp border ${
                  member.accent === 'primary'
                    ? 'text-primary border-primary/40'
                    : member.accent === 'secondary'
                    ? 'text-secondary border-secondary/40'
                    : 'text-tertiary border-tertiary/40'
                }`}
              >
                {member.badge}
              </div>
            </div>

            <div className="flex flex-col">
              <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase font-medium group-hover:text-primary transition-colors">
                {member.name}
              </h4>
              <span className="font-label-technical text-label-technical text-on-surface-variant">
                {member.role}
              </span>
              <span className="font-label-code text-label-code text-outline mt-space-xs">
                {member.previous} • {member.experience}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Team Member Inspector Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05070b]/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-surface-container-low border border-outline-variant max-w-lg w-full p-space-lg flex flex-col gap-4 relative shadow-2xl">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-outline hover:text-on-surface cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-4">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                referrerPolicy="no-referrer"
                className="w-20 h-24 object-cover grayscale contrast-125 border border-outline-variant/40"
              />
              <div className="flex flex-col">
                <span className="font-label-stamp text-xs text-primary">{selectedMember.badge} // {selectedMember.location}</span>
                <h3 className="font-headline-md text-on-surface uppercase font-semibold">{selectedMember.name}</h3>
                <span className="font-label-technical text-xs text-secondary">{selectedMember.role}</span>
              </div>
            </div>

            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {selectedMember.bio}
            </p>

            <div className="border-t border-outline-variant/20 pt-3">
              <span className="font-label-stamp text-outline block mb-2">CORE CAPABILITY STACK:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedMember.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="font-label-code text-xs px-2 py-0.5 bg-surface-container text-on-surface border border-outline-variant/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-outline-variant/20 font-label-stamp text-outline">
              <span>SECURITY CLEARANCE: LEVEL 4</span>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-primary hover:underline cursor-pointer uppercase text-xs"
              >
                [ CLOSE PROFILE ]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
