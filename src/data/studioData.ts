export interface GameProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  genre: string;
  year: string;
  status: "IN PRODUCTION" | "ALPHA TELEMETRY" | "WORLDWIDE REVEAL" | "PRE-ORDER ACTIVE";
  platforms: string[];
  engine: string;
  image: string;
  description: string;
  accent: string;
  features: string[];
  specs: {
    fidelity: string;
    audio: string;
    multiplayer: string;
  };
}

export interface DispatchItem {
  id: string;
  index: string;
  category: "INTEL" | "ENGINEERING" | "LORE" | "PRODUCTION";
  title: string;
  date: string;
  author: string;
  readTime: string;
  summary: string;
}

export interface StudioHub {
  city: string;
  country: string;
  division: string;
  address: string;
  latLong: string;
  phone: string;
  lead: string;
}

export const GAMES_DATA: GameProject[] = [
  {
    id: "aetherius",
    number: "01",
    title: "AETHERIUS",
    subtitle: "REIGN OF STONE",
    tagline: "Where ancient titans carved the foundations of the cosmos.",
    genre: "Monumental Action Odyssey",
    year: "2027",
    status: "WORLDWIDE REVEAL",
    platforms: ["PS5 PRO", "XBOX SERIES X", "PC / STEAM"],
    engine: "MAJESTIC CORE V",
    image: "/images/aetherius_world.jpg",
    description:
      "A monumental dark mythic journey set across colossal architectural ruins and celestial rift rifts. Control an exile attuned to resonant primordial frequencies, navigating colossal vertical architectures that defy terrestrial scale.",
    accent: "rgba(56, 189, 248, 0.8)",
    features: [
      "Monumental vertical world design without loading thresholds",
      "Dynamic celestial atmosphere driven by real-time orbital mathematics",
      "Visceral weight-driven combat system tuned for millimeter accuracy",
      "Orchestral audio recorded with the Tokyo Philharmonic & modular synth arrays"
    ],
    specs: {
      fidelity: "Native 4K / 60FPS Uncapped HDR",
      audio: "Dolby Atmos Spatial Soundfield",
      multiplayer: "Seamless 4-Player Synchronous Co-op"
    }
  },
  {
    id: "chronomancer",
    number: "02",
    title: "CHRONOMANCER",
    subtitle: "SHADOW INTERVAL",
    tagline: "Time is not a linear continuum. It is a tactical weapon.",
    genre: "Tactical Temporal Espionage",
    year: "2026",
    status: "ALPHA TELEMETRY",
    platforms: ["PC / STEAM", "PS5"],
    engine: "UNREAL ENGINE 5.5",
    image: "/images/chronomancer.jpg",
    description:
      "Operate in the fragmented seconds between surveillance snapshots. Manipulate micro-time loops, shear gravitational vectors, and dismantle clandestine syndicates across rain-drenched brutalist cities.",
    accent: "rgba(239, 68, 68, 0.8)",
    features: [
      "Sub-second micro-loop tactical choreography",
      "Shattered acoustic simulations based on acoustic ray-tracing",
      "High-calibre ballistic penetration physics and structural deconstruction"
    ],
    specs: {
      fidelity: "Path-Traced Lighting / 120Hz Target",
      audio: "Binaural 3D Headphone Calibration",
      multiplayer: "2v2 Asymmetric Temporal Duels"
    }
  },
  {
    id: "neobabylon",
    number: "03",
    title: "NEO-BABYLON 2099",
    subtitle: "MONOLITH OF SOULS",
    tagline: "The vertical megacity where survival is an architectural war.",
    genre: "Psychological Sci-Fi RPG",
    year: "2028",
    status: "IN PRODUCTION",
    platforms: ["NEXT-GEN CONSOLES", "PC"],
    engine: "MAJESTIC CORE V",
    image: "/images/neobabylon.jpg",
    description:
      "Climb a 4,000-meter vertical metropolis of brutalist concrete, endless downpours, and bio-mechanical transhuman factions. An uncompromising narrative exploration into consciousness and collective memory.",
    accent: "rgba(245, 158, 11, 0.8)",
    features: [
      "Fully traversable multi-kilometer vertical megacity districts",
      "Dynamic weather simulation with localized barometric pressure",
      "Branching philosophical narrative dictated by biological telemetry"
    ],
    specs: {
      fidelity: "Volumetric Photometry & Direct Illumination",
      audio: "Industrial Ambient Score by Haxan Cloak",
      multiplayer: "Persistent Shared City State"
    }
  },
  {
    id: "voidstrider",
    number: "04",
    title: "VOID STRIDER",
    subtitle: "DEEP HORIZON",
    tagline: "Beyond the stellar threshold lies silence and impossible scale.",
    genre: "Hard-SciFi Zero-G Survival",
    year: "2026",
    status: "PRE-ORDER ACTIVE",
    platforms: ["PC / STEAM", "PS5"],
    engine: "MAJESTIC CORE V",
    image: "/images/voidstrider.jpg",
    description:
      "Board derelict alien mega-constructs abandoned for eons in the outer Oort cloud. Master authentic Newtonian physics, vacuum acoustics, and atmospheric reclamation in pure cosmic isolation.",
    accent: "rgba(148, 163, 184, 0.8)",
    features: [
      "Zero-G 6-degrees-of-freedom locomotion and tether dynamics",
      "Acoustic vacuum isolation and internal suit resonance modeling",
      "Procedurally decaying megastructure interiors with systemic hazards"
    ],
    specs: {
      fidelity: "Hardware Ray-Traced Reflections & Occlusion",
      audio: "Pure Vacuum Sound Design & Haptic Integration",
      multiplayer: "Asynchronous Salvage Logs"
    }
  }
];

export const DISPATCHES_DATA: DispatchItem[] = [
  {
    id: "disp-01",
    index: "01",
    category: "ENGINEERING",
    title: "ARCHITECTURE OF SILENCE: RENDERING VACUUM ACOUSTICS IN VOID STRIDER",
    date: "OCTOBER 02, 2026",
    author: "ELENA ROSTOVA — AUDIO DIRECTOR",
    readTime: "6 MIN READ",
    summary:
      "How we engineered a proprietary physical impulse response system to simulate sound transmission through player suits rather than air."
  },
  {
    id: "disp-02",
    index: "02",
    category: "INTEL",
    title: "AETHERIUS: UNVEILING THE TITAN ARCHITECTURE ENGINE",
    date: "SEPTEMBER 18, 2026",
    author: "KENJI SATO — CHIEF ARCHITECT",
    readTime: "9 MIN READ",
    summary:
      "A technical deep dive into procedural megastructure generation and our custom streaming pipelines handling 80-million-triangle monolithic geometry."
  },
  {
    id: "disp-03",
    index: "03",
    category: "LORE",
    title: "THE EIGHT CYCLES: AN ARCHAEOLOGICAL RECORD OF NEO-BABYLON",
    date: "AUGUST 24, 2026",
    author: "DR. MARCUS VANE — LEAD NARRATIVE DESIGNER",
    readTime: "12 MIN READ",
    summary:
      "Declassified documents and archival transmissions chronicling the structural foundation of the 4,000m Monolith before the blackout."
  }
];

export const STUDIO_HUBS: StudioHub[] = [
  {
    city: "TOKYO",
    country: "JAPAN",
    division: "WORLD ARCHITECTURE & RENDERING LAB",
    address: "Akasaka Biz Tower, 34F, Minato-ku",
    latLong: "35.6728° N, 139.7364° E",
    phone: "+81 3 5549 9200",
    lead: "Kenji Sato — Technical Director"
  },
  {
    city: "STOCKHOLM",
    country: "SWEDEN",
    division: "SOUND DESIGN & CINEMATICS FOUNDRY",
    address: "Katarinavägen 15, Södermalm",
    latLong: "59.3193° N, 18.0754° E",
    phone: "+46 8 408 1900",
    lead: "Astrid Lindholm — Creative Director"
  },
  {
    city: "LOS ANGELES",
    country: "UNITED STATES",
    division: "NARRATIVE & PERFORMANCE CAPTURE",
    address: "740 E 3rd Street, Arts District",
    latLong: "34.0453° N, 118.2325° W",
    phone: "+1 213 892 4100",
    lead: "Julian Vance — Head of Production"
  }
];

export const STUDIO_METRICS = [
  { label: "INTERNATIONAL AWARDS", value: "48+" },
  { label: "WORLDWIDE PLAYERS", value: "14.2M" },
  { label: "YEARS OF INDEPENDENCE", value: "12" },
  { label: "GLOBAL STUDIO ARTISTS", value: "320" }
];
