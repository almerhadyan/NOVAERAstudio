import React, { useState } from 'react';
import { INSIGHTS } from '../data/studioData.ts';
import { InsightArticle } from '../types/index.ts';
import { sound } from './AudioEngine.ts';

export const InsightsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [fontSizeOffset, setFontSizeOffset] = useState(0);

  const handleArticleClick = (art: InsightArticle, e: React.MouseEvent) => {
    e.preventDefault();
    sound.click('subtle');
    setSelectedArticle(art);
  };

  return (
    <section className="w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl bg-surface" id="insights">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
        <div>
          <span className="font-label-stamp text-label-stamp text-primary uppercase tracking-widest">
            // TRANSMISSIONS
          </span>
          <h2 className="font-display-lg text-display-lg uppercase tracking-tight text-on-surface font-semibold mt-space-xs">
            INSIGHTS
          </h2>
        </div>
        <span className="font-label-technical text-label-technical text-outline uppercase">
          ARCHIVE / ESSAYS &amp; NOTES
        </span>
      </div>

      {/* Editorial Article Rows */}
      <div className="flex flex-col border border-outline-variant/20">
        {INSIGHTS.map((article, idx) => {
          const bgClass =
            idx % 2 === 0
              ? 'bg-surface-container-low hover:bg-surface-container'
              : 'bg-surface-container-lowest hover:bg-surface-container';

          const accentClass =
            article.accentColor === 'primary'
              ? 'text-primary'
              : article.accentColor === 'secondary'
              ? 'text-secondary'
              : 'text-tertiary';

          return (
            <a
              key={article.id}
              href={`#${article.slug}`}
              onClick={(e) => handleArticleClick(article, e)}
              className={`group py-space-lg px-space-md transition-colors duration-200 border-b last:border-b-0 border-outline-variant/15 ${bgClass}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
                <div className="md:col-span-2 font-label-code text-label-code text-outline group-hover:text-primary transition-colors">
                  {article.date} • [{article.type}]
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-headline-md text-headline-md text-on-surface uppercase group-hover:text-primary transition-colors font-medium">
                    {article.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
                <div className="md:col-span-3 flex md:justify-end items-center gap-space-xs font-label-technical text-label-technical">
                  <span className={accentClass}>[ {article.tag} ]</span>
                  <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    north_east
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Interactive Essay Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05070b]/90 backdrop-blur-md animate-in fade-in">
          <div className="bg-surface-container-low border border-outline-variant max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="px-space-md py-3 bg-surface-container-lowest border-b border-outline-variant/30 flex items-center justify-between">
              <div className="flex items-center gap-2 font-label-code text-xs text-outline">
                <span className="text-primary">{selectedArticle.date}</span>
                <span>//</span>
                <span>{selectedArticle.readTime}</span>
                <span>//</span>
                <span className="text-tertiary">{selectedArticle.author}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 border border-outline-variant/30 px-2 py-0.5 text-xs font-label-code">
                  <span className="text-outline">FONT:</span>
                  <button
                    onClick={() => setFontSizeOffset((p) => Math.max(-2, p - 1))}
                    className="hover:text-primary px-1 cursor-pointer"
                  >
                    A-
                  </button>
                  <button
                    onClick={() => setFontSizeOffset((p) => Math.min(4, p + 1))}
                    className="hover:text-primary px-1 cursor-pointer font-bold"
                  >
                    A+
                  </button>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-7 h-7 flex items-center justify-center text-outline hover:text-on-surface cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-space-md md:p-space-lg flex flex-col gap-space-md">
              <span className="font-label-stamp text-xs text-tertiary uppercase tracking-widest">
                [ TRANSMISSION ARCHIVE // {selectedArticle.tag} ]
              </span>
              <h2 className="font-display-lg text-display-lg uppercase text-on-surface font-semibold leading-tight">
                {selectedArticle.title}
              </h2>
              <div className="h-[1px] bg-outline-variant/20 w-full my-1"></div>

              <div
                className="flex flex-col gap-4 text-on-surface-variant font-body-editorial leading-relaxed"
                style={{ fontSize: `${18 + fontSizeOffset}px` }}
              >
                {selectedArticle.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Research Notes Footer */}
              <div className="mt-space-lg p-space-md bg-surface-container border-l-2 border-primary font-label-code text-xs text-outline flex flex-col gap-1">
                <span className="text-on-surface font-semibold uppercase">TRANSMISSION DISPATCH NOTE</span>
                <span>
                  Published by NOVAERA Studio Jakarta Laboratory. Distributed under Creative Commons CC-BY-NC 4.0.
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-space-md py-3 bg-surface-container-lowest border-t border-outline-variant/30 flex items-center justify-between">
              <span className="font-label-code text-xs text-outline">
                STATUS: PEER-REVIEWED STUDIO ESSAY
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-xs font-label-technical text-primary hover:underline uppercase cursor-pointer"
              >
                [ CLOSE ESSAY ]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
