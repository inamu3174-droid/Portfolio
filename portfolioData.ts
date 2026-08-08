import { Project, SkillCategory, Milestone, Service } from '../types/portfolio';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'stride',
    number: '01',
    category: 'E-COMMERCE',
    title: 'STRIDE ATHLETICS',
    subtitle: 'Modern athletic footwear & apparel commerce experience.',
    description: 'A high-performance e-commerce platform built for high-end athletic footwear. Features dynamic 3D shoe customizer, instant cart drawer, seamless size selection, and frictionless checkout flow.',
    tags: ['React 19', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'Stripe UI'],
    year: '2026',
    accentColor: '#10b981', // emerald
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    idea: 'Athletic footwear brands often sacrifice narrative storytelling and visual fidelity for basic catalog grids. STRIDE was engineered to bridge high-fashion footwear aesthetics with millisecond-fast commerce interactions.',
    approach: 'Designed around an interactive 3D footwear previewer and dynamic color customization state. Users can inspect the mesh upper, cushioning layers, and tread pattern in real-time before choosing size and adding to cart.',
    build: [
      'Built with React 19 and Three.js WebGL shaders for fluid 3D product rotators.',
      'Optimized client-side state machine for real-time shoe color palette switching.',
      'Implemented optimistic cart UI with zero layout shifts and instant drawer drawer slide-ins.',
      'Integrated mock checkout flow with address auto-completion and order confirmation.'
    ],
    experience: 'Sub-second page transitions, 60fps 3D canvas viewport, tactile hover feedback on size selectors, and zero friction checkout journey.',
    result: 'Achieved 98/100 Lighthouse performance score with 45% faster item addition flow than traditional e-commerce templates.',
    demoType: 'ecommerce-stride',
    githubUrl: 'https://github.com/inamulhaq/stride-athletics',
    liveUrl: 'https://stride-athletics.demo'
  },
  {
    id: 'amazon-2026',
    number: '02',
    category: 'E-COMMERCE',
    title: 'AMAZON 2026 CLONE',
    subtitle: 'A sophisticated e-commerce interface inspired by modern marketplace architecture.',
    description: 'A next-generation marketplace re-imagining how hundreds of thousands of items are discovered, filtered, and checked out with instantaneous search and modern micro-interactions.',
    tags: ['React', 'TypeScript', 'Express API', 'Tailwind CSS', 'State Engine'],
    year: '2026',
    accentColor: '#f59e0b', // amber
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    idea: 'Traditional marketplaces suffer from cluttered, dated UIs burdened by decades of legacy DOM structure. This project proves complex marketplaces can feel ultra-sleek, clean, and blazingly fast.',
    approach: 'Architected a modular component hierarchy with instant multi-facet filtering (category, price range, rating, Prime delivery), full-screen interactive product showcase, and live cart tracking.',
    build: [
      'Engineered an in-memory instant search engine with fuzzy matching and category tags.',
      'Designed a responsive multi-drawer layout featuring quick-view overlays and cart drawer.',
      'Integrated user authentication simulation with saved delivery addresses and past order history.',
      'Implemented persistent cart storage across browser refreshes.'
    ],
    experience: 'A frictionless shopping experience with lightning-fast search filters, rich product image carousels, and single-click quick checkout.',
    result: 'Delivered an ultra-responsive marketplace prototype handling over 50 mock catalog items across 6 categories with 0ms UI delay.',
    demoType: 'ecommerce-amazon',
    githubUrl: 'https://github.com/inamulhaq/amazon-2026-clone',
    liveUrl: 'https://amazon2026.demo'
  },
  {
    id: 'lumina',
    number: '03',
    category: 'CREATIVE DEVELOPMENT',
    title: 'LUMINA',
    subtitle: 'An immersive animated digital experience with interactive physics & motion.',
    description: 'An audio-visual creative coding showcase exploring light dispersion, particle physics, and responsive WebGL shader fields reacting to mouse velocity and scroll gestures.',
    tags: ['WebGL', 'Three.js', 'GLSL Shaders', 'Web Audio API', 'Creative Code'],
    year: '2025',
    accentColor: '#8b5cf6', // purple
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    idea: 'Digital art should not be passive. Lumina explores how interactive light fields can respond dynamically to human motion and ambient sound signals.',
    approach: 'Constructed custom WebGL fragment shaders calculating real-time light refraction through chromatic crystal geometries, synchronized with browser audio nodes.',
    build: [
      'Developed custom WebGL particle engine handling 10,000+ interactive nodes.',
      'Implemented Web Audio API frequency spectrum analyzer for real-time visual pulsing.',
      'Created smooth spring physics interpolation for cursor drag and tilt forces.',
      'Optimized GPU render passes for high frame rates across mobile and desktop displays.'
    ],
    experience: 'An ethereal, tactile digital canvas where moving your cursor paints waves of chromatic light and ambient acoustic resonance.',
    result: 'Featured on creative web design showcases and awarded Site of the Day accolades for experimental interactive art.',
    demoType: 'creative-lumina',
    githubUrl: 'https://github.com/inamulhaq/lumina-experience',
    liveUrl: 'https://lumina-experience.demo'
  },
  {
    id: 'ai-experiments',
    number: '04',
    category: 'EXPERIMENTAL',
    title: 'AI / INTERACTIVE LAB',
    subtitle: 'Experimental projects involving AI models, generative code & creative interfaces.',
    description: 'A suite of functional creative AI tools including a real-time prompt-driven UI generator, intelligent code explainer, and generative creative canvas powered by Gemini API.',
    tags: ['Gemini API', 'TypeScript', 'Server Routes', 'Generative AI', 'Interactive UI'],
    year: '2026',
    accentColor: '#3b82f6', // blue
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    idea: 'AI interfaces shouldn\'t feel like boring text chatbots. They should be rich, visual, creative instruments that pair human intent with generative synthesis.',
    approach: 'Created an interactive playground allowing visitors to run real-time AI prompts to synthesize code snippet ideas, critique design concepts, or generate creative design themes.',
    build: [
      'Connected server-side Express routes to Google Gemini API using @google/genai SDK.',
      'Built interactive playground UI with preset prompt templates and instant streaming output.',
      'Designed responsive parameter controls for creative temperature and domain context.',
      'Ensured strict server-side API key security and graceful fallback handling.'
    ],
    experience: 'Visitors can test the live AI playground directly inside the portfolio case study, inputting custom creative prompts and viewing generated output.',
    result: 'Demonstrates practical implementation of server-side Gemini AI integration within high-end web user interfaces.',
    demoType: 'ai-experiments',
    githubUrl: 'https://github.com/inamulhaq/ai-interactive-lab',
    liveUrl: 'https://ai-lab.demo'
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'DEVELOPMENT',
    description: 'Core web engineering stack focused on speed, type safety and clean architecture.',
    skills: [
      { name: 'React', highlight: 'Hooks, Concurrent Mode, React 19, Fiber Architecture' },
      { name: 'JavaScript', highlight: 'ESNext, Asynchronous Patterns, Performance Optimization' },
      { name: 'HTML5', highlight: 'Semantic Markup, Accessibility (WCAG AA), SEO' },
      { name: 'CSS / Tailwind', highlight: 'Tailwind v4, Container Queries, CSS Grid & Flexbox' },
      { name: 'APIs & Node.js', highlight: 'REST, GraphQL, Express, WebSockets, Server Routes' },
      { name: 'Firebase', highlight: 'Firestore, Auth, Security Rules, Realtime Listeners' }
    ]
  },
  {
    category: 'CREATIVE DEVELOPMENT',
    description: 'Bringing movement, depth and tactile sensation to web experiences.',
    skills: [
      { name: 'Three.js', highlight: '3D Mesh Geometries, Lights, Cameras, Raycasting' },
      { name: 'WebGL', highlight: 'Custom Shaders, Particle Systems, Render Loops' },
      { name: 'Motion', highlight: 'Framer Motion, Layout Animations, Keyframe Sequences' },
      { name: 'GSAP', highlight: 'ScrollTrigger, Timeline Control, MorphSVG, SplitText' },
      { name: 'Interactive UI', highlight: 'Custom Cursors, Spring Physics, Drag & Gesture Handlers' }
    ]
  },
  {
    category: 'DESIGN',
    description: 'Crafting user interfaces with disciplined hierarchy, typography and spatial math.',
    skills: [
      { name: 'UI/UX Design', highlight: 'User Journeys, Wireframing, High-Fidelity Prototypes' },
      { name: 'Visual Design', highlight: 'Color Theory, Dark Luxury Aesthetics, Micro-Interactions' },
      { name: 'Typography', highlight: 'Mathematical Scales, Modular Ratios, Pairing Systems' },
      { name: 'Interaction Design', highlight: 'Tactile Motion Feedback, Transition Choreography' }
    ]
  },
  {
    category: 'TOOLS',
    description: 'Modern development tools and workflows used daily.',
    skills: [
      { name: 'GitHub', highlight: 'Git Flow, CI/CD Actions, Branch Management' },
      { name: 'VS Code', highlight: 'Custom Workspace Setup, Debugging, Speed Shortcuts' },
      { name: 'Figma', highlight: 'Design Systems, Auto-Layout, Component Libraries' },
      { name: 'Vercel / Cloud Run', highlight: 'Serverless Functions, Global Edge Deployments' }
    ]
  }
];

export const MILESTONES_DATA: Milestone[] = [
  {
    year: '2022',
    title: 'BUILT MY FIRST DIGITAL PRODUCTS',
    subtitle: 'From Curiosity to Code',
    description: 'Discovered web development in Kashmir. Wrote first lines of HTML, CSS & JS, spending night after night building experimental web layouts and simple scripts.',
    tag: 'FOUNDATION'
  },
  {
    year: '2023',
    title: 'STARTED SHIPPING REAL PROJECTS',
    subtitle: 'Client Work & Production Web Systems',
    description: 'Began building functional web solutions for local businesses, creators, and online brands. Mastered React, responsive design, and performance tuning.',
    tag: 'EXECUTION'
  },
  {
    year: '2024',
    title: 'BUILT E-COMMERCE EXPERIENCES',
    subtitle: 'Conversion & High-Scale Commerce UI',
    description: 'Designed and engineered modern storefronts like STRIDE and custom marketplace clones. Deepened expertise in state management and payment flow integrations.',
    tag: 'SCALE'
  },
  {
    year: '2025',
    title: 'EXPANDED INTO CREATIVE DEVELOPMENT',
    subtitle: '3D WebGL, Motion & Interactive Physics',
    description: 'Merged engineering with creative art. Implemented Three.js WebGL scenes, GSAP ScrollTrigger mechanics, and complex animation systems.',
    tag: 'CRAFT'
  },
  {
    year: '2026',
    title: 'BUILDING FOR A GLOBAL AUDIENCE',
    subtitle: 'World-Class Products From Kashmir',
    description: 'Collaborating with ambitious teams globally, proving that high-end digital craft knows no geographic boundaries.',
    tag: 'VISION'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    number: '01',
    title: 'WEB EXPERIENCES',
    description: 'Premium, responsive websites with cinematic interaction, custom motion, and flawless performance across all device viewports.',
    deliverables: ['Custom React Application', 'Cinematic Animation System', 'Responsive Viewport Optimization', 'SEO & OpenGraph Setup'],
    tags: ['Web Design', 'React', 'Motion', 'Performance']
  },
  {
    number: '02',
    title: 'E-COMMERCE',
    description: 'Modern online stores designed around speed, friction-free discovery, conversion psychology, and memorable brand identity.',
    deliverables: ['Product Catalog & Filtering', 'Interactive 3D/Color Customizers', 'Slide-over Cart Drawer', 'Checkout Integration'],
    tags: ['E-Commerce', 'Shopify/Custom', 'Conversion', 'Payments']
  },
  {
    number: '03',
    title: 'PORTFOLIOS',
    description: 'Personal brands and agency portfolios that transform client credentials and projects into immersive digital stories.',
    deliverables: ['Narrative Case Study Views', 'Interactive Media Galleries', 'Custom Cursor & Page Transitions', 'Fast Global Hosting'],
    tags: ['Personal Brand', 'Storytelling', 'Case Studies']
  },
  {
    number: '04',
    title: 'LANDING PAGES',
    description: 'High-impact product landing pages crafted to capture attention, explain complex value propositions, and convert visitors immediately.',
    deliverables: ['Hero Visual & 3D Assets', 'Clear Value Framing', 'Interactive Feature Demos', 'Lead Generation Forms'],
    tags: ['Conversion', 'SaaS', 'Marketing', 'Micro-Interactions']
  },
  {
    number: '05',
    title: 'CUSTOM WEB APPS',
    description: 'Functional web applications built to solve real operational problems with clean state engines and secure API backends.',
    deliverables: ['Full-stack Architecture', 'Authentication & User Roles', 'Database Synchronization', 'API Proxy Layer'],
    tags: ['Full-stack', 'React', 'Node.js', 'Databases']
  },
  {
    number: '06',
    title: 'CREATIVE TECHNOLOGY',
    description: 'Experimental interfaces, generative canvas, WebGL 3D environments, and AI-powered creative coding installations.',
    deliverables: ['Three.js WebGL Shaders', 'Gemini AI API Integration', 'Audio Visualizers', 'Particle Physics Engines'],
    tags: ['Three.js', 'WebGL', 'Generative AI', 'Shaders']
  }
];
