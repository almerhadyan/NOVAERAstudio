import { Project, ServiceCapability, TeamMember, InsightArticle } from '../types/index.ts';

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1X5aGNrox5BzUD47WDAtCn4l-VVdkxSf0b4fDePXb2uyGCI1egfCtOBVPD40lV8v7ipXJ_NkQKcKDFPUKzvQ_Hlg2TUJDxpfj8G6rPc6B9ov8jPQDtts7leml4IuV0_FDxQZA4JJlXJtAU6E0QVpqkhAIvhHTJqe_lm-VRQOgcmpqC87O1hzZ5dHFApD3NyFyPqhli9fS6VIydu-EW-4aoX5LGk86rw6WW7WTB6mAXUNPVBu14b8pFYI-w';

export const PROJECTS: Project[] = [
  {
    id: 'orbit',
    number: '01',
    caseCode: 'CASE 09',
    title: 'ORBIT — NEXT GEN FINTECH',
    client: 'Orbit Clearing Protocol',
    year: '2026',
    location: 'JAKARTA',
    domain: 'FINANCIAL INFRASTRUCTURE',
    category: 'product',
    summary: 'High-throughput institutional digital asset clearing platform. Designed with razor-sharp glass morphism data dashboards, ultra-low latency transaction streaming, and typographic rigor.',
    description: 'Orbit requested an institutional clearing interface capable of processing 250,000 orders/sec without layout degradation or frame drops. We engineered a custom WebGL order book canvas combined with a bespoke React 19 high-frequency state bus that settles telemetry updates in under 4ms.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkA_tkEV__z4-Fp2rtk4bI-9xujcS4voSDO7B1ZkxCjJjdTVqoEl4_rqEGNRdui9Eujpbs662TyN8fp-O2WmOFeJmBDXYj2yNSPfymF7DdbrD3izqdXDpFPG0KtLfjHEixWVqpNAef7joqtuwcYe25NJQ-J-2AAq1OesiHNTQmQCot145ye7Xhavi_KKS-m2RpzLWuKq5RqkqUZTTRrxZp3UMulIkJWIBvO6p6KxSTOuCHvZn7PVLy',
    imageAlt: 'Dark high-tech fintech trading dashboard interface mockup with glowing cyan and electric blue financial charts, depth-layered glass cards, monospace order book metrics, and minimalist futuristic typography.',
    badgeAccent: 'primary',
    tags: ['UI/UX PRODUCT', 'NEXT.JS EDGE', 'WEBGL CHARTS'],
    telemetry: {
      label: 'DATA: LATENCY',
      value: '< 4MS'
    },
    metrics: [
      { label: 'THROUGHPUT', value: '250K TPS' },
      { label: 'RENDER LATENCY', value: '3.8ms' },
      { label: 'CAPITAL CLEARED', value: '$1.4B+' },
      { label: 'CLIENT RETENTION', value: '99.4%' }
    ],
    challenge: 'Legacy financial interfaces suffer from severe UI thread locking during volatility spikes. Traders were losing execution precision due to DOM thrashing and unbuffered chart updates.',
    solution: 'We decoupled the real-time order stream from DOM reconciliation, deploying an offscreen canvas rendering pipeline and custom zero-dependency mathematical chart engine.',
    architecture: [
      'Next.js 15 App Router on Vercel Edge Node',
      'Web Workers + Offscreen Canvas WebGL rendering',
      'WebSocket binary multiplexer with fallback polling',
      'Custom monospaced typography system for tabular alignment'
    ],
    testimonial: {
      quote: 'NOVAERA’s interface transformed Orbit from an obscure technical protocol into Wall Street’s fastest institutional terminal.',
      author: 'Evelyn Shaw',
      role: 'Head of Product, Orbit Markets'
    },
    simulatorType: 'orderbook'
  },
  {
    id: 'lumen',
    number: '02',
    caseCode: 'CASE 14',
    title: 'LUMEN — SPATIAL ARCHITECTURE',
    client: 'Lumen Atelier Zurich',
    year: '2025',
    location: 'ZURICH',
    domain: 'SPATIAL ARCHITECTURE',
    category: 'spatial',
    summary: 'Bespoke WebGL spatial archive and physical brand identity for a Swiss architecture atelier. Fluid 3D camera navigation showcasing structural concrete projects in uncompressed fidelity.',
    description: 'Lumen wanted their architectural portfolio to reflect the tactile weight of raw concrete and structural cantilevered geometry. We built an in-browser WebGL pavilion where users orbit monolithic scale models at true physical light ratios.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASiJ4JOnFiKaMGdnUgCWOFOyBkdCjBZcNY9WwnTEcbK043sl9O3btCH2JSDeioJ2JPr-Fku3MmDQGZSeWPvOuRavALGGoyql1rib0cewglqbB4vXii237M70G5C35pOcIluGb0c7DtoAuY8CFJJK1lm3i5CfvfzNT40TOh5N9q9C4dZ6c0pFzp5B7-n9WZ56N0YNhAYq1mN-zHlfoL8qcdKjNazBlE-X_dxrfh4zlXG5KaEolM-TN5',
    imageAlt: 'Monolithic modern brutalist concrete architectural pavilion in Zurich at dusk, shot with dramatic architectural shadows, stark geometry, cool blue atmospheric sky tones, and high-fashion editorial composition.',
    badgeAccent: 'secondary',
    tags: ['SPATIAL WEBGL', 'BRAND IDENTITY', 'INTERACTIVE 3D'],
    telemetry: {
      label: 'LOC',
      value: 'ZURICH // CH'
    },
    metrics: [
      { label: 'FRAME RATE', value: '60 FPS LOCKED' },
      { label: 'ASSET COMPRESSION', value: '88% SMALLER' },
      { label: 'GLOBAL AWARDS', value: '4x AWWWARDS' },
      { label: 'TIME ON SITE', value: '4m 32s AVG' }
    ],
    challenge: 'High-polygon photogrammetry scans of concrete pavilions were previously 250MB+ per model, making web deployment nearly impossible for global clientele.',
    solution: 'Engineered a progressive LOD (Level of Detail) GLTF mesh pipeline and custom normal-map shadow baker, reducing initial load to 4.2MB with zero visible resolution loss.',
    architecture: [
      'Three.js with custom GLSL physical lighting shaders',
      'Draco geometric mesh streaming over Cloudflare CDN',
      'Post-processing grain filter and camera depth of field',
      'Harmonic typography tuned to Le Corbusier modular ratios'
    ],
    testimonial: {
      quote: 'Our physical architecture now exists in cyberspace with the exact same gravitational presence we pour into concrete.',
      author: 'Christoph Weber',
      role: 'Principal Architect, Lumen Zurich'
    },
    simulatorType: 'spatial3d'
  },
  {
    id: 'aura',
    number: '03',
    caseCode: 'CASE 21',
    title: 'AURA REBRAND & GLOBAL STORE',
    client: 'Aura Tokyo Laboratories',
    year: '2026',
    location: 'TOKYO',
    domain: 'BIO-BEAUTY & WELLNESS',
    category: 'fashion-commerce',
    summary: 'Replatforming a Japanese bio-wellness icon into a headless Shopify experience with micro-interactions and sensory checkout.',
    description: 'Aura formulations rely on botanical biochemistry. We designed a clean, clinical yet warm digital flagship featuring interactive ingredient spectrometry, ambient audio cues, and an 800ms checkout sequence.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc-Wp3lTNbLEeKPsxkNL0yVnW_KznRDs66-_EZaiojfE7IQJyvXqEqdhrmJSr-kck3dsXzERN7JfclT-dWCvVHat7q6EdoV9DT8zWaVIcnuckkYGXggG01vHnK2sNMwhaKmF-eMIY4uLgpaxaCQO0cHRicsjCKr9z4p7aBaCSZhx4Gt9hLOSFMywPfBTegcILxD5vJn-Kmij586Ub3f4KKCsjP0ZosPbZCzp6q9L6L4iL297VCGogA',
    imageAlt: 'Minimalist luxury skincare glass flacon bottle on dark volcanic slate surface, soft cool studio rim lighting, editorial cosmetic presentation, deep moody shadows and clinical purity.',
    badgeAccent: 'tertiary',
    tags: ['HEADLESS SHOPIFY', 'UI/UX COMMERCE', 'SENSORY MOTION'],
    telemetry: {
      label: 'REGION',
      value: 'TOKYO / GLOBAL'
    },
    metrics: [
      { label: 'CONVERSION LIFT', value: '+34.2%' },
      { label: 'AVERAGE ORDER VALUE', value: '+$42 USD' },
      { label: 'CHECKOUT LATENCY', value: '820ms' },
      { label: 'MOBILE USABILITY', value: '100 / 100' }
    ],
    challenge: 'Previous monolithic store took 4.5 seconds to load on mobile and had high cart abandonment due to complex Japanese-English localization friction.',
    solution: 'Built an ultra-fast headless storefront using Shopify Storefront GraphQL, edge caching, and localized one-click biometric checkout.',
    architecture: [
      'Shopify Storefront API via Hydrogen & Remix',
      'Tailwind CSS tokens compiled for zero runtime weight',
      'Web Audio micro-sensory feedback on bottle selection',
      'Global multi-currency checkout via Stripe Elements'
    ],
    testimonial: {
      quote: 'NOVAERA understood that luxury is silence, speed, and tactile reverence. The results surpassed all annual targets in 60 days.',
      author: 'Kenji Takahashi',
      role: 'Managing Director, Aura Group'
    }
  },
  {
    id: 'nexus',
    number: '04',
    caseCode: 'CASE 33',
    title: 'NEXUS INTELLIGENCE PLATFORM',
    client: 'Nexus Systems SF',
    year: '2026',
    location: 'SAN FRANCISCO',
    domain: 'AI INFRASTRUCTURE',
    category: 'product',
    summary: 'Complete UI design system and real-time execution orchestrator for machine learning engineers across 200+ clusters.',
    description: 'Nexus orchestrates distributed model training runs across GPU server farms. We built the cockpit interface that visualizes gradient divergence, memory allocations, and automated checkpoint rollbacks.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd71ss1NrrYCLAmHqRX5Jl9luBL6iJlyQ4AscEWI2jHvnijYnAXOsnePn3iRw50581uT-LOseeqTVDaJLz4wkNvtYxZXxG7erUpC06D-YZFHxpdLsPXp_O1xuoJb5cYyh4INUu5aGVwLshJFwYHsX-SKsjugWyeFSHtyfxAsNV8jQbXu1BbEFb1SJo7GZ8BnMqA_BCoX1cy2p79AEwopAGAy_EcgSNAY-yYNVUh9gnomV3exnPMKtP',
    imageAlt: 'Complex 3D generative neural network visualization, glowing nodes connected by fine blue and cyan geometric lines against pitch-black void, deep visual data architecture aesthetic.',
    badgeAccent: 'primary',
    tags: ['DEV CONSOLE', 'GPU TELEMETRY', 'SYSTEMS ARCHITECTURE'],
    telemetry: {
      label: 'NODE CLUSTERS',
      value: '200+ MONITORED'
    },
    metrics: [
      { label: 'CLUSTER VISIBILITY', value: '20,000+ GPUs' },
      { label: 'ANOMALY DETECTION', value: '0.8s ADVANCE' },
      { label: 'DEV SATISFACTION', value: '98%' },
      { label: 'INCIDENT DOWNTIME', value: '-65%' }
    ],
    challenge: 'Engineering teams had to switch between 6 different CLI terminals and clunky Grafana dashboards during critical 100-billion parameter training runs.',
    solution: 'Designed a unified dark-mode command canvas with hotkey-driven navigation, node topology maps, and predictive loss-curve diagnostics.',
    architecture: [
      'React 19 with custom spatial canvas renderer',
      'gRPC-Web streaming for instant telemetry pipes',
      'Monospaced syntax highlighting engine',
      'Sub-100ms keyboard navigation state machine'
    ],
    testimonial: {
      quote: 'It feels like controlling a spacecraft. Our ML research engineers literally refuse to use any other monitoring software.',
      author: 'Dr. Aris Thorne',
      role: 'VP Infrastructure, Synthetix & Nexus'
    },
    simulatorType: 'neural'
  },
  {
    id: 'vanta',
    number: '05',
    caseCode: 'CASE 42',
    title: 'VANTA HYPERCAR CONFIGURATOR',
    client: 'Vanta Automotive Berlin',
    year: '2025',
    location: 'BERLIN',
    domain: 'HIGH PERFORMANCE EV',
    category: 'spatial',
    summary: 'In-browser WebGL automotive visualizer running photorealistic shaders at 60fps across mobile and desktop devices.',
    description: 'Vanta engineered a 1,800hp electric hypercar. To preview configurations for private VIP collectors, we created a WebGL configurator supporting real-time carbon weave customization, paint reflectivity, and aerodynamic wind simulation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBM5C1E9kl-FVD54Q1ZfBRyD5-rUeUNZDyXsJ66ftCf4SopClM4C4g3lNz1eZ742qD1j128PejPYzr9FV4PEr0r9APkfc6vxTfn_ICXOktKwrWAizcM-PKgoTgVfm-nZ2zb9qAqJvHWswJ_dKcZVseriraxgnRqplpxYQFhFklR7uhWW10hk5wVnaBV0Hg_KujDm-u8bC2PgYjLbpznP0DdAlUUJhRLAVurFgMKwHadHJ0DE3m7WtS',
    imageAlt: 'Matte black aerodynamic electric hypercar concept inside dark technical studio, sharp rim lighting highlighting futuristic carbon chassis curves, cyber luxury automotive photography.',
    badgeAccent: 'secondary',
    tags: ['AUTOMOTIVE 3D', 'SHADERS', 'VIP SALES PIPELINE'],
    telemetry: {
      label: 'STUDIO',
      value: 'BERLIN // EV'
    },
    metrics: [
      { label: 'FPS BENCHMARK', value: '60 FPS STABLE' },
      { label: 'PRE-ORDERS CLOSED', value: '85 ALLOCATIONS' },
      { label: 'AVERAGE SPEC VALUE', value: '€2.8M' },
      { label: 'SHADER LATENCY', value: '16.6ms' }
    ],
    challenge: 'Automotive configurators typically require cloud-pixel streaming with high latency and significant recurring cloud GPU server costs.',
    solution: 'Wrote lightweight procedural GLSL materials that execute entirely on client silicon, running smoothly even on modern mobile phones.',
    architecture: [
      'Custom WebGL PBR (Physically Based Rendering) shader pipeline',
      'Procedural carbon fiber anisotropic reflections',
      'Dynamic studio HDRI lighting generator',
      'Config state persistence via cryptographic share links'
    ],
    testimonial: {
      quote: 'Collectors customized and secured €2.8M allocations directly from their iPads over champagne at Pebble Beach.',
      author: 'Maximilian Brandt',
      role: 'Commercial Director, Vanta Mobility'
    },
    simulatorType: 'colorpicker'
  },
  {
    id: 'mono',
    number: '06',
    caseCode: 'CASE 58',
    title: 'MONO ATELIER EXPERIMENTAL COMMERCE',
    client: 'Mono Haute Couture Paris',
    year: '2026',
    location: 'PARIS',
    domain: 'HAUTE COUTURE',
    category: 'fashion-commerce',
    summary: 'An avant-garde transactional editorial platform designed for limited collection drops, AR try-ons, and verifiable ownership.',
    description: 'Mono operates at the boundary of digital haute couture and physical wearable art. We built an editorial commerce apparatus with spatial product inspection, zero-gravity cloth simulation previews, and encrypted drop queues.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBX65h3ecVDMTLkS1q9rKFDitEKaATfSoyoSPQGzpY6JvKlFl9dDdS3gXIk9cSibKwZDVQp2sPrHZgjaJISymXer2ZqzmcE9weoBf_-0yY7bt73D3L9YLVnpITbeRuN38p18hLjfRD4c-L_CepB90l1STnRp2OOotjVKwP9JZks6Gh5LbhHdWsVzDUt-Q1SrTeDhTRL2vOFZ-PRFW31nvenMnmB_Kxy9DqnargGhHBMFoXK_8eCHyN1',
    imageAlt: 'Avant-garde digital haute couture garment floating in zero gravity, technical architectural textiles, monochromatic charcoal and silver tones, high fashion digital atelier.',
    badgeAccent: 'tertiary',
    tags: ['EDITORIAL COMMERCE', 'PHYSICAL/DIGITAL', 'DROP ENGINE'],
    telemetry: {
      label: 'ATELIER',
      value: 'PARIS // COUTURE'
    },
    metrics: [
      { label: 'SELL-OUT SPEED', value: '47 SECONDS' },
      { label: 'ORGANIC REACH', value: '2.4M IMPRESSIONS' },
      { label: 'RETURN RATE', value: '< 1.2%' },
      { label: 'SATISFACTION', value: '99.8%' }
    ],
    challenge: 'Handling sudden traffic surges of 80,000 fashion buyers during unannounced 50-piece capsule drops without checkout failures.',
    solution: 'Engineered an edge queue validator with zero-wait cryptographic reservation tokens and an editorial-first storytelling canvas.',
    architecture: [
      'Tailwind CSS v4 with bespoke editorial typographic scale',
      'Three.js physics-enabled fabric cloth draping animation',
      'Cloudflare Durable Objects for atomized drop reservation',
      'High-dynamic-range image pipeline with WebP fallback'
    ],
    testimonial: {
      quote: 'NOVAERA treated our digital garments not as inventory, but as museum-grade physical artifacts.',
      author: 'Claire Delacroix',
      role: 'Creative Director, Mono Paris'
    }
  }
];

export const CAPABILITIES: ServiceCapability[] = [
  {
    domainIndex: '01',
    domainName: 'DIGITAL PRODUCT',
    shortDesc: 'Engineering resilient, scalable platforms engineered to transform high user complexity into frictionless, fluid interaction.',
    longDesc: 'From high-frequency institutional trading consoles to consumer subscription engines. We craft full-stack digital products where computational depth meets surgical user ergonomics.',
    accentColor: 'primary',
    capabilities: [
      'Websites & Immersive Portals',
      'Web Applications & Dashboards',
      'Mobile Platforms (iOS & Android)',
      'SaaS Architecture & Scaled Systems',
      'Headless E-Commerce Ecosystems'
    ],
    metricTag: 'SPEED-TO-MARKET: ACCELERATED',
    turnaround: '6 - 12 WEEKS TYPICAL',
    typicalDeliverables: [
      'Production-ready React / Next.js codebase',
      'Full TypeScript API client definitions',
      'Automated CI/CD deployment pipelines',
      'Accessibility & WCAG AA audit certification'
    ]
  },
  {
    domainIndex: '02',
    domainName: 'DESIGN & SYSTEMS',
    shortDesc: 'Disciplined visual hierarchies, mathematically sound type scales, and extensible design systems that maintain parity with production code.',
    longDesc: 'We treat design systems not as static Figma UI kits, but as living, executable token architectures that synchronize design tokens directly into production React components.',
    accentColor: 'secondary',
    capabilities: [
      'UI/UX Product Architecture',
      'Design Tokens & Component Systems',
      'Brand Identity & Digital Guidelines',
      'Interactive High-Fidelity Prototyping',
      'Art Direction & Visual Strategy'
    ],
    metricTag: 'SYSTEM FIDELITY: 1:1 TO CODE',
    turnaround: '4 - 8 WEEKS TYPICAL',
    typicalDeliverables: [
      'Complete Figma Component Library & Token Tree',
      'Published Tailwind CSS configuration presets',
      'Interactive Storybook documentation',
      'Multi-device responsive pattern library'
    ]
  },
  {
    domainIndex: '03',
    domainName: 'CREATIVE EXPERIENCE',
    shortDesc: 'Pushing the boundaries of the canvas with real-time graphics, GPU shaders, spatial depth, and unforgettable kinetic moments.',
    longDesc: 'We bypass template mediocrity by programming directly on top of WebGL, GLSL shaders, and spatial physics engines, creating interactive digital landmarks that win awards.',
    accentColor: 'tertiary',
    capabilities: [
      'Interactive WebGL & Three.js Experiences',
      '3D Product Configurator Pipelines',
      'Creative Technology Prototypes',
      'Kinetic Micro-Interactions & Audio',
      'Spatial Digital Launch Activations'
    ],
    metricTag: 'FRAME BUDGET: 16.6MS GUARANTEE',
    turnaround: '4 - 10 WEEKS TYPICAL',
    typicalDeliverables: [
      'Hardware-accelerated 60fps WebGL canvas scene',
      'Bespoke GLSL procedural fragment shaders',
      'Web Audio synthesized soundscape engine',
      'Progressive mobile geometry degradation fallbacks'
    ]
  }
];

export const METHODOLOGY_STEPS = [
  {
    phase: '01',
    code: 'DISCOVER',
    title: 'UNDERSTAND & DECONSTRUCT',
    description: 'Deep audit of business objectives, stakeholder architecture, user telemetry, and technical bottlenecks before any design commences.',
    deliverables: 'Technical audit report, competitor benchmark matrix, user personas, risk registers',
    accent: 'primary'
  },
  {
    phase: '02',
    code: 'DEFINE',
    title: 'STRATEGY & INFORMATION',
    description: 'Translating qualitative and quantitative research into actionable information architecture, user journeys, and structural site blueprints.',
    deliverables: 'Wireframe blueprints, site taxonomy tree, telemetry KPI targets, API contract specs',
    accent: 'primary'
  },
  {
    phase: '03',
    code: 'DESIGN',
    title: 'MATHEMATICAL RIGOR',
    description: 'Crafting distinctive visual identities, typographic scales, and responsive interaction models with uncompromising attention to detail.',
    deliverables: 'Design tokens, high-fidelity UI screens, motion choreography guides, typography scale',
    accent: 'secondary'
  },
  {
    phase: '04',
    code: 'PROTOTYPE',
    title: 'IN-BROWSER VALIDATION',
    description: 'Testing complex animations, kinetic gestures, and performance constraints in genuine web browser environments rather than static canvas mockups.',
    deliverables: 'Interactive web prototypes, framerate stress-test benchmarks, sensory audio tuning',
    accent: 'secondary'
  },
  {
    phase: '05',
    code: 'BUILD',
    title: 'CLEAN PRODUCTION CODE',
    description: 'Developing accessible, semantic, and hyper-optimized codebases leveraging Next.js, WebGL, TypeScript, and modern headless infrastructures.',
    deliverables: 'Fully tested production codebase, CI/CD pipeline, API integrations, CMS integration',
    accent: 'tertiary'
  },
  {
    phase: '06',
    code: 'LAUNCH',
    title: 'BENCHMARK & EVOLVE',
    description: 'Comprehensive QA, edge caching optimization, Core Web Vitals verification, analytics calibration, and ongoing architectural support.',
    deliverables: 'Lighthouse 100/100 verification, edge CDN rollout, post-launch analytics dashboard',
    accent: 'tertiary'
  }
];

export const TECH_STACK_GROUPS = [
  {
    index: '01',
    title: 'FRONTEND CORE',
    items: [
      { name: 'React 19', note: 'Concurrent State', icon: '✓', color: 'text-tertiary' },
      { name: 'Next.js App Router', note: 'Server Components', icon: '✓', color: 'text-tertiary' },
      { name: 'TypeScript', note: 'Strict Type Safety', icon: '✓', color: 'text-tertiary' },
      { name: 'Tailwind CSS', note: 'Zero-runtime Styling', icon: '✓', color: 'text-tertiary' },
      { name: 'Web Components', note: 'Framework Agnostic', icon: '✓', color: 'text-tertiary' }
    ]
  },
  {
    index: '02',
    title: 'MOTION & GPU',
    items: [
      { name: 'Three.js', note: 'Scene Graph Engine', icon: '•', color: 'text-primary' },
      { name: 'WebGL / GLSL', note: 'Custom Pixel Shaders', icon: '•', color: 'text-primary' },
      { name: 'GSAP & Flip', note: 'Complex Sequences', icon: '•', color: 'text-primary' },
      { name: 'Motion / Framer', note: 'Physics Gestures', icon: '•', color: 'text-primary' },
      { name: 'Lenis Smooth Scroll', note: 'Inertia Normalization', icon: '•', color: 'text-primary' }
    ]
  },
  {
    index: '03',
    title: 'DESIGN ENGINES',
    items: [
      { name: 'Figma Enterprise', note: 'Variables & Tokens', icon: '•', color: 'text-secondary' },
      { name: 'Spline 3D', note: 'Spatial Prototypes', icon: '•', color: 'text-secondary' },
      { name: 'Style Dictionary', note: 'Cross-platform Tokens', icon: '•', color: 'text-secondary' },
      { name: 'Blender Cycles', note: 'Photorealistic Baking', icon: '•', color: 'text-secondary' },
      { name: 'Storybook', note: 'Isolated Testing', icon: '•', color: 'text-secondary' }
    ]
  },
  {
    index: '04',
    title: 'BACKEND & DATA',
    items: [
      { name: 'Node.js / Bun', note: 'Fast Execution', icon: '•', color: 'text-tertiary' },
      { name: 'Edge Runtimes', note: 'Global Sub-10ms', icon: '•', color: 'text-tertiary' },
      { name: 'GraphQL APIs', note: 'Precise Payloads', icon: '•', color: 'text-tertiary' },
      { name: 'Sanity & Strapi', note: 'Headless Content', icon: '•', color: 'text-tertiary' },
      { name: 'PostgreSQL / Redis', note: 'Relational & Caching', icon: '•', color: 'text-tertiary' }
    ]
  },
  {
    index: '05',
    title: 'DEPLOYMENT',
    items: [
      { name: 'Vercel Edge', note: 'Zero-config Edge', icon: '•', color: 'text-on-surface-variant' },
      { name: 'Cloudflare Workers', note: 'Global Mesh Router', icon: '•', color: 'text-on-surface-variant' },
      { name: 'AWS Infrastructure', note: 'Container Workloads', icon: '•', color: 'text-on-surface-variant' },
      { name: 'GitHub Actions CI', note: 'Automated Testing', icon: '•', color: 'text-on-surface-variant' },
      { name: 'Lighthouse 100 CI', note: 'Core Vitals Gate', icon: '✓', color: 'text-tertiary' }
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'raka',
    name: 'RAKA',
    role: 'CREATIVE DIRECTOR',
    badge: 'FOUNDER',
    accent: 'primary',
    bio: 'Pioneered editorial digital experiences across Southeast Asia and the US for over a decade. Combines spatial typography with computational minimalism.',
    experience: '12 YRS EXP',
    previous: 'EX-GOOGLE CREATIVE LAB',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFQmkiv0dqXLJUoBwfmED2Eqtm2sox609b9V1CoIZgx1l5o0MKE78ojcu7vttp7v_ESk_SCZmmxv2gBSltUDGN_ypoy9DmuDY9epgMHe3WLmzjRyFauiPqghbc0QMzvQE1VEalXjGZV_t4-BIZWelEb6Onf3EvKRXUbzM-0THc9Qrpj1Xwou3E3Gn97aZ9pVwBoyDJSKSQfHpbZZpxT0ZuFxdLH7zUBZRx49FS48KhLC5vD9Q8DWm8',
    imageAlt: 'Monochrome cinematic portrait of an Asian creative director in his 30s wearing a technical black crewneck, minimalist architectural studio background, dramatic studio lighting.',
    location: 'JAKARTA [HQ]',
    skills: ['Creative Direction', 'Spatial Design', 'Brand Architecture', 'Creative Technology']
  },
  {
    id: 'elena',
    name: 'ELENA VANCE',
    role: 'DESIGN DIRECTOR',
    badge: 'LEAD DESIGN',
    accent: 'secondary',
    bio: 'Swiss-trained visual theorist focusing on mathematical grid systems, typographic tension, and high-density financial data visualization.',
    experience: '10 YRS EXP',
    previous: 'EX-PENTAGRAM • ZURICH',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCed5FpK2Co9ReWhR54F9l82s6MdUHpYWxPyCVVKUjvd-WOveaPTAQAjMc15PXEZh8k4ju_aPJSIjEhySu8p95lKyY_XHLT3BixlEaGTzhdpqyif5t4BM5QqwSosqvQZaxDmgiqH7WJJHoKbixiErlEQzVTwhn7XOd3Ynd1JJ0SkN78kczxtp9IBgW5nvzg0ptzJSZEockaHmu9ojGaEyY7dIX5NRBLPKJA8BtCuP0eDcxL1JC7ktZa',
    imageAlt: 'Monochrome high-contrast portrait of a European female design director with sharp features, architectural glasses, neutral dark studio lighting, refined editorial aesthetic.',
    location: 'ZURICH SATELLITE',
    skills: ['Design Systems', 'Typography Science', 'Fintech Ergonomics', 'Editorial Layout']
  },
  {
    id: 'marcus',
    name: 'MARCUS CHEN',
    role: 'TECHNICAL DIRECTOR',
    badge: 'LEAD CODE',
    accent: 'tertiary',
    bio: 'Specialist in WebGL shaders, spatial computing, and sub-frame latency optimization. Architected rendering pipelines for global automotive and spatial brands.',
    experience: '9 YRS EXP',
    previous: 'GRAPHICS & SYSTEM ENG',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrZn2SvpW18y6xfJeOIMgw87RtarW6JRG_S26y_vPmuQg9PMyfXb04TsQNvI0kKc0QmfkEwNPeQw6KkBs62uAz1Ypym60D6J9bkxvpxKmjMxaRNFWXKLXubBcUqnpUVYvRD3yyoSO8hJ-UL5OwaS6QU0Hqzzh0u8Ejs1hLliq27KrGxXAaSe_pnFEswPegNg2zb71IYzGOrt_U9kmZlEZ33cerjZ-ewlYzson-1BsUyklXyWLYZFbT',
    imageAlt: 'Monochrome studio portrait of a male technical director in dark attire looking forward with intense focus, subtle computer terminal reflection in eyes, high contrast portraiture.',
    location: 'SAN FRANCISCO NODE',
    skills: ['Three.js & GLSL', 'Next.js Edge Architecture', 'GPU Shaders', 'Web Audio Synthesizers']
  },
  {
    id: 'sarah',
    name: 'SARAH AL-MANSOOR',
    role: 'LEAD PRODUCT ARCHITECT',
    badge: 'PRODUCT SYSTEMS',
    accent: 'primary',
    bio: 'Connects business logic with human behavior. Expert in complex enterprise workflows, multi-tenant permission layers, and WCAG AAA accessibility.',
    experience: '8 YRS EXP',
    previous: 'PRODUCT SYSTEMS • LONDON',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApuNhgEe9KQd-JEweQR_dPgFSb2BM4tVO8-iWPafzYQ8vpCz_i-KvikJYd3qqTgjfsevekgvCFYQe67fyzLmOLcaadYXM8KY_-5tb1Wiae2vd5gBegWC2jofL_mA7Bxn9ZyDAmq-h_gWnw83eRiIPZBLZF8Zo1bl0PoM82WNl8ue32HKDAsqxA9minSywWOe-DYT2-M2h1zE5fVK1IIDVOdM8uDYsmixck35C12dSupq9hMEwWR6zI',
    imageAlt: 'Monochrome artistic portrait of a Middle Eastern female product architect with hair slicked back, wearing minimal black tailoring, directional moody side lighting.',
    location: 'JAKARTA [HQ]',
    skills: ['Product Architecture', 'Accessibility Standards', 'Interaction Modeling', 'User Telemetry']
  }
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'post-flat-web',
    date: '2026.03',
    type: 'ESSAY',
    title: 'Designing for the Post-Flat Web Era',
    slug: 'post-flat-web-era',
    summary: 'Why the pendulum is swinging away from sterile SaaS templates toward textural, spatial, and cinematic micro-architectures.',
    author: 'Raka & Elena Vance',
    readTime: '6 MIN READ',
    accentColor: 'tertiary',
    tag: 'DESIGN SYSTEMS',
    content: [
      'Over the past eight years, enterprise web design succumbed to the gray gradient plague. Thousands of products adopted identical 12-column cards, identical purple buttons, and identical floating stat capsules that communicated nothing unique about their brands.',
      'We are witnessing the emergence of the Post-Flat Web: an intentional movement prioritizing typographic tension, tactile grain, monospaced metadata rigor, and spatial depth created through physical light ratios rather than muddy drop shadows.',
      'When an interface behaves like a precision industrial instrument, user engagement elevates immediately. Every interaction carries tactile intention rather than frictionless apathy.'
    ]
  },
  {
    id: 'mathematical-typography',
    date: '2026.01',
    type: 'RESEARCH',
    title: 'Mathematical Systems in Modern Typography',
    slug: 'mathematical-systems-typography',
    summary: 'Implementing harmonic modular scales using CSS clamp() and fluid typography without layout thrashing.',
    author: 'Elena Vance',
    readTime: '8 MIN READ',
    accentColor: 'secondary',
    tag: 'TECHNOLOGY',
    content: [
      'True typographic harmony cannot be eyeballed. By rooting font size, line-height, and negative tracking in mathematical ratios (such as the Golden Ratio 1.618 or the Major Third 1.25), interfaces maintain structural equilibrium across 320px mobile screens and 3840px ultrawide monitors.',
      'By utilizing dynamic viewport clamps combined with rem units, we eliminate responsive breakpoint jump cuts. The screen breathes continuously as viewport dimensions shift.',
      'Furthermore, pairing a high-character geometric display typeface with a neutral Swiss body and monospaced diagnostic labels produces immediate editorial authority.'
    ]
  },
  {
    id: 'fluid-interfaces',
    date: '2025.11',
    type: 'ANALYSIS',
    title: 'Why Fluid Interfaces Outperform Rigid Frameworks',
    slug: 'fluid-interfaces-outperform',
    summary: 'Case study benchmarks proving how customized interaction design drives conversion and elevates enterprise valuations.',
    author: 'Marcus Chen',
    readTime: '5 MIN READ',
    accentColor: 'tertiary',
    tag: 'STRATEGY',
    content: [
      'In a controlled benchmark across three fintech platforms, custom kinetic interactions reduced checkout abandonment by 28% compared to standard form patterns.',
      'When micro-interactions respond in under 50ms with natural physics settling curves, the human brain perceives the software as physical and trustworthy.',
      'Commodity templates save two weeks of initial development but cost millions in brand dilution and user churn over the lifecycle of the product.'
    ]
  }
];
