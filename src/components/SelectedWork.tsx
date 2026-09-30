import React, { useState } from 'react';
import { Project } from '../types/index.ts';
import { sound } from './AudioEngine.ts';

interface SelectedWorkProps {
  projects: Project[];
  onOpenCaseStudy: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ projects, onOpenCaseStudy }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'ALL ARCHIVE' },
    { id: 'product', label: 'DIGITAL PRODUCT' },
    { id: 'spatial', label: 'SPATIAL & 3D' },
    { id: 'fashion-commerce', label: 'COMMERCE & WELLNESS' },
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesCat = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleProjectClick = (p: Project) => {
    sound.click('subtle');
    onOpenCaseStudy(p);
  };

  return (
    <section className="w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl bg-surface" id="work">
      {/* Section Heading & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-lg">
        <div>
          <span className="font-label-stamp text-label-stamp text-tertiary uppercase tracking-widest">
            // ARCHIVE • INDEX 2025-2026
          </span>
          <h2 className="font-display-lg text-display-lg font-semibold uppercase tracking-tight text-on-surface mt-space-xs">
            SELECTED WORK
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          A selection of digital experiences, interactive platforms, and design systems we have designed and built.
        </p>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-lg border-b border-outline-variant/20 mb-space-lg">
        <div className="flex flex-wrap items-center gap-1 font-label-code text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                sound.click('toggle');
                setActiveCategory(cat.id);
              }}
              className={`px-3 py-1.5 uppercase tracking-wider transition-colors cursor-pointer border ${
                activeCategory === cat.id
                  ? 'bg-primary text-on-primary border-primary font-semibold'
                  : 'bg-surface-container-low text-on-surface-variant border-outline-variant/30 hover:border-outline hover:text-on-surface'
              }`}
            >
              [{cat.label}]
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 border border-outline-variant/30 max-w-xs w-full sm:w-auto">
          <span className="material-symbols-outlined text-[16px] text-outline">search</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="FILTER PROJECTS..."
            className="bg-transparent text-xs font-label-code text-on-surface placeholder:text-outline focus:outline-none w-full uppercase"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-outline hover:text-on-surface cursor-pointer text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* When filtering produces no results */}
      {filteredProjects.length === 0 && (
        <div className="p-space-xl bg-surface-container-low text-center font-label-technical text-outline border border-outline-variant/20 my-space-lg">
          NO MATCHING CASE ARCHIVES FOUND FOR CRITERIA // TRY RESETTING FILTERS
        </div>
      )}

      {/* Editorial Project Showcase List (Asymmetric Layouts) */}
      <div className="flex flex-col gap-space-xl">
        {/* Render Orbit if in list */}
        {filteredProjects.some((p) => p.id === 'orbit') && (
          <article
            onClick={() => handleProjectClick(projects.find((p) => p.id === 'orbit')!)}
            className="group relative bg-surface-container-low transition-all duration-300 hover:bg-surface-container cursor-pointer border border-transparent hover:border-outline-variant/40"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center p-space-md md:p-space-lg">
              <div className="lg:col-span-5 flex flex-col gap-space-md order-2 lg:order-1">
                <div className="flex items-center gap-space-xs font-label-code text-label-code text-primary uppercase tracking-widest">
                  <span>01 / CASE 09</span>
                  <span>•</span>
                  <span>JAKARTA • 2026</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface font-medium uppercase group-hover:text-primary transition-colors">
                  ORBIT — NEXT GEN FINTECH
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  High-throughput institutional digital asset clearing platform. Designed with razor-sharp glass morphism data dashboards, ultra-low latency transaction streaming, and typographic rigor.
                </p>
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  <span className="px-space-xs py-0.5 bg-surface-container-high font-label-stamp text-label-stamp text-on-surface-variant uppercase">
                    UI/UX PRODUCT
                  </span>
                  <span className="px-space-xs py-0.5 bg-surface-container-high font-label-stamp text-label-stamp text-on-surface-variant uppercase">
                    NEXT.JS EDGE
                  </span>
                  <span className="px-space-xs py-0.5 bg-surface-container-high font-label-stamp text-label-stamp text-on-surface-variant uppercase">
                    WEBGL CHARTS
                  </span>
                </div>
                <div className="pt-space-sm">
                  <span className="inline-flex items-center gap-space-xs font-label-technical text-label-technical text-primary uppercase group-hover:translate-x-2 transition-transform duration-200">
                    <span>VIEW CASE STUDY</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </span>
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2 overflow-hidden bg-surface-container-lowest aspect-[16/10] relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkA_tkEV__z4-Fp2rtk4bI-9xujcS4voSDO7B1ZkxCjJjdTVqoEl4_rqEGNRdui9Eujpbs662TyN8fp-O2WmOFeJmBDXYj2yNSPfymF7DdbrD3izqdXDpFPG0KtLfjHEixWVqpNAef7joqtuwcYe25NJQ-J-2AAq1OesiHNTQmQCot145ye7Xhavi_KKS-m2RpzLWuKq5RqkqUZTTRrxZp3UMulIkJWIBvO6p6KxSTOuCHvZn7PVLy"
                  alt="Dark high-tech fintech trading dashboard interface mockup with glowing cyan and electric blue financial charts, depth-layered glass cards, monospace order book metrics, and minimalist futuristic typography."
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-surface-container-lowest/80 backdrop-blur-sm px-space-xs py-1 font-label-code text-label-code text-outline border border-outline-variant/30">
                  DATA: LATENCY &lt; 4MS
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Render Lumen if in list */}
        {filteredProjects.some((p) => p.id === 'lumen') && (
          <article
            onClick={() => handleProjectClick(projects.find((p) => p.id === 'lumen')!)}
            className="group relative bg-surface-container-low transition-all duration-300 hover:bg-surface-container cursor-pointer border border-transparent hover:border-outline-variant/40"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center p-space-md md:p-space-lg">
              <div className="lg:col-span-7 overflow-hidden bg-surface-container-lowest aspect-[16/10] relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASiJ4JOnFiKaMGdnUgCWOFOyBkdCjBZcNY9WwnTEcbK043sl9O3btCH2JSDeioJ2JPr-Fku3MmDQGZSeWPvOuRavALGGoyql1rib0cewglqbB4vXii237M70G5C35pOcIluGb0c7DtoAuY8CFJJK1lm3i5CfvfzNT40TOh5N9q9C4dZ6c0pFzp5B7-n9WZ56N0YNhAYq1mN-zHlfoL8qcdKjNazBlE-X_dxrfh4zlXG5KaEolM-TN5"
                  alt="Monolithic modern brutalist concrete architectural pavilion in Zurich at dusk, shot with dramatic architectural shadows, stark geometry, cool blue atmospheric sky tones, and high-fashion editorial composition."
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-surface-container-lowest/80 backdrop-blur-sm px-space-xs py-1 font-label-code text-label-code text-tertiary border border-outline-variant/30">
                  LOC: ZURICH // CH
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <div className="flex items-center gap-space-xs font-label-code text-label-code text-secondary uppercase tracking-widest">
                  <span>02 / CASE 14</span>
                  <span>•</span>
                  <span>ZURICH • 2025</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface font-medium uppercase group-hover:text-secondary transition-colors">
                  LUMEN — SPATIAL ARCHITECTURE
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Bespoke WebGL spatial archive and physical brand identity for a Swiss architecture atelier. Fluid 3D camera navigation showcasing structural concrete projects in uncompressed fidelity.
                </p>
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  <span className="px-space-xs py-0.5 bg-surface-container-high font-label-stamp text-label-stamp text-on-surface-variant uppercase">
                    SPATIAL WEBGL
                  </span>
                  <span className="px-space-xs py-0.5 bg-surface-container-high font-label-stamp text-label-stamp text-on-surface-variant uppercase">
                    BRAND IDENTITY
                  </span>
                  <span className="px-space-xs py-0.5 bg-surface-container-high font-label-stamp text-label-stamp text-on-surface-variant uppercase">
                    INTERACTIVE 3D
                  </span>
                </div>
                <div className="pt-space-sm">
                  <span className="inline-flex items-center gap-space-xs font-label-technical text-label-technical text-secondary uppercase group-hover:translate-x-2 transition-transform duration-200">
                    <span>VIEW CASE STUDY</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Two-Column Editorial Mosaic: Aura & Nexus */}
        {(filteredProjects.some((p) => p.id === 'aura') || filteredProjects.some((p) => p.id === 'nexus')) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            {filteredProjects.some((p) => p.id === 'aura') && (
              <article
                onClick={() => handleProjectClick(projects.find((p) => p.id === 'aura')!)}
                className="group bg-surface-container-low p-space-md flex flex-col justify-between transition-all duration-300 hover:bg-surface-container cursor-pointer border border-transparent hover:border-outline-variant/40"
              >
                <div className="relative w-full aspect-[4/3] bg-surface-container-lowest overflow-hidden mb-space-md">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc-Wp3lTNbLEeKPsxkNL0yVnW_KznRDs66-_EZaiojfE7IQJyvXqEqdhrmJSr-kck3dsXzERN7JfclT-dWCvVHat7q6EdoV9DT8zWaVIcnuckkYGXggG01vHnK2sNMwhaKmF-eMIY4uLgpaxaCQO0cHRicsjCKr9z4p7aBaCSZhx4Gt9hLOSFMywPfBTegcILxD5vJn-Kmij586Ub3f4KKCsjP0ZosPbZCzp6q9L6L4iL297VCGogA"
                    alt="Minimalist luxury skincare glass flacon bottle on dark volcanic slate surface, soft cool studio rim lighting, editorial cosmetic presentation, deep moody shadows and clinical purity."
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 bg-surface-container-lowest/80 px-2 py-1 font-label-code text-label-code text-on-surface-variant border border-outline-variant/30">
                    TOKYO / GLOBAL E-COMMERCE
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-stamp text-label-stamp text-tertiary">03 // BIO-BEAUTY &amp; WELLNESS</span>
                  <h4 className="font-headline-md text-headline-md text-on-surface uppercase group-hover:text-primary transition-colors">
                    AURA REBRAND &amp; GLOBAL STORE
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Replatforming a Japanese bio-wellness icon into a headless Shopify experience with micro-interactions and sensory checkout.
                  </p>
                  <div className="pt-2 text-xs font-label-technical text-primary group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>EXPLORE ARCHITECTURE</span>
                    <span>→</span>
                  </div>
                </div>
              </article>
            )}

            {filteredProjects.some((p) => p.id === 'nexus') && (
              <article
                onClick={() => handleProjectClick(projects.find((p) => p.id === 'nexus')!)}
                className="group bg-surface-container-low p-space-md flex flex-col justify-between transition-all duration-300 hover:bg-surface-container cursor-pointer border border-transparent hover:border-outline-variant/40"
              >
                <div className="relative w-full aspect-[4/3] bg-surface-container-lowest overflow-hidden mb-space-md">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd71ss1NrrYCLAmHqRX5Jl9luBL6iJlyQ4AscEWI2jHvnijYnAXOsnePn3iRw50581uT-LOseeqTVDaJLz4wkNvtYxZXxG7erUpC06D-YZFHxpdLsPXp_O1xuoJb5cYyh4INUu5aGVwLshJFwYHsX-SKsjugWyeFSHtyfxAsNV8jQbXu1BbEFb1SJo7GZ8BnMqA_BCoX1cy2p79AEwopAGAy_EcgSNAY-yYNVUh9gnomV3exnPMKtP"
                    alt="Complex 3D generative neural network visualization, glowing nodes connected by fine blue and cyan geometric lines against pitch-black void, deep visual data architecture aesthetic."
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 bg-surface-container-lowest/80 px-2 py-1 font-label-code text-label-code text-primary border border-outline-variant/30">
                    SAN FRANCISCO / DISTRIBUTED AI
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-stamp text-label-stamp text-primary">04 // AI INFRASTRUCTURE</span>
                  <h4 className="font-headline-md text-headline-md text-on-surface uppercase group-hover:text-primary transition-colors">
                    NEXUS INTELLIGENCE PLATFORM
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Complete UI design system and real-time execution orchestrator for machine learning engineers across 200+ clusters.
                  </p>
                  <div className="pt-2 text-xs font-label-technical text-primary group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>EXPLORE ARCHITECTURE</span>
                    <span>→</span>
                  </div>
                </div>
              </article>
            )}
          </div>
        )}

        {/* Two-Column Editorial Mosaic: Vanta & Mono */}
        {(filteredProjects.some((p) => p.id === 'vanta') || filteredProjects.some((p) => p.id === 'mono')) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            {filteredProjects.some((p) => p.id === 'vanta') && (
              <article
                onClick={() => handleProjectClick(projects.find((p) => p.id === 'vanta')!)}
                className="group bg-surface-container-low p-space-md flex flex-col justify-between transition-all duration-300 hover:bg-surface-container cursor-pointer border border-transparent hover:border-outline-variant/40"
              >
                <div className="relative w-full aspect-[4/3] bg-surface-container-lowest overflow-hidden mb-space-md">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBM5C1E9kl-FVD54Q1ZfBRyD5-rUeUNZDyXsJ66ftCf4SopClM4C4g3lNz1eZ742qD1j128PejPYzr9FV4PEr0r9APkfc6vxTfn_ICXOktKwrWAizcM-PKgoTgVfm-nZ2zb9qAqJvHWswJ_dKcZVseriraxgnRqplpxYQFhFklR7uhWW10hk5wVnaBV0Hg_KujDm-u8bC2PgYjLbpznP0DdAlUUJhRLAVurFgMKwHadHJ0DE3m7WtS"
                    alt="Matte black aerodynamic electric hypercar concept inside dark technical studio, sharp rim lighting highlighting futuristic carbon chassis curves, cyber luxury automotive photography."
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 bg-surface-container-lowest/80 px-2 py-1 font-label-code text-label-code text-secondary border border-outline-variant/30">
                    BERLIN / HIGH PERFORMANCE EV
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-stamp text-label-stamp text-secondary">05 // INTERACTIVE 3D</span>
                  <h4 className="font-headline-md text-headline-md text-on-surface uppercase group-hover:text-secondary transition-colors">
                    VANTA HYPERCAR CONFIGURATOR
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    In-browser WebGL automotive visualizer running photorealistic shaders at 60fps across mobile and desktop devices.
                  </p>
                  <div className="pt-2 text-xs font-label-technical text-secondary group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>EXPLORE ARCHITECTURE</span>
                    <span>→</span>
                  </div>
                </div>
              </article>
            )}

            {filteredProjects.some((p) => p.id === 'mono') && (
              <article
                onClick={() => handleProjectClick(projects.find((p) => p.id === 'mono')!)}
                className="group bg-surface-container-low p-space-md flex flex-col justify-between transition-all duration-300 hover:bg-surface-container cursor-pointer border border-transparent hover:border-outline-variant/40"
              >
                <div className="relative w-full aspect-[4/3] bg-surface-container-lowest overflow-hidden mb-space-md">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX65h3ecVDMTLkS1q9rKFDitEKaATfSoyoSPQGzpY6JvKlFl9dDdS3gXIk9cSibKwZDVQp2sPrHZgjaJISymXer2ZqzmcE9weoBf_-0yY7bt73D3L9YLVnpITbeRuN38p18hLjfRD4c-L_CepB90l1STnRp2OOotjVKwP9JZks6Gh5LbhHdWsVzDUt-Q1SrTeDhTRL2vOFZ-PRFW31nvenMnmB_Kxy9DqnargGhHBMFoXK_8eCHyN1"
                    alt="Avant-garde digital haute couture garment floating in zero gravity, technical architectural textiles, monochromatic charcoal and silver tones, high fashion digital atelier."
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 bg-surface-container-lowest/80 px-2 py-1 font-label-code text-label-code text-tertiary border border-outline-variant/30">
                    PARIS / DIGITAL FASHION
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-stamp text-label-stamp text-tertiary">06 // HAUTE COUTURE</span>
                  <h4 className="font-headline-md text-headline-md text-on-surface uppercase group-hover:text-primary transition-colors">
                    MONO ATELIER EXPERIMENTAL COMMERCE
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    An avant-garde transactional editorial platform designed for limited collection drops, AR try-ons, and verifiable ownership.
                  </p>
                  <div className="pt-2 text-xs font-label-technical text-tertiary group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>EXPLORE ARCHITECTURE</span>
                    <span>→</span>
                  </div>
                </div>
              </article>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
