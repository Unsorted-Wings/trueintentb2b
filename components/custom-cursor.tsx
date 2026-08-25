'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, summary, [data-cursor-hover]';

const TRAIL_LIFE = 520;
const MAX_POINTS = 24;
const MIN_SAMPLE_DIST = 6;

type Point = { x: number; y: number; t: number };

function subscribe(capabilityChanged: () => void) {
  const fine = window.matchMedia('(pointer: fine)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  fine.addEventListener('change', capabilityChanged);
  reduced.addEventListener('change', capabilityChanged);
  return () => {
    fine.removeEventListener('change', capabilityChanged);
    reduced.removeEventListener('change', capabilityChanged);
  };
}

function canUseCustomCursor() {
  return (
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export default function CustomCursor() {
  const enabled = useSyncExternalStore(subscribe, canUseCustomCursor, () => false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 140, damping: 24, mass: 0.7 });
  const ringY = useSpring(y, { stiffness: 140, damping: 24, mass: 0.7 });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add('custom-cursor');

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    let raf = 0;
    const render = () => {
      raf = window.requestAnimationFrame(render);

      const now = performance.now();
      const pts = pointsRef.current;
      while (pts.length > 0 && now - pts[0].t > TRAIL_LIFE) pts.shift();

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      if (pts.length < 3) return;

      ctx.globalCompositeOperation = 'lighter';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const layers: Array<{ spread: number; boost: number; rgb: [number, number, number] }> = [
        { spread: 4.2, boost: -0.55, rgb: [30, 64, 175] },
        { spread: 2.1, boost: -0.25, rgb: [56, 130, 246] },
        { spread: 1, boost: 0.35, rgb: [147, 208, 254] },
      ];

      for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1];
        const p1 = pts[i];
        const dx = p1.x - p0.x;
        const dy = p1.y - p0.y;
        if (dx * dx + dy * dy < 1) continue;

        const k = Math.pow(i / pts.length, 1.4);
        const life = Math.max(0, 1 - (now - p1.t) / TRAIL_LIFE);
        const shimmer = 0.92 + 0.08 * Math.sin(now / 90 + i);
        const alpha = k * life * shimmer;
        if (alpha <= 0.01) continue;

        const width = 0.8 + 3.6 * k * k;

        for (const layer of layers) {
          const [r, g, b] = layer.rgb;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${Math.max(alpha + layer.boost, 0) * 0.75})`;
          ctx.lineWidth = Math.max(width * layer.spread, 0.4);
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.stroke();
        }
      }
    };
    raf = window.requestAnimationFrame(render);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const pts = pointsRef.current;
      const last = pts[pts.length - 1];
      const dx = last ? e.clientX - last.x : MIN_SAMPLE_DIST + 1;
      const dy = last ? e.clientY - last.y : 0;
      if (last && dx * dx + dy * dy < MIN_SAMPLE_DIST * MIN_SAMPLE_DIST) return;
      pts.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      if (pts.length > MAX_POINTS) pts.shift();
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      setHovering(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => {
      setVisible(false);
      pointsRef.current = [];
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);

    return () => {
      document.documentElement.classList.remove('custom-cursor');
      window.cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[97] h-full w-full"
      />

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[98] will-change-transform"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          animate={{
            scale: pressed ? 0.8 : hovering ? 1.28 : 1,
            opacity: visible ? (hovering ? 0.95 : 0.6) : 0,
          }}
          transition={{ type: 'spring', stiffness: 240, damping: 26 }}
          className="-translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ ease: 'linear', duration: hovering ? 2.5 : 12, repeat: Infinity }}
          >
            <div className="h-16 w-16 rounded-full border-[2px] border-dashed border-sky-400/90" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] will-change-transform"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          animate={{
            scale: pressed ? 0.65 : hovering ? 0.8 : 1,
            opacity: visible ? (hovering ? 0.95 : 0.6) : 0,
          }}
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          className="-translate-x-1/2 -translate-y-1/2"
        >
          <div className="h-9 w-9 rounded-full border-[2px] border-sky-600/70" />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] will-change-transform"
        style={{ x, y }}
      >
        <motion.div
          animate={{
            scale: pressed ? 1.9 : hovering ? 1.15 : 1,
            opacity: visible ? 1 : 0,
          }}
          transition={{ type: 'spring', stiffness: 360, damping: 28 }}
          className="h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: '#38bdf8',
            boxShadow: '0 0 10px rgba(56,189,248,0.7)',
          }}
        />
      </motion.div>
    </>
  );
}
