import { useEffect } from 'react';

const COLOR_STOPS = [
  {
    name: 'Deep-Violet',
    pos: 0.00,
    primary: [168, 85, 247],
    secondary: [139, 92, 246],
    light: [216, 180, 254],
    lighter: [233, 213, 255],
  },
  {
    name: 'Sapphire-Blue',
    pos: 0.25,
    primary: [59, 130, 246],
    secondary: [14, 165, 233],
    light: [147, 197, 253],
    lighter: [191, 219, 254],
  },
  {
    name: 'Aurora-Mint-Teal',
    pos: 0.50,
    primary: [45, 212, 191],
    secondary: [6, 182, 212],
    light: [153, 246, 228],
    lighter: [204, 251, 241],
  },
  {
    name: 'Sapphire-Return',
    pos: 0.65,
    primary: [59, 130, 246],
    secondary: [14, 165, 233],
    light: [147, 197, 253],
    lighter: [191, 219, 254],
  },
  {
    name: 'Violet-Return',
    pos: 0.75,
    primary: [168, 85, 247],
    secondary: [139, 92, 246],
    light: [216, 180, 254],
    lighter: [233, 213, 255],
  },
  {
    name: 'Sunset-Coral',
    pos: 0.88,
    primary: [251, 113, 133],
    secondary: [244, 114, 182],
    light: [254, 205, 211],
    lighter: [255, 228, 230],
  },
  {
    name: 'Loop-Violet',
    pos: 1.00,
    primary: [168, 85, 247],
    secondary: [139, 92, 246],
    light: [216, 180, 254],
    lighter: [233, 213, 255],
  },
];

const CYCLE_DURATION_MS = 20000;

function lerpChannel(a, b, t) {
  return Math.round(a + (b - a) * t);
}

function lerpColor(c1, c2, t) {
  return [
    lerpChannel(c1[0], c2[0], t),
    lerpChannel(c1[1], c2[1], t),
    lerpChannel(c1[2], c2[2], t),
  ];
}

export function useColorTransition() {
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const rootStyle = document.documentElement.style;
    let animationFrameId = null;

    const animate = (timestamp) => {
      const progress = (timestamp % CYCLE_DURATION_MS) / CYCLE_DURATION_MS;

      let activeStopIndex = 0;
      for (let i = 0; i < COLOR_STOPS.length - 1; i++) {
        if (progress >= COLOR_STOPS[i].pos && progress <= COLOR_STOPS[i + 1].pos) {
          activeStopIndex = i;
          break;
        }
      }

      const currentStop = COLOR_STOPS[activeStopIndex];
      const nextStop = COLOR_STOPS[activeStopIndex + 1];

      const segmentSpan = nextStop.pos - currentStop.pos;
      const segmentProgress = segmentSpan > 0 ? (progress - currentStop.pos) / segmentSpan : 0;

      const smoothT = segmentProgress * segmentProgress * (3 - 2 * segmentProgress);

      const primary = lerpColor(currentStop.primary, nextStop.primary, smoothT);
      const secondary = lerpColor(currentStop.secondary, nextStop.secondary, smoothT);
      const light = lerpColor(currentStop.light, nextStop.light, smoothT);
      const lighter = lerpColor(currentStop.lighter, nextStop.lighter, smoothT);

      const pStr = `${primary[0]}, ${primary[1]}, ${primary[2]}`;
      const sStr = `${secondary[0]}, ${secondary[1]}, ${secondary[2]}`;
      const lStr = `${light[0]}, ${light[1]}, ${light[2]}`;
      const llStr = `${lighter[0]}, ${lighter[1]}, ${lighter[2]}`;

      rootStyle.setProperty('--accent-primary', `rgb(${pStr})`);
      rootStyle.setProperty('--accent-secondary', `rgb(${sStr})`);
      rootStyle.setProperty('--accent-light', `rgb(${lStr})`);
      rootStyle.setProperty('--accent-lighter', `rgb(${llStr})`);

      rootStyle.setProperty('--accent-border', `rgba(${pStr}, 0.28)`);
      rootStyle.setProperty('--accent-border-hover', `rgba(${pStr}, 0.55)`);
      rootStyle.setProperty('--accent-badge-start', `rgba(${pStr}, 0.16)`);
      rootStyle.setProperty('--accent-badge-end', `rgba(${sStr}, 0.16)`);
      rootStyle.setProperty('--accent-glow', `rgba(${pStr}, 0.38)`);
      rootStyle.setProperty('--accent-glow-subtle', `rgba(${pStr}, 0.18)`);
      rootStyle.setProperty('--accent-ambient', `rgba(${pStr}, 0.20)`);
      rootStyle.setProperty('--accent-muted-bg', `rgba(${pStr}, 0.08)`);

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
}
