import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

interface Props {
  selector?: string;
  animateFrom?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'random';
  stagger?: number;
  duration?: number;
  ease?: string;
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
}

export default function ProjectGridAnimator({
  selector = '.project-card',
  animateFrom = 'bottom',
  stagger = 0.06,
  duration = 0.6,
  ease = 'power3.out',
  scaleOnHover = true,
  hoverScale = 0.96,
  blurToFocus = true
}: Props) {
  useLayoutEffect(() => {
    // respect user motion preference
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const nodes = gsap.utils.toArray<HTMLElement>(selector);
    if (!nodes.length) return;

    const randDir = (elIndex: number) => {
      const dirs = ['top', 'bottom', 'left', 'right'];
      return dirs[elIndex % dirs.length];
    };

    const getStart = (el: HTMLElement, idx: number) => {
      let dir = animateFrom === 'random' ? (randDir(idx) as any) : animateFrom;
      const w = window.innerWidth;
      const h = window.innerHeight;
      switch (dir) {
        case 'top':
          return { x: 0, y: -Math.max(120, h * 0.15) };
        case 'bottom':
          return { x: 0, y: Math.max(120, h * 0.15) };
        case 'left':
          return { x: -Math.max(200, w * 0.15), y: 0 };
        case 'right':
          return { x: Math.max(200, w * 0.15), y: 0 };
        case 'center':
          return { x: 0, y: 40, scale: 0.98 };
        default:
          return { x: 0, y: Math.max(120, h * 0.15) };
      }
    };

    // animation runner (ONLY transform/opacity/scale — avoid animating `filter` which is expensive)
    const run = () => {
      // set initial transform-based state
      nodes.forEach((n, i) => {
        const start = getStart(n, i);
        gsap.set(n, { opacity: 0, x: start.x ?? 0, y: start.y ?? 0, scale: start.scale ?? 1 });
        (n as HTMLElement).style.willChange = 'transform, opacity';
        (n as HTMLElement).style.transform = `translate3d(${start.x ?? 0}px, ${start.y ?? 0}px, 0)`;
      });

      const tl = gsap.timeline();
      tl.to(nodes, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration,
        ease,
        stagger
      });

      return () => {
        tl.kill();
        nodes.forEach(n => {
          gsap.killTweensOf(n);
          (n as HTMLElement).style.willChange = '';
        });
      };
    };

    // IntersectionObserver: trigger animation when the projects section enters viewport
    const container = document.getElementById('projects') || nodes[0].closest('section');
    let cleanupFn: (() => void) | null = null;
    let observed = false;

    const triggerIfVisible = () => {
      if (!container) {
        cleanupFn = run();
        return;
      }
      const rect = container.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      if (visible) {
        cleanupFn = run();
      }
    };

    if (container && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.isIntersecting && !observed) {
            observed = true;
            cleanupFn = run();
          }
        });
      }, { threshold: 0.12 });
      io.observe(container);
      // also listen for replayKey changes (re-run only when visible)
      if (typeof (window as any).__REPLAY_TRIGGER__ === 'function') {
        // noop
      }
      return () => {
        io.disconnect();
        cleanupFn && cleanupFn();
      };
    } else {
      // fallback: run immediately
      cleanupFn = run();
      return () => cleanupFn && cleanupFn();
    }
  }, [selector, animateFrom, stagger, duration, ease, scaleOnHover, hoverScale, blurToFocus, ({} as any).replayKey]);

  return null;
}
