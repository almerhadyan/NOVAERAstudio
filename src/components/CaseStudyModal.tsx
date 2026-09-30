import React, { useState, useEffect } from 'react';
import { Project } from '../types/index.ts';
import { sound } from './AudioEngine.ts';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  allProjects: Project[];
  onOpenInquiry: (initialScope?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
  onOpenInquiry,
}) => {
  // Simulator states
  const [selectedColor, setSelectedColor] = useState('#0d0f12');
  const [orderBookTicks, setOrderBookTicks] = useState([
    { price: '64,281.50', size: '1.45 BTC', type: 'ASK', latency: '2.1ms' },
    { price: '64,280.00', size: '3.12 BTC', type: 'ASK', latency: '1.8ms' },
    { price: '64,278.20', size: '0.85 BTC', type: 'BID', latency: '3.4ms' },
    { price: '64,277.90', size: '5.20 BTC', type: 'BID', latency: '2.9ms' },
  ]);
  const [activeClusterNode, setActiveClusterNode] = useState(14);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Orderbook simulation interval
  useEffect(() => {
    if (!project || project.simulatorType !== 'orderbook') return;
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.48) * 4;
      const base = 64280 + delta;
      setOrderBookTicks((prev) => [
        {
          price: (base + 1.2).toFixed(2),
          size: (Math.random() * 4 + 0.2).toFixed(2) + ' BTC',
          type: Math.random() > 0.5 ? 'ASK' : 'BID',
          latency: (Math.random() * 2 + 1.2).toFixed(1) + 'ms',
        },
        ...prev.slice(0, 3),
      ]);
    }, 1200);
    return () => clearInterval(interval);
  }, [project]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-8 bg-[#05070b]/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-surface-container-low border border-outline-variant/50 max-h-[92vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Top Sticky Bar */}
        <div className="w-full bg-surface-container-lowest px-space-md py-space-sm flex items-center justify-between border-b border-outline-variant/30 shrink-0">
          <div className="flex items-center gap-space-sm font-label-stamp text-label-stamp text-outline uppercase">
            <span className="text-primary">{project.number} // {project.caseCode}</span>
            <span>•</span>
            <span className="text-on-surface">{project.location}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          <div className="flex items-center gap-space-sm">
            <button
              onClick={() => {
                sound.click('toggle');
                onSelectProject(nextProject);
              }}
              className="text-xs font-label-technical text-outline hover:text-primary transition-colors cursor-pointer px-2 py-1 border border-outline-variant/30 hover:border-primary hidden sm:inline-block"
            >
              NEXT: {nextProject.number} →
            </button>
            <button
              onClick={() => {
                sound.click('subtle');
                onClose();
              }}
              className="w-8 h-8 flex items-center justify-center text-on-surface hover:text-error hover:bg-surface-container transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-space-md md:p-space-lg flex flex-col gap-space-lg">
          {/* Hero Banner with Live Telemetry Stamp */}
          <div className="relative w-full aspect-[16/9] bg-surface-container-lowest overflow-hidden border border-outline-variant/30">
            <img
              src={project.image}
              alt={project.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-surface-container-lowest/85 backdrop-blur-sm px-space-xs py-1 font-label-code text-label-code text-primary border border-primary/30">
              CLIENT: {project.client.toUpperCase()}
            </div>
            <div className="absolute bottom-3 right-3 bg-surface-container-lowest/85 backdrop-blur-sm px-space-xs py-1 font-label-code text-label-code text-tertiary border border-tertiary/30">
              {project.telemetry.label}: {project.telemetry.value}
            </div>
          </div>

          {/* Title & Domain */}
          <div className="flex flex-col gap-space-xs">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-label-stamp text-label-stamp text-tertiary uppercase tracking-widest">
                // {project.domain}
              </span>
              <span className="text-outline-variant">•</span>
              <span className="font-label-code text-label-code text-outline uppercase">
                STATUS: DEPLOYED TO PRODUCTION
              </span>
            </div>
            <h2 className="font-display-lg text-display-lg uppercase tracking-tight text-on-surface font-semibold leading-[1.05]">
              {project.title}
            </h2>
            <p className="font-body-editorial text-body-editorial text-on-surface-variant max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Metrics Matrix Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-gutter bg-surface-container-lowest p-space-md border border-outline-variant/30">
            {project.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-label-stamp text-label-stamp text-outline uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="font-headline-sm text-headline-sm text-primary font-semibold">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-surface-container p-space-md border border-outline-variant/20 flex flex-col gap-2">
              <span className="font-label-code text-label-code text-secondary uppercase">
                01 // THE CHALLENGE
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="bg-surface-container p-space-md border border-outline-variant/20 flex flex-col gap-2">
              <span className="font-label-code text-label-code text-tertiary uppercase">
                02 // THE ARCHITECTURAL SOLUTION
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Interactive Live Demonstrator Component */}
          {project.simulatorType && (
            <div className="bg-surface-container-lowest p-space-md border border-primary/30 flex flex-col gap-space-sm">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
                <span className="font-label-code text-label-code text-primary uppercase flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  LIVE BENCHMARK SIMULATOR // {project.simulatorType.toUpperCase()}
                </span>
                <span className="font-label-stamp text-label-stamp text-outline">
                  EXECUTION ENVIRONMENT: CLIENT VIRTUAL DOM
                </span>
              </div>

              {/* Orderbook Simulator */}
              {project.simulatorType === 'orderbook' && (
                <div className="flex flex-col gap-2 font-label-code text-xs">
                  <div className="grid grid-cols-4 text-outline border-b border-outline-variant/20 pb-1">
                    <span>PRICE (USD)</span>
                    <span>SIZE</span>
                    <span>TYPE</span>
                    <span className="text-right">LATENCY</span>
                  </div>
                  {orderBookTicks.map((tick, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-4 py-1 border-b border-outline-variant/10 text-on-surface animate-in fade-in"
                    >
                      <span className={tick.type === 'BID' ? 'text-tertiary' : 'text-error'}>
                        ${tick.price}
                      </span>
                      <span>{tick.size}</span>
                      <span className={tick.type === 'BID' ? 'text-tertiary' : 'text-error'}>
                        {tick.type}
                      </span>
                      <span className="text-right text-secondary font-mono">{tick.latency}</span>
                    </div>
                  ))}
                  <div className="text-[10px] text-outline text-right pt-1">
                    STREAM BUFFER: ZERO HEAP ALLOCATIONS
                  </div>
                </div>
              )}

              {/* Hypercar Shader Color Picker */}
              {project.simulatorType === 'colorpicker' && (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-label-stamp text-outline">SELECT CARBON COAT:</span>
                    {[
                      { name: 'Obsidian Matte', hex: '#0d0f12' },
                      { name: 'Velocity Cyan', hex: '#00a0a8' },
                      { name: 'Electric Cobalt', hex: '#004880' },
                      { name: 'Liquid Titanium', hex: '#404751' },
                    ].map((col) => (
                      <button
                        key={col.hex}
                        onClick={() => {
                          sound.click('toggle');
                          setSelectedColor(col.hex);
                        }}
                        className={`w-7 h-7 border transition-all cursor-pointer ${
                          selectedColor === col.hex ? 'border-primary scale-110 shadow-lg' : 'border-outline-variant'
                        }`}
                        style={{ backgroundColor: col.hex }}
                        title={col.name}
                      />
                    ))}
                  </div>
                  <div
                    className="h-20 w-full flex items-center justify-center font-label-code text-xs text-on-surface border border-outline-variant/20 transition-colors duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${selectedColor} 0%, #111318 100%)`,
                    }}
                  >
                    GLSL SHADER STATE: RENDER AT 60 FPS // ROUGHNESS: 0.12 // SPECULAR: 0.94
                  </div>
                </div>
              )}

              {/* Neural GPU Clusters */}
              {project.simulatorType === 'neural' && (
                <div className="flex flex-col gap-2">
                  <span className="font-label-stamp text-outline">
                    200+ GPU CLUSTER TELEMETRY (CLICK NODE TO PING):
                  </span>
                  <div className="grid grid-cols-8 sm:grid-cols-16 gap-1">
                    {Array.from({ length: 32 }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          sound.click('subtle');
                          setActiveClusterNode(idx);
                        }}
                        className={`h-6 text-[10px] font-mono flex items-center justify-center cursor-pointer transition-colors ${
                          activeClusterNode === idx
                            ? 'bg-primary text-on-primary font-bold'
                            : 'bg-surface-container hover:bg-surface-bright text-outline'
                        }`}
                      >
                        {idx}
                      </button>
                    ))}
                  </div>
                  <div className="text-xs font-label-code text-secondary flex items-center justify-between pt-1">
                    <span>NODE {activeClusterNode}: ONLINE (NVIDIA H100 SXM5)</span>
                    <span className="text-tertiary">THERMAL: 58°C // LOSS: 0.0024</span>
                  </div>
                </div>
              )}

              {/* Spatial 3D Pavilion */}
              {project.simulatorType === 'spatial3d' && (
                <div className="flex items-center justify-between p-3 bg-surface-container font-label-code text-xs">
                  <div>
                    <span>DRACO GEOMETRY COMPRESSION: 88%</span>
                    <br />
                    <span className="text-tertiary">SURFACE NORMALS: BAKED AMBIENT OCCLUSION</span>
                  </div>
                  <div className="text-right text-secondary">
                    <span>ORBIT ROTATION: FREE 360°</span>
                    <br />
                    <span>LOD: 4 SUBDIVISIONS</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Technical Architecture Stack */}
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-stamp text-label-stamp text-outline uppercase tracking-wider">
              03 // TECHNICAL STACK SPECIFICATION
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-label-technical text-xs text-on-surface">
              {project.architecture.map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-surface-container p-2 border border-outline-variant/20">
                  <span className="text-primary font-bold">›</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          {project.testimonial && (
            <div className="p-space-md bg-surface-container border-l-2 border-primary flex flex-col gap-2">
              <p className="font-body-editorial text-body-editorial text-on-surface italic">
                “{project.testimonial.quote}”
              </p>
              <div className="flex items-center justify-between text-xs font-label-code text-outline pt-1">
                <span className="text-on-surface font-semibold">{project.testimonial.author}</span>
                <span>{project.testimonial.role}</span>
              </div>
            </div>
          )}

          {/* Bottom Action Footer */}
          <div className="pt-space-md border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <button
              onClick={() => {
                sound.click('confirm');
                onClose();
                onOpenInquiry(project.domain);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-on-primary font-label-technical px-space-lg py-space-sm uppercase tracking-wider font-semibold transition-all cursor-pointer text-xs"
            >
              <span>INQUIRE ABOUT SIMILAR PROJECT</span>
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </button>

            <button
              onClick={() => {
                sound.click('toggle');
                onSelectProject(nextProject);
              }}
              className="text-xs font-label-technical text-outline hover:text-on-surface transition-colors cursor-pointer"
            >
              CYCLE NEXT CASE STUDY →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
