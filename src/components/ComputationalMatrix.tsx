import React, { useState, useEffect, useRef } from 'react';
import { sound } from './AudioEngine.ts';

type GeoMode = 'TORUS' | 'HYPERCUBE' | 'SPHERIC' | 'HARMONIC';

export const ComputationalMatrix: React.FC = () => {
  const [mode, setMode] = useState<GeoMode>('TORUS');
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [isRotating, setIsRotating] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [fps, setFps] = useState(60);
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());
  const frameCountRef = useRef(0);

  useEffect(() => {
    let currentRot = 0;

    const loop = (time: number) => {
      frameCountRef.current++;
      if (time - lastTimeRef.current >= 500) {
        setFps(Math.round((frameCountRef.current * 1000) / (time - lastTimeRef.current)));
        frameCountRef.current = 0;
        lastTimeRef.current = time;
      }

      if (isRotating) {
        currentRot = (currentRot + 0.35 * speedMultiplier) % 360;
        setRotation(currentRot);
      }
      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isRotating, speedMultiplier]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const cycleMode = () => {
    sound.click('toggle');
    const modes: GeoMode[] = ['TORUS', 'HYPERCUBE', 'SPHERIC', 'HARMONIC'];
    const nextIdx = (modes.indexOf(mode) + 1) % modes.length;
    setMode(modes[nextIdx]);
  };

  const vertexStats = {
    TORUS: { nodes: '4,096', vertices: '16.3K', label: '[TORUS-MATRIX]' },
    HYPERCUBE: { nodes: '8,192', vertices: '32.8K', label: '[TESSERACT-4D]' },
    SPHERIC: { nodes: '6,144', vertices: '24.5K', label: '[GEODESIC-LOD]' },
    HARMONIC: { nodes: '12,288', vertices: '49.1K', label: '[CYBER-WAVE]' },
  }[mode];

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-square max-h-[520px] bg-surface-container-lowest p-space-md flex flex-col justify-between overflow-hidden border border-outline-variant/30 select-none group"
      style={{
        transform: `perspective(800px) rotateX(${mouseOffset.y}deg) rotateY(${mouseOffset.x}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
    >
      {/* Top Header */}
      <div className="w-full flex items-center justify-between font-label-stamp text-label-stamp text-outline tracking-widest uppercase z-10">
        <button
          onClick={cycleMode}
          className="flex items-center gap-1.5 text-primary hover:text-secondary transition-colors cursor-pointer border-b border-dashed border-primary/40 pb-0.5"
          title="Click to cycle geometry simulation"
        >
          <span>GEO_NODE // {vertexStats.label}</span>
          <span className="material-symbols-outlined text-[13px]">sync</span>
        </button>

        <div className="flex items-center gap-space-sm">
          <span className="text-tertiary flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span>
            <span>CALCULATING {fps} FPS</span>
          </span>
        </div>
      </div>

      {/* Central Generative Simulation */}
      <div className="relative w-full h-full flex items-center justify-center my-auto">
        {mode === 'TORUS' && (
          <svg
            className="w-72 h-72 md:w-88 md:h-88 transition-transform duration-75"
            style={{ transform: `rotate(${rotation}deg)` }}
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="200" cy="200" rx="180" ry="60" stroke="#404751" strokeDasharray="4 4" strokeWidth="1" transform="rotate(0 200 200)" />
            <ellipse cx="200" cy="200" rx="180" ry="60" stroke="#404751" strokeDasharray="4 4" strokeWidth="1" transform="rotate(45 200 200)" />
            <ellipse cx="200" cy="200" rx="180" ry="60" stroke="#5aa9ff" strokeWidth="1.2" opacity="0.75" transform="rotate(90 200 200)" />
            <ellipse cx="200" cy="200" rx="180" ry="60" stroke="#404751" strokeDasharray="4 4" strokeWidth="1" transform="rotate(135 200 200)" />
            <circle cx="200" cy="200" r="140" stroke="#5fd8e0" strokeWidth="0.75" opacity="0.4" />
            <circle cx="200" cy="200" r="80" stroke="#a1c9ff" strokeDasharray="8 6" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="6" fill="#a5d574" />
            <line x1="20" y1="200" x2="380" y2="200" stroke="#404751" strokeWidth="0.5" />
            <line x1="200" y1="20" x2="200" y2="380" stroke="#404751" strokeWidth="0.5" />
            {/* Orbiting telemetry nodes */}
            <circle cx="290" cy="110" r="4" fill="#5aa9ff" />
            <circle cx="110" cy="290" r="3" fill="#5fd8e0" />
            <circle cx="340" cy="200" r="3" fill="#a5d574" />
            <circle cx="60" cy="200" r="3.5" fill="#a1c9ff" />
          </svg>
        )}

        {mode === 'HYPERCUBE' && (
          <svg
            className="w-72 h-72 md:w-88 md:h-88 transition-transform duration-75"
            style={{ transform: `rotate(${rotation * 0.7}deg)` }}
            viewBox="0 0 400 400"
            fill="none"
          >
            {/* Outer Box */}
            <rect x="70" y="70" width="260" height="260" stroke="#404751" strokeWidth="1" strokeDasharray="6 4" />
            {/* Inner Box */}
            <rect x="130" y="130" width="140" height="140" stroke="#5aa9ff" strokeWidth="1.5" />
            {/* Diagonal connections */}
            <line x1="70" y1="70" x2="130" y2="130" stroke="#5fd8e0" strokeWidth="1" />
            <line x1="330" y1="70" x2="270" y2="130" stroke="#5fd8e0" strokeWidth="1" />
            <line x1="70" y1="330" x2="130" y2="270" stroke="#5fd8e0" strokeWidth="1" />
            <line x1="330" y1="330" x2="270" y2="270" stroke="#5fd8e0" strokeWidth="1" />
            {/* Center Core */}
            <circle cx="200" cy="200" r="18" stroke="#a5d574" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx="200" cy="200" r="5" fill="#5aa9ff" />
            {/* Floating vertex beacons */}
            <rect x="126" y="126" width="8" height="8" fill="#5aa9ff" />
            <rect x="266" y="126" width="8" height="8" fill="#5aa9ff" />
            <rect x="126" y="266" width="8" height="8" fill="#5aa9ff" />
            <rect x="266" y="266" width="8" height="8" fill="#5aa9ff" />
            <circle cx="200" cy="70" r="3" fill="#a5d574" />
            <circle cx="200" cy="330" r="3" fill="#a5d574" />
          </svg>
        )}

        {mode === 'SPHERIC' && (
          <svg
            className="w-72 h-72 md:w-88 md:h-88 transition-transform duration-75"
            style={{ transform: `rotate(${rotation * 0.5}deg)` }}
            viewBox="0 0 400 400"
            fill="none"
          >
            <circle cx="200" cy="200" r="160" stroke="#404751" strokeWidth="1" />
            <ellipse cx="200" cy="200" rx="160" ry="40" stroke="#5aa9ff" strokeWidth="1.2" />
            <ellipse cx="200" cy="200" rx="160" ry="90" stroke="#404751" strokeDasharray="4 4" strokeWidth="1" />
            <ellipse cx="200" cy="200" rx="160" ry="130" stroke="#404751" strokeDasharray="4 4" strokeWidth="1" />
            <ellipse cx="200" cy="200" rx="40" ry="160" stroke="#5fd8e0" strokeWidth="1" />
            <ellipse cx="200" cy="200" rx="90" ry="160" stroke="#404751" strokeDasharray="4 4" strokeWidth="1" />
            <line x1="200" y1="20" x2="200" y2="380" stroke="#a5d574" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="200" cy="200" r="8" fill="#a1c9ff" />
            <circle cx="200" cy="40" r="5" fill="#a5d574" />
            <circle cx="200" cy="360" r="5" fill="#a5d574" />
          </svg>
        )}

        {mode === 'HARMONIC' && (
          <svg
            className="w-72 h-72 md:w-88 md:h-88 transition-transform duration-75"
            style={{ transform: `rotate(${rotation * 1.2}deg)` }}
            viewBox="0 0 400 400"
            fill="none"
          >
            {/* Wave spirals */}
            {[20, 50, 80, 110, 140, 170].map((r, i) => (
              <circle
                key={i}
                cx="200"
                cy="200"
                r={r}
                stroke={i % 2 === 0 ? '#5aa9ff' : '#404751'}
                strokeWidth={i % 2 === 0 ? 1.5 : 0.75}
                strokeDasharray={`${8 + i * 4} ${4 + i * 2}`}
                opacity={0.3 + (i / 6) * 0.7}
              />
            ))}
            <line x1="200" y1="200" x2="350" y2="200" stroke="#5fd8e0" strokeWidth="2" />
            <circle cx="200" cy="200" r="6" fill="#a5d574" />
            <circle cx="350" cy="200" r="4" fill="#5fd8e0" />
          </svg>
        )}

        {/* Floating Data Badges */}
        <div className="absolute top-4 left-4 bg-surface-container-high/90 backdrop-blur-md p-space-xs font-label-code text-label-code text-primary border border-outline-variant/30">
          NODES: {vertexStats.nodes}
          <br />
          VERTICES: {vertexStats.vertices}
        </div>
        <div className="absolute bottom-4 right-4 bg-surface-container-high/90 backdrop-blur-md p-space-xs font-label-code text-label-code text-on-surface-variant text-right border border-outline-variant/30">
          LATENCY: {Math.max(8, Math.round(16.6 - fps * 0.1))}ms
          <br />
          RENDER: WEBGL2_CORE
        </div>
      </div>

      {/* Interactive Quick Bar */}
      <div className="w-full flex items-center justify-between font-label-stamp text-label-stamp text-outline pt-space-xs border-t border-outline-variant/20 z-10">
        <div className="flex items-center gap-2">
          <span>INDEX // 0x489F</span>
          <button
            onClick={() => {
              sound.click('toggle');
              setIsRotating(!isRotating);
            }}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            [{isRotating ? 'PAUSE' : 'RESUME'}]
          </button>
          <button
            onClick={() => {
              sound.click('toggle');
              setSpeedMultiplier((prev) => (prev === 1 ? 2 : prev === 2 ? 0.5 : 1));
            }}
            className="hover:text-secondary transition-colors cursor-pointer"
          >
            [{speedMultiplier}X SPEED]
          </button>
        </div>
        <span className="text-on-surface">RADIAL DISPERSION: 98.4%</span>
      </div>
    </div>
  );
};
