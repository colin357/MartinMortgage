/**
 * Layered background for the AI Agent Lab hero: a masked technical grid,
 * ambient lime/forest washes, a slow scan sweep and a faint node network.
 * Everything is CSS + inline SVG, so there is no image asset to load.
 */

const nodes = [
  { x: 80, y: 120 },
  { x: 230, y: 60 },
  { x: 180, y: 280 },
  { x: 340, y: 200 },
  { x: 60, y: 420 },
  { x: 300, y: 470 },
  { x: 470, y: 90 },
  { x: 520, y: 330 },
  { x: 430, y: 600 },
  { x: 640, y: 200 },
  { x: 700, y: 480 },
  { x: 820, y: 110 },
  { x: 900, y: 330 },
  { x: 1060, y: 200 },
  { x: 1120, y: 480 },
  { x: 960, y: 620 },
  { x: 760, y: 660 },
  { x: 1160, y: 60 },
];

const edges = [
  [0, 1], [0, 2], [1, 3], [2, 3], [2, 4], [4, 5], [3, 5], [1, 6],
  [6, 9], [3, 7], [7, 9], [5, 8], [7, 10], [8, 10], [9, 11], [9, 12],
  [10, 12], [11, 13], [12, 13], [12, 14], [13, 17], [14, 15], [10, 16],
  [15, 16], [14, 17],
];

// Nodes that softly pulse, with the delay that staggers them
const pulsing: Record<number, string> = {
  3: "0s",
  7: "1.2s",
  9: "2.4s",
  12: "0.6s",
  14: "3s",
  5: "1.8s",
};

export default function AiLabHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-gray-900" />

      {/* Ambient color washes */}
      <div className="absolute inset-0 ai-hero-glow-lime" />
      <div className="absolute inset-0 ai-hero-glow-forest" />

      {/* Technical grid */}
      <div className="absolute inset-0 ai-hero-grid" />

      {/* Node network — hidden on narrow screens, where the slice crop
          leaves only a stray node or two */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.55] hidden md:block"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g stroke="#82C341" strokeOpacity="0.18" strokeWidth="1">
          {edges.map(([a, b]) => (
            <line
              key={`${a}-${b}`}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
            />
          ))}
        </g>
        <g fill="#82C341">
          {nodes.map((n, i) => (
            <circle key={i} cx={n.x} cy={n.y} r={2.5} fillOpacity="0.35" />
          ))}
          {Object.entries(pulsing).map(([index, delay]) => {
            const n = nodes[Number(index)];
            return (
              <circle
                key={`pulse-${index}`}
                className="ai-hero-node"
                cx={n.x}
                cy={n.y}
                r={7}
                fillOpacity="0.5"
                style={{ animationDelay: delay }}
              />
            );
          })}
        </g>
      </svg>

      {/* Blurred orbs for depth */}
      <div className="absolute -top-24 right-0 w-[28rem] h-[28rem] bg-accent-400/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute -bottom-32 -left-24 w-[26rem] h-[26rem] bg-primary-600/25 rounded-full blur-3xl" />

      {/* Scan sweep */}
      <div className="absolute inset-x-0 top-0 h-40 ai-hero-scan" />

      {/* Vignette + fade into the next section */}
      <div className="absolute inset-0 ai-hero-vignette" />
    </div>
  );
}
